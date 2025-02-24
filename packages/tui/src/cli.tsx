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

render(
	<App
		packageName="shortcut-mcp-server"
		serviceNameHumanReadable="Shortcut"
		mcpServerName="shortcut"
		version="1.0.0"
		execConfig={{
			command: "node",
			filePath:
				"/Users/madisonbullard/Documents/Projects/mcp-servers/packages/shortcut-mcp-server/dist/index.js",
			args: ["run"],
			env: [{ label: "Shortcut API token", value: "SHORTCUT_API_TOKEN" }],
		}}
	/>,
);
