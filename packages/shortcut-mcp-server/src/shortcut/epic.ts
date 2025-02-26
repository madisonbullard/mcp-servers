import type {
	Epic,
	RequestParams,
	StorySlim,
} from "@madisonbullard/shortcut-api-client";
import { client } from "./client.js";

export function getEpicText(epic: Epic, stories: StorySlim[]) {
	return `Epic ${epic.id}
[Name] ${epic.name}
[Completed] ${epic.completed ? "Yes" : "No"}
[Archived] ${epic.archived ? "Yes" : "No"}

[Description] ${epic.description}

${stories.length ? `[Stories]` : ""}
${stories.map((story) => `[Story ${story.id} - ${story.completed ? "Completed" : "Incomplete"}] ${story.name}: ${story.description}`).join("\n")}`;
}

export async function getEpic(epicId: number, params?: RequestParams) {
	const res = await client.api.getEpic(epicId, params);
	return res;
}

export async function getEpicStories(
	epicId: number,
	query: { includes_description?: boolean } = { includes_description: true },
	params?: RequestParams,
) {
	const res = await client.api.listEpicStories(epicId, query, params);
	return res;
}
