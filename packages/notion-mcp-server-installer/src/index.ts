#!/usr/bin/env node

import { cli } from "@madisonbullard/mcp-server-tui";
import { version } from "../package.json";

cli({
	packageName: "notion-mcp-server",
	serviceNameHumanReadable: "Notion",
	mcpServerName: "notion",
	version,
	execConfig: {
		command: "npx",
		args: ["-y", "@madisonbullard/notion-mcp-server"],
		env: [
			{
				label: "Notion API token",
				value: "NOTION_API_TOKEN",
			},
		],
	},
	moreInfoLink: "https://github.com/madisonbullard/mcp-servers",
});
