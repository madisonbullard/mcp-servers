#!/usr/bin/env node

import { log } from "@madisonbullard/mcp-servers-core";
import { EndpointByMethod } from "@madisonbullard/notion-api-client";
import openApiJson from "@madisonbullard/notion-api-client/openapi.json" with {
	type: "json",
};
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { version } from "../package.json";
import { openapiClient } from "./notion/client";
import { createPage } from "./tools/createPage";
import { duplicatePage } from "./tools/duplicatePage";
import { updatePageContent } from "./tools/updatePageContent";

const server = new McpServer({
	name: "notion",
	version,
});

const toolDescriptions: Record<
	string,
	Partial<Record<"get" | "post" | "patch" | "delete", string>>
> = {
	"/v1/pages/{page_id}/properties/{property_id}": {
		get: "Retrieve a page property's value",
	},
	"/v1/blocks/{id}/children": {
		get: "Retrieve a block's children. This is the tool for retrieving the contents of a Notion page.",
	},
	"/v1/blocks/{id}": {
		get: "Retrieve the contents of one Notion block.",
	},
};

function getEndpointInfo(
	method: "get" | "post" | "patch" | "delete",
	path: string,
) {
	const pathObj = openApiJson.paths[path as keyof typeof openApiJson.paths];
	// biome-ignore lint/suspicious/noExplicitAny: OpenAPI path methods can vary
	const endpoint = pathObj ? (pathObj as any)[method] : undefined;

	return {
		summary:
			// MCP (or at least Claude) reequires tool names to pass regex validation: /^[a-zA-Z0-9_-]{1,64}$/
			// Manual inspection of the Notion OpenAPI summaries shows that they include spaces and parens,
			// which need to be removed
			endpoint?.summary
				.replaceAll(" ", "-")
				.replaceAll("'", "")
				.replaceAll("’", "")
				.replaceAll("(", "")
				.replaceAll(")", "") || "",
		description:
			toolDescriptions[path]?.[method] || endpoint?.description || "",
	};
}

// Paths that will be handled by the Notion SDK rather than the OpenAPI client,
// because the OpenAPI definitions are incorrect/incomplete for these paths
const customToolsMap: Record<
	string,
	Partial<
		Record<
			"get" | "post" | "patch" | "delete",
			((server: McpServer) => void) | null
		>
	>
> = {
	"/v1/pages/": { post: createPage },
	"/v1/pages/duplicate": { post: duplicatePage },
	"/v1/blocks/{id}/children": { patch: updatePageContent },
	// Use null to skip registration, rather than replacing with a custom tool
	"/v1/blocks/{id}": { patch: null, delete: null },
};

/**
 * Helper function to register tools for each HTTP method and endpoint
 */
function registerToolsFromOpenapiSchema<
	T extends "get" | "post" | "patch" | "delete",
>(
	method: T,
	// biome-ignore lint/suspicious/noExplicitAny: OpenAPI endpoint structure is complex
	endpoints: Record<string, any>,
) {
	for (const [path, endpoint] of Object.entries(endpoints)) {
		const { summary, description } = getEndpointInfo(method, path);

		if (customToolsMap[path]?.[method] !== undefined) {
			continue;
		}

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
						response = await openapiClient.get(endpoint.path.value, parameters);
						break;
					case "post":
						response = await openapiClient.post(
							endpoint.path.value,
							parameters,
						);
						break;
					case "delete":
						response = await openapiClient.delete(
							endpoint.path.value,
							parameters,
						);
						break;
					case "patch":
						response = await openapiClient.patch(
							endpoint.path.value,
							parameters,
						);
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

// Only register GET endpoints from the openapi schema because the other endpoints have broken schema definitions
registerToolsFromOpenapiSchema("get", EndpointByMethod.get);

for (const endpointOverrideConfig of Object.values(customToolsMap)) {
	for (const registerToolFn of Object.values(endpointOverrideConfig)) {
		registerToolFn?.(server);
	}
}

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
