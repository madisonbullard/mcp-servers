import type { RequestParams } from "@shortcut-mcp-server/shortcut-api-client";
import { client } from "./client";
import { getTask } from "./task";

export async function getStoryText(storyID: number, params?: RequestParams) {
	const res = await client.api.getStory(storyID, params);

	if (!res.ok || res.error) {
		return `Failed to retrieve Shortcut story with ID ${storyID}: ${res.status} error.`;
	}

	const story = res.data;

	const epicRes = story.epic_id
		? await client.api.getEpic(story.epic_id)
		: null;
	const epic = epicRes?.data;

	const tasks = await Promise.all(
		story.tasks.map((task) => getTask(story.id, task.id)),
	);

	return `Story ${story.id}
[Name] ${story.name}
[Type] ${story.story_type}
[Epic] ${epic?.name || "None"}
[Completed] ${story.completed ? "Yes" : "No"}
[Archived] ${story.archived ? "Yes" : "No"}

[Description] ${story.description}

[Tasks]
${tasks.join("\n")}

[External Links]
${story.external_links.join("\n")}`;
}
