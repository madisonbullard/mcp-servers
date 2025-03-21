import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { notionSdkClient } from "../notion/client";
import { markdownToBlocks } from "../notion/markdownToBlocks";

// Define the parameter schema
const updatePageContentSchema = {
	blockId: z.string().describe("The block or page ID to update."),
	markdown: z.string(),
};

export function updatePageContent(server: McpServer) {
	server.tool(
		"Update-Page-Content",
		"Update an existing page's content in Notion",
		updatePageContentSchema,
		async ({ blockId, markdown }) => {
			const response = await notionSdkClient.blocks.children.append({
				block_id: blockId,
				children: markdownToBlocks(markdown),
			});

			return {
				content: [
					{
						type: "text",
						text: `${response.object} updated!`,
					},
				],
			};
		},
	);
}
