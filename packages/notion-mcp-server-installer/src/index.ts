#!/usr/bin/env node

import { cli } from "@madisonbullard/mcp-server-tui";
import { name, version } from "../package.json";

cli({
	packageName: name.replace("@madisonbullard/", ""),
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
