export async function getTaskText(task: Task) {
	return `${task.complete ? "[X]" : "[ ]"} ${task.description}`;
}
