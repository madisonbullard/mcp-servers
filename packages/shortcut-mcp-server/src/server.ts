#!/usr/bin/env node

import { log } from "@madisonbullard/mcp-servers-core";
import { EndpointByMethod } from "@madisonbullard/shortcut-api-client";
import openApiJson from "@madisonbullard/shortcut-api-client/openapi.json" with {
	type: "json",
};
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { version } from "../package.json";
import { client } from "./shortcut/client";

const server = new McpServer({
	name: "shortcut",
	version,
});

function getEndpointInfo(
	method: "get" | "post" | "put" | "delete",
	path: string,
) {
	const pathObj = openApiJson.paths[path as keyof typeof openApiJson.paths];
	// biome-ignore lint/suspicious/noExplicitAny: OpenAPI path methods can vary
	const endpoint = pathObj ? (pathObj as any)[method] : undefined;

	return {
		summary:
			// MCP (or at least Claude) reequires tool names to pass regex validation: /^[a-zA-Z0-9_-]{1,64}$/
			// Manual inspection of the Shortcut OpenAPI summaries shows that they include spaces and parens,
			// which need to be removed
			endpoint?.summary
				.replaceAll(" ", "-")
				.replaceAll("(", "")
				.replaceAll(")", "") || "",
		description: endpoint?.description || "",
	};
}

/**
 * Helper function to register tools for each HTTP method and endpoint
 */
function registerEndpointTools<T extends "get" | "post" | "put" | "delete">(
	method: T,
	// biome-ignore lint/suspicious/noExplicitAny: OpenAPI endpoint structure is complex
	endpoints: Record<string, any>,
) {
	for (const [path, endpoint] of Object.entries(endpoints)) {
		const { summary, description } = getEndpointInfo(method, path);

		server.tool(
			summary,
			description,
			{
				parameters: endpoint.parameters,
			},
			async ({ parameters }) => {
				// biome-ignore lint/suspicious/noExplicitAny: API response types vary
				let response: any;

				switch (method) {
					case "get":
						response = await client.get(endpoint.path.value, parameters);
						break;
					case "post":
						response = await client.post(endpoint.path.value, parameters);
						break;
					case "put":
						response = await client.put(endpoint.path.value, parameters);
						break;
					case "delete":
						response = await client.delete(endpoint.path.value, parameters);
						break;
				}

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
	}
}

// Register tools for each HTTP method
registerEndpointTools("get", EndpointByMethod.get);
registerEndpointTools("post", EndpointByMethod.post);
registerEndpointTools("put", EndpointByMethod.put);
registerEndpointTools("delete", EndpointByMethod.delete);

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
