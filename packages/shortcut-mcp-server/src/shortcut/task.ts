import type { Task } from "@shortcut-mcp-server/shortcut-api-client";

export async function getTaskText(task: Task) {
	return `${task.complete ? "[X]" : "[ ]"} ${task.description}`;
}
