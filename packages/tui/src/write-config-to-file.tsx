import fs from "node:fs";
import path from "node:path";
import { Newline, Text } from "ink";
import { useEffect, useState } from "react";
import which from "which";

type McpConfig<K extends string> = {
	mcpServers: Record<
		string,
		{ command: string; args: string[]; env?: Record<K, string> }
	>;
};

export default function WriteConfigToFile<K extends string>({
	env,
	command,
	args,
	configFilePath,
	mcpServerName,
	clientName,
	serviceNameHumanReadable,
	createIfNotExists,
	packageName,
}: {
	command: string;
	args: string[];
	env: Record<K, string>;
	configFilePath: string;
	mcpServerName: string;
	clientName: string;
	serviceNameHumanReadable: string;
	createIfNotExists: boolean;
	packageName: string;
}) {
	const [newConfig, setNewConfig] = useState<McpConfig<K> | undefined>(
		undefined,
	);
	const [existingConfig, setExistingConfig] = useState<
		McpConfig<K> | null | undefined
	>(undefined);

	useEffect(
		function writeClaudeMCPConfig() {
			async function createMcpConfigObject() {
				return {
					command: (await which(command)).trim(),
					args,
					env,
				};
			}

			createMcpConfigObject().then((mcpConfigObject) => {
				const configDirExists = fs.existsSync(path.dirname(configFilePath));

				let existingConfig: McpConfig<K> | null = null;

				if (!configDirExists) {
					createIfNotExists &&
						fs.mkdirSync(path.dirname(configFilePath), { recursive: true });
					existingConfig = null;
				}

				existingConfig = (
					configDirExists && fs.existsSync(configFilePath)
						? JSON.parse(fs.readFileSync(configFilePath, "utf8"))
						: null
				) as McpConfig<K> | null;

				setExistingConfig(existingConfig);

				const newConfig: McpConfig<K> = {
					...existingConfig,
					mcpServers: {
						...existingConfig?.mcpServers,
						[mcpServerName]: mcpConfigObject,
					},
				};

				setNewConfig(newConfig);

				if (existingConfig || createIfNotExists) {
					fs.writeFileSync(configFilePath, JSON.stringify(newConfig, null, 2));
				}
			});
		},
		[env, command, args, configFilePath, mcpServerName, createIfNotExists],
	);

	return (
		<>
			<Text>Configuring {clientName}</Text>
			<Text>Step 1 of 1</Text>
			<Newline />
			<Text>Looking for existing config in: </Text>
			<Text color="yellow">{path.dirname(configFilePath)}</Text>
			<Newline />
			{existingConfig === null &&
				(createIfNotExists ? (
					<>
						<Text>
							Existing config not found. Creating the file at path{" "}
							<Text color="yellow">{configFilePath}</Text>.
						</Text>
						<Newline />
					</>
				) : (
					<>
						<Text>
							Couldn't detect {clientName} config at {configFilePath}.{"\n"}To
							add the {serviceNameHumanReadable} MCP server manually, add the
							following config to your{" "}
							<Text color="yellow">{configFilePath.split("/").pop()}</Text>{" "}
							file:
							{"\n\n"}
							{JSON.stringify(newConfig, null, 2)}
						</Text>
						<Newline />
					</>
				))}
			{mcpServerName in (existingConfig?.mcpServers || {}) && (
				<>
					<Text>
						<Text color="green">Note:</Text> Replacing existing{" "}
						{serviceNameHumanReadable} MCP config:
					</Text>
					<Text color="gray">
						{JSON.stringify(existingConfig?.mcpServers[mcpServerName], null, 2)}
					</Text>
					<Newline />
				</>
			)}
			{(existingConfig || createIfNotExists) && (
				<>
					<Text>
						<Text color="yellow">{packageName}</Text> configured & added to{" "}
						{clientName}!
					</Text>
					<Newline />
					<Text>
						Wrote config to <Text color="yellow">{configFilePath}</Text>:
					</Text>
					<Text color="gray">{JSON.stringify(newConfig, null, 2)}</Text>
					<Newline />
					<Text>
						Try passing a {serviceNameHumanReadable} link to {clientName} and
						ask a question about the contents!
					</Text>
				</>
			)}
			<Text color="blue">Done</Text>
		</>
	);
}
