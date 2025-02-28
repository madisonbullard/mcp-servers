import { TextInput } from "@inkjs/ui";
import { Box, Newline, Text } from "ink";
import Link from "ink-link";
import { useState } from "react";
import { type Client, clientConfigs } from "../utils/client-configs.js";
import HandleConfigCreation, {
	type HandleConfigCreationProps,
} from "./handle-config-creation.js";
import { HandleCursorConfig } from "./handle-cursor-config.js";
import SelectClient from "./select-client.js";

type AppProps = {
	packageName: string;
	serviceNameHumanReadable: string;
	version: string;
	execConfig: {
		env?: { label: string; value: string }[];
		command: string;
		args: string[];
	};
	mcpServerName: string;
	moreInfoLink: string;
};

export default function App({
	packageName,
	serviceNameHumanReadable,
	version,
	execConfig,
	mcpServerName,
	moreInfoLink,
}: AppProps) {
	const initialEnv = execConfig.env?.reduce(
		(acc: Record<string, string>, e) => {
			acc[e.value] = "";
			return acc;
		},
		{},
	);
	const [env, setEnv] = useState(initialEnv);
	const emptyEnvValue = Object.entries(env || {}).find(
		([_, value]) => value === "",
	)?.[0];
	const emptyEnvLabel = execConfig.env?.find(
		(e) => e.value === emptyEnvValue,
	)?.label;

	const [selectedClient, setSelectedClient] = useState<Client | undefined>(
		undefined,
	);

	if (selectedClient && !emptyEnvValue) {
		const configProps: HandleConfigCreationProps<Client> = {
			command: execConfig.command,
			args: execConfig.args,
			env: env || {},
			configFilePath: clientConfigs[selectedClient].configFilePath,
			mcpServerName,
			clientName: selectedClient,
			packageName,
			serviceNameHumanReadable,
			createIfNotExists:
				clientConfigs[selectedClient].createConfigFileIfNotExists,
			supportsEnvObject: clientConfigs[selectedClient].configSupportsEnvObject,
			postscript: clientConfigs[selectedClient].postscript,
		};

		switch (selectedClient) {
			case "claude":
			case "windsurf":
				return <HandleConfigCreation {...configProps} />;
			case "cursor":
				return <HandleCursorConfig {...configProps} />;
			default:
				return null;
		}
	}

	return (
		<>
			<Box
				padding={1}
				width="80"
				flexDirection="column"
				borderStyle="round"
				borderColor="blue"
			>
				<Text>
					👋 Welcome to <Text color="yellow">{packageName}</Text> v{version}!
				</Text>
				<Newline />
				<Text>
					💁 This process will help you connect your client of choice to a{" "}
					{serviceNameHumanReadable} MCP server, allowing the client to
					interface with the {serviceNameHumanReadable} API.
				</Text>
				<Newline />
				<Text>
					📚 For more information, visit{" "}
					<Link fallback={false} url={moreInfoLink}>
						<Text color="blue" underline>
							{moreInfoLink}
						</Text>
					</Link>
				</Text>
				<Newline />
				<Text>Let's get started.</Text>
			</Box>
			<Newline />
			{!selectedClient ? (
				<>
					<Text>Which client are you integrating with?</Text>
					<SelectClient
						onChange={(value) => setSelectedClient(value as Client)}
					/>
				</>
			) : (
				<>
					<Text color="blue">
						Configuring <Text color="yellow">{packageName}</Text> for use with{" "}
						<Text color="yellow">{selectedClient}</Text>.
					</Text>
					{emptyEnvValue && (
						<>
							<Text>Enter your {emptyEnvLabel}:</Text>
							<TextInput
								onSubmit={(value) => setEnv({ ...env, [emptyEnvValue]: value })}
							/>
						</>
					)}
				</>
			)}
		</>
	);
}
