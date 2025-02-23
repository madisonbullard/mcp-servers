#!/usr/bin/env node
import { init } from "./init";
import { main } from "./main";
import { config } from "./utils/config";
import { log } from "./utils/log";

// Handle process events
process.on("uncaughtException", (error) => {
	log("Uncaught exception:", error);
});

process.on("unhandledRejection", (error) => {
	log("Unhandled rejection:", error);
});

const [cmd, ...args] = process.argv.slice(2);
if (cmd === "init") {
	const [shortcutToken, ...rest] = args;
	if (rest.length > 0) {
		throw new Error(
			`Usage: npx @madisonbullard/shortcut-mcp-server init [shortcut_api_token]`,
		);
	}

	init(shortcutToken);
} else if (cmd === "run") {
	const [shortcutToken, ...rest] = args;
	if (!shortcutToken && !config.shortcutToken) {
		throw new Error(
			`Missing Shortcut API token. Usage: npx @madisonbullard/shortcut-mcp-server run [shortcut_api_token]`,
		);
	}
	if (rest.length > 0) {
		throw new Error(
			`Too many arguments. Usage: npx @madisonbullard/shortcut-mcp-server run [shortcut_api_token]`,
		);
	}
	config.shortcutToken = shortcutToken;

	log(
		"Config loaded:",
		JSON.stringify({
			shortcutToken: config.shortcutToken ? "✓" : "✗",
		}),
	);

	// Start the server
	main();
} else {
	throw new Error(`Unknown command: ${cmd}. Expected 'init' or 'run'.`);
}
