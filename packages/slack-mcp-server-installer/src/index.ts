#!/usr/bin/env node

import { cli } from "@madisonbullard/mcp-server-tui";
import { version } from "../package.json";

cli({
	packageName: "slack-mcp-server",
	serviceNameHumanReadable: "Slack",
	mcpServerName: "slack",
	version,
	execConfig: {
		command: "npx",
		args: ["-y", "@madisonbullard/slack-mcp-server"],
		env: [
			{
				label: "Slack Bot token",
				value: "SLACK_BOT_TOKEN",
			},
		],
	},
	moreInfoLink: "https://github.com/madisonbullard/mcp-servers",
});
