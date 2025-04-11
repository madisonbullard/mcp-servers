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
	const [selectedClients, setSelectedClients] = useState<Client[]>([]);
	const [currentClientIndex, setCurrentClientIndex] = useState<number>(0);
	const [completedClients, setCompletedClients] = useState<Client[]>([]);

	const currentClient =
		currentClientIndex !== null && currentClientIndex < selectedClients.length
			? selectedClients[currentClientIndex]
			: null;
	const existingClientEnv = currentClient
		? getClientConfig(currentClient, mcpServerName)?.env || {}
		: {};

	const emptyEnvValue = Object.entries(env || {}).find(
		([_, value]) => value === "",
	)?.[0];
	const emptyEnvLabel = execConfig.env?.find(
		(e) => e.value === emptyEnvValue,
	)?.label;

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
			{selectedClients.length === 0 ? (
				<>
					<Text>Which clients are you integrating with?</Text>
					<SelectClient
						onChange={(values) => {
							if (values.length > 0) {
								setSelectedClients(values);
								setCurrentClientIndex(0);
							}
						}}
					/>
				</>
			) : currentClient ? (
				<>
					<Text color="blue">
						Configuring <Text color="yellow">{packageName}</Text> for use with{" "}
						<Text color="yellow">{clientConfigs[currentClient].label}</Text>
						{selectedClients.length > 1 && (
							<Text>
								{" "}
								(Client {currentClientIndex + 1} of {selectedClients.length})
							</Text>
						)}
					</Text>
					{completedClients.length > 0 && (
						<>
							<Newline />
							<Text color="green">Completed clients:</Text>
							{completedClients.map((client) => (
								<Text key={client} color="green">
									✓ {client}
								</Text>
							))}
							<Newline />
						</>
					)}
					{emptyEnvValue ? (
						<>
							<Text>Enter your {emptyEnvLabel}:</Text>
							<TextInput
								defaultValue={existingClientEnv[emptyEnvValue]}
								onSubmit={(value) => setEnv({ ...env, [emptyEnvValue]: value })}
							/>
						</>
					) : (
						<>
							<ConfigCreation
								selectedClient={currentClient}
								execConfig={execConfig}
								env={env}
								mcpServerName={mcpServerName}
								packageName={packageName}
								serviceNameHumanReadable={serviceNameHumanReadable}
								currentStep={currentClientIndex + 1}
								totalSteps={selectedClients.length}
							/>
							{currentClientIndex < selectedClients.length - 1 && (
								<Box marginTop={1}>
									<Text>
										Press Enter to add another client:{" "}
										<Text color="yellow">
											{
												clientConfigs[selectedClients[currentClientIndex + 1]]
													.label
											}
										</Text>
									</Text>
									<TextInput
										defaultValue=""
										onSubmit={() => {
											setCompletedClients([...completedClients, currentClient]);
											if (currentClientIndex + 1 < selectedClients.length) {
												setCurrentClientIndex(currentClientIndex + 1);
											} else {
												// Set to a value outside the array bounds to indicate completion
												setCurrentClientIndex(selectedClients.length);
											}
											setEnv(initialEnv || {});
										}}
									/>
								</Box>
							)}
							{currentClientIndex === selectedClients.length - 1 && (
								<Box marginTop={1}>
									<Text color="green">
										All clients configured successfully!
									</Text>
								</Box>
							)}
						</>
					)}
				</>
			) : currentClientIndex >= selectedClients.length &&
				completedClients.length > 0 ? (
				<>
					<Text color="green">All clients configured successfully!</Text>
					<Newline />
					<Text color="green">Completed clients:</Text>
					{completedClients.map((client) => (
						<Text key={client} color="green">
							✓ {client}
						</Text>
					))}
				</>
			) : (
				<Text>Loading client configuration...</Text>
			)}
		</>
	);
}
