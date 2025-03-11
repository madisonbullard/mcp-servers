#!/usr/bin/env node

import type { Epic } from "@madisonbullard/shortcut-api-client";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { version } from "../package.json";
import { api, endpoints } from "@madisonbullard/shortcut-api-client";
import { getEpic, getEpicStories, getEpicText } from "./shortcut/epic.js";
import {
	getObjective,
	getObjectiveEpics,
	getObjectiveText,
} from "./shortcut/objective";
import { getStory, getStoryText } from "./shortcut/story.js";
import { log } from "./utils/log.js";

const server = new McpServer({
	name: "shortcut",
	version,
});

const methods = Object.keys(api) as (keyof typeof api)[];
const [firstKey, ...otherKeys] = methods;
const params = endpoints.map(endpoint => endpoint.parameters)

const params = z.discriminatedUnion("params", endpoints.map(endpoint => endpoint.parameters))

server.tool(
	"shortcut-api-client",
	"Make a call to the Shortcut using a Javascript API client",
	{
		method: z
			// hacky way to get z.enum to recognize all keys
			.enum([firstKey, ...otherKeys])
			.describe("The method to call on the client"),
		params: api[this.method]
		args: z
			.record(z.string(), z.any())
			.optional()
			.describe("Arguments to pass to the method"),
	},
	async ({ method, args }) => {
		const c = await api[method];
		if (!c) throw new Error(`No method ${method} available on the client`)
		return await c(...args);
	},
);

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

server.tool(
	"get-objective",
	"Get a Shortcut Objective by ID",
	{
		objectiveID: z.number().describe("The ID of the Objective to get"),
	},
	async ({ objectiveID }) => {
		const res = await getObjective(objectiveID);

		if (!res.ok || res.error) {
			return {
				content: [
					{
						type: "text",
						text: `Failed to retrieve Shortcut Objective with ID ${objectiveID}: ${res.status} error.`,
					},
				],
			};
		}

		const objective = res.data;

		const epicsRes = await getObjectiveEpics(objective.id);

		const epics = epicsRes.data;

		const text = getObjectiveText(objective, epics);

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

main();
