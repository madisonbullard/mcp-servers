#!/usr/bin/env node
import { render } from "ink";
// import meow from "meow";
import App from "./components/app.js";

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

export function cli(props: {
	packageName: string;
	serviceNameHumanReadable: string;
	mcpServerName: string;
	version: string;
	execConfig: {
		command: string;
		args: string[];
		env: { label: string; value: string }[];
	};
	moreInfoLink: string;
}) {
	render(<App {...props} />);
}
