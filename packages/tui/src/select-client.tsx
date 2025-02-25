import { Select } from "@inkjs/ui";
import { clientConfigs } from "./client-configs";

export type Props = {
	onChange: (value: string) => void;
};

export default function SelectClient({ onChange }: Props) {
	return <Select options={Object.values(clientConfigs)} onChange={onChange} />;
}
