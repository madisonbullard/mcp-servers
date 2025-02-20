import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { client } from "./shortcut/client";
import { getStory } from "./shortcut/story";

if (!process.env.SHORTCUT_API_TOKEN) {
	throw new Error("SHORTCUT_API_TOKEN is not set");
}

const server = new McpServer({
	name: "shortcut",
	version: "1.0.0",
});

server.tool(
	"get-story",
	"Get a Shortcut story by ID",
	{
		story_id: z.number().describe("The ID of the story to get"),
	},
	async ({ story_id }) => {
		const text = await getStory(story_id);

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

const res = await client.api.getStory(392853);
const story = res.data;

console.log(story.name);
