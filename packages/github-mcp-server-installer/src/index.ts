#!/usr/bin/env node

import { cli } from "@madisonbullard/mcp-server-tui";
import { version } from "../package.json";

cli({
	packageName: "github-mcp-server",
	serviceNameHumanReadable: "GitHub",
	mcpServerName: "github",
	version,
	execConfig: {
		command: "npx",
		args: ["-y", "@madisonbullard/github-mcp-server"],
		env: [
			{
				label: "GitHub Personal Access Token",
				value: "GITHUB_PERSONAL_ACCESS_TOKEN",
			},
		],
	},
	moreInfoLink: "https://github.com/madisonbullard/mcp-servers",
});
