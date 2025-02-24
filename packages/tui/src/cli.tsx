#!/usr/bin/env node
import { render } from "ink";
// import meow from "meow";
import App from "./app.js";

// const cli = meow(
// 	`
// 	Usage
// 	  $ mcp-server-tui

// 	Options
// 		--name  Your name

// 	Examples
// 	  $ mcp-server-tui --name=Jane
// 	  Hello, Jane
// `,
// 	{
// 		importMeta: import.meta,
// 		flags: {
// 			clients: {
// 				type: "string",
// 			},
// 		},
// 	},
// );

export function cli({
	packageName,
	serviceNameHumanReadable,
	mcpServerName,
	version,
	execConfig,
}: {
	packageName: string;
	serviceNameHumanReadable: string;
	mcpServerName: string;
	version: string;
	execConfig: {
		command: string;
		args: string[];
		env: { label: string; value: string }[];
	};
}) {
	render(
		<App
			packageName={packageName}
			serviceNameHumanReadable={serviceNameHumanReadable}
			mcpServerName={mcpServerName}
			version={version}
			execConfig={execConfig}
		/>,
	);
}
