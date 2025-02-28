import type {
	EpicSlim,
	Objective,
	RequestParams,
} from "@madisonbullard/shortcut-api-client";
import { client } from "./client.js";

export function getObjectiveText(objective: Objective, epics: EpicSlim[]) {
	return `Objective ${objective.id}
[Name] ${objective.name}
[Completed] ${objective.completed ? "Yes" : "No"}
[Archived] ${objective.archived ? "Yes" : "No"}

[Description] ${objective.description}

${epics.length ? `[Epics]` : ""}
${epics.map((epic) => `[Epic ${epic.id} - ${epic.completed ? "Completed" : "Incomplete"}] ${epic.name}: ${epic.description}`).join("\n")}`;
}

export async function getObjective(
	objectiveId: number,
	params?: RequestParams,
) {
	const res = await client.api.getObjective(objectiveId, params);
	return res;
}

export async function getObjectiveEpics(
	objectiveId: number,
	params?: RequestParams,
) {
	const res = await client.api.listObjectiveEpics(objectiveId, params);
	return res;
}
