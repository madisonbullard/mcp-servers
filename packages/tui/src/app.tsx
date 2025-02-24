import { TextInput } from "@inkjs/ui";
import { Box, Newline, Text } from "ink";
import Link from "ink-link";
import { useState } from "react";
import Claude from "./claude.js";
import SelectClient from "./select-client.js";
import type { Client } from "./select-client.js";

type AppProps = {
	packageName: string;
	serviceNameHumanReadable: string;
	version: string;
	execConfig: {
		env?: { label: string; value: string }[];
		command: string;
		filePath: string;
		args: string[];
	};
	mcpServerName: string;
};

export default function App({
	packageName,
	serviceNameHumanReadable,
	version,
	execConfig,
	mcpServerName,
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
		switch (selectedClient) {
			case "claude":
				return (
					<Claude
						command={execConfig.command}
						args={execConfig.args}
						filePath={execConfig.filePath}
						env={env || {}}
						mcpServerName={mcpServerName}
					/>
				);
			default:
				return null;
		}
	}

	return (
		<>
			<Box
				padding={1}
				width="40"
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
					<Link
						fallback={false}
						url="https://github.com/madisonbullard/mcp-servers"
					>
						<Text color="blue" underline>
							https://github.com/madisonbullard/mcp-servers
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
				emptyEnvValue && (
					<>
						<Text>Enter your {emptyEnvLabel}:</Text>
						<TextInput
							onSubmit={(value) => setEnv({ ...env, [emptyEnvValue]: value })}
						/>
					</>
				)
			)}
		</>
	);
}
