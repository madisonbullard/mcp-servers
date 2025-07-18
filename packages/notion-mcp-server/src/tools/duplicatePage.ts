import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints";
import { z } from "zod";
import { notionSdkClient } from "../notion/client";

const duplicatePageSchema = {
	sourcePageId: z.string().describe("The ID of the page to duplicate."),
	parentPageId: z
		.string()
		.describe(
			"The parent page ID or database ID where the duplicated page will be created.",
		),
	title: z.string().describe("The title for the duplicated page.").optional(),
};

export function duplicatePage(server: McpServer) {
	server.tool(
		"Duplicate-Page",
		"Duplicate an existing Notion page to a new location",
		duplicatePageSchema,
		async ({ sourcePageId, parentPageId, title }) => {
			// Retrieve the source page
			const sourcePage = await notionSdkClient.pages.retrieve({
				page_id: sourcePageId,
			});

			if (!("properties" in sourcePage)) {
				throw new Error("Source page not found or not accessible");
			}

			// Get the page content (blocks)
			const blocks = await notionSdkClient.blocks.children.list({
				block_id: sourcePageId,
			});

			// Determine if parent is a database or page
			let isDatabase = false;
			try {
				await notionSdkClient.databases.retrieve({ database_id: parentPageId });
				isDatabase = true;
			} catch {
				// If not a database, verify it's a valid page
				await notionSdkClient.pages.retrieve({ page_id: parentPageId });
			}

			// Prepare the title property
			const pageTitle = {
				type: "title",
				title: [
					{
						type: "text" as const,
						text: {
							content:
								title ||
								(sourcePage.properties.title &&
								"title" in sourcePage.properties.title
									? sourcePage.properties.title.title[0]?.plain_text ||
										"Untitled"
									: "Untitled"),
						},
					},
				],
			} satisfies CreatePageParameters["properties"]["title"];

			// Copy properties from source page, excluding system-generated ones
			const {
				created_by,
				created_time,
				last_edited_by,
				last_edited_time,
				...sourceProperties
			} = sourcePage.properties;

			// Set up properties based on whether parent is a database or page
			const pageProperties = isDatabase
				? { ...sourceProperties, title: pageTitle }
				: { title: pageTitle };

			// Create the new page
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
				// biome-ignore lint/suspicious/noExplicitAny: Icon types are complex unions
				icon: sourcePage.icon as any,
				// biome-ignore lint/suspicious/noExplicitAny: Cover types are complex unions
				cover: sourcePage.cover as any,
			});

			// Copy the content blocks if they exist
			if (blocks.results.length > 0) {
				await notionSdkClient.blocks.children.append({
					block_id: response.id,
					children: blocks.results.map((block) => {
						// Remove system properties from blocks
						const {
							id,
							created_by,
							created_time,
							last_edited_by,
							last_edited_time,
							...blockWithoutSystemProps
							// biome-ignore lint/suspicious/noExplicitAny: Block types are complex unions from Notion API
						} = block as any;
						return blockWithoutSystemProps;
					}),
				});
			}

			return {
				content: [
					{
						type: "text",
						text: `Page duplicated successfully with ID ${response.id}`,
					},
				],
			};
		},
	);
}
