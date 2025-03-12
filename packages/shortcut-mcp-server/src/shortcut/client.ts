import { createApiClient } from "@madisonbullard/shortcut-api-client";

export const client = createApiClient((method, url, params) => {
	// Replace dynamic route parameters in the URL
	let fullUrl = url;

	// Replace path parameters (e.g., {group-public-id} with the actual value)
	if (params?.path) {
		for (const [key, value] of Object.entries(params.path)) {
			fullUrl = fullUrl.replace(`{${key}}`, String(value));
		}
	}

	// Add query parameters if they exist
	if (params?.query) {
		fullUrl += `?${new URLSearchParams(params.query as Record<string, string>).toString()}`;
	}

	return fetch(fullUrl, {
		method,
		body: params?.body ? JSON.stringify(params.body) : undefined,
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		headers: { "Shortcut-Token": process.env.SHORTCUT_API_TOKEN! },
	}).then((res) => res.json());
}, "https://api.app.shortcut.com");
