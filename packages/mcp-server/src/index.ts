import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { Api } from "@shortcut-mcp-server/shortcut-api-client";
import { z } from "zod";

// const SHORTCUT_API_BASE = "https://api.app.shortcut.com";

// // Create server instance
// const server = new McpServer({
// 	name: "shortcut",
// 	version: "1.0.0",
// });

if (!process.env.SHORTCUT_API_TOKEN) {
	throw new Error("SHORTCUT_API_TOKEN is not set");
}

const client = new Api({
	baseUrl: "https://api.app.shortcut.com",
	baseApiParams: {
		headers: {
			"Shortcut-Token": process.env.SHORTCUT_API_TOKEN,
		},
	},
});

const res = await client.api.getStory(392853);
const story = res.data;

console.log(story.name);
