export type McpConfig<K extends string> = {
	mcpServers: Record<
		string,
		{ command: string; args: string[]; env?: Record<K, string> }
	>;
};
