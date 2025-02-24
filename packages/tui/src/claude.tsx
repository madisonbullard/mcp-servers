import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { Newline, Text } from "ink";
import { useEffect, useState } from "react";
import which from "which";

const claudeConfigPath = path.join(
	os.homedir(),
	"Library",
	"Application Support",
	"Claude",
	"claude_desktop_config.json",
);

type ClaudeConfig<K extends string> = {
	mcpServers: Record<
		string,
		{ command: string; args: string[]; env?: Record<K, string> }
	>;
};

export default function Claude<K extends string>({
	env,
	command,
	args,
	mcpServerName,
}: {
	command: string;
	args: string[];
	env: Record<K, string>;
	mcpServerName: string;
}) {
	const [newConfig, setNewConfig] = useState<ClaudeConfig<K> | undefined>(
		undefined,
	);
	const [existingConfig, setExistingConfig] = useState<
		ClaudeConfig<K> | null | undefined
	>(undefined);

	useEffect(
		function writeClaudeMCPConfig() {
			async function createClaudeMCPConfigObject() {
				return {
					command: (await which(command)).trim(),
					args,
					env,
				};
			}

			createClaudeMCPConfigObject().then((mcpConfigObject) => {
				const configDirExists = fs.existsSync(path.dirname(claudeConfigPath));

				if (!configDirExists) {
					setExistingConfig(null);
				}

				const existingConfig = (
					fs.existsSync(claudeConfigPath)
						? JSON.parse(fs.readFileSync(claudeConfigPath, "utf8"))
						: null
				) as ClaudeConfig<K>;

				setExistingConfig(existingConfig);

				const newConfig: ClaudeConfig<K> = {
					...existingConfig,
					mcpServers: {
						...existingConfig.mcpServers,
						[mcpServerName]: mcpConfigObject,
					},
				};

				setNewConfig(newConfig);

				fs.writeFileSync(claudeConfigPath, JSON.stringify(newConfig, null, 2));
			});
		},
		[env, command, args, mcpServerName],
	);

	return (
		<>
			<Text>Configuring Claude Desktop</Text>
			<Text>Step 1 of 1</Text>
			<Newline />
			<Text>Looking for existing config in: </Text>
			<Text color="yellow">{path.dirname(claudeConfigPath)}</Text>
			<Newline />
			{existingConfig === null && (
				<Text>
					Couldn't detect Claude Desktop config at {claudeConfigPath}.{"\n"}To
					add the Shortcut MCP server manually, add the following config to your{" "}
					<Text color="yellow">claude_desktop_configs.json</Text> file:{"\n\n"}
					{JSON.stringify(newConfig, null, 2)}
				</Text>
			)}
			{"shortcut" in (existingConfig?.mcpServers || {}) && (
				<>
					<Text>
						<Text color="green">Note:</Text> Replacing existing Shortcut MCP
						config:
					</Text>
					<Text color="gray">
						{JSON.stringify(existingConfig?.mcpServers.shortcut, null, 2)}
					</Text>
					<Newline />
					<Text>
						<Text color="yellow">shortcut-mcp-server</Text> configured & added
						to Claude Desktop!
					</Text>
					<Newline />
					<Text>
						Wrote config to <Text color="yellow">{claudeConfigPath}</Text>:
					</Text>
					<Text color="gray">{JSON.stringify(newConfig, null, 2)}</Text>
					<Newline />
					<Text>
						Try asking Claude to "tell me about this story:{" "}
						{"{SHORTCUT_STORY_URL}"}" to get started!
					</Text>
				</>
			)}
			<Text color="blue">Done</Text>
		</>
	);
}
