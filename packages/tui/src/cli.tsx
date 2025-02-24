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

if (!process.env.PACKAGE_NAME) {
	throw new Error("PACKAGE_NAME is not set");
}

if (!process.env.SERVICE_NAME_HUMAN_READABLE) {
	throw new Error("SERVICE_NAME_HUMAN_READABLE is not set");
}

if (!process.env.MCP_SERVER_NAME) {
	throw new Error("MCP_SERVER_NAME is not set");
}

if (!process.env.VERSION) {
	throw new Error("VERSION is not set");
}

if (!process.env.EXEC_CONFIG_COMMAND) {
	throw new Error("EXEC_CONFIG_COMMAND is not set");
}

if (!process.env.EXEC_CONFIG_FILE_PATH) {
	throw new Error("EXEC_CONFIG_FILE_PATH is not set");
}

if (!process.env.EXEC_CONFIG_ARGS) {
	throw new Error("EXEC_CONFIG_ARGS is not set");
}

const envConfig = process.env.EXEC_CONFIG_ENV?.split(",").map((env) => {
	const [label, value] = env.split("=");
	return { label, value };
});

render(
	<App
		packageName={process.env.PACKAGE_NAME}
		serviceNameHumanReadable={process.env.SERVICE_NAME_HUMAN_READABLE}
		mcpServerName={process.env.MCP_SERVER_NAME}
		version={process.env.VERSION}
		execConfig={{
			command: process.env.EXEC_CONFIG_COMMAND,
			filePath: process.env.EXEC_CONFIG_FILE_PATH,
			args: process.env.EXEC_CONFIG_ARGS.split(","),
			env: envConfig,
		}}
	/>,
);
