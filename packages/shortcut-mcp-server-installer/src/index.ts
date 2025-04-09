#!/usr/bin/env node

import { cli } from "@madisonbullard/mcp-server-tui";
import { version } from "../package.json";

cli({
	packageName: "@shortcut/mcp",
	serviceNameHumanReadable: "Shortcut",
	mcpServerName: "@shortcut/mcp",
	version,
	execConfig: {
		command: "npx",
		args: ["-y", "@shortcut/mcp"],
		env: [
			{
				label: "Shortcut API token",
				value: "SHORTCUT_API_TOKEN",
			},
		],
	},
	moreInfoLink: "https://github.com/madisonbullard/mcp-servers",
});
