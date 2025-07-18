import { z } from "@hono/zod-openapi";

export function Body<T extends z.ZodTypeAny>(schema: T, description?: string) {
	return {
		body: {
			content: {
				"application/json": {
					schema,
				},
			},
			description,
		},
	};
}

export function Result<T extends z.ZodTypeAny>(schema: T, description: string) {
	return {
		content: {
			"application/json": {
				schema: z.object({
					result: schema,
				}),
			},
		},
		description,
	};
}

export const McpErrorCodes = {
	// Standard JSON-RPC error codes
	ConnectionClosed: -32000,
	RequestTimeout: -32001,
	ParseError: -32700,
	InvalidRequest: -32600,
	MethodNotFound: -32601,
	InvalidParams: -32602,
	InternalError: -32603,
} as const;

export function ApiError(description: string) {
	return {
		content: {
			"application/json": {
				schema: z.object({
					jsonrpc: z.literal("2.0"),
					error: z.object({
						code: z.nativeEnum(McpErrorCodes),
						message: z.string(),
					}),
					id: z.string().nullable(),
				}),
			},
		},
		description,
	};
}
