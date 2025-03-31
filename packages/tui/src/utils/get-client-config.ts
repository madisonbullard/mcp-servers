import fs from "node:fs";
import path from "node:path";
import type { McpConfig } from "../types";
import { type Client, clientConfigs } from "./client-configs";

export function getClientConfig(client: Client, mcpServerName: string) {
	const { configFilePath } = clientConfigs[client];
	const configExists =
		fs.existsSync(path.dirname(configFilePath)) &&
		fs.existsSync(configFilePath);

	const existingConfig: McpConfig<string> | null = configExists
		? JSON.parse(fs.readFileSync(configFilePath, "utf8"))
		: null;

	const specificConfig = existingConfig?.mcpServers[mcpServerName];

	return specificConfig;
}
