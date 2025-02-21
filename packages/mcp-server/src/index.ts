import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { getStoryText } from "./shortcut/story.js";

const server = new McpServer({
	name: "shortcut",
	version: "1.0.0",
});

server.tool(
	"get-story",
	"Get a Shortcut story by ID",
	{
		storyID: z.number().describe("The ID of the story to get"),
	},
	async ({ storyID }) => {
		const text = await getStoryText(storyID);

		return {
			content: [
				{
					type: "text",
					text,
				},
			],
		};
	},
);

async function main() {
	const transport = new StdioServerTransport();
	await server.connect(transport);
	console.error("Shortcut MCP Server running on stdio");
}

main().catch((error) => {
	console.error("Fatal error in main():", error);
	process.exit(1);
});
