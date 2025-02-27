import type {
	Epic,
	RequestParams,
	Story,
	TypedStoryLink,
} from "@madisonbullard/shortcut-api-client";
import { client } from "./client.js";
import { getTaskText } from "./task.js";

export function getStoryText(story: Story, epic: Epic | undefined) {
	const tasks = story.tasks.map(getTaskText);
	const storyLinks = story.story_links.map((link) =>
		getStoryLinkText(link, story.id),
	);

	const comments = story.comments
		.filter((c) => !c.deleted)
		.toSorted(
			(a, b) =>
				new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
		)
		.map((comment) => `${comment.text}`);

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
${storyLinks.join("\n")}

${story.comments.length ? `[Comments]` : ""}
${comments.join("\n")}`;
}

export async function getStory(storyId: number, params?: RequestParams) {
	const res = await client.api.getStory(storyId, params);

	return res;
}

function getStoryLinkText(link: TypedStoryLink, storyId: number) {
	const isSubject = link.subject_id === storyId;
	return `${
		isSubject ? "This story" : `Story ID ${storyId}`
	} ${link.verb} ${isSubject ? `story ID ${link.subject_id}` : "this story"}`;
}
