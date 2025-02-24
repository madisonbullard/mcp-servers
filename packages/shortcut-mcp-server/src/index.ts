#!/usr/bin/env node

import { fileURLToPath } from "node:url";
import { cli } from "@madisonbullard/mcp-server-tui";
import { name, version } from "../package.json";

cli({
	packageName: name.replace("@madisonbullard/", ""),
	serviceNameHumanReadable: "Shortcut",
	mcpServerName: "shortcut",
	version,
	execConfig: {
		command: "node",
		args: [fileURLToPath(new URL("./server.js", import.meta.url))],
		env: [
			{
				label: "Shortcut API token",
				value: "SHORTCUT_API_TOKEN",
			},
		],
	},
});
