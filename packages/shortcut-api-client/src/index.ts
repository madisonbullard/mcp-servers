import { z } from "zod";

export type BaseTaskParams = z.infer<typeof BaseTaskParams>;
export const BaseTaskParams = z.object({
  description: z.string(),
  complete: z.union([z.boolean(), z.undefined()]).optional(),
  owner_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  external_id: z.union([z.string(), z.undefined()]).optional(),
});

export type BasicWorkspaceInfo = z.infer<typeof BasicWorkspaceInfo>;
export const BasicWorkspaceInfo = z.object({
  url_slug: z.string(),
  estimate_scale: z.array(z.number()),
});

export type PullRequestLabel = z.infer<typeof PullRequestLabel>;
export const PullRequestLabel = z.object({
  entity_type: z.string(),
  id: z.number(),
  color: z.string(),
  description: z.union([z.string(), z.null(), z.undefined()]).optional(),
  name: z.string(),
});

export type PullRequest = z.infer<typeof PullRequest>;
export const PullRequest = z.object({
  entity_type: z.string(),
  closed: z.boolean(),
  merged: z.boolean(),
  num_added: z.number(),
  branch_id: z.number(),
  overlapping_stories: z.union([z.array(z.number()), z.undefined()]).optional(),
  number: z.number(),
  branch_name: z.string(),
  target_branch_name: z.string(),
  num_commits: z.union([z.number(), z.null()]),
  title: z.string(),
  updated_at: z.string(),
  has_overlapping_stories: z.boolean(),
  draft: z.boolean(),
  id: z.number(),
  vcs_labels: z.union([z.array(PullRequestLabel), z.null(), z.undefined()]).optional(),
  url: z.string(),
  num_removed: z.number(),
  review_status: z.union([z.string(), z.undefined()]).optional(),
  num_modified: z.union([z.number(), z.null()]),
  build_status: z.union([z.string(), z.undefined()]).optional(),
  target_branch_id: z.number(),
  repository_id: z.number(),
  created_at: z.string(),
});

export type Branch = z.infer<typeof Branch>;
export const Branch = z.object({
  entity_type: z.string(),
  deleted: z.boolean(),
  name: z.string(),
  persistent: z.boolean(),
  updated_at: z.union([z.string(), z.null()]),
  pull_requests: z.array(PullRequest),
  merged_branch_ids: z.array(z.number()),
  id: z.union([z.number(), z.null()]),
  url: z.string(),
  repository_id: z.number(),
  created_at: z.union([z.string(), z.null()]),
});

export type Category = z.infer<typeof Category>;
export const Category = z.object({
  archived: z.boolean(),
  entity_type: z.string(),
  color: z.union([z.string(), z.null()]),
  name: z.string(),
  global_id: z.string(),
  type: z.string(),
  updated_at: z.string(),
  external_id: z.union([z.string(), z.null()]),
  id: z.number(),
  created_at: z.string(),
});

export type Identity = z.infer<typeof Identity>;
export const Identity = z.object({
  entity_type: z.string(),
  name: z.union([z.string(), z.null()]),
  type: z.union([z.literal("slack"), z.literal("github"), z.literal("gitlab"), z.literal("bitbucket"), z.null()]),
});

export type Commit = z.infer<typeof Commit>;
export const Commit = z.object({
  entity_type: z.string(),
  author_id: z.union([z.string(), z.null()]),
  hash: z.string(),
  updated_at: z.union([z.string(), z.null()]),
  id: z.union([z.number(), z.null()]),
  url: z.string(),
  author_email: z.string(),
  timestamp: z.string(),
  author_identity: Identity,
  repository_id: z.union([z.number(), z.null()]),
  created_at: z.string(),
  message: z.string(),
});

export type CreateCategory = z.infer<typeof CreateCategory>;
export const CreateCategory = z.object({
  name: z.string(),
  color: z.union([z.string(), z.undefined()]).optional(),
  external_id: z.union([z.string(), z.undefined()]).optional(),
  type: z.union([z.unknown(), z.undefined()]).optional(),
});

export type CreateCategoryParams = z.infer<typeof CreateCategoryParams>;
export const CreateCategoryParams = z.object({
  name: z.string(),
  color: z.union([z.string(), z.undefined()]).optional(),
  external_id: z.union([z.string(), z.undefined()]).optional(),
});

export type CreateCommentComment = z.infer<typeof CreateCommentComment>;
export const CreateCommentComment = z.object({
  text: z.string(),
  author_id: z.union([z.string(), z.undefined()]).optional(),
  created_at: z.union([z.string(), z.undefined()]).optional(),
  updated_at: z.union([z.string(), z.undefined()]).optional(),
  external_id: z.union([z.string(), z.undefined()]).optional(),
});

export type CreateLabelParams = z.infer<typeof CreateLabelParams>;
export const CreateLabelParams = z.object({
  name: z.string(),
  description: z.union([z.string(), z.undefined()]).optional(),
  color: z.union([z.string(), z.undefined()]).optional(),
  external_id: z.union([z.string(), z.undefined()]).optional(),
});

export type CustomFieldValueParams = z.infer<typeof CustomFieldValueParams>;
export const CustomFieldValueParams = z.object({
  field_id: z.string(),
  value_id: z.string(),
  value: z.union([z.string(), z.undefined()]).optional(),
});

export type CreateStoryContents = z.infer<typeof CreateStoryContents>;
export const CreateStoryContents = z.object({
  description: z.string().optional(),
  labels: z.array(CreateLabelParams).optional(),
  story_type: z.string().optional(),
  custom_fields: z.array(CustomFieldValueParams).optional(),
  file_ids: z.array(z.number()).optional(),
  name: z.string().optional(),
  epic_id: z.union([z.number(), z.null()]).optional(),
  external_links: z.array(z.string()).optional(),
  iteration_id: z.union([z.number(), z.null()]).optional(),
  tasks: z.array(BaseTaskParams).optional(),
  group_id: z.union([z.string(), z.null()]).optional(),
  workflow_state_id: z.union([z.number(), z.null()]).optional(),
  follower_ids: z.array(z.string()).optional(),
  owner_ids: z.array(z.string()).optional(),
  estimate: z.union([z.number(), z.null()]).optional(),
  project_id: z.number().optional(),
  linked_file_ids: z.array(z.number()).optional(),
  deadline: z.union([z.string(), z.null()]).optional(),
});

export type CreateEntityTemplate = z.infer<typeof CreateEntityTemplate>;
export const CreateEntityTemplate = z.object({
  name: z.string(),
  author_id: z.union([z.string(), z.undefined()]).optional(),
  story_contents: CreateStoryContents,
});

export type CreateEpic = z.infer<typeof CreateEpic>;
export const CreateEpic = z.object({
  description: z.union([z.string(), z.undefined()]).optional(),
  labels: z.union([z.array(CreateLabelParams), z.undefined()]).optional(),
  completed_at_override: z.union([z.string(), z.undefined()]).optional(),
  objective_ids: z.union([z.array(z.number()), z.undefined()]).optional(),
  name: z.string(),
  planned_start_date: z.union([z.string(), z.null(), z.undefined()]).optional(),
  state: z.union([z.literal("in progress"), z.literal("to do"), z.literal("done"), z.undefined()]).optional(),
  milestone_id: z.union([z.number(), z.null(), z.undefined()]).optional(),
  requested_by_id: z.union([z.string(), z.undefined()]).optional(),
  epic_state_id: z.union([z.number(), z.undefined()]).optional(),
  started_at_override: z.union([z.string(), z.undefined()]).optional(),
  group_id: z.union([z.string(), z.null(), z.undefined()]).optional(),
  updated_at: z.union([z.string(), z.undefined()]).optional(),
  follower_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  group_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  owner_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  external_id: z.union([z.string(), z.undefined()]).optional(),
  deadline: z.union([z.string(), z.null(), z.undefined()]).optional(),
  created_at: z.union([z.string(), z.undefined()]).optional(),
});

export type CreateEpicComment = z.infer<typeof CreateEpicComment>;
export const CreateEpicComment = z.object({
  text: z.string(),
  author_id: z.union([z.string(), z.undefined()]).optional(),
  created_at: z.union([z.string(), z.undefined()]).optional(),
  updated_at: z.union([z.string(), z.undefined()]).optional(),
  external_id: z.union([z.string(), z.undefined()]).optional(),
});

export type CreateGenericIntegration = z.infer<typeof CreateGenericIntegration>;
export const CreateGenericIntegration = z.object({
  webhook_url: z.string(),
  secret: z.union([z.string(), z.undefined()]).optional(),
});

export type CreateGroup = z.infer<typeof CreateGroup>;
export const CreateGroup = z.object({
  description: z.union([z.string(), z.undefined()]).optional(),
  member_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  workflow_ids: z.union([z.array(z.number()), z.undefined()]).optional(),
  name: z.string(),
  mention_name: z.string(),
  color: z.union([z.string(), z.undefined()]).optional(),
  color_key: z
    .union([
      z.literal("blue"),
      z.literal("purple"),
      z.literal("midnight-blue"),
      z.literal("orange"),
      z.literal("yellow-green"),
      z.literal("brass"),
      z.literal("gray"),
      z.literal("fuchsia"),
      z.literal("yellow"),
      z.literal("pink"),
      z.literal("sky-blue"),
      z.literal("green"),
      z.literal("red"),
      z.literal("black"),
      z.literal("slate"),
      z.literal("turquoise"),
      z.undefined(),
    ])
    .optional(),
  display_icon_id: z.union([z.string(), z.undefined()]).optional(),
});

export type CreateIteration = z.infer<typeof CreateIteration>;
export const CreateIteration = z.object({
  follower_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  group_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  labels: z.union([z.array(CreateLabelParams), z.undefined()]).optional(),
  description: z.union([z.string(), z.undefined()]).optional(),
  name: z.string(),
  start_date: z.string(),
  end_date: z.string(),
});

export type CreateLinkedFile = z.infer<typeof CreateLinkedFile>;
export const CreateLinkedFile = z.object({
  description: z.union([z.string(), z.undefined()]).optional(),
  story_id: z.union([z.number(), z.undefined()]).optional(),
  name: z.string(),
  thumbnail_url: z.union([z.string(), z.undefined()]).optional(),
  type: z.union([z.literal("google"), z.literal("url"), z.literal("dropbox"), z.literal("box"), z.literal("onedrive")]),
  size: z.union([z.number(), z.undefined()]).optional(),
  uploader_id: z.union([z.string(), z.undefined()]).optional(),
  content_type: z.union([z.string(), z.undefined()]).optional(),
  url: z.string(),
});

export type CreateMilestone = z.infer<typeof CreateMilestone>;
export const CreateMilestone = z.object({
  name: z.string(),
  description: z.union([z.string(), z.undefined()]).optional(),
  state: z.union([z.literal("in progress"), z.literal("to do"), z.literal("done"), z.undefined()]).optional(),
  started_at_override: z.union([z.string(), z.undefined()]).optional(),
  completed_at_override: z.union([z.string(), z.undefined()]).optional(),
  categories: z.union([z.array(CreateCategoryParams), z.undefined()]).optional(),
});

export type CreateObjective = z.infer<typeof CreateObjective>;
export const CreateObjective = z.object({
  name: z.string(),
  description: z.union([z.string(), z.undefined()]).optional(),
  state: z.union([z.literal("in progress"), z.literal("to do"), z.literal("done"), z.undefined()]).optional(),
  started_at_override: z.union([z.string(), z.undefined()]).optional(),
  completed_at_override: z.union([z.string(), z.undefined()]).optional(),
  categories: z.union([z.array(CreateCategoryParams), z.undefined()]).optional(),
});

export type CreateOrDeleteStoryReaction = z.infer<typeof CreateOrDeleteStoryReaction>;
export const CreateOrDeleteStoryReaction = z.object({
  emoji: z.string(),
});

export type CreateProject = z.infer<typeof CreateProject>;
export const CreateProject = z.object({
  description: z.union([z.string(), z.undefined()]).optional(),
  color: z.union([z.string(), z.undefined()]).optional(),
  name: z.string(),
  start_time: z.union([z.string(), z.undefined()]).optional(),
  updated_at: z.union([z.string(), z.undefined()]).optional(),
  follower_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  external_id: z.union([z.string(), z.undefined()]).optional(),
  team_id: z.number(),
  iteration_length: z.union([z.number(), z.undefined()]).optional(),
  abbreviation: z.union([z.string(), z.undefined()]).optional(),
  created_at: z.union([z.string(), z.undefined()]).optional(),
});

export type CreateStoryLinkParams = z.infer<typeof CreateStoryLinkParams>;
export const CreateStoryLinkParams = z.object({
  subject_id: z.union([z.number(), z.undefined()]).optional(),
  verb: z.union([z.literal("blocks"), z.literal("duplicates"), z.literal("relates to")]),
  object_id: z.union([z.number(), z.undefined()]).optional(),
});

export type CreateStoryCommentParams = z.infer<typeof CreateStoryCommentParams>;
export const CreateStoryCommentParams = z.object({
  text: z.string(),
  author_id: z.union([z.string(), z.undefined()]).optional(),
  created_at: z.union([z.string(), z.undefined()]).optional(),
  updated_at: z.union([z.string(), z.undefined()]).optional(),
  external_id: z.union([z.string(), z.undefined()]).optional(),
  parent_id: z.union([z.number(), z.null(), z.undefined()]).optional(),
});

export type CreateSubTaskParams = z.infer<typeof CreateSubTaskParams>;
export const CreateSubTaskParams = z.object({
  name: z.string(),
});

export type CreateTaskParams = z.infer<typeof CreateTaskParams>;
export const CreateTaskParams = z.object({
  description: z.string(),
  complete: z.union([z.boolean(), z.undefined()]).optional(),
  owner_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  external_id: z.union([z.string(), z.undefined()]).optional(),
  created_at: z.union([z.string(), z.undefined()]).optional(),
  updated_at: z.union([z.string(), z.undefined()]).optional(),
});

export type CreateStoryParams = z.infer<typeof CreateStoryParams>;
export const CreateStoryParams = z.object({
  description: z.union([z.string(), z.undefined()]).optional(),
  archived: z.union([z.boolean(), z.undefined()]).optional(),
  story_links: z.union([z.array(CreateStoryLinkParams), z.undefined()]).optional(),
  labels: z.union([z.array(CreateLabelParams), z.undefined()]).optional(),
  story_type: z.union([z.literal("feature"), z.literal("chore"), z.literal("bug"), z.undefined()]).optional(),
  custom_fields: z.union([z.array(CustomFieldValueParams), z.undefined()]).optional(),
  move_to: z.union([z.literal("last"), z.literal("first"), z.undefined()]).optional(),
  file_ids: z.union([z.array(z.number()), z.undefined()]).optional(),
  source_task_id: z.union([z.number(), z.null(), z.undefined()]).optional(),
  completed_at_override: z.union([z.string(), z.undefined()]).optional(),
  name: z.string(),
  comments: z.union([z.array(CreateStoryCommentParams), z.undefined()]).optional(),
  epic_id: z.union([z.number(), z.null(), z.undefined()]).optional(),
  story_template_id: z.union([z.string(), z.null(), z.undefined()]).optional(),
  external_links: z.union([z.array(z.string()), z.undefined()]).optional(),
  sub_tasks: z.union([z.array(CreateSubTaskParams), z.undefined()]).optional(),
  requested_by_id: z.union([z.string(), z.undefined()]).optional(),
  iteration_id: z.union([z.number(), z.null(), z.undefined()]).optional(),
  tasks: z.union([z.array(CreateTaskParams), z.undefined()]).optional(),
  started_at_override: z.union([z.string(), z.undefined()]).optional(),
  group_id: z.union([z.string(), z.null(), z.undefined()]).optional(),
  workflow_state_id: z.union([z.number(), z.undefined()]).optional(),
  updated_at: z.union([z.string(), z.undefined()]).optional(),
  follower_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  owner_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  external_id: z.union([z.string(), z.undefined()]).optional(),
  estimate: z.union([z.number(), z.null(), z.undefined()]).optional(),
  project_id: z.union([z.number(), z.null(), z.undefined()]).optional(),
  linked_file_ids: z.union([z.array(z.number()), z.undefined()]).optional(),
  deadline: z.union([z.string(), z.null(), z.undefined()]).optional(),
  created_at: z.union([z.string(), z.undefined()]).optional(),
});

export type CreateStories = z.infer<typeof CreateStories>;
export const CreateStories = z.object({
  stories: z.array(CreateStoryParams),
});

export type CreateStoryComment = z.infer<typeof CreateStoryComment>;
export const CreateStoryComment = z.object({
  text: z.string(),
  author_id: z.union([z.string(), z.undefined()]).optional(),
  created_at: z.union([z.string(), z.undefined()]).optional(),
  updated_at: z.union([z.string(), z.undefined()]).optional(),
  external_id: z.union([z.string(), z.undefined()]).optional(),
  parent_id: z.union([z.number(), z.null(), z.undefined()]).optional(),
});

export type RemoveCustomFieldParams = z.infer<typeof RemoveCustomFieldParams>;
export const RemoveCustomFieldParams = z.object({
  field_id: z.string(),
});

export type RemoveLabelParams = z.infer<typeof RemoveLabelParams>;
export const RemoveLabelParams = z.object({
  name: z.string(),
});

export type CreateStoryFromTemplateParams = z.infer<typeof CreateStoryFromTemplateParams>;
export const CreateStoryFromTemplateParams = z.object({
  description: z.union([z.string(), z.undefined()]).optional(),
  archived: z.union([z.boolean(), z.undefined()]).optional(),
  story_links: z.union([z.array(CreateStoryLinkParams), z.undefined()]).optional(),
  labels: z.union([z.array(CreateLabelParams), z.undefined()]).optional(),
  external_links_add: z.union([z.array(z.string()), z.undefined()]).optional(),
  story_type: z.union([z.literal("feature"), z.literal("chore"), z.literal("bug"), z.undefined()]).optional(),
  custom_fields: z.union([z.array(CustomFieldValueParams), z.undefined()]).optional(),
  move_to: z.union([z.literal("last"), z.literal("first"), z.undefined()]).optional(),
  file_ids: z.union([z.array(z.number()), z.undefined()]).optional(),
  source_task_id: z.union([z.number(), z.null(), z.undefined()]).optional(),
  completed_at_override: z.union([z.string(), z.undefined()]).optional(),
  name: z.union([z.string(), z.undefined()]).optional(),
  file_ids_add: z.union([z.array(z.number()), z.undefined()]).optional(),
  file_ids_remove: z.union([z.array(z.number()), z.undefined()]).optional(),
  comments: z.union([z.array(CreateStoryCommentParams), z.undefined()]).optional(),
  follower_ids_add: z.union([z.array(z.string()), z.undefined()]).optional(),
  epic_id: z.union([z.number(), z.null(), z.undefined()]).optional(),
  story_template_id: z.string(),
  external_links: z.union([z.array(z.string()), z.undefined()]).optional(),
  follower_ids_remove: z.union([z.array(z.string()), z.undefined()]).optional(),
  sub_tasks: z.union([z.array(CreateSubTaskParams), z.undefined()]).optional(),
  linked_file_ids_remove: z.union([z.array(z.number()), z.undefined()]).optional(),
  requested_by_id: z.union([z.string(), z.undefined()]).optional(),
  iteration_id: z.union([z.number(), z.null(), z.undefined()]).optional(),
  custom_fields_remove: z.union([z.array(RemoveCustomFieldParams), z.undefined()]).optional(),
  tasks: z.union([z.array(CreateTaskParams), z.undefined()]).optional(),
  started_at_override: z.union([z.string(), z.undefined()]).optional(),
  labels_add: z.union([z.array(CreateLabelParams), z.undefined()]).optional(),
  group_id: z.union([z.string(), z.null(), z.undefined()]).optional(),
  workflow_state_id: z.union([z.number(), z.undefined()]).optional(),
  updated_at: z.union([z.string(), z.undefined()]).optional(),
  follower_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  owner_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  external_id: z.union([z.string(), z.undefined()]).optional(),
  estimate: z.union([z.number(), z.null(), z.undefined()]).optional(),
  owner_ids_remove: z.union([z.array(z.string()), z.undefined()]).optional(),
  custom_fields_add: z.union([z.array(CustomFieldValueParams), z.undefined()]).optional(),
  project_id: z.union([z.number(), z.null(), z.undefined()]).optional(),
  linked_file_ids_add: z.union([z.array(z.number()), z.undefined()]).optional(),
  linked_file_ids: z.union([z.array(z.number()), z.undefined()]).optional(),
  labels_remove: z.union([z.array(RemoveLabelParams), z.undefined()]).optional(),
  deadline: z.union([z.string(), z.null(), z.undefined()]).optional(),
  owner_ids_add: z.union([z.array(z.string()), z.undefined()]).optional(),
  created_at: z.union([z.string(), z.undefined()]).optional(),
  external_links_remove: z.union([z.array(z.string()), z.undefined()]).optional(),
});

export type CreateStoryLink = z.infer<typeof CreateStoryLink>;
export const CreateStoryLink = z.object({
  verb: z.union([z.literal("blocks"), z.literal("duplicates"), z.literal("relates to")]),
  subject_id: z.number(),
  object_id: z.number(),
});

export type CreateTask = z.infer<typeof CreateTask>;
export const CreateTask = z.object({
  description: z.string(),
  complete: z.union([z.boolean(), z.undefined()]).optional(),
  owner_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  external_id: z.union([z.string(), z.undefined()]).optional(),
  created_at: z.union([z.string(), z.undefined()]).optional(),
  updated_at: z.union([z.string(), z.undefined()]).optional(),
});

export type CustomFieldEnumValue = z.infer<typeof CustomFieldEnumValue>;
export const CustomFieldEnumValue = z.object({
  id: z.string(),
  value: z.string(),
  position: z.number(),
  color_key: z.union([z.string(), z.null()]),
  entity_type: z.literal("custom-field-enum-value"),
  enabled: z.boolean(),
});

export type CustomField = z.infer<typeof CustomField>;
export const CustomField = z.object({
  description: z.union([z.string(), z.undefined()]).optional(),
  icon_set_identifier: z.union([z.string(), z.undefined()]).optional(),
  entity_type: z.literal("custom-field"),
  story_types: z.union([z.array(z.string()), z.undefined()]).optional(),
  name: z.string(),
  fixed_position: z.union([z.boolean(), z.undefined()]).optional(),
  updated_at: z.string(),
  id: z.string(),
  values: z.union([z.array(CustomFieldEnumValue), z.undefined()]).optional(),
  field_type: z.literal("enum"),
  position: z.number(),
  canonical_name: z.union([z.string(), z.undefined()]).optional(),
  enabled: z.boolean(),
  created_at: z.string(),
});

export type DataConflictError = z.infer<typeof DataConflictError>;
export const DataConflictError = z.object({
  error: z.literal("data-conflict-error"),
  message: z.string(),
});

export type DeleteStories = z.infer<typeof DeleteStories>;
export const DeleteStories = z.object({
  story_ids: z.array(z.number()),
});

export type LabelSlim = z.infer<typeof LabelSlim>;
export const LabelSlim = z.object({
  app_url: z.string(),
  description: z.union([z.string(), z.null()]),
  archived: z.boolean(),
  entity_type: z.string(),
  color: z.union([z.string(), z.null()]),
  name: z.string(),
  global_id: z.string(),
  updated_at: z.union([z.string(), z.null()]),
  external_id: z.union([z.string(), z.null()]),
  id: z.number(),
  created_at: z.union([z.string(), z.null()]),
});

export type LinkedFile = z.infer<typeof LinkedFile>;
export const LinkedFile = z.object({
  description: z.union([z.string(), z.null()]),
  entity_type: z.string(),
  story_ids: z.array(z.number()),
  mention_ids: z.array(z.string()),
  member_mention_ids: z.array(z.string()),
  name: z.string(),
  thumbnail_url: z.union([z.string(), z.null()]),
  type: z.string(),
  size: z.union([z.number(), z.null()]),
  uploader_id: z.string(),
  content_type: z.union([z.string(), z.null()]),
  updated_at: z.string(),
  group_mention_ids: z.array(z.string()),
  id: z.number(),
  url: z.string(),
  created_at: z.string(),
});

export type StoryContentsTask = z.infer<typeof StoryContentsTask>;
export const StoryContentsTask = z.object({
  description: z.string(),
  position: z.union([z.number(), z.undefined()]).optional(),
  complete: z.union([z.boolean(), z.undefined()]).optional(),
  owner_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  external_id: z.union([z.string(), z.null(), z.undefined()]).optional(),
});

export type UploadedFile = z.infer<typeof UploadedFile>;
export const UploadedFile = z.object({
  description: z.union([z.string(), z.null()]),
  entity_type: z.string(),
  story_ids: z.array(z.number()),
  mention_ids: z.array(z.string()),
  member_mention_ids: z.array(z.string()),
  name: z.string(),
  thumbnail_url: z.union([z.string(), z.null()]),
  size: z.number(),
  uploader_id: z.string(),
  content_type: z.string(),
  updated_at: z.union([z.string(), z.null()]),
  filename: z.string(),
  group_mention_ids: z.array(z.string()),
  external_id: z.union([z.string(), z.null()]),
  id: z.number(),
  url: z.union([z.string(), z.null()]),
  created_at: z.string(),
});

export type StoryContents = z.infer<typeof StoryContents>;
export const StoryContents = z.object({
  description: z.string().optional(),
  entity_type: z.string().optional(),
  labels: z.array(LabelSlim).optional(),
  story_type: z.string().optional(),
  custom_fields: z.array(CustomFieldValueParams).optional(),
  linked_files: z.array(LinkedFile).optional(),
  name: z.string().optional(),
  epic_id: z.number().optional(),
  external_links: z.array(z.string()).optional(),
  iteration_id: z.number().optional(),
  tasks: z.array(StoryContentsTask).optional(),
  label_ids: z.array(z.number()).optional(),
  group_id: z.string().optional(),
  workflow_state_id: z.number().optional(),
  follower_ids: z.array(z.string()).optional(),
  owner_ids: z.array(z.string()).optional(),
  estimate: z.number().optional(),
  files: z.array(UploadedFile).optional(),
  project_id: z.number().optional(),
  deadline: z.string().optional(),
});

export type EntityTemplate = z.infer<typeof EntityTemplate>;
export const EntityTemplate = z.object({
  entity_type: z.string(),
  id: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  name: z.string(),
  author_id: z.string(),
  last_used_at: z.string(),
  story_contents: StoryContents,
});

export type EpicAssociatedGroup = z.infer<typeof EpicAssociatedGroup>;
export const EpicAssociatedGroup = z.object({
  group_id: z.string(),
  associated_stories_count: z.union([z.number(), z.undefined()]).optional(),
});

export type ThreadedComment = {
  app_url: string;
  entity_type: string;
  deleted: boolean;
  mention_ids: Array<string>;
  author_id: string;
  member_mention_ids: Array<string>;
  comments: Array<ThreadedComment>;
  updated_at: string;
  group_mention_ids: Array<string>;
  external_id: string | null;
  id: number;
  created_at: string;
  text: string;
};
export const ThreadedComment: z.ZodType<ThreadedComment> = z.lazy(() =>
  z.object({
    app_url: z.string(),
    entity_type: z.string(),
    deleted: z.boolean(),
    mention_ids: z.array(z.string()),
    author_id: z.string(),
    member_mention_ids: z.array(z.string()),
    comments: z.array(ThreadedComment),
    updated_at: z.string(),
    group_mention_ids: z.array(z.string()),
    external_id: z.union([z.string(), z.null()]),
    id: z.number(),
    created_at: z.string(),
    text: z.string(),
  }),
);
export type EpicStats = z.infer<typeof EpicStats>;
export const EpicStats = z.object({
  num_points_done: z.number(),
  num_related_documents: z.number(),
  average_cycle_time: z.union([z.number(), z.undefined()]).optional(),
  num_stories_unstarted: z.number(),
  num_stories_total: z.number(),
  last_story_update: z.union([z.string(), z.null()]),
  num_points_started: z.number(),
  num_points_unstarted: z.number(),
  num_stories_started: z.number(),
  num_stories_unestimated: z.number(),
  num_stories_backlog: z.number(),
  average_lead_time: z.union([z.number(), z.undefined()]).optional(),
  num_points_backlog: z.number(),
  num_points: z.number(),
  num_stories_done: z.number(),
});

export type Epic = z.infer<typeof Epic>;
export const Epic = z.object({
  app_url: z.string(),
  description: z.string(),
  archived: z.boolean(),
  started: z.boolean(),
  entity_type: z.string(),
  labels: z.array(LabelSlim),
  mention_ids: z.array(z.string()),
  member_mention_ids: z.array(z.string()),
  associated_groups: z.array(EpicAssociatedGroup),
  project_ids: z.array(z.number()),
  stories_without_projects: z.number(),
  completed_at_override: z.union([z.string(), z.null()]),
  productboard_plugin_id: z.union([z.string(), z.null()]),
  started_at: z.union([z.string(), z.null()]),
  completed_at: z.union([z.string(), z.null()]),
  objective_ids: z.array(z.number()),
  name: z.string(),
  global_id: z.string(),
  completed: z.boolean(),
  comments: z.array(ThreadedComment),
  productboard_url: z.union([z.string(), z.null()]),
  planned_start_date: z.union([z.string(), z.null()]),
  state: z.string(),
  milestone_id: z.union([z.number(), z.null()]),
  requested_by_id: z.string(),
  epic_state_id: z.number(),
  label_ids: z.array(z.number()),
  started_at_override: z.union([z.string(), z.null()]),
  group_id: z.union([z.string(), z.null()]),
  updated_at: z.union([z.string(), z.null()]),
  group_mention_ids: z.array(z.string()),
  productboard_id: z.union([z.string(), z.null()]),
  follower_ids: z.array(z.string()),
  group_ids: z.array(z.string()),
  owner_ids: z.array(z.string()),
  external_id: z.union([z.string(), z.null()]),
  id: z.number(),
  position: z.number(),
  productboard_name: z.union([z.string(), z.null()]),
  deadline: z.union([z.string(), z.null()]),
  stats: EpicStats,
  created_at: z.union([z.string(), z.null()]),
});

export type EpicSearchResult = z.infer<typeof EpicSearchResult>;
export const EpicSearchResult = z.object({
  app_url: z.string(),
  description: z.union([z.string(), z.undefined()]).optional(),
  archived: z.boolean(),
  started: z.boolean(),
  entity_type: z.string(),
  labels: z.array(LabelSlim),
  mention_ids: z.array(z.string()),
  member_mention_ids: z.array(z.string()),
  associated_groups: z.array(EpicAssociatedGroup),
  project_ids: z.array(z.number()),
  stories_without_projects: z.number(),
  completed_at_override: z.union([z.string(), z.null()]),
  productboard_plugin_id: z.union([z.string(), z.null()]),
  started_at: z.union([z.string(), z.null()]),
  completed_at: z.union([z.string(), z.null()]),
  objective_ids: z.array(z.number()),
  name: z.string(),
  global_id: z.string(),
  completed: z.boolean(),
  comments: z.union([z.array(ThreadedComment), z.undefined()]).optional(),
  productboard_url: z.union([z.string(), z.null()]),
  planned_start_date: z.union([z.string(), z.null()]),
  state: z.string(),
  milestone_id: z.union([z.number(), z.null()]),
  requested_by_id: z.string(),
  epic_state_id: z.number(),
  label_ids: z.array(z.number()),
  started_at_override: z.union([z.string(), z.null()]),
  group_id: z.union([z.string(), z.null()]),
  updated_at: z.union([z.string(), z.null()]),
  group_mention_ids: z.array(z.string()),
  productboard_id: z.union([z.string(), z.null()]),
  follower_ids: z.array(z.string()),
  group_ids: z.array(z.string()),
  owner_ids: z.array(z.string()),
  external_id: z.union([z.string(), z.null()]),
  id: z.number(),
  position: z.number(),
  productboard_name: z.union([z.string(), z.null()]),
  deadline: z.union([z.string(), z.null()]),
  stats: EpicStats,
  created_at: z.union([z.string(), z.null()]),
});

export type EpicSearchResults = z.infer<typeof EpicSearchResults>;
export const EpicSearchResults = z.object({
  total: z.number(),
  data: z.array(EpicSearchResult),
  next: z.union([z.string(), z.null()]),
});

export type EpicSlim = z.infer<typeof EpicSlim>;
export const EpicSlim = z.object({
  app_url: z.string(),
  description: z.union([z.string(), z.undefined()]).optional(),
  archived: z.boolean(),
  started: z.boolean(),
  entity_type: z.string(),
  labels: z.array(LabelSlim),
  mention_ids: z.array(z.string()),
  member_mention_ids: z.array(z.string()),
  associated_groups: z.array(EpicAssociatedGroup),
  project_ids: z.array(z.number()),
  stories_without_projects: z.number(),
  completed_at_override: z.union([z.string(), z.null()]),
  productboard_plugin_id: z.union([z.string(), z.null()]),
  started_at: z.union([z.string(), z.null()]),
  completed_at: z.union([z.string(), z.null()]),
  objective_ids: z.array(z.number()),
  name: z.string(),
  global_id: z.string(),
  completed: z.boolean(),
  productboard_url: z.union([z.string(), z.null()]),
  planned_start_date: z.union([z.string(), z.null()]),
  state: z.string(),
  milestone_id: z.union([z.number(), z.null()]),
  requested_by_id: z.string(),
  epic_state_id: z.number(),
  label_ids: z.array(z.number()),
  started_at_override: z.union([z.string(), z.null()]),
  group_id: z.union([z.string(), z.null()]),
  updated_at: z.union([z.string(), z.null()]),
  group_mention_ids: z.array(z.string()),
  productboard_id: z.union([z.string(), z.null()]),
  follower_ids: z.array(z.string()),
  group_ids: z.array(z.string()),
  owner_ids: z.array(z.string()),
  external_id: z.union([z.string(), z.null()]),
  id: z.number(),
  position: z.number(),
  productboard_name: z.union([z.string(), z.null()]),
  deadline: z.union([z.string(), z.null()]),
  stats: EpicStats,
  created_at: z.union([z.string(), z.null()]),
});

export type EpicState = z.infer<typeof EpicState>;
export const EpicState = z.object({
  description: z.string(),
  entity_type: z.string(),
  color: z.union([z.string(), z.undefined()]).optional(),
  name: z.string(),
  global_id: z.string(),
  type: z.string(),
  updated_at: z.string(),
  id: z.number(),
  position: z.number(),
  created_at: z.string(),
});

export type EpicWorkflow = z.infer<typeof EpicWorkflow>;
export const EpicWorkflow = z.object({
  entity_type: z.string(),
  id: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  default_epic_state_id: z.number(),
  epic_states: z.array(EpicState),
});

export type Icon = z.infer<typeof Icon>;
export const Icon = z.object({
  entity_type: z.string(),
  id: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  url: z.string(),
});

export type Group = z.infer<typeof Group>;
export const Group = z.object({
  app_url: z.string(),
  description: z.string(),
  archived: z.boolean(),
  entity_type: z.string(),
  color: z.union([z.string(), z.null()]),
  num_stories_started: z.number(),
  mention_name: z.string(),
  name: z.string(),
  global_id: z.string(),
  color_key: z.union([
    z.literal("blue"),
    z.literal("purple"),
    z.literal("midnight-blue"),
    z.literal("orange"),
    z.literal("yellow-green"),
    z.literal("brass"),
    z.literal("gray"),
    z.literal("fuchsia"),
    z.literal("yellow"),
    z.literal("pink"),
    z.literal("sky-blue"),
    z.literal("green"),
    z.literal("red"),
    z.literal("black"),
    z.literal("slate"),
    z.literal("turquoise"),
    z.null(),
  ]),
  num_stories: z.number(),
  num_epics_started: z.number(),
  num_stories_backlog: z.number(),
  id: z.string(),
  display_icon: Icon,
  member_ids: z.array(z.string()),
  workflow_ids: z.array(z.number()),
});

export type HistoryReferenceBranch = z.infer<typeof HistoryReferenceBranch>;
export const HistoryReferenceBranch = z.object({
  id: z.union([z.number(), z.string()]),
  entity_type: z.string(),
  name: z.string(),
  url: z.string(),
});

export type HistoryReferenceCommit = z.infer<typeof HistoryReferenceCommit>;
export const HistoryReferenceCommit = z.object({
  id: z.union([z.number(), z.string()]),
  entity_type: z.string(),
  message: z.string(),
  url: z.string(),
});

export type HistoryReferenceEpic = z.infer<typeof HistoryReferenceEpic>;
export const HistoryReferenceEpic = z.object({
  id: z.union([z.number(), z.string()]),
  entity_type: z.string(),
  app_url: z.string(),
  name: z.string(),
});

export type HistoryReferenceGroup = z.infer<typeof HistoryReferenceGroup>;
export const HistoryReferenceGroup = z.object({
  id: z.string(),
  entity_type: z.string(),
  name: z.string(),
});

export type HistoryReferenceIteration = z.infer<typeof HistoryReferenceIteration>;
export const HistoryReferenceIteration = z.object({
  id: z.union([z.number(), z.string()]),
  entity_type: z.string(),
  app_url: z.string(),
  name: z.string(),
});

export type HistoryReferenceLabel = z.infer<typeof HistoryReferenceLabel>;
export const HistoryReferenceLabel = z.object({
  id: z.union([z.number(), z.string()]),
  entity_type: z.string(),
  app_url: z.string(),
  name: z.string(),
});

export type HistoryReferenceProject = z.infer<typeof HistoryReferenceProject>;
export const HistoryReferenceProject = z.object({
  id: z.union([z.number(), z.string()]),
  entity_type: z.string(),
  app_url: z.string(),
  name: z.string(),
});

export type HistoryReferenceStory = z.infer<typeof HistoryReferenceStory>;
export const HistoryReferenceStory = z.object({
  id: z.union([z.number(), z.string()]),
  entity_type: z.string(),
  app_url: z.string(),
  name: z.string(),
  story_type: z.union([z.literal("feature"), z.literal("chore"), z.literal("bug")]),
});

export type HistoryReferenceStoryTask = z.infer<typeof HistoryReferenceStoryTask>;
export const HistoryReferenceStoryTask = z.object({
  id: z.union([z.number(), z.string()]),
  entity_type: z.string(),
  description: z.string(),
});

export type HistoryReferenceCustomFieldEnumValue = z.infer<typeof HistoryReferenceCustomFieldEnumValue>;
export const HistoryReferenceCustomFieldEnumValue = z.object({
  id: z.union([z.number(), z.string()]),
  entity_type: z.string(),
  string_value: z.union([z.string(), z.null()]),
  enum_value_enabled: z.union([z.boolean(), z.null()]),
  field_id: z.string(),
  field_type: z.string(),
  field_name: z.string(),
  field_enabled: z.boolean(),
});

export type HistoryReferenceWorkflowState = z.infer<typeof HistoryReferenceWorkflowState>;
export const HistoryReferenceWorkflowState = z.object({
  id: z.union([z.number(), z.string()]),
  entity_type: z.string(),
  type: z.union([z.literal("started"), z.literal("backlog"), z.literal("unstarted"), z.literal("done")]),
  name: z.string(),
});

export type HistoryReferenceGeneral = z.infer<typeof HistoryReferenceGeneral>;
export const HistoryReferenceGeneral = z.object({
  id: z.union([z.number(), z.string()]),
  entity_type: z.string(),
  name: z.string(),
});

export type HistoryActionBranchCreate = z.infer<typeof HistoryActionBranchCreate>;
export const HistoryActionBranchCreate = z.object({
  id: z.number(),
  entity_type: z.string(),
  name: z.string(),
  url: z.string(),
  action: z.literal("create"),
});

export type HistoryActionBranchMerge = z.infer<typeof HistoryActionBranchMerge>;
export const HistoryActionBranchMerge = z.object({
  id: z.number(),
  entity_type: z.string(),
  name: z.string(),
  url: z.string(),
  action: z.literal("merge"),
});

export type HistoryActionBranchPush = z.infer<typeof HistoryActionBranchPush>;
export const HistoryActionBranchPush = z.object({
  id: z.number(),
  entity_type: z.string(),
  name: z.string(),
  url: z.string(),
  action: z.literal("push"),
});

export type HistoryActionLabelCreate = z.infer<typeof HistoryActionLabelCreate>;
export const HistoryActionLabelCreate = z.object({
  id: z.number(),
  entity_type: z.string(),
  action: z.literal("create"),
  app_url: z.string(),
  name: z.string(),
});

export type HistoryActionLabelUpdate = z.infer<typeof HistoryActionLabelUpdate>;
export const HistoryActionLabelUpdate = z.object({
  id: z.number(),
  entity_type: z.string(),
  action: z.literal("update"),
});

export type HistoryActionLabelDelete = z.infer<typeof HistoryActionLabelDelete>;
export const HistoryActionLabelDelete = z.object({
  id: z.number(),
  entity_type: z.string(),
  action: z.literal("delete"),
  name: z.string(),
});

export type HistoryActionProjectUpdate = z.infer<typeof HistoryActionProjectUpdate>;
export const HistoryActionProjectUpdate = z.object({
  id: z.number(),
  entity_type: z.string(),
  action: z.literal("update"),
  app_url: z.string(),
  name: z.string(),
});

export type HistoryActionPullRequest = z.infer<typeof HistoryActionPullRequest>;
export const HistoryActionPullRequest = z.object({
  id: z.number(),
  entity_type: z.string(),
  action: z.union([
    z.literal("open"),
    z.literal("update"),
    z.literal("reopen"),
    z.literal("close"),
    z.literal("sync"),
    z.literal("comment"),
  ]),
  number: z.number(),
  title: z.string(),
  url: z.string(),
});

export type HistoryActionStoryCreate = z.infer<typeof HistoryActionStoryCreate>;
export const HistoryActionStoryCreate = z.object({
  app_url: z.string(),
  description: z.union([z.string(), z.undefined()]).optional(),
  started: z.union([z.boolean(), z.undefined()]).optional(),
  entity_type: z.string(),
  task_ids: z.union([z.array(z.number()), z.undefined()]).optional(),
  story_type: z.union([z.literal("feature"), z.literal("chore"), z.literal("bug")]),
  name: z.string(),
  completed: z.union([z.boolean(), z.undefined()]).optional(),
  blocker: z.union([z.boolean(), z.undefined()]).optional(),
  epic_id: z.union([z.number(), z.undefined()]).optional(),
  requested_by_id: z.union([z.string(), z.undefined()]).optional(),
  iteration_id: z.union([z.number(), z.null(), z.undefined()]).optional(),
  label_ids: z.union([z.array(z.number()), z.undefined()]).optional(),
  group_id: z.union([z.string(), z.undefined()]).optional(),
  workflow_state_id: z.union([z.number(), z.undefined()]).optional(),
  object_story_link_ids: z.union([z.array(z.number()), z.undefined()]).optional(),
  follower_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  owner_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  custom_field_value_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  id: z.number(),
  estimate: z.union([z.number(), z.undefined()]).optional(),
  subject_story_link_ids: z.union([z.array(z.number()), z.undefined()]).optional(),
  action: z.literal("create"),
  blocked: z.union([z.boolean(), z.undefined()]).optional(),
  project_id: z.union([z.number(), z.undefined()]).optional(),
  deadline: z.union([z.string(), z.undefined()]).optional(),
});

export type StoryHistoryChangeOldNewStr = z.infer<typeof StoryHistoryChangeOldNewStr>;
export const StoryHistoryChangeOldNewStr = z.object({
  old: z.union([z.string(), z.null()]).optional(),
  new: z.string().optional(),
});

export type StoryHistoryChangeOldNewBool = z.infer<typeof StoryHistoryChangeOldNewBool>;
export const StoryHistoryChangeOldNewBool = z.object({
  old: z.boolean().optional(),
  new: z.boolean().optional(),
});

export type StoryHistoryChangeAddsRemovesInt = z.infer<typeof StoryHistoryChangeAddsRemovesInt>;
export const StoryHistoryChangeAddsRemovesInt = z.object({
  adds: z.array(z.number()).optional(),
  removes: z.array(z.number()).optional(),
});

export type StoryHistoryChangeAddsRemovesUuid = z.infer<typeof StoryHistoryChangeAddsRemovesUuid>;
export const StoryHistoryChangeAddsRemovesUuid = z.object({
  adds: z.array(z.string()).optional(),
  removes: z.array(z.string()).optional(),
});

export type StoryHistoryChangeOldNewInt = z.infer<typeof StoryHistoryChangeOldNewInt>;
export const StoryHistoryChangeOldNewInt = z.object({
  old: z.number().optional(),
  new: z.number().optional(),
});

export type StoryHistoryChangeOldNewUuid = z.infer<typeof StoryHistoryChangeOldNewUuid>;
export const StoryHistoryChangeOldNewUuid = z.object({
  old: z.string().optional(),
  new: z.string().optional(),
});

export type HistoryChangesStory = z.infer<typeof HistoryChangesStory>;
export const HistoryChangesStory = z.object({
  description: StoryHistoryChangeOldNewStr.optional(),
  archived: StoryHistoryChangeOldNewBool.optional(),
  started: StoryHistoryChangeOldNewBool.optional(),
  task_ids: StoryHistoryChangeAddsRemovesInt.optional(),
  mention_ids: StoryHistoryChangeAddsRemovesUuid.optional(),
  story_type: StoryHistoryChangeOldNewStr.optional(),
  name: StoryHistoryChangeOldNewStr.optional(),
  completed: StoryHistoryChangeOldNewBool.optional(),
  blocker: StoryHistoryChangeOldNewBool.optional(),
  epic_id: StoryHistoryChangeOldNewInt.optional(),
  branch_ids: StoryHistoryChangeAddsRemovesInt.optional(),
  commit_ids: StoryHistoryChangeAddsRemovesInt.optional(),
  requested_by_id: StoryHistoryChangeOldNewUuid.optional(),
  iteration_id: StoryHistoryChangeOldNewInt.optional(),
  label_ids: StoryHistoryChangeAddsRemovesInt.optional(),
  group_id: StoryHistoryChangeOldNewUuid.optional(),
  workflow_state_id: StoryHistoryChangeOldNewInt.optional(),
  object_story_link_ids: StoryHistoryChangeAddsRemovesInt.optional(),
  follower_ids: StoryHistoryChangeAddsRemovesUuid.optional(),
  owner_ids: StoryHistoryChangeAddsRemovesUuid.optional(),
  custom_field_value_ids: StoryHistoryChangeAddsRemovesUuid.optional(),
  estimate: StoryHistoryChangeOldNewInt.optional(),
  subject_story_link_ids: StoryHistoryChangeAddsRemovesInt.optional(),
  blocked: StoryHistoryChangeOldNewBool.optional(),
  project_id: StoryHistoryChangeOldNewInt.optional(),
  deadline: StoryHistoryChangeOldNewStr.optional(),
});

export type HistoryActionStoryUpdate = z.infer<typeof HistoryActionStoryUpdate>;
export const HistoryActionStoryUpdate = z.object({
  id: z.number(),
  entity_type: z.string(),
  action: z.literal("update"),
  app_url: z.string(),
  changes: z.union([HistoryChangesStory, z.undefined()]).optional(),
  name: z.string(),
  story_type: z.union([z.literal("feature"), z.literal("chore"), z.literal("bug")]),
});

export type HistoryActionStoryDelete = z.infer<typeof HistoryActionStoryDelete>;
export const HistoryActionStoryDelete = z.object({
  id: z.number(),
  entity_type: z.string(),
  action: z.literal("delete"),
  name: z.string(),
  story_type: z.union([z.literal("feature"), z.literal("chore"), z.literal("bug")]),
});

export type HistoryActionStoryCommentCreate = z.infer<typeof HistoryActionStoryCommentCreate>;
export const HistoryActionStoryCommentCreate = z.object({
  id: z.number(),
  entity_type: z.string(),
  action: z.literal("create"),
  app_url: z.string(),
  text: z.string(),
  author_id: z.string(),
});

export type HistoryActionStoryLinkCreate = z.infer<typeof HistoryActionStoryLinkCreate>;
export const HistoryActionStoryLinkCreate = z.object({
  id: z.number(),
  entity_type: z.string(),
  action: z.literal("create"),
  verb: z.union([z.literal("blocks"), z.literal("duplicates"), z.literal("relates to")]),
  subject_id: z.number(),
  object_id: z.number(),
});

export type HistoryChangesStoryLink = z.infer<typeof HistoryChangesStoryLink>;
export const HistoryChangesStoryLink = z.object({
  verb: StoryHistoryChangeOldNewStr.optional(),
  object_id: StoryHistoryChangeOldNewInt.optional(),
  subject_id: StoryHistoryChangeOldNewInt.optional(),
});

export type HistoryActionStoryLinkUpdate = z.infer<typeof HistoryActionStoryLinkUpdate>;
export const HistoryActionStoryLinkUpdate = z.object({
  id: z.number(),
  entity_type: z.string(),
  action: z.literal("update"),
  verb: z.union([z.literal("blocks"), z.literal("duplicates"), z.literal("relates to")]),
  subject_id: z.number(),
  object_id: z.number(),
  changes: HistoryChangesStoryLink,
});

export type HistoryActionStoryLinkDelete = z.infer<typeof HistoryActionStoryLinkDelete>;
export const HistoryActionStoryLinkDelete = z.object({
  id: z.number(),
  entity_type: z.string(),
  action: z.literal("delete"),
  verb: z.union([z.literal("blocks"), z.literal("duplicates"), z.literal("relates to")]),
  subject_id: z.union([z.number(), z.null()]),
  object_id: z.union([z.number(), z.null()]),
});

export type HistoryActionTaskCreate = z.infer<typeof HistoryActionTaskCreate>;
export const HistoryActionTaskCreate = z.object({
  description: z.string(),
  entity_type: z.string(),
  mention_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  group_mention_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  owner_ids: z.union([z.array(z.string()), z.undefined()]).optional(),
  id: z.number(),
  action: z.literal("create"),
  complete: z.boolean(),
  deadline: z.union([z.string(), z.undefined()]).optional(),
});

export type HistoryChangesTask = z.infer<typeof HistoryChangesTask>;
export const HistoryChangesTask = z.object({
  complete: StoryHistoryChangeOldNewBool.optional(),
  description: StoryHistoryChangeOldNewStr.optional(),
  mention_ids: StoryHistoryChangeAddsRemovesUuid.optional(),
  owner_ids: StoryHistoryChangeAddsRemovesUuid.optional(),
});

export type HistoryActionTaskUpdate = z.infer<typeof HistoryActionTaskUpdate>;
export const HistoryActionTaskUpdate = z.object({
  id: z.number(),
  entity_type: z.string(),
  action: z.literal("update"),
  changes: HistoryChangesTask,
  complete: z.union([z.boolean(), z.undefined()]).optional(),
  description: z.string(),
  story_id: z.number(),
});

export type HistoryActionTaskDelete = z.infer<typeof HistoryActionTaskDelete>;
export const HistoryActionTaskDelete = z.object({
  id: z.number(),
  entity_type: z.string(),
  action: z.literal("delete"),
  description: z.string(),
});

export type HistoryActionWorkspace2BulkUpdate = z.infer<typeof HistoryActionWorkspace2BulkUpdate>;
export const HistoryActionWorkspace2BulkUpdate = z.object({
  id: z.string(),
  entity_type: z.string(),
  action: z.literal("bulk-update"),
  name: z.string(),
});

export type History = z.infer<typeof History>;
export const History = z.object({
  changed_at: z.string(),
  primary_id: z.union([z.number(), z.string(), z.undefined()]).optional(),
  references: z
    .union([
      z.array(
        z.union([
          HistoryReferenceBranch,
          HistoryReferenceCommit,
          HistoryReferenceEpic,
          HistoryReferenceGroup,
          HistoryReferenceIteration,
          HistoryReferenceLabel,
          HistoryReferenceProject,
          HistoryReferenceStory,
          HistoryReferenceStoryTask,
          HistoryReferenceCustomFieldEnumValue,
          HistoryReferenceWorkflowState,
          HistoryReferenceGeneral,
        ]),
      ),
      z.undefined(),
    ])
    .optional(),
  actions: z.array(
    z.union([
      HistoryActionBranchCreate,
      HistoryActionBranchMerge,
      HistoryActionBranchPush,
      HistoryActionLabelCreate,
      HistoryActionLabelUpdate,
      HistoryActionLabelDelete,
      HistoryActionProjectUpdate,
      HistoryActionPullRequest,
      HistoryActionStoryCreate,
      HistoryActionStoryUpdate,
      HistoryActionStoryDelete,
      HistoryActionStoryCommentCreate,
      HistoryActionStoryLinkCreate,
      HistoryActionStoryLinkUpdate,
      HistoryActionStoryLinkDelete,
      HistoryActionTaskCreate,
      HistoryActionTaskUpdate,
      HistoryActionTaskDelete,
      HistoryActionWorkspace2BulkUpdate,
    ]),
  ),
  member_id: z.union([z.string(), z.undefined()]).optional(),
  external_id: z.union([z.string(), z.undefined()]).optional(),
  id: z.string(),
  version: z.literal("v1"),
  webhook_id: z.union([z.string(), z.null(), z.undefined()]).optional(),
  automation_id: z.union([z.string(), z.undefined()]).optional(),
});

export type LabelStats = z.infer<typeof LabelStats>;
export const LabelStats = z.object({
  num_related_documents: z.number(),
  num_epics: z.number(),
  num_stories_unstarted: z.number(),
  num_stories_total: z.number(),
  num_epics_unstarted: z.number(),
  num_epics_in_progress: z.number(),
  num_points_unstarted: z.number(),
  num_stories_unestimated: z.number(),
  num_points_in_progress: z.number(),
  num_epics_total: z.number(),
  num_stories_completed: z.number(),
  num_points_completed: z.number(),
  num_stories_backlog: z.number(),
  num_points_total: z.number(),
  num_stories_in_progress: z.number(),
  num_points_backlog: z.number(),
  num_epics_completed: z.number(),
});

export type Label = z.infer<typeof Label>;
export const Label = z.object({
  app_url: z.string(),
  description: z.union([z.string(), z.null()]),
  archived: z.boolean(),
  entity_type: z.string(),
  color: z.union([z.string(), z.null()]),
  name: z.string(),
  global_id: z.string(),
  updated_at: z.union([z.string(), z.null()]),
  external_id: z.union([z.string(), z.null()]),
  id: z.number(),
  stats: z.union([LabelStats, z.undefined()]).optional(),
  created_at: z.union([z.string(), z.null()]),
});

export type IterationAssociatedGroup = z.infer<typeof IterationAssociatedGroup>;
export const IterationAssociatedGroup = z.object({
  group_id: z.string(),
  associated_stories_count: z.union([z.number(), z.undefined()]).optional(),
});

export type IterationStats = z.infer<typeof IterationStats>;
export const IterationStats = z.object({
  num_points_done: z.number(),
  num_related_documents: z.number(),
  average_cycle_time: z.union([z.number(), z.undefined()]).optional(),
  num_stories_unstarted: z.number(),
  num_points_started: z.number(),
  num_points_unstarted: z.number(),
  num_stories_started: z.number(),
  num_stories_unestimated: z.number(),
  num_stories_backlog: z.number(),
  average_lead_time: z.union([z.number(), z.undefined()]).optional(),
  num_points_backlog: z.number(),
  num_points: z.number(),
  num_stories_done: z.number(),
});

export type Iteration = z.infer<typeof Iteration>;
export const Iteration = z.object({
  app_url: z.string(),
  description: z.string(),
  entity_type: z.string(),
  labels: z.array(Label),
  mention_ids: z.array(z.string()),
  member_mention_ids: z.array(z.string()),
  associated_groups: z.array(IterationAssociatedGroup),
  name: z.string(),
  global_id: z.string(),
  label_ids: z.array(z.number()),
  updated_at: z.string(),
  group_mention_ids: z.array(z.string()),
  end_date: z.string(),
  follower_ids: z.array(z.string()),
  group_ids: z.array(z.string()),
  start_date: z.string(),
  status: z.string(),
  id: z.number(),
  stats: IterationStats,
  created_at: z.string(),
});

export type IterationSlim = z.infer<typeof IterationSlim>;
export const IterationSlim = z.object({
  app_url: z.string(),
  entity_type: z.string(),
  labels: z.array(Label),
  mention_ids: z.array(z.string()),
  member_mention_ids: z.array(z.string()),
  associated_groups: z.array(IterationAssociatedGroup),
  name: z.string(),
  global_id: z.string(),
  label_ids: z.array(z.number()),
  updated_at: z.string(),
  group_mention_ids: z.array(z.string()),
  end_date: z.string(),
  follower_ids: z.array(z.string()),
  group_ids: z.array(z.string()),
  start_date: z.string(),
  status: z.string(),
  id: z.number(),
  stats: IterationStats,
  created_at: z.string(),
});

export type IterationSearchResults = z.infer<typeof IterationSearchResults>;
export const IterationSearchResults = z.object({
  total: z.number(),
  data: z.array(IterationSlim),
  next: z.union([z.string(), z.null()]),
});

export type KeyResultValue = z.infer<typeof KeyResultValue>;
export const KeyResultValue = z.object({
  numeric_value: z.string().optional(),
  boolean_value: z.boolean().optional(),
});

export type KeyResult = z.infer<typeof KeyResult>;
export const KeyResult = z.object({
  id: z.string(),
  name: z.string(),
  objective_id: z.number(),
  type: z.union([z.literal("percent"), z.literal("boolean"), z.literal("numeric")]),
  initial_observed_value: KeyResultValue,
  current_observed_value: KeyResultValue,
  current_target_value: KeyResultValue,
  progress: z.number(),
});

export type MaxSearchResultsExceededError = z.infer<typeof MaxSearchResultsExceededError>;
export const MaxSearchResultsExceededError = z.object({
  error: z.literal("maximum-results-exceeded"),
  message: z.string(),
  "maximum-results": z.literal("1000"),
});

export type Profile = z.infer<typeof Profile>;
export const Profile = z.object({
  entity_type: z.string(),
  deactivated: z.boolean(),
  two_factor_auth_activated: z.union([z.boolean(), z.undefined()]).optional(),
  mention_name: z.string(),
  name: z.union([z.string(), z.null()]),
  gravatar_hash: z.union([z.string(), z.null()]),
  id: z.string(),
  display_icon: Icon,
  is_owner: z.boolean(),
  email_address: z.union([z.string(), z.null()]),
});

export type Member = z.infer<typeof Member>;
export const Member = z.object({
  role: z.string(),
  entity_type: z.string(),
  disabled: z.boolean(),
  global_id: z.string(),
  state: z.union([z.literal("partial"), z.literal("full"), z.literal("disabled"), z.literal("imported")]),
  updated_at: z.union([z.string(), z.null()]),
  created_without_invite: z.boolean(),
  group_ids: z.array(z.string()),
  id: z.string(),
  profile: Profile,
  created_at: z.union([z.string(), z.null()]),
  replaced_by: z.union([z.string(), z.undefined()]).optional(),
});

export type MemberInfo = z.infer<typeof MemberInfo>;
export const MemberInfo = z.object({
  id: z.string(),
  name: z.string(),
  mention_name: z.string(),
  workspace2: BasicWorkspaceInfo,
});

export type MilestoneStats = z.infer<typeof MilestoneStats>;
export const MilestoneStats = z.object({
  average_cycle_time: z.union([z.number(), z.undefined()]).optional(),
  average_lead_time: z.union([z.number(), z.undefined()]).optional(),
  num_related_documents: z.number(),
});

export type Milestone = z.infer<typeof Milestone>;
export const Milestone = z.object({
  app_url: z.string(),
  description: z.string(),
  archived: z.boolean(),
  started: z.boolean(),
  entity_type: z.string(),
  completed_at_override: z.union([z.string(), z.null()]),
  started_at: z.union([z.string(), z.null()]),
  completed_at: z.union([z.string(), z.null()]),
  name: z.string(),
  global_id: z.string(),
  completed: z.boolean(),
  state: z.string(),
  started_at_override: z.union([z.string(), z.null()]),
  updated_at: z.string(),
  categories: z.array(Category),
  id: z.number(),
  key_result_ids: z.array(z.string()),
  position: z.number(),
  stats: MilestoneStats,
  created_at: z.string(),
});

export type ObjectiveStats = z.infer<typeof ObjectiveStats>;
export const ObjectiveStats = z.object({
  average_cycle_time: z.union([z.number(), z.undefined()]).optional(),
  average_lead_time: z.union([z.number(), z.undefined()]).optional(),
  num_related_documents: z.number(),
});

export type Objective = z.infer<typeof Objective>;
export const Objective = z.object({
  app_url: z.string(),
  description: z.string(),
  archived: z.boolean(),
  started: z.boolean(),
  entity_type: z.string(),
  completed_at_override: z.union([z.string(), z.null()]),
  started_at: z.union([z.string(), z.null()]),
  completed_at: z.union([z.string(), z.null()]),
  name: z.string(),
  global_id: z.string(),
  completed: z.boolean(),
  state: z.string(),
  started_at_override: z.union([z.string(), z.null()]),
  updated_at: z.string(),
  categories: z.array(Category),
  id: z.number(),
  key_result_ids: z.array(z.string()),
  position: z.number(),
  stats: ObjectiveStats,
  created_at: z.string(),
});

export type ObjectiveSearchResult = z.infer<typeof ObjectiveSearchResult>;
export const ObjectiveSearchResult = z.object({
  app_url: z.string(),
  description: z.union([z.string(), z.undefined()]).optional(),
  archived: z.boolean(),
  started: z.boolean(),
  entity_type: z.string(),
  completed_at_override: z.union([z.string(), z.null()]),
  started_at: z.union([z.string(), z.null()]),
  completed_at: z.union([z.string(), z.null()]),
  name: z.string(),
  global_id: z.string(),
  completed: z.boolean(),
  state: z.string(),
  started_at_override: z.union([z.string(), z.null()]),
  updated_at: z.string(),
  categories: z.array(Category),
  id: z.number(),
  key_result_ids: z.array(z.string()),
  position: z.number(),
  stats: MilestoneStats,
  created_at: z.string(),
});

export type ObjectiveSearchResults = z.infer<typeof ObjectiveSearchResults>;
export const ObjectiveSearchResults = z.object({
  total: z.number(),
  data: z.array(ObjectiveSearchResult),
  next: z.union([z.string(), z.null()]),
});

export type ProjectStats = z.infer<typeof ProjectStats>;
export const ProjectStats = z.object({
  num_stories: z.number(),
  num_points: z.number(),
  num_related_documents: z.number(),
});

export type Project = z.infer<typeof Project>;
export const Project = z.object({
  app_url: z.string(),
  description: z.union([z.string(), z.null()]),
  archived: z.boolean(),
  entity_type: z.string(),
  days_to_thermometer: z.number(),
  color: z.union([z.string(), z.null()]),
  workflow_id: z.number(),
  name: z.string(),
  global_id: z.string(),
  start_time: z.string(),
  updated_at: z.union([z.string(), z.null()]),
  follower_ids: z.array(z.string()),
  external_id: z.union([z.string(), z.null()]),
  id: z.number(),
  show_thermometer: z.boolean(),
  team_id: z.number(),
  iteration_length: z.number(),
  abbreviation: z.union([z.string(), z.null()]),
  stats: ProjectStats,
  created_at: z.union([z.string(), z.null()]),
});

export type Repository = z.infer<typeof Repository>;
export const Repository = z.object({
  entity_type: z.string(),
  name: z.union([z.string(), z.null()]),
  type: z.union([z.literal("github"), z.literal("gitlab"), z.literal("bitbucket")]),
  updated_at: z.union([z.string(), z.null()]),
  external_id: z.union([z.string(), z.null()]),
  id: z.union([z.number(), z.null()]),
  url: z.union([z.string(), z.null()]),
  full_name: z.union([z.string(), z.null()]),
  created_at: z.union([z.string(), z.null()]),
});

export type TypedStoryLink = z.infer<typeof TypedStoryLink>;
export const TypedStoryLink = z.object({
  entity_type: z.string(),
  object_id: z.number(),
  verb: z.string(),
  type: z.string(),
  updated_at: z.string(),
  id: z.number(),
  subject_id: z.number(),
  subject_workflow_state_id: z.number(),
  created_at: z.string(),
});

export type SyncedItem = z.infer<typeof SyncedItem>;
export const SyncedItem = z.object({
  external_id: z.string(),
  url: z.string(),
});

export type StoryCustomField = z.infer<typeof StoryCustomField>;
export const StoryCustomField = z.object({
  field_id: z.string(),
  value_id: z.string(),
  value: z.string(),
});

export type StoryReaction = z.infer<typeof StoryReaction>;
export const StoryReaction = z.object({
  emoji: z.string(),
  permission_ids: z.array(z.string()),
});

export type StoryComment = z.infer<typeof StoryComment>;
export const StoryComment = z.object({
  app_url: z.string(),
  entity_type: z.string(),
  deleted: z.boolean(),
  story_id: z.number(),
  mention_ids: z.array(z.string()),
  author_id: z.union([z.string(), z.null()]),
  member_mention_ids: z.array(z.string()),
  blocker: z.union([z.boolean(), z.undefined()]).optional(),
  linked_to_slack: z.boolean(),
  updated_at: z.union([z.string(), z.null()]),
  group_mention_ids: z.array(z.string()),
  external_id: z.union([z.string(), z.null()]),
  parent_id: z.union([z.number(), z.null(), z.undefined()]).optional(),
  id: z.number(),
  position: z.number(),
  unblocks_parent: z.union([z.boolean(), z.undefined()]).optional(),
  reactions: z.array(StoryReaction),
  created_at: z.string(),
  text: z.union([z.string(), z.null()]),
});

export type Task = z.infer<typeof Task>;
export const Task = z.object({
  description: z.string(),
  entity_type: z.string(),
  story_id: z.number(),
  mention_ids: z.array(z.string()),
  member_mention_ids: z.array(z.string()),
  completed_at: z.union([z.string(), z.null()]),
  global_id: z.string(),
  updated_at: z.union([z.string(), z.null()]),
  group_mention_ids: z.array(z.string()),
  owner_ids: z.array(z.string()),
  external_id: z.union([z.string(), z.null()]),
  id: z.number(),
  position: z.number(),
  complete: z.boolean(),
  created_at: z.string(),
});

export type StoryStats = z.infer<typeof StoryStats>;
export const StoryStats = z.object({
  num_related_documents: z.number(),
});

export type StorySearchResult = z.infer<typeof StorySearchResult>;
export const StorySearchResult = z.object({
  app_url: z.string(),
  description: z.union([z.string(), z.undefined()]).optional(),
  archived: z.boolean(),
  started: z.boolean(),
  story_links: z.array(TypedStoryLink),
  entity_type: z.string(),
  labels: z.array(LabelSlim),
  task_ids: z.union([z.array(z.number()), z.undefined()]).optional(),
  mention_ids: z.array(z.string()),
  synced_item: z.union([SyncedItem, z.undefined()]).optional(),
  member_mention_ids: z.array(z.string()),
  story_type: z.string(),
  custom_fields: z.union([z.array(StoryCustomField), z.undefined()]).optional(),
  linked_files: z.union([z.array(LinkedFile), z.undefined()]).optional(),
  file_ids: z.union([z.array(z.number()), z.undefined()]).optional(),
  num_tasks_completed: z.union([z.number(), z.undefined()]).optional(),
  workflow_id: z.number(),
  completed_at_override: z.union([z.string(), z.null()]),
  started_at: z.union([z.string(), z.null()]),
  completed_at: z.union([z.string(), z.null()]),
  name: z.string(),
  global_id: z.string(),
  completed: z.boolean(),
  comments: z.union([z.array(StoryComment), z.undefined()]).optional(),
  blocker: z.boolean(),
  branches: z.union([z.array(Branch), z.undefined()]).optional(),
  epic_id: z.union([z.number(), z.null()]),
  story_template_id: z.union([z.string(), z.null()]),
  external_links: z.array(z.string()),
  previous_iteration_ids: z.array(z.number()),
  requested_by_id: z.string(),
  iteration_id: z.union([z.number(), z.null()]),
  sub_task_story_ids: z.array(z.number()),
  tasks: z.union([z.array(Task), z.undefined()]).optional(),
  label_ids: z.array(z.number()),
  started_at_override: z.union([z.string(), z.null()]),
  group_id: z.union([z.string(), z.null()]),
  workflow_state_id: z.number(),
  updated_at: z.union([z.string(), z.null()]),
  pull_requests: z.union([z.array(PullRequest), z.undefined()]).optional(),
  group_mention_ids: z.array(z.string()),
  follower_ids: z.array(z.string()),
  owner_ids: z.array(z.string()),
  external_id: z.union([z.string(), z.null()]),
  id: z.number(),
  lead_time: z.union([z.number(), z.undefined()]).optional(),
  parent_story_id: z.union([z.number(), z.null()]),
  estimate: z.union([z.number(), z.null()]),
  commits: z.union([z.array(Commit), z.undefined()]).optional(),
  files: z.union([z.array(UploadedFile), z.undefined()]).optional(),
  position: z.number(),
  blocked: z.boolean(),
  project_id: z.union([z.number(), z.null()]),
  linked_file_ids: z.union([z.array(z.number()), z.undefined()]).optional(),
  deadline: z.union([z.string(), z.null()]),
  stats: StoryStats,
  comment_ids: z.union([z.array(z.number()), z.undefined()]).optional(),
  cycle_time: z.union([z.number(), z.undefined()]).optional(),
  created_at: z.string(),
  moved_at: z.union([z.string(), z.null()]),
});

export type StorySearchResults = z.infer<typeof StorySearchResults>;
export const StorySearchResults = z.object({
  total: z.number(),
  data: z.array(StorySearchResult),
  next: z.union([z.string(), z.null()]),
});

export type SearchResults = z.infer<typeof SearchResults>;
export const SearchResults = z.object({
  epics: EpicSearchResults.optional(),
  stories: StorySearchResults.optional(),
  iterations: IterationSearchResults.optional(),
  milestones: ObjectiveSearchResults.optional(),
});

export type SearchStories = z.infer<typeof SearchStories>;
export const SearchStories = z.object({
  archived: z.boolean().optional(),
  owner_id: z.union([z.string(), z.null()]).optional(),
  story_type: z.union([z.literal("feature"), z.literal("chore"), z.literal("bug")]).optional(),
  epic_ids: z.array(z.number()).optional(),
  project_ids: z.array(z.union([z.number(), z.null()])).optional(),
  updated_at_end: z.string().optional(),
  completed_at_end: z.string().optional(),
  workflow_state_types: z
    .array(z.union([z.literal("started"), z.literal("backlog"), z.literal("unstarted"), z.literal("done")]))
    .optional(),
  deadline_end: z.string().optional(),
  created_at_start: z.string().optional(),
  epic_id: z.union([z.number(), z.null()]).optional(),
  label_name: z.string().optional(),
  requested_by_id: z.string().optional(),
  iteration_id: z.union([z.number(), z.null()]).optional(),
  label_ids: z.array(z.number()).optional(),
  group_id: z.union([z.string(), z.null()]).optional(),
  workflow_state_id: z.number().optional(),
  iteration_ids: z.array(z.number()).optional(),
  created_at_end: z.string().optional(),
  deadline_start: z.string().optional(),
  group_ids: z.array(z.string()).optional(),
  owner_ids: z.array(z.string()).optional(),
  external_id: z.string().optional(),
  includes_description: z.boolean().optional(),
  estimate: z.number().optional(),
  project_id: z.union([z.number(), z.null()]).optional(),
  completed_at_start: z.string().optional(),
  updated_at_start: z.string().optional(),
});

export type Story = z.infer<typeof Story>;
export const Story = z.object({
  app_url: z.string(),
  description: z.string(),
  archived: z.boolean(),
  started: z.boolean(),
  story_links: z.array(TypedStoryLink),
  entity_type: z.string(),
  labels: z.array(LabelSlim),
  mention_ids: z.array(z.string()),
  synced_item: z.union([SyncedItem, z.undefined()]).optional(),
  member_mention_ids: z.array(z.string()),
  story_type: z.string(),
  custom_fields: z.union([z.array(StoryCustomField), z.undefined()]).optional(),
  linked_files: z.array(LinkedFile),
  workflow_id: z.number(),
  completed_at_override: z.union([z.string(), z.null()]),
  started_at: z.union([z.string(), z.null()]),
  completed_at: z.union([z.string(), z.null()]),
  name: z.string(),
  global_id: z.string(),
  completed: z.boolean(),
  comments: z.array(StoryComment),
  blocker: z.boolean(),
  branches: z.array(Branch),
  epic_id: z.union([z.number(), z.null()]),
  story_template_id: z.union([z.string(), z.null()]),
  external_links: z.array(z.string()),
  previous_iteration_ids: z.array(z.number()),
  requested_by_id: z.string(),
  iteration_id: z.union([z.number(), z.null()]),
  sub_task_story_ids: z.array(z.number()),
  tasks: z.array(Task),
  label_ids: z.array(z.number()),
  started_at_override: z.union([z.string(), z.null()]),
  group_id: z.union([z.string(), z.null()]),
  workflow_state_id: z.number(),
  updated_at: z.union([z.string(), z.null()]),
  pull_requests: z.array(PullRequest),
  group_mention_ids: z.array(z.string()),
  follower_ids: z.array(z.string()),
  owner_ids: z.array(z.string()),
  external_id: z.union([z.string(), z.null()]),
  id: z.number(),
  lead_time: z.union([z.number(), z.undefined()]).optional(),
  parent_story_id: z.union([z.number(), z.null()]),
  estimate: z.union([z.number(), z.null()]),
  commits: z.array(Commit),
  files: z.array(UploadedFile),
  position: z.number(),
  blocked: z.boolean(),
  project_id: z.union([z.number(), z.null()]),
  deadline: z.union([z.string(), z.null()]),
  stats: StoryStats,
  cycle_time: z.union([z.number(), z.undefined()]).optional(),
  created_at: z.string(),
  moved_at: z.union([z.string(), z.null()]),
});

export type StoryLink = z.infer<typeof StoryLink>;
export const StoryLink = z.object({
  entity_type: z.string(),
  id: z.number(),
  subject_id: z.number(),
  subject_workflow_state_id: z.number(),
  verb: z.string(),
  object_id: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type StorySlim = z.infer<typeof StorySlim>;
export const StorySlim = z.object({
  app_url: z.string(),
  description: z.union([z.string(), z.undefined()]).optional(),
  archived: z.boolean(),
  started: z.boolean(),
  story_links: z.array(TypedStoryLink),
  entity_type: z.string(),
  labels: z.array(LabelSlim),
  task_ids: z.array(z.number()),
  mention_ids: z.array(z.string()),
  synced_item: z.union([SyncedItem, z.undefined()]).optional(),
  member_mention_ids: z.array(z.string()),
  story_type: z.string(),
  custom_fields: z.union([z.array(StoryCustomField), z.undefined()]).optional(),
  file_ids: z.array(z.number()),
  num_tasks_completed: z.number(),
  workflow_id: z.number(),
  completed_at_override: z.union([z.string(), z.null()]),
  started_at: z.union([z.string(), z.null()]),
  completed_at: z.union([z.string(), z.null()]),
  name: z.string(),
  global_id: z.string(),
  completed: z.boolean(),
  blocker: z.boolean(),
  epic_id: z.union([z.number(), z.null()]),
  story_template_id: z.union([z.string(), z.null()]),
  external_links: z.array(z.string()),
  previous_iteration_ids: z.array(z.number()),
  requested_by_id: z.string(),
  iteration_id: z.union([z.number(), z.null()]),
  sub_task_story_ids: z.array(z.number()),
  label_ids: z.array(z.number()),
  started_at_override: z.union([z.string(), z.null()]),
  group_id: z.union([z.string(), z.null()]),
  workflow_state_id: z.number(),
  updated_at: z.union([z.string(), z.null()]),
  group_mention_ids: z.array(z.string()),
  follower_ids: z.array(z.string()),
  owner_ids: z.array(z.string()),
  external_id: z.union([z.string(), z.null()]),
  id: z.number(),
  lead_time: z.union([z.number(), z.undefined()]).optional(),
  parent_story_id: z.union([z.number(), z.null()]),
  estimate: z.union([z.number(), z.null()]),
  position: z.number(),
  blocked: z.boolean(),
  project_id: z.union([z.number(), z.null()]),
  linked_file_ids: z.array(z.number()),
  deadline: z.union([z.string(), z.null()]),
  stats: StoryStats,
  comment_ids: z.array(z.number()),
  cycle_time: z.union([z.number(), z.undefined()]).optional(),
  created_at: z.string(),
  moved_at: z.union([z.string(), z.null()]),
});

export type UnusableEntitlementError = z.infer<typeof UnusableEntitlementError>;
export const UnusableEntitlementError = z.object({
  reason_tag: z.literal("entitlement-violation"),
  entitlement_tag: z.string(),
  message: z.string(),
});

export type UpdateCategory = z.infer<typeof UpdateCategory>;
export const UpdateCategory = z.object({
  name: z.string().optional(),
  color: z.union([z.string(), z.null()]).optional(),
  archived: z.boolean().optional(),
});

export type UpdateComment = z.infer<typeof UpdateComment>;
export const UpdateComment = z.object({
  text: z.string(),
});

export type UpdateCustomFieldEnumValue = z.infer<typeof UpdateCustomFieldEnumValue>;
export const UpdateCustomFieldEnumValue = z.object({
  id: z.string().optional(),
  value: z.string().optional(),
  color_key: z.union([z.string(), z.null()]).optional(),
  enabled: z.boolean().optional(),
});

export type UpdateCustomField = z.infer<typeof UpdateCustomField>;
export const UpdateCustomField = z.object({
  enabled: z.boolean().optional(),
  name: z.string().optional(),
  values: z.array(UpdateCustomFieldEnumValue).optional(),
  icon_set_identifier: z.string().optional(),
  description: z.string().optional(),
  before_id: z.string().optional(),
  after_id: z.string().optional(),
});

export type UpdateStoryContents = z.infer<typeof UpdateStoryContents>;
export const UpdateStoryContents = z.object({
  description: z.string().optional(),
  labels: z.array(CreateLabelParams).optional(),
  story_type: z.string().optional(),
  custom_fields: z.array(CustomFieldValueParams).optional(),
  file_ids: z.array(z.number()).optional(),
  name: z.string().optional(),
  epic_id: z.union([z.number(), z.null()]).optional(),
  external_links: z.array(z.string()).optional(),
  iteration_id: z.union([z.number(), z.null()]).optional(),
  tasks: z.array(BaseTaskParams).optional(),
  group_id: z.union([z.string(), z.null()]).optional(),
  workflow_state_id: z.union([z.number(), z.null()]).optional(),
  follower_ids: z.array(z.string()).optional(),
  owner_ids: z.array(z.string()).optional(),
  estimate: z.union([z.number(), z.null()]).optional(),
  project_id: z.union([z.number(), z.null()]).optional(),
  linked_file_ids: z.array(z.number()).optional(),
  deadline: z.union([z.string(), z.null()]).optional(),
});

export type UpdateEntityTemplate = z.infer<typeof UpdateEntityTemplate>;
export const UpdateEntityTemplate = z.object({
  name: z.string().optional(),
  story_contents: UpdateStoryContents.optional(),
});

export type UpdateEpic = z.infer<typeof UpdateEpic>;
export const UpdateEpic = z.object({
  description: z.string().optional(),
  archived: z.boolean().optional(),
  labels: z.array(CreateLabelParams).optional(),
  completed_at_override: z.union([z.string(), z.null()]).optional(),
  objective_ids: z.array(z.number()).optional(),
  name: z.string().optional(),
  planned_start_date: z.union([z.string(), z.null()]).optional(),
  state: z.union([z.literal("in progress"), z.literal("to do"), z.literal("done")]).optional(),
  milestone_id: z.union([z.number(), z.null()]).optional(),
  requested_by_id: z.string().optional(),
  epic_state_id: z.number().optional(),
  started_at_override: z.union([z.string(), z.null()]).optional(),
  group_id: z.union([z.string(), z.null()]).optional(),
  follower_ids: z.array(z.string()).optional(),
  group_ids: z.array(z.string()).optional(),
  owner_ids: z.array(z.string()).optional(),
  external_id: z.string().optional(),
  before_id: z.number().optional(),
  after_id: z.number().optional(),
  deadline: z.union([z.string(), z.null()]).optional(),
});

export type UpdateFile = z.infer<typeof UpdateFile>;
export const UpdateFile = z.object({
  description: z.string().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  name: z.string().optional(),
  uploader_id: z.string().optional(),
  external_id: z.string().optional(),
});

export type UpdateGroup = z.infer<typeof UpdateGroup>;
export const UpdateGroup = z.object({
  description: z.string().optional(),
  archived: z.union([z.boolean(), z.null()]).optional(),
  color: z.union([z.string(), z.null()]).optional(),
  display_icon_id: z.union([z.string(), z.null()]).optional(),
  mention_name: z.string().optional(),
  name: z.string().optional(),
  color_key: z
    .union([
      z.literal("blue"),
      z.literal("purple"),
      z.literal("midnight-blue"),
      z.literal("orange"),
      z.literal("yellow-green"),
      z.literal("brass"),
      z.literal("gray"),
      z.literal("fuchsia"),
      z.literal("yellow"),
      z.literal("pink"),
      z.literal("sky-blue"),
      z.literal("green"),
      z.literal("red"),
      z.literal("black"),
      z.literal("slate"),
      z.literal("turquoise"),
    ])
    .optional(),
  member_ids: z.array(z.string()).optional(),
  workflow_ids: z.array(z.number()).optional(),
});

export type UpdateIteration = z.infer<typeof UpdateIteration>;
export const UpdateIteration = z.object({
  follower_ids: z.array(z.string()).optional(),
  group_ids: z.array(z.string()).optional(),
  labels: z.array(CreateLabelParams).optional(),
  description: z.string().optional(),
  name: z.string().optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
});

export type UpdateKeyResult = z.infer<typeof UpdateKeyResult>;
export const UpdateKeyResult = z.object({
  name: z.string().optional(),
  initial_observed_value: KeyResultValue.optional(),
  observed_value: KeyResultValue.optional(),
  target_value: KeyResultValue.optional(),
});

export type UpdateLabel = z.infer<typeof UpdateLabel>;
export const UpdateLabel = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  color: z.union([z.string(), z.null()]).optional(),
  archived: z.boolean().optional(),
});

export type UpdateLinkedFile = z.infer<typeof UpdateLinkedFile>;
export const UpdateLinkedFile = z.object({
  description: z.string().optional(),
  story_id: z.number().optional(),
  name: z.string().optional(),
  thumbnail_url: z.string().optional(),
  type: z
    .union([z.literal("google"), z.literal("url"), z.literal("dropbox"), z.literal("box"), z.literal("onedrive")])
    .optional(),
  size: z.number().optional(),
  uploader_id: z.string().optional(),
  url: z.string().optional(),
});

export type UpdateMilestone = z.infer<typeof UpdateMilestone>;
export const UpdateMilestone = z.object({
  description: z.string().optional(),
  archived: z.boolean().optional(),
  completed_at_override: z.union([z.string(), z.null()]).optional(),
  name: z.string().optional(),
  state: z.union([z.literal("in progress"), z.literal("to do"), z.literal("done")]).optional(),
  started_at_override: z.union([z.string(), z.null()]).optional(),
  categories: z.array(CreateCategoryParams).optional(),
  before_id: z.number().optional(),
  after_id: z.number().optional(),
});

export type UpdateObjective = z.infer<typeof UpdateObjective>;
export const UpdateObjective = z.object({
  description: z.string().optional(),
  archived: z.boolean().optional(),
  completed_at_override: z.union([z.string(), z.null()]).optional(),
  name: z.string().optional(),
  state: z.union([z.literal("in progress"), z.literal("to do"), z.literal("done")]).optional(),
  started_at_override: z.union([z.string(), z.null()]).optional(),
  categories: z.array(CreateCategoryParams).optional(),
  before_id: z.number().optional(),
  after_id: z.number().optional(),
});

export type UpdateProject = z.infer<typeof UpdateProject>;
export const UpdateProject = z.object({
  description: z.string().optional(),
  archived: z.boolean().optional(),
  days_to_thermometer: z.number().optional(),
  color: z.string().optional(),
  name: z.string().optional(),
  follower_ids: z.array(z.string()).optional(),
  show_thermometer: z.boolean().optional(),
  team_id: z.number().optional(),
  abbreviation: z.string().optional(),
});

export type UpdateStories = z.infer<typeof UpdateStories>;
export const UpdateStories = z.object({
  archived: z.union([z.boolean(), z.undefined()]).optional(),
  story_ids: z.array(z.number()),
  story_type: z.union([z.literal("feature"), z.literal("chore"), z.literal("bug"), z.undefined()]).optional(),
  move_to: z.union([z.literal("last"), z.literal("first"), z.undefined()]).optional(),
  follower_ids_add: z.union([z.array(z.string()), z.undefined()]).optional(),
  epic_id: z.union([z.number(), z.null(), z.undefined()]).optional(),
  external_links: z.union([z.array(z.string()), z.undefined()]).optional(),
  follower_ids_remove: z.union([z.array(z.string()), z.undefined()]).optional(),
  requested_by_id: z.union([z.string(), z.undefined()]).optional(),
  iteration_id: z.union([z.number(), z.null(), z.undefined()]).optional(),
  custom_fields_remove: z.union([z.array(CustomFieldValueParams), z.undefined()]).optional(),
  labels_add: z.union([z.array(CreateLabelParams), z.undefined()]).optional(),
  group_id: z.union([z.string(), z.null(), z.undefined()]).optional(),
  workflow_state_id: z.union([z.number(), z.undefined()]).optional(),
  before_id: z.union([z.number(), z.undefined()]).optional(),
  estimate: z.union([z.number(), z.null(), z.undefined()]).optional(),
  after_id: z.union([z.number(), z.undefined()]).optional(),
  owner_ids_remove: z.union([z.array(z.string()), z.undefined()]).optional(),
  custom_fields_add: z.union([z.array(CustomFieldValueParams), z.undefined()]).optional(),
  project_id: z.union([z.number(), z.null(), z.undefined()]).optional(),
  labels_remove: z.union([z.array(CreateLabelParams), z.undefined()]).optional(),
  deadline: z.union([z.string(), z.null(), z.undefined()]).optional(),
  owner_ids_add: z.union([z.array(z.string()), z.undefined()]).optional(),
});

export type UpdateStory = z.infer<typeof UpdateStory>;
export const UpdateStory = z.object({
  description: z.string().optional(),
  archived: z.boolean().optional(),
  labels: z.array(CreateLabelParams).optional(),
  pull_request_ids: z.array(z.number()).optional(),
  story_type: z.union([z.literal("feature"), z.literal("chore"), z.literal("bug")]).optional(),
  custom_fields: z.array(CustomFieldValueParams).optional(),
  move_to: z.union([z.literal("last"), z.literal("first")]).optional(),
  file_ids: z.array(z.number()).optional(),
  completed_at_override: z.union([z.string(), z.null()]).optional(),
  name: z.string().optional(),
  epic_id: z.union([z.number(), z.null()]).optional(),
  external_links: z.array(z.string()).optional(),
  branch_ids: z.array(z.number()).optional(),
  commit_ids: z.array(z.number()).optional(),
  requested_by_id: z.string().optional(),
  iteration_id: z.union([z.number(), z.null()]).optional(),
  started_at_override: z.union([z.string(), z.null()]).optional(),
  group_id: z.union([z.string(), z.null()]).optional(),
  workflow_state_id: z.number().optional(),
  follower_ids: z.array(z.string()).optional(),
  owner_ids: z.array(z.string()).optional(),
  parent_story_id: z.union([z.number(), z.null()]).optional(),
  before_id: z.number().optional(),
  estimate: z.union([z.number(), z.null()]).optional(),
  after_id: z.number().optional(),
  project_id: z.union([z.number(), z.null()]).optional(),
  linked_file_ids: z.array(z.number()).optional(),
  deadline: z.union([z.string(), z.null()]).optional(),
});

export type UpdateStoryComment = z.infer<typeof UpdateStoryComment>;
export const UpdateStoryComment = z.object({
  text: z.string(),
});

export type UpdateStoryLink = z.infer<typeof UpdateStoryLink>;
export const UpdateStoryLink = z.object({
  verb: z.union([z.literal("blocks"), z.literal("duplicates"), z.literal("relates to")]).optional(),
  subject_id: z.number().optional(),
  object_id: z.number().optional(),
});

export type UpdateTask = z.infer<typeof UpdateTask>;
export const UpdateTask = z.object({
  description: z.string().optional(),
  owner_ids: z.array(z.string()).optional(),
  complete: z.boolean().optional(),
  before_id: z.number().optional(),
  after_id: z.number().optional(),
});

export type WorkflowState = z.infer<typeof WorkflowState>;
export const WorkflowState = z.object({
  description: z.string(),
  entity_type: z.string(),
  color: z.union([z.string(), z.undefined()]).optional(),
  verb: z.union([z.string(), z.null()]),
  name: z.string(),
  global_id: z.string(),
  num_stories: z.number(),
  type: z.string(),
  updated_at: z.string(),
  id: z.number(),
  num_story_templates: z.number(),
  position: z.number(),
  created_at: z.string(),
});

export type Workflow = z.infer<typeof Workflow>;
export const Workflow = z.object({
  description: z.string(),
  entity_type: z.string(),
  project_ids: z.array(z.number()),
  states: z.array(WorkflowState),
  name: z.string(),
  updated_at: z.string(),
  auto_assign_owner: z.boolean(),
  id: z.number(),
  team_id: z.number(),
  created_at: z.string(),
  default_state_id: z.number(),
});

export type get_ListCategories = typeof get_ListCategories;
export const get_ListCategories = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/categories"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.array(Category),
};

export type post_CreateCategory = typeof post_CreateCategory;
export const post_CreateCategory = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/categories"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: CreateCategory,
  }),
  response: Category,
};

export type get_GetCategory = typeof get_GetCategory;
export const get_GetCategory = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/categories/{category-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "category-public-id": z.number(),
    }),
  }),
  response: Category,
};

export type put_UpdateCategory = typeof put_UpdateCategory;
export const put_UpdateCategory = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/categories/{category-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "category-public-id": z.number(),
    }),
    body: UpdateCategory,
  }),
  response: Category,
};

export type delete_DeleteCategory = typeof delete_DeleteCategory;
export const delete_DeleteCategory = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/categories/{category-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "category-public-id": z.number(),
    }),
  }),
  response: z.unknown(),
};

export type get_ListCategoryMilestones = typeof get_ListCategoryMilestones;
export const get_ListCategoryMilestones = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/categories/{category-public-id}/milestones"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "category-public-id": z.number(),
    }),
  }),
  response: z.array(Milestone),
};

export type get_ListCategoryObjectives = typeof get_ListCategoryObjectives;
export const get_ListCategoryObjectives = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/categories/{category-public-id}/objectives"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "category-public-id": z.number(),
    }),
  }),
  response: z.array(Milestone),
};

export type get_ListCustomFields = typeof get_ListCustomFields;
export const get_ListCustomFields = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/custom-fields"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.array(CustomField),
};

export type get_GetCustomField = typeof get_GetCustomField;
export const get_GetCustomField = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/custom-fields/{custom-field-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "custom-field-public-id": z.string(),
    }),
  }),
  response: CustomField,
};

export type put_UpdateCustomField = typeof put_UpdateCustomField;
export const put_UpdateCustomField = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/custom-fields/{custom-field-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "custom-field-public-id": z.string(),
    }),
    body: UpdateCustomField,
  }),
  response: CustomField,
};

export type delete_DeleteCustomField = typeof delete_DeleteCustomField;
export const delete_DeleteCustomField = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/custom-fields/{custom-field-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "custom-field-public-id": z.string(),
    }),
  }),
  response: z.unknown(),
};

export type get_ListEntityTemplates = typeof get_ListEntityTemplates;
export const get_ListEntityTemplates = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/entity-templates"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.array(EntityTemplate),
};

export type post_CreateEntityTemplate = typeof post_CreateEntityTemplate;
export const post_CreateEntityTemplate = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/entity-templates"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: CreateEntityTemplate,
  }),
  response: EntityTemplate,
};

export type put_DisableStoryTemplates = typeof put_DisableStoryTemplates;
export const put_DisableStoryTemplates = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/entity-templates/disable"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.unknown(),
};

export type put_EnableStoryTemplates = typeof put_EnableStoryTemplates;
export const put_EnableStoryTemplates = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/entity-templates/enable"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.unknown(),
};

export type get_GetEntityTemplate = typeof get_GetEntityTemplate;
export const get_GetEntityTemplate = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/entity-templates/{entity-template-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "entity-template-public-id": z.string(),
    }),
  }),
  response: EntityTemplate,
};

export type put_UpdateEntityTemplate = typeof put_UpdateEntityTemplate;
export const put_UpdateEntityTemplate = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/entity-templates/{entity-template-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "entity-template-public-id": z.string(),
    }),
    body: UpdateEntityTemplate,
  }),
  response: EntityTemplate,
};

export type delete_DeleteEntityTemplate = typeof delete_DeleteEntityTemplate;
export const delete_DeleteEntityTemplate = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/entity-templates/{entity-template-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "entity-template-public-id": z.string(),
    }),
  }),
  response: z.unknown(),
};

export type get_GetEpicWorkflow = typeof get_GetEpicWorkflow;
export const get_GetEpicWorkflow = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/epic-workflow"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: EpicWorkflow,
};

export type get_ListEpics = typeof get_ListEpics;
export const get_ListEpics = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/epics"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      includes_description: z.boolean().optional(),
    }),
  }),
  response: z.array(EpicSlim),
};

export type post_CreateEpic = typeof post_CreateEpic;
export const post_CreateEpic = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/epics"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: CreateEpic,
  }),
  response: Epic,
};

export type get_GetEpic = typeof get_GetEpic;
export const get_GetEpic = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/epics/{epic-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "epic-public-id": z.number(),
    }),
  }),
  response: Epic,
};

export type put_UpdateEpic = typeof put_UpdateEpic;
export const put_UpdateEpic = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/epics/{epic-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "epic-public-id": z.number(),
    }),
    body: UpdateEpic,
  }),
  response: Epic,
};

export type delete_DeleteEpic = typeof delete_DeleteEpic;
export const delete_DeleteEpic = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/epics/{epic-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "epic-public-id": z.number(),
    }),
  }),
  response: z.unknown(),
};

export type get_ListEpicComments = typeof get_ListEpicComments;
export const get_ListEpicComments = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/epics/{epic-public-id}/comments"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "epic-public-id": z.number(),
    }),
  }),
  response: z.array(ThreadedComment),
};

export type post_CreateEpicComment = typeof post_CreateEpicComment;
export const post_CreateEpicComment = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/epics/{epic-public-id}/comments"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "epic-public-id": z.number(),
    }),
    body: CreateEpicComment,
  }),
  response: ThreadedComment,
};

export type post_CreateEpicCommentComment = typeof post_CreateEpicCommentComment;
export const post_CreateEpicCommentComment = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "epic-public-id": z.number(),
      "comment-public-id": z.number(),
    }),
    body: CreateCommentComment,
  }),
  response: ThreadedComment,
};

export type get_GetEpicComment = typeof get_GetEpicComment;
export const get_GetEpicComment = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "epic-public-id": z.number(),
      "comment-public-id": z.number(),
    }),
  }),
  response: ThreadedComment,
};

export type put_UpdateEpicComment = typeof put_UpdateEpicComment;
export const put_UpdateEpicComment = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "epic-public-id": z.number(),
      "comment-public-id": z.number(),
    }),
    body: UpdateComment,
  }),
  response: ThreadedComment,
};

export type delete_DeleteEpicComment = typeof delete_DeleteEpicComment;
export const delete_DeleteEpicComment = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/epics/{epic-public-id}/comments/{comment-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "epic-public-id": z.number(),
      "comment-public-id": z.number(),
    }),
  }),
  response: z.unknown(),
};

export type get_ListEpicStories = typeof get_ListEpicStories;
export const get_ListEpicStories = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/epics/{epic-public-id}/stories"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      includes_description: z.boolean().optional(),
    }),
    path: z.object({
      "epic-public-id": z.number(),
    }),
  }),
  response: z.array(StorySlim),
};

export type post_UnlinkProductboardFromEpic = typeof post_UnlinkProductboardFromEpic;
export const post_UnlinkProductboardFromEpic = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/epics/{epic-public-id}/unlink-productboard"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "epic-public-id": z.number(),
    }),
  }),
  response: z.unknown(),
};

export type get_GetExternalLinkStories = typeof get_GetExternalLinkStories;
export const get_GetExternalLinkStories = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/external-link/stories"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      external_link: z.string(),
    }),
  }),
  response: z.array(StorySlim),
};

export type get_ListFiles = typeof get_ListFiles;
export const get_ListFiles = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/files"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.array(UploadedFile),
};

export type post_UploadFiles = typeof post_UploadFiles;
export const post_UploadFiles = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/files"),
  requestFormat: z.literal("form-data"),
  parameters: z.object({
    body: z.object({
      story_id: z.union([z.number(), z.undefined()]).optional(),
      file0: z.string(),
      file1: z.union([z.string(), z.undefined()]).optional(),
      file2: z.union([z.string(), z.undefined()]).optional(),
      file3: z.union([z.string(), z.undefined()]).optional(),
    }),
  }),
  response: z.array(UploadedFile),
};

export type get_GetFile = typeof get_GetFile;
export const get_GetFile = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/files/{file-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "file-public-id": z.number(),
    }),
  }),
  response: UploadedFile,
};

export type put_UpdateFile = typeof put_UpdateFile;
export const put_UpdateFile = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/files/{file-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "file-public-id": z.number(),
    }),
    body: UpdateFile,
  }),
  response: UploadedFile,
};

export type delete_DeleteFile = typeof delete_DeleteFile;
export const delete_DeleteFile = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/files/{file-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "file-public-id": z.number(),
    }),
  }),
  response: z.unknown(),
};

export type get_ListGroups = typeof get_ListGroups;
export const get_ListGroups = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/groups"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.array(Group),
};

export type post_CreateGroup = typeof post_CreateGroup;
export const post_CreateGroup = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/groups"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: CreateGroup,
  }),
  response: Group,
};

export type get_GetGroup = typeof get_GetGroup;
export const get_GetGroup = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/groups/{group-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "group-public-id": z.string(),
    }),
  }),
  response: Group,
};

export type put_UpdateGroup = typeof put_UpdateGroup;
export const put_UpdateGroup = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/groups/{group-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "group-public-id": z.string(),
    }),
    body: UpdateGroup,
  }),
  response: Group,
};

export type get_ListGroupStories = typeof get_ListGroupStories;
export const get_ListGroupStories = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/groups/{group-public-id}/stories"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      limit: z.number().optional(),
      offset: z.number().optional(),
    }),
    path: z.object({
      "group-public-id": z.string(),
    }),
  }),
  response: z.array(StorySlim),
};

export type post_CreateGenericIntegration = typeof post_CreateGenericIntegration;
export const post_CreateGenericIntegration = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/integrations/webhook"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: CreateGenericIntegration,
  }),
  response: z.unknown(),
};

export type get_GetGenericIntegration = typeof get_GetGenericIntegration;
export const get_GetGenericIntegration = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/integrations/webhook/{integration-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "integration-public-id": z.number(),
    }),
  }),
  response: z.unknown(),
};

export type delete_DeleteGenericIntegration = typeof delete_DeleteGenericIntegration;
export const delete_DeleteGenericIntegration = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/integrations/webhook/{integration-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "integration-public-id": z.number(),
    }),
  }),
  response: z.unknown(),
};

export type get_ListIterations = typeof get_ListIterations;
export const get_ListIterations = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/iterations"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.array(IterationSlim),
};

export type post_CreateIteration = typeof post_CreateIteration;
export const post_CreateIteration = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/iterations"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: CreateIteration,
  }),
  response: Iteration,
};

export type put_DisableIterations = typeof put_DisableIterations;
export const put_DisableIterations = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/iterations/disable"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.unknown(),
};

export type put_EnableIterations = typeof put_EnableIterations;
export const put_EnableIterations = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/iterations/enable"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.unknown(),
};

export type get_GetIteration = typeof get_GetIteration;
export const get_GetIteration = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/iterations/{iteration-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "iteration-public-id": z.number(),
    }),
  }),
  response: Iteration,
};

export type put_UpdateIteration = typeof put_UpdateIteration;
export const put_UpdateIteration = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/iterations/{iteration-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "iteration-public-id": z.number(),
    }),
    body: UpdateIteration,
  }),
  response: Iteration,
};

export type delete_DeleteIteration = typeof delete_DeleteIteration;
export const delete_DeleteIteration = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/iterations/{iteration-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "iteration-public-id": z.number(),
    }),
  }),
  response: z.unknown(),
};

export type get_ListIterationStories = typeof get_ListIterationStories;
export const get_ListIterationStories = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/iterations/{iteration-public-id}/stories"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      includes_description: z.boolean().optional(),
    }),
    path: z.object({
      "iteration-public-id": z.number(),
    }),
  }),
  response: z.array(StorySlim),
};

export type get_GetKeyResult = typeof get_GetKeyResult;
export const get_GetKeyResult = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/key-results/{key-result-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "key-result-public-id": z.string(),
    }),
  }),
  response: KeyResult,
};

export type put_UpdateKeyResult = typeof put_UpdateKeyResult;
export const put_UpdateKeyResult = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/key-results/{key-result-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "key-result-public-id": z.string(),
    }),
    body: UpdateKeyResult,
  }),
  response: KeyResult,
};

export type get_ListLabels = typeof get_ListLabels;
export const get_ListLabels = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/labels"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      slim: z.boolean().optional(),
    }),
  }),
  response: z.array(Label),
};

export type post_CreateLabel = typeof post_CreateLabel;
export const post_CreateLabel = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/labels"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: CreateLabelParams,
  }),
  response: Label,
};

export type get_GetLabel = typeof get_GetLabel;
export const get_GetLabel = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/labels/{label-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "label-public-id": z.number(),
    }),
  }),
  response: Label,
};

export type put_UpdateLabel = typeof put_UpdateLabel;
export const put_UpdateLabel = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/labels/{label-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "label-public-id": z.number(),
    }),
    body: UpdateLabel,
  }),
  response: Label,
};

export type delete_DeleteLabel = typeof delete_DeleteLabel;
export const delete_DeleteLabel = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/labels/{label-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "label-public-id": z.number(),
    }),
  }),
  response: z.unknown(),
};

export type get_ListLabelEpics = typeof get_ListLabelEpics;
export const get_ListLabelEpics = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/labels/{label-public-id}/epics"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "label-public-id": z.number(),
    }),
  }),
  response: z.array(EpicSlim),
};

export type get_ListLabelStories = typeof get_ListLabelStories;
export const get_ListLabelStories = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/labels/{label-public-id}/stories"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      includes_description: z.boolean().optional(),
    }),
    path: z.object({
      "label-public-id": z.number(),
    }),
  }),
  response: z.array(StorySlim),
};

export type get_ListLinkedFiles = typeof get_ListLinkedFiles;
export const get_ListLinkedFiles = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/linked-files"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.array(LinkedFile),
};

export type post_CreateLinkedFile = typeof post_CreateLinkedFile;
export const post_CreateLinkedFile = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/linked-files"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: CreateLinkedFile,
  }),
  response: LinkedFile,
};

export type get_GetLinkedFile = typeof get_GetLinkedFile;
export const get_GetLinkedFile = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/linked-files/{linked-file-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "linked-file-public-id": z.number(),
    }),
  }),
  response: LinkedFile,
};

export type put_UpdateLinkedFile = typeof put_UpdateLinkedFile;
export const put_UpdateLinkedFile = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/linked-files/{linked-file-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "linked-file-public-id": z.number(),
    }),
    body: UpdateLinkedFile,
  }),
  response: LinkedFile,
};

export type delete_DeleteLinkedFile = typeof delete_DeleteLinkedFile;
export const delete_DeleteLinkedFile = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/linked-files/{linked-file-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "linked-file-public-id": z.number(),
    }),
  }),
  response: z.unknown(),
};

export type get_GetCurrentMemberInfo = typeof get_GetCurrentMemberInfo;
export const get_GetCurrentMemberInfo = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/member"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: MemberInfo,
};

export type get_ListMembers = typeof get_ListMembers;
export const get_ListMembers = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/members"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      "org-public-id": z.string().optional(),
    }),
  }),
  response: z.array(Member),
};

export type get_GetMember = typeof get_GetMember;
export const get_GetMember = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/members/{member-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      "org-public-id": z.string().optional(),
    }),
    path: z.object({
      "member-public-id": z.string(),
    }),
  }),
  response: Member,
};

export type get_ListMilestones = typeof get_ListMilestones;
export const get_ListMilestones = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/milestones"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.array(Milestone),
};

export type post_CreateMilestone = typeof post_CreateMilestone;
export const post_CreateMilestone = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/milestones"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: CreateMilestone,
  }),
  response: Milestone,
};

export type get_GetMilestone = typeof get_GetMilestone;
export const get_GetMilestone = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/milestones/{milestone-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "milestone-public-id": z.number(),
    }),
  }),
  response: Milestone,
};

export type put_UpdateMilestone = typeof put_UpdateMilestone;
export const put_UpdateMilestone = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/milestones/{milestone-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "milestone-public-id": z.number(),
    }),
    body: UpdateMilestone,
  }),
  response: Milestone,
};

export type delete_DeleteMilestone = typeof delete_DeleteMilestone;
export const delete_DeleteMilestone = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/milestones/{milestone-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "milestone-public-id": z.number(),
    }),
  }),
  response: z.unknown(),
};

export type get_ListMilestoneEpics = typeof get_ListMilestoneEpics;
export const get_ListMilestoneEpics = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/milestones/{milestone-public-id}/epics"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "milestone-public-id": z.number(),
    }),
  }),
  response: z.array(EpicSlim),
};

export type get_ListObjectives = typeof get_ListObjectives;
export const get_ListObjectives = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/objectives"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.array(Objective),
};

export type post_CreateObjective = typeof post_CreateObjective;
export const post_CreateObjective = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/objectives"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: CreateObjective,
  }),
  response: Objective,
};

export type get_GetObjective = typeof get_GetObjective;
export const get_GetObjective = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/objectives/{objective-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "objective-public-id": z.number(),
    }),
  }),
  response: Objective,
};

export type put_UpdateObjective = typeof put_UpdateObjective;
export const put_UpdateObjective = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/objectives/{objective-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "objective-public-id": z.number(),
    }),
    body: UpdateObjective,
  }),
  response: Objective,
};

export type delete_DeleteObjective = typeof delete_DeleteObjective;
export const delete_DeleteObjective = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/objectives/{objective-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "objective-public-id": z.number(),
    }),
  }),
  response: z.unknown(),
};

export type get_ListObjectiveEpics = typeof get_ListObjectiveEpics;
export const get_ListObjectiveEpics = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/objectives/{objective-public-id}/epics"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "objective-public-id": z.number(),
    }),
  }),
  response: z.array(EpicSlim),
};

export type get_ListProjects = typeof get_ListProjects;
export const get_ListProjects = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/projects"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.array(Project),
};

export type post_CreateProject = typeof post_CreateProject;
export const post_CreateProject = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/projects"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: CreateProject,
  }),
  response: Project,
};

export type get_GetProject = typeof get_GetProject;
export const get_GetProject = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/projects/{project-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "project-public-id": z.number(),
    }),
  }),
  response: Project,
};

export type put_UpdateProject = typeof put_UpdateProject;
export const put_UpdateProject = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/projects/{project-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "project-public-id": z.number(),
    }),
    body: UpdateProject,
  }),
  response: Project,
};

export type delete_DeleteProject = typeof delete_DeleteProject;
export const delete_DeleteProject = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/projects/{project-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "project-public-id": z.number(),
    }),
  }),
  response: z.unknown(),
};

export type get_ListStories = typeof get_ListStories;
export const get_ListStories = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/projects/{project-public-id}/stories"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      includes_description: z.boolean().optional(),
    }),
    path: z.object({
      "project-public-id": z.number(),
    }),
  }),
  response: z.array(StorySlim),
};

export type get_ListRepositories = typeof get_ListRepositories;
export const get_ListRepositories = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/repositories"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.array(Repository),
};

export type get_GetRepository = typeof get_GetRepository;
export const get_GetRepository = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/repositories/{repo-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "repo-public-id": z.number(),
    }),
  }),
  response: Repository,
};

export type get_Search = typeof get_Search;
export const get_Search = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/search"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      query: z.string(),
      page_size: z.union([z.number(), z.undefined()]),
      detail: z.union([z.literal("full"), z.literal("slim"), z.undefined()]),
      next: z.union([z.string(), z.undefined()]),
      entity_types: z.union([
        z.array(
          z.union([
            z.literal("story"),
            z.literal("milestone"),
            z.literal("epic"),
            z.literal("iteration"),
            z.literal("objective"),
          ]),
        ),
        z.undefined(),
      ]),
    }),
  }),
  response: SearchResults,
};

export type get_SearchEpics = typeof get_SearchEpics;
export const get_SearchEpics = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/search/epics"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      query: z.string(),
      page_size: z.union([z.number(), z.undefined()]),
      detail: z.union([z.literal("full"), z.literal("slim"), z.undefined()]),
      next: z.union([z.string(), z.undefined()]),
      entity_types: z.union([
        z.array(
          z.union([
            z.literal("story"),
            z.literal("milestone"),
            z.literal("epic"),
            z.literal("iteration"),
            z.literal("objective"),
          ]),
        ),
        z.undefined(),
      ]),
    }),
  }),
  response: EpicSearchResults,
};

export type get_SearchIterations = typeof get_SearchIterations;
export const get_SearchIterations = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/search/iterations"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      query: z.string(),
      page_size: z.union([z.number(), z.undefined()]),
      detail: z.union([z.literal("full"), z.literal("slim"), z.undefined()]),
      next: z.union([z.string(), z.undefined()]),
      entity_types: z.union([
        z.array(
          z.union([
            z.literal("story"),
            z.literal("milestone"),
            z.literal("epic"),
            z.literal("iteration"),
            z.literal("objective"),
          ]),
        ),
        z.undefined(),
      ]),
    }),
  }),
  response: IterationSearchResults,
};

export type get_SearchMilestones = typeof get_SearchMilestones;
export const get_SearchMilestones = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/search/milestones"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      query: z.string(),
      page_size: z.union([z.number(), z.undefined()]),
      detail: z.union([z.literal("full"), z.literal("slim"), z.undefined()]),
      next: z.union([z.string(), z.undefined()]),
      entity_types: z.union([
        z.array(
          z.union([
            z.literal("story"),
            z.literal("milestone"),
            z.literal("epic"),
            z.literal("iteration"),
            z.literal("objective"),
          ]),
        ),
        z.undefined(),
      ]),
    }),
  }),
  response: ObjectiveSearchResults,
};

export type get_SearchObjectives = typeof get_SearchObjectives;
export const get_SearchObjectives = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/search/objectives"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      query: z.string(),
      page_size: z.union([z.number(), z.undefined()]),
      detail: z.union([z.literal("full"), z.literal("slim"), z.undefined()]),
      next: z.union([z.string(), z.undefined()]),
      entity_types: z.union([
        z.array(
          z.union([
            z.literal("story"),
            z.literal("milestone"),
            z.literal("epic"),
            z.literal("iteration"),
            z.literal("objective"),
          ]),
        ),
        z.undefined(),
      ]),
    }),
  }),
  response: ObjectiveSearchResults,
};

export type get_SearchStories = typeof get_SearchStories;
export const get_SearchStories = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/search/stories"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    query: z.object({
      query: z.string(),
      page_size: z.union([z.number(), z.undefined()]),
      detail: z.union([z.literal("full"), z.literal("slim"), z.undefined()]),
      next: z.union([z.string(), z.undefined()]),
      entity_types: z.union([
        z.array(
          z.union([
            z.literal("story"),
            z.literal("milestone"),
            z.literal("epic"),
            z.literal("iteration"),
            z.literal("objective"),
          ]),
        ),
        z.undefined(),
      ]),
    }),
  }),
  response: StorySearchResults,
};

export type post_CreateStory = typeof post_CreateStory;
export const post_CreateStory = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/stories"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: CreateStoryParams,
  }),
  response: Story,
};

export type post_CreateMultipleStories = typeof post_CreateMultipleStories;
export const post_CreateMultipleStories = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/stories/bulk"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: CreateStories,
  }),
  response: z.array(StorySlim),
};

export type put_UpdateMultipleStories = typeof put_UpdateMultipleStories;
export const put_UpdateMultipleStories = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/stories/bulk"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: UpdateStories,
  }),
  response: z.array(StorySlim),
};

export type delete_DeleteMultipleStories = typeof delete_DeleteMultipleStories;
export const delete_DeleteMultipleStories = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/stories/bulk"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: DeleteStories,
  }),
  response: z.unknown(),
};

export type post_CreateStoryFromTemplate = typeof post_CreateStoryFromTemplate;
export const post_CreateStoryFromTemplate = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/stories/from-template"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: CreateStoryFromTemplateParams,
  }),
  response: Story,
};

export type post_SearchStoriesOld = typeof post_SearchStoriesOld;
export const post_SearchStoriesOld = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/stories/search"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: SearchStories,
  }),
  response: z.array(StorySlim),
};

export type get_GetStory = typeof get_GetStory;
export const get_GetStory = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/stories/{story-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-public-id": z.number(),
    }),
  }),
  response: Story,
};

export type put_UpdateStory = typeof put_UpdateStory;
export const put_UpdateStory = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/stories/{story-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-public-id": z.number(),
    }),
    body: UpdateStory,
  }),
  response: Story,
};

export type delete_DeleteStory = typeof delete_DeleteStory;
export const delete_DeleteStory = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/stories/{story-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-public-id": z.number(),
    }),
  }),
  response: z.unknown(),
};

export type get_ListStoryComment = typeof get_ListStoryComment;
export const get_ListStoryComment = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/stories/{story-public-id}/comments"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-public-id": z.number(),
    }),
  }),
  response: z.array(StoryComment),
};

export type post_CreateStoryComment = typeof post_CreateStoryComment;
export const post_CreateStoryComment = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/stories/{story-public-id}/comments"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-public-id": z.number(),
    }),
    body: CreateStoryComment,
  }),
  response: StoryComment,
};

export type get_GetStoryComment = typeof get_GetStoryComment;
export const get_GetStoryComment = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/stories/{story-public-id}/comments/{comment-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-public-id": z.number(),
      "comment-public-id": z.number(),
    }),
  }),
  response: StoryComment,
};

export type put_UpdateStoryComment = typeof put_UpdateStoryComment;
export const put_UpdateStoryComment = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/stories/{story-public-id}/comments/{comment-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-public-id": z.number(),
      "comment-public-id": z.number(),
    }),
    body: UpdateStoryComment,
  }),
  response: StoryComment,
};

export type delete_DeleteStoryComment = typeof delete_DeleteStoryComment;
export const delete_DeleteStoryComment = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/stories/{story-public-id}/comments/{comment-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-public-id": z.number(),
      "comment-public-id": z.number(),
    }),
  }),
  response: z.unknown(),
};

export type post_CreateStoryReaction = typeof post_CreateStoryReaction;
export const post_CreateStoryReaction = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-public-id": z.number(),
      "comment-public-id": z.number(),
    }),
    body: CreateOrDeleteStoryReaction,
  }),
  response: z.array(StoryReaction),
};

export type delete_DeleteStoryReaction = typeof delete_DeleteStoryReaction;
export const delete_DeleteStoryReaction = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-public-id": z.number(),
      "comment-public-id": z.number(),
    }),
    body: CreateOrDeleteStoryReaction,
  }),
  response: z.unknown(),
};

export type post_UnlinkCommentThreadFromSlack = typeof post_UnlinkCommentThreadFromSlack;
export const post_UnlinkCommentThreadFromSlack = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-public-id": z.number(),
      "comment-public-id": z.number(),
    }),
  }),
  response: StoryComment,
};

export type get_StoryHistory = typeof get_StoryHistory;
export const get_StoryHistory = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/stories/{story-public-id}/history"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-public-id": z.number(),
    }),
  }),
  response: z.array(History),
};

export type post_CreateTask = typeof post_CreateTask;
export const post_CreateTask = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/stories/{story-public-id}/tasks"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-public-id": z.number(),
    }),
    body: CreateTask,
  }),
  response: Task,
};

export type get_GetTask = typeof get_GetTask;
export const get_GetTask = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/stories/{story-public-id}/tasks/{task-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-public-id": z.number(),
      "task-public-id": z.number(),
    }),
  }),
  response: Task,
};

export type put_UpdateTask = typeof put_UpdateTask;
export const put_UpdateTask = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/stories/{story-public-id}/tasks/{task-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-public-id": z.number(),
      "task-public-id": z.number(),
    }),
    body: UpdateTask,
  }),
  response: Task,
};

export type delete_DeleteTask = typeof delete_DeleteTask;
export const delete_DeleteTask = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/stories/{story-public-id}/tasks/{task-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-public-id": z.number(),
      "task-public-id": z.number(),
    }),
  }),
  response: z.unknown(),
};

export type post_CreateStoryLink = typeof post_CreateStoryLink;
export const post_CreateStoryLink = {
  method: z.literal("POST"),
  path: z.literal("/api/v3/story-links"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    body: CreateStoryLink,
  }),
  response: StoryLink,
};

export type get_GetStoryLink = typeof get_GetStoryLink;
export const get_GetStoryLink = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/story-links/{story-link-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-link-public-id": z.number(),
    }),
  }),
  response: StoryLink,
};

export type put_UpdateStoryLink = typeof put_UpdateStoryLink;
export const put_UpdateStoryLink = {
  method: z.literal("PUT"),
  path: z.literal("/api/v3/story-links/{story-link-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-link-public-id": z.number(),
    }),
    body: UpdateStoryLink,
  }),
  response: StoryLink,
};

export type delete_DeleteStoryLink = typeof delete_DeleteStoryLink;
export const delete_DeleteStoryLink = {
  method: z.literal("DELETE"),
  path: z.literal("/api/v3/story-links/{story-link-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "story-link-public-id": z.number(),
    }),
  }),
  response: z.unknown(),
};

export type get_ListWorkflows = typeof get_ListWorkflows;
export const get_ListWorkflows = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/workflows"),
  requestFormat: z.literal("json"),
  parameters: z.never(),
  response: z.array(Workflow),
};

export type get_GetWorkflow = typeof get_GetWorkflow;
export const get_GetWorkflow = {
  method: z.literal("GET"),
  path: z.literal("/api/v3/workflows/{workflow-public-id}"),
  requestFormat: z.literal("json"),
  parameters: z.object({
    path: z.object({
      "workflow-public-id": z.number(),
    }),
  }),
  response: Workflow,
};

// <EndpointByMethod>
export const EndpointByMethod = {
  get: {
    "/api/v3/categories": get_ListCategories,
    "/api/v3/categories/{category-public-id}": get_GetCategory,
    "/api/v3/categories/{category-public-id}/milestones": get_ListCategoryMilestones,
    "/api/v3/categories/{category-public-id}/objectives": get_ListCategoryObjectives,
    "/api/v3/custom-fields": get_ListCustomFields,
    "/api/v3/custom-fields/{custom-field-public-id}": get_GetCustomField,
    "/api/v3/entity-templates": get_ListEntityTemplates,
    "/api/v3/entity-templates/{entity-template-public-id}": get_GetEntityTemplate,
    "/api/v3/epic-workflow": get_GetEpicWorkflow,
    "/api/v3/epics": get_ListEpics,
    "/api/v3/epics/{epic-public-id}": get_GetEpic,
    "/api/v3/epics/{epic-public-id}/comments": get_ListEpicComments,
    "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}": get_GetEpicComment,
    "/api/v3/epics/{epic-public-id}/stories": get_ListEpicStories,
    "/api/v3/external-link/stories": get_GetExternalLinkStories,
    "/api/v3/files": get_ListFiles,
    "/api/v3/files/{file-public-id}": get_GetFile,
    "/api/v3/groups": get_ListGroups,
    "/api/v3/groups/{group-public-id}": get_GetGroup,
    "/api/v3/groups/{group-public-id}/stories": get_ListGroupStories,
    "/api/v3/integrations/webhook/{integration-public-id}": get_GetGenericIntegration,
    "/api/v3/iterations": get_ListIterations,
    "/api/v3/iterations/{iteration-public-id}": get_GetIteration,
    "/api/v3/iterations/{iteration-public-id}/stories": get_ListIterationStories,
    "/api/v3/key-results/{key-result-public-id}": get_GetKeyResult,
    "/api/v3/labels": get_ListLabels,
    "/api/v3/labels/{label-public-id}": get_GetLabel,
    "/api/v3/labels/{label-public-id}/epics": get_ListLabelEpics,
    "/api/v3/labels/{label-public-id}/stories": get_ListLabelStories,
    "/api/v3/linked-files": get_ListLinkedFiles,
    "/api/v3/linked-files/{linked-file-public-id}": get_GetLinkedFile,
    "/api/v3/member": get_GetCurrentMemberInfo,
    "/api/v3/members": get_ListMembers,
    "/api/v3/members/{member-public-id}": get_GetMember,
    "/api/v3/milestones": get_ListMilestones,
    "/api/v3/milestones/{milestone-public-id}": get_GetMilestone,
    "/api/v3/milestones/{milestone-public-id}/epics": get_ListMilestoneEpics,
    "/api/v3/objectives": get_ListObjectives,
    "/api/v3/objectives/{objective-public-id}": get_GetObjective,
    "/api/v3/objectives/{objective-public-id}/epics": get_ListObjectiveEpics,
    "/api/v3/projects": get_ListProjects,
    "/api/v3/projects/{project-public-id}": get_GetProject,
    "/api/v3/projects/{project-public-id}/stories": get_ListStories,
    "/api/v3/repositories": get_ListRepositories,
    "/api/v3/repositories/{repo-public-id}": get_GetRepository,
    "/api/v3/search": get_Search,
    "/api/v3/search/epics": get_SearchEpics,
    "/api/v3/search/iterations": get_SearchIterations,
    "/api/v3/search/milestones": get_SearchMilestones,
    "/api/v3/search/objectives": get_SearchObjectives,
    "/api/v3/search/stories": get_SearchStories,
    "/api/v3/stories/{story-public-id}": get_GetStory,
    "/api/v3/stories/{story-public-id}/comments": get_ListStoryComment,
    "/api/v3/stories/{story-public-id}/comments/{comment-public-id}": get_GetStoryComment,
    "/api/v3/stories/{story-public-id}/history": get_StoryHistory,
    "/api/v3/stories/{story-public-id}/tasks/{task-public-id}": get_GetTask,
    "/api/v3/story-links/{story-link-public-id}": get_GetStoryLink,
    "/api/v3/workflows": get_ListWorkflows,
    "/api/v3/workflows/{workflow-public-id}": get_GetWorkflow,
  },
  post: {
    "/api/v3/categories": post_CreateCategory,
    "/api/v3/entity-templates": post_CreateEntityTemplate,
    "/api/v3/epics": post_CreateEpic,
    "/api/v3/epics/{epic-public-id}/comments": post_CreateEpicComment,
    "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}": post_CreateEpicCommentComment,
    "/api/v3/epics/{epic-public-id}/unlink-productboard": post_UnlinkProductboardFromEpic,
    "/api/v3/files": post_UploadFiles,
    "/api/v3/groups": post_CreateGroup,
    "/api/v3/integrations/webhook": post_CreateGenericIntegration,
    "/api/v3/iterations": post_CreateIteration,
    "/api/v3/labels": post_CreateLabel,
    "/api/v3/linked-files": post_CreateLinkedFile,
    "/api/v3/milestones": post_CreateMilestone,
    "/api/v3/objectives": post_CreateObjective,
    "/api/v3/projects": post_CreateProject,
    "/api/v3/stories": post_CreateStory,
    "/api/v3/stories/bulk": post_CreateMultipleStories,
    "/api/v3/stories/from-template": post_CreateStoryFromTemplate,
    "/api/v3/stories/search": post_SearchStoriesOld,
    "/api/v3/stories/{story-public-id}/comments": post_CreateStoryComment,
    "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions": post_CreateStoryReaction,
    "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack":
      post_UnlinkCommentThreadFromSlack,
    "/api/v3/stories/{story-public-id}/tasks": post_CreateTask,
    "/api/v3/story-links": post_CreateStoryLink,
  },
  put: {
    "/api/v3/categories/{category-public-id}": put_UpdateCategory,
    "/api/v3/custom-fields/{custom-field-public-id}": put_UpdateCustomField,
    "/api/v3/entity-templates/disable": put_DisableStoryTemplates,
    "/api/v3/entity-templates/enable": put_EnableStoryTemplates,
    "/api/v3/entity-templates/{entity-template-public-id}": put_UpdateEntityTemplate,
    "/api/v3/epics/{epic-public-id}": put_UpdateEpic,
    "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}": put_UpdateEpicComment,
    "/api/v3/files/{file-public-id}": put_UpdateFile,
    "/api/v3/groups/{group-public-id}": put_UpdateGroup,
    "/api/v3/iterations/disable": put_DisableIterations,
    "/api/v3/iterations/enable": put_EnableIterations,
    "/api/v3/iterations/{iteration-public-id}": put_UpdateIteration,
    "/api/v3/key-results/{key-result-public-id}": put_UpdateKeyResult,
    "/api/v3/labels/{label-public-id}": put_UpdateLabel,
    "/api/v3/linked-files/{linked-file-public-id}": put_UpdateLinkedFile,
    "/api/v3/milestones/{milestone-public-id}": put_UpdateMilestone,
    "/api/v3/objectives/{objective-public-id}": put_UpdateObjective,
    "/api/v3/projects/{project-public-id}": put_UpdateProject,
    "/api/v3/stories/bulk": put_UpdateMultipleStories,
    "/api/v3/stories/{story-public-id}": put_UpdateStory,
    "/api/v3/stories/{story-public-id}/comments/{comment-public-id}": put_UpdateStoryComment,
    "/api/v3/stories/{story-public-id}/tasks/{task-public-id}": put_UpdateTask,
    "/api/v3/story-links/{story-link-public-id}": put_UpdateStoryLink,
  },
  delete: {
    "/api/v3/categories/{category-public-id}": delete_DeleteCategory,
    "/api/v3/custom-fields/{custom-field-public-id}": delete_DeleteCustomField,
    "/api/v3/entity-templates/{entity-template-public-id}": delete_DeleteEntityTemplate,
    "/api/v3/epics/{epic-public-id}": delete_DeleteEpic,
    "/api/v3/epics/{epic-public-id}/comments/{comment-public-id}": delete_DeleteEpicComment,
    "/api/v3/files/{file-public-id}": delete_DeleteFile,
    "/api/v3/integrations/webhook/{integration-public-id}": delete_DeleteGenericIntegration,
    "/api/v3/iterations/{iteration-public-id}": delete_DeleteIteration,
    "/api/v3/labels/{label-public-id}": delete_DeleteLabel,
    "/api/v3/linked-files/{linked-file-public-id}": delete_DeleteLinkedFile,
    "/api/v3/milestones/{milestone-public-id}": delete_DeleteMilestone,
    "/api/v3/objectives/{objective-public-id}": delete_DeleteObjective,
    "/api/v3/projects/{project-public-id}": delete_DeleteProject,
    "/api/v3/stories/bulk": delete_DeleteMultipleStories,
    "/api/v3/stories/{story-public-id}": delete_DeleteStory,
    "/api/v3/stories/{story-public-id}/comments/{comment-public-id}": delete_DeleteStoryComment,
    "/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions": delete_DeleteStoryReaction,
    "/api/v3/stories/{story-public-id}/tasks/{task-public-id}": delete_DeleteTask,
    "/api/v3/story-links/{story-link-public-id}": delete_DeleteStoryLink,
  },
};
export type EndpointByMethod = typeof EndpointByMethod;
// </EndpointByMethod>

// <EndpointByMethod.Shorthands>
export type GetEndpoints = EndpointByMethod["get"];
export type PostEndpoints = EndpointByMethod["post"];
export type PutEndpoints = EndpointByMethod["put"];
export type DeleteEndpoints = EndpointByMethod["delete"];
export type AllEndpoints = EndpointByMethod[keyof EndpointByMethod];
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export type EndpointParameters = {
  body?: unknown;
  query?: Record<string, unknown>;
  header?: Record<string, unknown>;
  path?: Record<string, unknown>;
};

export type MutationMethod = "post" | "put" | "patch" | "delete";
export type Method = "get" | "head" | "options" | MutationMethod;

type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text";

export type DefaultEndpoint = {
  parameters?: EndpointParameters | undefined;
  response: unknown;
};

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
  operationId: string;
  method: Method;
  path: string;
  requestFormat: RequestFormat;
  parameters?: TConfig["parameters"];
  meta: {
    alias: string;
    hasParameters: boolean;
    areParametersRequired: boolean;
  };
  response: TConfig["response"];
};

type Fetcher = (
  method: Method,
  url: string,
  parameters?: EndpointParameters | undefined,
) => Promise<Endpoint["response"]>;

type RequiredKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? never : P;
}[keyof T];

type MaybeOptionalArg<T> = RequiredKeys<T> extends never ? [config?: T] : [config: T];

// </ApiClientTypes>

// <ApiClient>
export class ApiClient {
  baseUrl: string = "";

  constructor(public fetcher: Fetcher) {}

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
    return this;
  }

  // <ApiClient.get>
  get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("get", this.baseUrl + path, params[0]) as Promise<z.infer<TEndpoint["response"]>>;
  }
  // </ApiClient.get>

  // <ApiClient.post>
  post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("post", this.baseUrl + path, params[0]) as Promise<z.infer<TEndpoint["response"]>>;
  }
  // </ApiClient.post>

  // <ApiClient.put>
  put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("put", this.baseUrl + path, params[0]) as Promise<z.infer<TEndpoint["response"]>>;
  }
  // </ApiClient.put>

  // <ApiClient.delete>
  delete<Path extends keyof DeleteEndpoints, TEndpoint extends DeleteEndpoints[Path]>(
    path: Path,
    ...params: MaybeOptionalArg<z.infer<TEndpoint["parameters"]>>
  ): Promise<z.infer<TEndpoint["response"]>> {
    return this.fetcher("delete", this.baseUrl + path, params[0]) as Promise<z.infer<TEndpoint["response"]>>;
  }
  // </ApiClient.delete>
}

export function createApiClient(fetcher: Fetcher, baseUrl?: string) {
  return new ApiClient(fetcher).setBaseUrl(baseUrl ?? "");
}

/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));
*/

// </ApiClient
