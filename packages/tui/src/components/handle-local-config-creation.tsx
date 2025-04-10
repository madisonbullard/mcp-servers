import { Select } from "@inkjs/ui";
import { Text } from "ink";
import { useState } from "react";
import { clientConfigs } from "../utils/client-configs";
import HandleConfigCreation, {
	type HandleConfigCreationProps,
} from "./handle-config-creation";

export function HandleLocalConfigCreation<K extends string>({
	command,
	args,
	env,
	configFilePath,
	localConfigFilePath,
	mcpServerName,
	clientName,
	packageName,
	serviceNameHumanReadable,
	createIfNotExists,
	supportsEnvObject,
	postscript,
}: HandleConfigCreationProps<K> & { localConfigFilePath: string | null }) {
	const [installScope, setInstallScope] = useState<"global" | "local" | null>(
		null,
	);

	const [isThisCorrectProjectDir, setIsThisCorrectProjectDir] = useState<
		"yes" | "no" | null
	>(null);

	if (!installScope) {
		return (
			<>
				<Text>
					Would you like to install globally, for all{" "}
					{clientConfigs[clientName].label} projects? Or locally, for a specific
					project?
				</Text>
				<Select
					options={[
						{ label: "Global", value: "global" },
						{ label: "Local", value: "local" },
					]}
					onChange={(option) => setInstallScope(option as "global" | "local")}
				/>
			</>
		);
	}

	if (!isThisCorrectProjectDir && installScope === "local") {
		return (
			<>
				<Text>
					Is this the project directory in which you want to install the MCP
					server?{"\n"}
					<Text color="yellow">{process.cwd()}</Text>
				</Text>
				<Select
					options={[
						{ label: "Yes", value: "yes" },
						{ label: "No", value: "no" },
					]}
					onChange={(option) =>
						setIsThisCorrectProjectDir(option as "yes" | "no")
					}
				/>
			</>
		);
	}

	if (isThisCorrectProjectDir === "no") {
		return (
			<Text>
				Please navigate to the correct project directory and run the command
				again.
			</Text>
		);
	}

	return (
		<HandleConfigCreation
			command={command}
			args={args}
			env={env || {}}
			configFilePath={
				installScope === "local" && localConfigFilePath
					? localConfigFilePath
					: configFilePath
			}
			mcpServerName={mcpServerName}
			clientName={clientName}
			packageName={packageName}
			serviceNameHumanReadable={serviceNameHumanReadable}
			createIfNotExists={createIfNotExists}
			supportsEnvObject={supportsEnvObject}
			postscript={postscript}
		/>
	);
}
