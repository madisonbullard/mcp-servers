import fs from "node:fs";
import path from "node:path";
import { Newline, Text } from "ink";
import { useEffect, useState } from "react";
import which from "which";
import { useWriteMcpConfig } from "../hooks/mcp-config";

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
	supportsEnvObject,
	postscript,
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
	supportsEnvObject: boolean;
	postscript: string | null;
}) {
	const { newConfig, existingConfig, error } = useWriteMcpConfig({
		env,
		command,
		args,
		configFilePath,
		mcpServerName,
		createIfNotExists,
		supportsEnvObject,
	});

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
							Existing {clientName} config not found. Creating the file at path{" "}
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
