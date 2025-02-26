import type { Task } from "@madisonbullard/shortcut-api-client";

export async function getTaskText(task: Task) {
	return `${task.complete ? "[X]" : "[ ]"} ${task.description}`;
}
