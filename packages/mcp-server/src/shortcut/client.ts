import { Api } from "@madisonbullard/shortcut-api-client";
import { config } from "../utils/config";

export const client = new Api({
	baseUrl: "https://api.app.shortcut.com",
	baseApiParams: {
		headers: {
			// biome-ignore lint/style/noNonNullAssertion: There are checks in place to ensure the token is set
			"Shortcut-Token": config.shortcutToken!,
		},
	},
});
