import path from "node:path";
import { Newline, Text } from "ink";
import { useWriteMcpConfig } from "../hooks/mcp-config";
import { type Client, clientConfigs } from "../utils/client-configs";

export type HandleConfigCreationProps<K extends string> = {
	command: string;
	args: string[];
	env: Record<K, string>;
	configFilePath: string;
	mcpServerName: string;
	clientName: Client;
	serviceNameHumanReadable: string;
	createIfNotExists: boolean;
	packageName: string;
	supportsEnvObject: boolean;
	postscript: string | null;
};

export default function HandleConfigCreation<K extends string>({
	env,
	command,
	args,
	configFilePath,
	mcpServerName,
	clientName,
	serviceNameHumanReadable,
	createIfNotExists,
	packageName,
	supportsEnvObject,
	postscript,
}: HandleConfigCreationProps<K>) {
	const { newConfig, existingConfig } = useWriteMcpConfig({
		env,
		command,
		args,
		configFilePath,
		mcpServerName,
		createIfNotExists,
		supportsEnvObject,
	});

	const clientLabel = clientConfigs[clientName].label;

	return (
		<>
			<Text>Looking for existing config in: </Text>
			<Text color="yellow">{path.dirname(configFilePath)}</Text>
			<Newline />
			{existingConfig === null &&
				(createIfNotExists ? (
					<>
						<Text>
							Existing {clientLabel} config not found. Creating the file at path{" "}
							<Text color="yellow">{configFilePath}</Text>.
						</Text>
						<Newline />
					</>
				) : (
					<>
						<Text>
							Couldn't detect {clientLabel} config at {configFilePath}.{"\n"}To
							add the {serviceNameHumanReadable} MCP server manually, add the
							following config to your{" "}
							<Text color="yellow">{configFilePath.split("/").pop()}</Text>{" "}
							file:
							{"\n\n"}
							{JSON.stringify(newConfig, null, 2)}
						</Text>
						<Newline />
						<Text>
							If you copy/paste the above config, make sure to format the pasted
							content correctly (remove any unnecessary line breaks) so $
							{clientLabel} can read the JSON file.
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
						{clientLabel}!
					</Text>
					<Newline />
					<Text>
						Wrote config to <Text color="yellow">{configFilePath}</Text>:
					</Text>
					<Text color="gray">{JSON.stringify(newConfig, null, 2)}</Text>
					{postscript && (
						<>
							<Newline />
							<Text>{postscript}</Text>
						</>
					)}
				</>
			)}
			<Text color="green">Done</Text>
		</>
	);
}
