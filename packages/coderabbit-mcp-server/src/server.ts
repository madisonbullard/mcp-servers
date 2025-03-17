#!/usr/bin/env node

import { EndpointByMethod } from "@madisonbullard/coderabbit-api-client";
import { log } from "@madisonbullard/mcp-servers-core";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { version } from "../package.json";
import { client } from "./coderabbit/client";

const server = new McpServer({
	name: "coderabbit",
	version,
});

const endpointInfo = EndpointByMethod.post["/v1/report.generate"];

server.tool(
	"Generate-CodeRabbit-Report",
	"track and analyze pull request activity across your repositories",
	{
		parameters: endpointInfo.parameters,
	},
	async ({ parameters }) => {
		const response = await client.post(endpointInfo.path.value, parameters);

		return {
			content: [
				{
					type: "text",
					text: JSON.stringify(response),
				},
			],
		};
	},
);

// Start server
async function main() {
	log("Starting server...");
	try {
		const transport = new StdioServerTransport();
		log("Created transport");
		await server.connect(transport);
		log("Server connected and running");
	} catch (error) {
		log("Fatal error:", error);
		process.exit(1);
	}
}

main();
