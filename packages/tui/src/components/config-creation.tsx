import { Newline, Text } from "ink";
import { type Client, clientConfigs } from "../utils/client-configs";
import HandleConfigCreation, {
	type HandleConfigCreationProps,
} from "./handle-config-creation";
import { HandleLocalConfigCreation } from "./handle-local-config-creation";

export function ConfigCreation({
	selectedClient,
	execConfig,
	env,
	mcpServerName,
	packageName,
	serviceNameHumanReadable,
	currentStep,
	totalSteps,
}: {
	selectedClient: Client;
	execConfig: {
		command: string;
		args: string[];
	};
	env: Record<string, string> | undefined;
	mcpServerName: string;
	packageName: string;
	serviceNameHumanReadable: string;
	currentStep: number;
	totalSteps: number;
}) {
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

	return (
		<>
			<Text>Configuring {selectedClient}</Text>
			<Text>
				Step {currentStep} of {totalSteps}
			</Text>
			<Newline />
			{(() => {
				switch (selectedClient) {
					case "claude":
					case "windsurf":
						return <HandleConfigCreation {...configProps} />;
					case "cursor":
						return (
							<HandleLocalConfigCreation
								{...configProps}
								localConfigFilePath={
									clientConfigs[selectedClient].localConfigFilePath
								}
							/>
						);
					default:
						return null;
				}
			})()}
		</>
	);
}
