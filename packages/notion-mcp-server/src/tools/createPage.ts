import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { Tool } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

export const createPage: Parameters<McpServer["tool"]> = [
	"Create-Page",
	"Create a new page in Notion",
	{},
	async ({ parameters }) => {
		return {
			content: [
				{
					type: "text",
					text: JSON.stringify(parameters),
				},
			],
		};
	},
];
