import { createApiClient } from "@madisonbullard/notion-api-client";
import { Client } from "@notionhq/client";

export const openapiClient = createApiClient((method, url, params) => {
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
		headers: {
			Authorization: `Bearer ${process.env.NOTION_API_TOKEN}`,
			"Notion-Version": "2022-06-28",
			"Content-Type": "application/json",
		},
	}).then((res) => res.json());
}, "https://api.notion.com");

export const notionSdkClient = new Client({
	auth: process.env.NOTION_API_TOKEN,
});
