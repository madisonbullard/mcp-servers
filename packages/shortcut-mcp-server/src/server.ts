#!/usr/bin/env node

import type { Epic } from "@madisonbullard/shortcut-api-client";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { version } from "../package.json";
import { getEpic, getEpicStories, getEpicText } from "./shortcut/epic.js";
import { getStory, getStoryText } from "./shortcut/story.js";
import { log } from "./utils/log.js";

const server = new McpServer({
	name: "shortcut",
	version,
});

server.tool(
	"get-story",
	"Get a Shortcut story by ID",
	{
		storyID: z.number().describe("The ID of the story to get"),
	},
	async ({ storyID }) => {
		const res = await getStory(storyID);

		if (!res.ok || res.error) {
			return {
				content: [
					{
						type: "text",
						text: `Failed to retrieve Shortcut story with ID ${storyID}: ${res.status} error.`,
					},
				],
			};
		}

		const story = res.data;

		const epicRes = story.epic_id
			? await getEpic(story.epic_id)
			: await Promise.resolve(undefined);

		let epic: Epic | undefined;

		if (!epicRes?.ok || epicRes.error) {
			epic = undefined;
		}

		epic = epicRes?.data;

		const text = getStoryText(story, epic);

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

server.tool(
	"get-epic",
	"Get a Shortcut Epic by ID",
	{
		epicID: z.number().describe("The ID of the Epic to get"),
	},
	async ({ epicID }) => {
		const res = await getEpic(epicID);

		if (!res.ok || res.error) {
			return {
				content: [
					{
						type: "text",
						text: `Failed to retrieve Shortcut Epic with ID ${epicID}: ${res.status} error.`,
					},
				],
			};
		}

		const epic = res.data;

		const storiesRes = await getEpicStories(epic.id);

		const stories = storiesRes.data;

		const text = getEpicText(epic, stories);

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

main().catch((error) => {
	console.error("Fatal error in main():", error);
	process.exit(1);
});
