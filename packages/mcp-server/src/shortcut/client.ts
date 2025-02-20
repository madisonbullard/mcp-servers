import { Api } from "@shortcut-mcp-server/shortcut-api-client";

if (!process.env.SHORTCUT_API_TOKEN) {
	throw new Error("SHORTCUT_API_TOKEN is not set");
}

export const client = new Api({
	baseUrl: "https://api.app.shortcut.com",
	baseApiParams: {
		headers: {
			"Shortcut-Token": process.env.SHORTCUT_API_TOKEN,
		},
	},
});
