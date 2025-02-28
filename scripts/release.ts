import * as proc from "node:child_process";
import path from "node:path";
import { join } from "node:path";
import { promisify } from "node:util";
import fs from "fs-extra";
import pMap from "p-map";
import prompts from "prompts";
import { spawnify } from "./spawnify";

// avoid emitter error
process.setMaxListeners(0);

const exec = promisify(proc.exec);
export const spawn = proc.spawn;

// for failed publishes that need to re-run
const confirmFinalPublish = process.argv.includes("--confirm-final-publish");
const reRun = process.argv.includes("--rerun");
const rePublish = reRun || process.argv.includes("--republish");
const finish = process.argv.includes("--finish");
const skipFinish = process.argv.includes("--skip-finish");

const canary = process.argv.includes("--canary");
const skipVersion =
	finish || rePublish || process.argv.includes("--skip-version");
const shouldPatch = process.argv.includes("--patch");
const dirty = finish || process.argv.includes("--dirty");
const skipPublish = process.argv.includes("--skip-publish");
const skipTest =
	finish ||
	rePublish ||
	process.argv.includes("--skip-test") ||
	process.argv.includes("--skip-tests");
const skipBuild = finish || rePublish || process.argv.includes("--skip-build");
const dryRun = process.argv.includes("--dry-run");
const isCI = finish || process.argv.includes("--ci");

const curVersion = fs.readJSONSync("./package.json").version;

const nextVersion = (() => {
	if (canary) {
		return `${curVersion.replace(/(-\d+)+$/, "")}-${Date.now()}`;
	}

	if (rePublish) {
		return curVersion;
	}

	let plusVersion = skipVersion ? 0 : 1;
	const patchAndCanary = curVersion.split(".")[2];
	const [patch, lastCanary] = patchAndCanary.split("-");
	// if we're publishing another canary no bump version
	if (lastCanary && canary) {
		plusVersion = 0;
	}
	const patchVersion = shouldPatch ? +patch + plusVersion : 0;
	const curMinor = +curVersion.split(".")[1] || 0;
	const minorVersion = curMinor + (shouldPatch ? 0 : plusVersion);
	const next = `1.${minorVersion}.${patchVersion}`;

	return next;
})();

if (!skipVersion) {
	console.info("Current:", curVersion, "\n");
} else {
	console.info(`Releasing ${curVersion}`);
}

async function run() {
	try {
		let version = curVersion;

		// ensure we are up to date
		// ensure we are on main
		if (!canary) {
			if (
				(await exec(`git rev-parse --abbrev-ref HEAD`)).stdout.trim() !== "main"
			) {
				throw new Error(`Not on main`);
			}
			if (!dirty && !rePublish && !finish) {
				await spawnify(`git pull --rebase origin main`);
			}
		}

		// Create a function to safely get package info
		const getPackageInfo = async () => {
			const packageFiles = (
				await exec(`find ./packages -name package.json`)
			).stdout
				.trim()
				.split("\n")
				.filter(Boolean);

			const results = await Promise.all(
				packageFiles.map(async (filePath) => {
					try {
						const packageJson = await fs.readJSON(filePath);
						const location = path.dirname(filePath);
						return { name: packageJson.name, location };
					} catch (error) {
						console.error(`Error reading ${filePath}:`, error);
						return null;
					}
				}),
			);

			return await results
				.filter((i): i is { name: string; location: string } => !!i)
				.map(async ({ name, location }) => {
					const cwd = path.join(process.cwd(), location);
					const json = await fs.readJSON(path.join(cwd, "package.json"));
					const item = {
						name,
						cwd,
						json,
						path: path.join(cwd, "package.json"),
						directory: location,
					};

					return item;
				});
		};

		const packages = (await Promise.all(await getPackageInfo())).filter(
			(x) => !x.json.skipPublish && !x.json.private,
		);

		if (!finish) {
			console.info(
				`Publishing in order:\n\n${packages.map((x) => x.name).join("\n")}`,
			);
		}

		async function checkDistDirs() {
			await Promise.all(
				packages.map(async ({ cwd, json }) => {
					const distDir = join(cwd, "dist");
					if (!json.scripts || json.scripts.build === "true") {
						return;
					}
					if (!(await fs.pathExists(distDir))) {
						console.warn("no dist dir!", distDir);
						process.exit(1);
					}
				}),
			);
		}

		if (!finish) {
			const answer =
				isCI || skipVersion
					? { version: nextVersion }
					: await prompts({
							type: "text",
							name: "version",
							message: "Version?",
							initial: nextVersion,
						});

			version = answer.version;
			console.info("Next:", version, "\n");
		}

		if (!finish) {
			console.info("run checks");
			if (!skipTest) {
				await spawnify(`bun fix`);
				await spawnify(`bun check`);
				await spawnify(`bun typecheck`);
			}
		}

		if (!dirty && !dryRun && !rePublish) {
			const out = await exec(`git status --porcelain`);
			if (out.stdout) {
				throw new Error(`Has unsaved git changes: ${out.stdout}`);
			}
		}

		if (!skipVersion && !finish) {
			await Promise.all(
				packages.map(async ({ json, path, cwd }) => {
					const next = { ...json };

					next.version = version;

					const packagesToUpdate = [];

					for (const field of [
						"dependencies",
						"devDependencies",
						"optionalDependencies",
						"peerDependencies",
					]) {
						const nextDeps = next[field];
						if (!nextDeps) continue;
						for (const depName in nextDeps) {
							if (!nextDeps[depName].startsWith("workspace:")) {
								if (packages.some((p) => p.name === depName)) {
									nextDeps[depName] = version;
								}
							} else {
								packagesToUpdate.push(depName);
							}
						}
					}

					await fs.writeJSON(path, next, { spaces: 2 });
					packagesToUpdate.length &&
						(await spawnify(`bun update ${packagesToUpdate.join(" ")}`, {
							cwd,
						}));
				}),
			);
		}

		console.info("install and build");

		if (!finish) {
			await spawnify(`bun install`);
		}

		if (!skipBuild && !finish) {
			await spawnify(`bun run build`);
			await checkDistDirs();
		}

		if (!finish && dryRun) {
			console.info(`Dry run, exiting before publish`);
			return;
		}

		if (!finish && !rePublish) {
			await spawnify(`bun fix`);
			await spawnify(`git diff`);
		}

		if (!isCI) {
			const { confirmed } = await prompts({
				type: "confirm",
				name: "confirmed",
				message: "Ready to publish?",
			});

			if (!confirmed) {
				process.exit(0);
			}
		}

		if (!finish && !skipPublish) {
			if (confirmFinalPublish) {
				const { confirmed } = await prompts({
					type: "confirm",
					name: "confirmed",
					message: "Ready to publish?",
				});
				if (!confirmed) {
					console.info(
						`Not confirmed, can re-run with --republish to try again`,
					);
					process.exit(0);
				}
			}
		}

		if (!finish) {
			// if all successful, re-tag as latest
			await pMap(
				packages,
				async ({ name, cwd }) => {
					const publishOptions = [canary && `--tag canary`]
						.filter(Boolean)
						.join(" ");

					const publishCommand = [
						"bun publish",
						`--access public`,
						publishOptions,
					]
						.filter(Boolean)
						.join(" ");

					console.info(`Publishing ${name}: ${publishCommand}`);

					await spawnify(publishCommand, {
						cwd,
					}).catch((err) => console.error(err));
				},
				{
					concurrency: 15,
				},
			);

			console.info(`✅ Published\n`);
		}

		if (!skipFinish) {
			// then git tag, commit, push

			const tagPrefix = canary ? "canary" : "v";
			const gitTag = `${tagPrefix}${version}`;

			await finishAndCommit();

			async function finishAndCommit(cwd = process.cwd()) {
				if (!rePublish || reRun || finish) {
					await spawnify(`git add -A`, { cwd });

					await spawnify(`git commit -m ${gitTag}`, { cwd, allowFail: finish });

					if (!canary) {
						await spawnify(`git tag ${gitTag}`, { cwd, allowFail: finish });
					}

					if (!dirty) {
						// pull once more before pushing so if there was a push in interim we get it
						await spawnify(`git pull --rebase origin HEAD`, { cwd });
					}

					await spawnify(`git push origin head`, { cwd, allowFail: finish });
					if (!canary) {
						await spawnify(`git push origin ${gitTag}`, { cwd });
					}

					console.info(`✅ Pushed and versioned\n`);
				}
			}
		}

		console.info(`✅ Done\n`);
	} catch (err) {
		console.info("\nError:\n", err);
		process.exit(1);
	}
}

run();
