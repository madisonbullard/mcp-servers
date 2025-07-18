import { MultiSelect } from "@inkjs/ui";
import { Box, Text } from "ink";
import type { Client } from "../utils/client-configs.js";
import { clientConfigs } from "../utils/client-configs.js";

export type Props = {
	onChange: (values: Client[]) => void;
};

export default function SelectClient({ onChange }: Props) {
	const handleSubmit = (items: string[]) => {
		const clientValues = items as Client[];
		onChange(clientValues);
	};

	return (
		<Box flexDirection="column">
			<Text>Select clients (use Space to select, Enter when done):</Text>
			<MultiSelect
				options={Object.values(clientConfigs)}
				onSubmit={handleSubmit}
			/>
		</Box>
	);
}
