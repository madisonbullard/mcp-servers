import type {
	Epic,
	RequestParams,
	Story,
} from "@madisonbullard/shortcut-api-client";
import { client } from "./client.js";
import { getTaskText } from "./task.js";

export function getStoryText(story: Story, epic: Epic | undefined) {
	const tasks = story.tasks.map(getTaskText);

	return `Story ${story.id}
[Name] ${story.name}
[Type] ${story.story_type}
${epic ? `[Epic ID ${epic.id}] ${epic.name}` : ""}
[Completed] ${story.completed ? "Yes" : "No"}
[Archived] ${story.archived ? "Yes" : "No"}

[Description] ${story.description}

${tasks.length ? `[Tasks]` : ""}
${tasks.join("\n")}

${story.external_links.length ? `[External Links]` : ""}
${story.external_links.join("\n")}`;
}

export async function getStory(storyId: number, params?: RequestParams) {
	const res = await client.api.getStory(storyId, params);

	return res;
}
