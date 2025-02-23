import { useState } from "react";
import Claude from "./claude.js";
import SelectClient from "./select-client.js";
import type { Client, Props as SelectClientProps } from "./select-client.js";

type Props = {
	clients?: SelectClientProps["clients"];
};

export default function App({
	clients = ["claude", "cursor", "windsurf"],
}: Props) {
	const [selectedClient, setSelectedClient] = useState<Client | undefined>(
		undefined,
	);

	switch (selectedClient) {
		case "claude":
			return <Claude />;
		default:
			return (
				<SelectClient
					clients={clients}
					onChange={(value) => setSelectedClient(value as Client)}
				/>
			);
	}
}
