#!/usr/bin/env node
import { init } from "./init";
import { main } from "./main";
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
			`Usage: npx @madisonbullard/shortcut-mcp-server init {shortcut_api_token}`,
		);
	}

	init(shortcutToken);
} else if (cmd === "run") {
	// Start the server
	main();
} else {
	throw new Error(`Unknown command: ${cmd}. Expected 'init' or 'run'.`);
}
