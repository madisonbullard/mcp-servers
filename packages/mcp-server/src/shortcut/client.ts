import { Api } from "@madisonbullard/shortcut-api-client";

export const client = new Api({
	baseUrl: "https://api.app.shortcut.com",
	baseApiParams: {
		headers: {
			// biome-ignore lint/style/noNonNullAssertion: Running the init command guarantees the token is set.
			"Shortcut-Token": process.env.SHORTCUT_API_TOKEN!,
		},
	},
});
