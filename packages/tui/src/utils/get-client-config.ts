import fs from "node:fs";
import path from "node:path";
import type { McpConfig } from "../types";
import { type Client, clientConfigs } from "./client-configs";

export function getClientConfig(client: Client, mcpServerName: string) {
	const { configFilePath } = clientConfigs[client];
	const configExists =
		fs.existsSync(path.dirname(configFilePath)) &&
		fs.existsSync(configFilePath);

	const existingConfig: Record<never, never> | McpConfig<string> | null =
		configExists ? JSON.parse(fs.readFileSync(configFilePath, "utf8")) : null;

	if (existingConfig && "mcpServers" in existingConfig) {
		const specificConfig = existingConfig.mcpServers[mcpServerName];
		return specificConfig;
	}

	return null;
}

// ERROR  Cannot read properties of undefined (reading ‘slack’)
//  .npm/_npx/4ec18a4fef908e1b/node_modules/@madisonbullard/mcp-server-tui/dist/cli.js:60:52
//  57:   const { configFilePath } = clientConfigs[client];
//  58:   const configExists = fs.existsSync(path2.dirname(configFilePath)) &&
//     fs.existsSync(configFilePath);
//  59   const existingConfig = configExists ? JSON.parse(fs.readFileSync(configFilePath, “utf8”)) :
//  : null;
//  60:   const specificConfig = existingConfig?.mcpServers[mcpServerName];
//  61:   return specificConfig;
//  62: }
//  63:
