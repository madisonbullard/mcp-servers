import { Select } from "@inkjs/ui";
import { Text } from "ink";
import { useState } from "react";
import HandleConfigCreation, {
	type HandleConfigCreationProps,
} from "./handle-config-creation";

export function HandleCursorConfig({
	command,
	args,
	env,
	configFilePath,
	mcpServerName,
	clientName,
	packageName,
	serviceNameHumanReadable,
	createIfNotExists,
	supportsEnvObject,
	postscript,
}: HandleConfigCreationProps<string>) {
	const [isThisCorrectProjectDir, setIsThisCorrectProjectDir] = useState<
		"yes" | "no" | null
	>(null);

	if (!isThisCorrectProjectDir) {
		return (
			<>
				<Text>
					The Cursor MCP server config needs to be added to the root of the
					project directory in which you want to use the server. Is this the
					correct directory?{"\n"}
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
			configFilePath={configFilePath}
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
