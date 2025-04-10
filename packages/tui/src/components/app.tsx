import { TextInput } from "@inkjs/ui";
import { Box, Newline, Text } from "ink";
import Link from "ink-link";
import { useState } from "react";
import { type Client, clientConfigs } from "../utils/client-configs.js";
import { getClientConfig } from "../utils/get-client-config.js";
import { ConfigCreation } from "./config-creation.js";
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

	const existingClientEnv = selectedClient
		? getClientConfig(selectedClient, mcpServerName)?.env || {}
		: {};

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
						<Text color="yellow">{clientConfigs[selectedClient].label}</Text>.
					</Text>
					{emptyEnvValue ? (
						<>
							<Text>Enter your {emptyEnvLabel}:</Text>
							<TextInput
								defaultValue={existingClientEnv[emptyEnvValue]}
								onSubmit={(value) => setEnv({ ...env, [emptyEnvValue]: value })}
							/>
						</>
					) : (
						<ConfigCreation
							selectedClient={selectedClient}
							execConfig={execConfig}
							env={env}
							mcpServerName={mcpServerName}
							packageName={packageName}
							serviceNameHumanReadable={serviceNameHumanReadable}
						/>
					)}
				</>
			)}
		</>
	);
}
