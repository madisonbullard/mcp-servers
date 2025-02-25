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
	},
	cursor: {
		label: "Cursor",
		value: "cursor",
		configFilePath: path.join(process.cwd(), ".cursor", "mcp.json"),
	},
};

export type Client = keyof typeof clientConfigs;
