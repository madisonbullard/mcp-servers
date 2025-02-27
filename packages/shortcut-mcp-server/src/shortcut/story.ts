import type {
	Epic,
	RequestParams,
	Story,
	StoryLink,
	TypedStoryLink,
} from "@madisonbullard/shortcut-api-client";
import { client } from "./client.js";
import { getTaskText } from "./task.js";

export function getStoryText(story: Story, epic: Epic | undefined) {
	const tasks = story.tasks.map(getTaskText);
	const storyLinks = story.story_links.map((link) =>
		getStoryLinkText(link, story.id),
	);

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
${story.external_links.join("\n")}

${storyLinks.length ? `[Story relationships]` : ""}
${storyLinks.join("\n")}`;
}

export async function getStory(storyId: number, params?: RequestParams) {
	const res = await client.api.getStory(storyId, params);

	return res;
}

function getStoryLinkText(link: TypedStoryLink, storyId: number) {
	const isSubject = link.subject_id === storyId;
	return `${
		isSubject
			? "This story"
			: `Story ID ${storyId} (${link.subject_workflow_state_id})`
	} ${link.verb} ${isSubject ? `story ID ${link.subject_id}` : "this story"}`;
}
