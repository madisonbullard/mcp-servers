#!/usr/bin/env node

import { fileURLToPath } from "node:url";
import { cli } from "@madisonbullard/mcp-server-tui";
import { name, version } from "../package.json";

cli({
	packageName: name.replace("@madisonbullard/", ""),
	serviceNameHumanReadable: "Notion",
	mcpServerName: "notion",
	version,
	execConfig: {
		command: "node",
		args: [fileURLToPath(new URL("./server.js", import.meta.url))],
		env: [
			{
				label: "Notion API token",
				value: "NOTION_API_TOKEN",
			},
		],
	},
	moreInfoLink: "https://github.com/madisonbullard/mcp-servers",
});
