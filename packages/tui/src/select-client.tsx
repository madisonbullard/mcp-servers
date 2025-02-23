import { Select } from "@inkjs/ui";

export type Client = "claude" | "cursor" | "windsurf";

export type Props = {
	clients?: Client[];
	onChange: (value: string) => void;
};

export default function SelectClient({
	clients = ["claude", "cursor", "windsurf"],
	onChange,
}: Props) {
	const options = clients.map((client) => ({
		label: client,
		value: client,
	}));

	return <Select options={options} onChange={onChange} />;
}
