import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import chalk from "chalk";
import which from "which";
import { version } from "../../../package.json";
import {
	createDialog,
	endSection,
	logRaw,
	startSection,
	updateStatus,
} from "./utils/tui";

const __filename = fileURLToPath(import.meta.url);

export async function init(shortcutToken: string) {
	logRaw(
		createDialog([
			`👋 Welcome to ${chalk.yellow("shortcut-mcp-server")} v${version}!`,
			`💁‍♀️ This ${chalk.green("'init'")} process will ensure you're connected to the Shortcut API`,
			`   and install the Shortcut MCP Server into Claude Desktop (${chalk.blue.underline("https://claude.ai/download")})`,
			`ℹ️ For more information, visit ${chalk.blue.underline("https://github.com/madisonbullard/shortcut-mcp-server")}`,
			`🧡 Let's get started.`,
		]),
	);

	startSection(`Configuring Claude Desktop`, `Step 1 of 1`);

	const claudeConfigPath = path.join(
		os.homedir(),
		"Library",
		"Application Support",
		"Claude",
		"claude_desktop_config.json",
	);
	const shortcutConfig = {
		command: (await which("node")).trim(),
		args: [__filename, "run", shortcutToken],
	};

	updateStatus(
		`Looking for existing config in: ${chalk.yellow(path.dirname(claudeConfigPath))}`,
	);

	const configDirExists = fs.existsSync(path.dirname(claudeConfigPath));
	if (configDirExists) {
		const existingConfig = fs.existsSync(claudeConfigPath)
			? JSON.parse(fs.readFileSync(claudeConfigPath, "utf8"))
			: { mcpServers: {} };
		if ("shorcut" in (existingConfig?.mcpServers || {})) {
			updateStatus(
				`${chalk.green("Note:")} Replacing existing Shortcut MCP config:\n${chalk.gray(JSON.stringify(existingConfig.mcpServers.shortcut))}`,
			);
		}
		const newConfig = {
			...existingConfig,
			mcpServers: {
				...existingConfig.mcpServers,
				shortcut: shortcutConfig,
			},
		};
		fs.writeFileSync(claudeConfigPath, JSON.stringify(newConfig, null, 2));

		updateStatus(
			`${chalk.yellow("shortcut-mcp-server")} configured & added to Claude Desktop!`,
			false,
		);
		updateStatus(`Wrote config to ${chalk.yellow(claudeConfigPath)}:`, false);
		updateStatus(chalk.gray(JSON.stringify(newConfig, null, 2)));
		updateStatus(
			chalk.blue(
				`Try asking Claude to "tell me about this story: {SHORTCUT_STORY_URL}" to get started!`,
			),
		);
	} else {
		const fullConfig = { mcpServers: { shortcut: shortcutConfig } };
		updateStatus(
			`Couldn't detect Claude Desktop config at ${claudeConfigPath}.\nTo add the Shortcut MCP server manually, add the following config to your ${chalk.yellow("claude_desktop_configs.json")} file:\n\n${JSON.stringify(fullConfig, null, 2)}`,
		);
	}

	endSection("Done");
}
