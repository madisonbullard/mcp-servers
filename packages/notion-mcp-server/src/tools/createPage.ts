import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints";
import { z } from "zod";
import { notionSdkClient } from "../notion/client";
import { markdownToBlocks } from "../notion/markdownToBlocks";
import { NotionDatabasePropertySchema } from "../notion/zod/NotionDatabaseSchema.js";

const createPageSchema = {
	parentPageId: z
		.string()
		.describe(
			"The parent page ID or database ID where the new page is inserted.",
		),
	title: z.string().describe("The title of the page."),
	properties: z
		.record(z.string(), NotionDatabasePropertySchema)
		.describe(
			"The values of the page's properties. Each key should point to a single schema, not an array of schemas. If the parent is a database, then the schema must match the parent database's properties. If the parent is a page, then the only valid object key is title.",
		)
		.optional(),
	icon: z
		.object({
			type: z.literal("emoji"),
			emoji: z.string().describe("The emoji character."),
		})
		.describe(
			"The icon of the page, represented as an object with a type and emoji key, and the corresponding emoji character.",
		)
		.optional(),
	markdown: z.string().optional(),
};

export function createPage(server: McpServer) {
	server.tool(
		"Create-Page",
		"Create a new page in Notion",
		createPageSchema,
		async ({ parentPageId, title, properties, icon, markdown }) => {
			let isDatabase = false;
			try {
				await notionSdkClient.databases.retrieve({ database_id: parentPageId });
				isDatabase = true;
			} catch {
				// If not a database, verify it's a valid page
				await notionSdkClient.pages.retrieve({ page_id: parentPageId });
			}

			const pageTitle = {
				type: "title",
				title: [
					{
						type: "text" as const,
						text: { content: title },
					},
				],
			} satisfies CreatePageParameters["properties"]["title"];

			// Set up properties based on whether it's a database or page
			const pageProperties = isDatabase
				? { ...properties, title: pageTitle }
				: {
						title: pageTitle,
					};

			// Call the Notion API
			const response = await notionSdkClient.pages.create({
				parent: isDatabase
					? {
							type: "database_id",
							database_id: parentPageId,
						}
					: {
							type: "page_id",
							page_id: parentPageId,
						},
				properties: pageProperties,
				// biome-ignore lint/suspicious/noExplicitAny: only other option is to represent EmojiRequest in zod, which is a union of all emojis...
				icon: icon as any,
				children: markdown ? markdownToBlocks(markdown) : undefined,
			});

			return {
				content: [
					{
						type: "text",
						text: `${response.object} created with ID ${response.id}`,
					},
				],
			};
		},
	);
}
