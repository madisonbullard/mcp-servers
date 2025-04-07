#!/usr/bin/env node

import { log } from "@madisonbullard/mcp-servers-core";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { version } from "../package.json";
import { getMessageContext } from "./tools/get-message-context.js";

const server = new McpServer({
	name: "slack",
	version,
});

// Register tools
getMessageContext(server);

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
