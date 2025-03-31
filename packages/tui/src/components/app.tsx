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

export type AppProps = {
	/**
	 * The name of the package housing your mcp server
	 * (You could import this from package.json "name" property)
	 */
	packageName: string;
	/**
	 * The name by which to identify your MCP server to the client
	 */
	serviceNameHumanReadable: string;
	/**
	 * The version of the package housing your mcp server
	 */
	version: string;
	/**
	 * The configuration for how to execute your mcp server
	 */
	execConfig: {
		/**
		 * This package will resolve the user's absolute path
		 * to the module referenced here, using `which()`.
		 * e.g. "node" will resolve to `/user/path/to/node`
		 */
		command: string;
		/**
		 * The script to execute, and any additional arguments passed to the script.
		 * The file path should reference a `.js` file even if you're writing TS source.
		 */
		args: string[];
		/**
		 * An optional config for any environment variables to prompt the user for.
		 * A list of { label: string; value: string };
		 */
		env?: { label: string; value: string }[];
	};
	/**
	 * The namespace of your MCP server for reference by the client
	 */
	mcpServerName: string;
	/**
	 * A link to more information about your MCP server
	 */
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
