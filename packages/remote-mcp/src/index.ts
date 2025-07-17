import { OpenAPIHono } from "@hono/zod-openapi";
import { handle, streamHandle } from "hono/aws-lambda";
import { compress } from "hono/compress";
import { logger } from "hono/logger";
import { McpApi } from "./mcp";

const app = new OpenAPIHono();
app.use("*", logger());
app.use("*", compress());
app.use("*", async (c, next) => {
	await next();
	if (!c.res.headers.get("cache-control")) {
		c.header("cache-control", "no-store, max-age=0, must-revalidate, no-cache");
	}
});

app.openAPIRegistry.registerComponent("securitySchemes", "Bearer", {
	type: "http",
	bearerFormat: "JWT",
	scheme: "bearer",
});

app.doc("/doc", (c) => ({
	openapi: "3.0.0",
	info: {
		title: "remote-mcp API",
		version: "0.0.1",
	},
	servers: [{ url: new URL(c.req.url).origin }],
}));

const routes = app.route("/mcp", McpApi.route);

export type AppType = typeof routes;
export const handler = process.env.SST_LIVE ? handle(app) : streamHandle(app);
