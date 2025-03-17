import { createApiClient } from "@madisonbullard/coderabbit-api-client";
import { log } from "@madisonbullard/mcp-servers-core";

export const client = createApiClient(async (method, url, params) => {
	// Replace dynamic route parameters in the URL
	let fullUrl = url;

	if (params?.path) {
		for (const [key, value] of Object.entries(params.path)) {
			fullUrl = fullUrl.replace(`{${key}}`, String(value));
		}
	}

	// Add query parameters if they exist
	if (params?.query) {
		fullUrl += `?${new URLSearchParams(params.query as Record<string, string>).toString()}`;
	}

	log("Full URL:", fullUrl);
	log("Params:", JSON.stringify(params?.body, null, 2));

	const res = await fetch(fullUrl, {
		method,
		body: params?.body ? JSON.stringify(params.body) : undefined,
		headers: {
			// biome-ignore lint/style/noNonNullAssertion: TUI guarantees value
			"x-coderabbitai-api-key": process.env.CODERABBIT_API_TOKEN!,
			"Content-Type": "application/json",
			...(params?.header || {}),
		},
	});

	return await res.json();
}, "https://api.coderabbit.ai/api");
