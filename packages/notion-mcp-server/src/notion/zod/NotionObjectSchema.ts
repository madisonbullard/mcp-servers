import { z } from "zod";
import { NotionParentSchema } from "./NotionParentSchema.js";
import { NotionUserSchema } from "./NotionUserSchema.js";

export const NotionObjectSchema = z.object({
	id: z.string(),
	created_time: z.string(),
	last_edited_time: z.string(),
	created_by: NotionUserSchema,
	last_edited_by: NotionUserSchema,
	archived: z.boolean().optional(),
	url: z.string().url().nullable().optional(),
	public_url: z.string().url().nullable().optional(),
	parent: NotionParentSchema,
});
export type NotionObjectType = z.infer<typeof NotionObjectSchema>;
