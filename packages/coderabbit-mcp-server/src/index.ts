#!/usr/bin/env node

import { fileURLToPath } from "node:url";
import { cli } from "@madisonbullard/mcp-server-tui";
import { name, version } from "../package.json";

cli({
	packageName: name.replace("@madisonbullard/", ""),
	serviceNameHumanReadable: "CodeRabbit",
	mcpServerName: "coderabbit",
	version,
	execConfig: {
		command: "node",
		args: [fileURLToPath(new URL("./server.js", import.meta.url))],
		env: [
			{
				label: "CodeRabbit API key",
				value: "CODERABBIT_API_TOKEN",
			},
		],
	},
	moreInfoLink: "https://github.com/madisonbullard/mcp-servers",
});
