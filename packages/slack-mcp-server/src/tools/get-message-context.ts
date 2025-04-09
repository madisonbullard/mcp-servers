import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { ConversationsHistoryResponse } from "@slack/web-api";
import { z } from "zod";
import { client } from "../slack/client.js";

function getTimestampFromMessageId(messageId: string) {
	const timestampString = messageId.substring(1);
	const decimalPosition = timestampString.length - 6;
	return (
		timestampString.slice(0, decimalPosition) +
		"." +
		timestampString.slice(decimalPosition)
	);
}

const getMessageContextSchema = {
	link: z.string().describe("The URL of the Slack message to get context for"),
};

export function getMessageContext(server: McpServer) {
	server.tool(
		"Get-Message-Context",
		"Get the surrounding context of a Slack message. This tool will fetch the entire thread, if the message is part of a thread. Otherwise it will return the surrounding messages from the channel the message was posted in.",
		getMessageContextSchema,
		async ({ link }) => {
			const url = new URL(link);
			const params = url.searchParams;
			const urlParts = url.pathname.split("/");

			const channelId = params.get("cid") || urlParts[2];
			const messageId =
				params.get("thread_ts") || getTimestampFromMessageId(urlParts[3]);

			try {
				// First, get the message to check if it's part of a thread
				const messageResponse = await client.conversations.history({
					channel: channelId,
					latest: messageId,
					inclusive: true,
					limit: 1,
				});

				if (
					!messageResponse.messages ||
					messageResponse.messages.length === 0
				) {
					return {
						content: [
							{
								type: "text",
								text: `Message with ID ${messageId} not found in channel ${channelId}`,
							},
						],
					};
				}

				const message = messageResponse.messages[0];
				let threadMessages: ConversationsHistoryResponse["messages"] = [];

				// If the message has a thread_ts or is itself a thread parent (ts === thread_ts)
				if (message.thread_ts) {
					// Fetch the entire thread
					const threadResponse = await client.conversations.replies({
						channel: channelId,
						ts: message.thread_ts,
					});

					if (threadResponse.messages) {
						threadMessages = threadResponse.messages;
					}
				} else {
					// If not part of a thread, get surrounding messages
					const contextResponse = await client.conversations.history({
						channel: channelId,
						latest: message.ts,
						limit: 10, // Get some messages before
						inclusive: true,
					});

					if (contextResponse.messages) {
						threadMessages = contextResponse.messages;
					}

					// Also get some messages after
					const afterResponse = await client.conversations.history({
						channel: channelId,
						oldest: message.ts,
						limit: 10,
						inclusive: false,
					});

					if (afterResponse.messages) {
						// Add messages that came after, but avoid duplicates
						for (const afterMsg of afterResponse.messages) {
							if (!threadMessages.some((msg) => msg.ts === afterMsg.ts)) {
								threadMessages.push(afterMsg);
							}
						}
					}

					// Sort messages by timestamp
					threadMessages.sort(
						(a, b) =>
							Number.parseFloat(a.ts ?? "0") - Number.parseFloat(b.ts ?? "0"),
					);
				}

				// Format the messages for display
				const formattedMessages = threadMessages.map((msg) => {
					const isTargetMessage = msg.ts === messageId;
					const timestamp = msg.ts
						? new Date(Number.parseFloat(msg.ts) * 1000).toISOString()
						: "unknown time";
					const username = msg.user || "SYSTEM";
					const messageText = msg.text || "(no text)";
					return {
						type: "text" as const,
						text: `${isTargetMessage ? "→ " : ""}[${timestamp}] ${username}: ${messageText}${isTargetMessage ? " ←" : ""}`,
					};
				});

				return {
					content: [
						{
							type: "text",
							text: message.thread_ts
								? `Thread with ${threadMessages.length} messages:`
								: `Context with ${threadMessages.length} messages:`,
						},
						...formattedMessages,
					],
				};
			} catch (error: unknown) {
				console.error("Error fetching message context:", error);
				const errorMessage =
					error instanceof Error ? error.message : String(error);
				return {
					content: [
						{
							type: "text",
							text: `Error fetching message context: ${errorMessage}`,
						},
					],
				};
			}
		},
	);
}
