import { Select } from "@inkjs/ui";

export type Client = "claude" | "cursor" | "windsurf";

const clientConfigs: Record<Client, { label: string; value: string }> = {
	claude: {
		label: "Claude Desktop",
		value: "claude",
	},
	cursor: {
		label: "Cursor",
		value: "cursor",
	},
	windsurf: {
		label: "Windsurf",
		value: "windsurf",
	},
};

export type Props = {
	onChange: (value: string) => void;
};

export default function SelectClient({ onChange }: Props) {
	return <Select options={Object.values(clientConfigs)} onChange={onChange} />;
}
