import os from "node:os";
import path from "node:path";

export const clientConfigs = {
	claude: {
		label: "Claude Desktop",
		value: "claude",
		configFilePath: path.join(
			os.homedir(),
			"Library",
			"Application Support",
			"Claude",
			"claude_desktop_config.json",
		),
		createConfigFileIfNotExists: false,
		configSupportsEnvObject: true,
		postscript: null,
	},
	cursor: {
		label: "Cursor",
		value: "cursor",
		configFilePath: path.join(process.cwd(), ".cursor", "mcp.json"),
		createConfigFileIfNotExists: true,
		configSupportsEnvObject: false,
		postscript:
			"To enable the MCP server, go to Settings > Cursor Settings > MCP and click 'Enable'",
	},
	windsurf: {
		label: "Windsurf",
		value: "windsurf",
		configFilePath: path.join(
			os.homedir(),
			".codeium",
			"windsurf",
			"mcp_config.json",
		),
		createConfigFileIfNotExists: false,
		configSupportsEnvObject: true,
		postscript: null,
	},
};

export type Client = keyof typeof clientConfigs;
