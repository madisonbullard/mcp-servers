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

	const externalLinks = story.external_links.map(
		(link) => `<ExternalLink>${link}</ExternalLink>`,
	);

	// Indentation is important here sry it looks like ass
	return `<Story id={${story.id}}
  name="${story.name}"
  story_type="${story.story_type}"
  completed={${story.completed.toString()}}
  archived={${story.archived.toString()}}
  epic="${epic?.name || "None"}"
>
  <Description>
    ${story.description}
  </Description>
  <Tasks>
    ${tasks.join("\n    ")}
  </Tasks>
  <ExternalLinks>
    ${externalLinks.join("\n    ")}
  </ExternalLinks>
</Story>`;
}
