import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const SHORTCUT_API_BASE = "https://api.app.shortcut.com";

// Create server instance
const server = new McpServer({
	name: "shortcut",
	version: "1.0.0",
});
