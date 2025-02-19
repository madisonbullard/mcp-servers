import localVarRequest from 'request';

export * from './baseTaskParams';
export * from './basicWorkspaceInfo';
export * from './branch';
export * from './category';
export * from './commit';
export * from './createCategory';
export * from './createCategoryParams';
export * from './createCommentComment';
export * from './createEntityTemplate';
export * from './createEpic';
export * from './createEpicComment';
export * from './createGroup';
export * from './createIteration';
export * from './createLabelParams';
export * from './createLinkedFile';
export * from './createMilestone';
export * from './createObjective';
export * from './createOrDeleteStoryReaction';
export * from './createProject';
export * from './createStories';
export * from './createStoryComment';
export * from './createStoryCommentParams';
export * from './createStoryContents';
export * from './createStoryFromTemplateParams';
export * from './createStoryLink';
export * from './createStoryLinkParams';
export * from './createStoryParams';
export * from './createSubTaskParams';
export * from './createTask';
export * from './createTaskParams';
export * from './customField';
export * from './customFieldEnumValue';
export * from './customFieldValueParams';
export * from './dataConflictError';
export * from './deleteStories';
export * from './entityTemplate';
export * from './epic';
export * from './epicAssociatedGroup';
export * from './epicSearchResult';
export * from './epicSearchResults';
export * from './epicSlim';
export * from './epicState';
export * from './epicStats';
export * from './epicWorkflow';
export * from './group';
export * from './history';
export * from './historyActionBranchCreate';
export * from './historyActionBranchMerge';
export * from './historyActionBranchPush';
export * from './historyActionLabelCreate';
export * from './historyActionLabelDelete';
export * from './historyActionLabelUpdate';
export * from './historyActionProjectUpdate';
export * from './historyActionPullRequest';
export * from './historyActionStoryCommentCreate';
export * from './historyActionStoryCreate';
export * from './historyActionStoryDelete';
export * from './historyActionStoryLinkCreate';
export * from './historyActionStoryLinkDelete';
export * from './historyActionStoryLinkUpdate';
export * from './historyActionStoryUpdate';
export * from './historyActionTaskCreate';
export * from './historyActionTaskDelete';
export * from './historyActionTaskUpdate';
export * from './historyActionWorkspace2BulkUpdate';
export * from './historyChangesStory';
export * from './historyChangesStoryLink';
export * from './historyChangesTask';
export * from './historyReferenceBranch';
export * from './historyReferenceCommit';
export * from './historyReferenceCustomFieldEnumValue';
export * from './historyReferenceEpic';
export * from './historyReferenceGeneral';
export * from './historyReferenceGroup';
export * from './historyReferenceIteration';
export * from './historyReferenceLabel';
export * from './historyReferenceProject';
export * from './historyReferenceStory';
export * from './historyReferenceStoryTask';
export * from './historyReferenceWorkflowState';
export * from './icon';
export * from './identity';
export * from './iteration';
export * from './iterationAssociatedGroup';
export * from './iterationSearchResults';
export * from './iterationSlim';
export * from './iterationStats';
export * from './keyResult';
export * from './keyResultValue';
export * from './label';
export * from './labelSlim';
export * from './labelStats';
export * from './linkedFile';
export * from './maxSearchResultsExceededError';
export * from './member';
export * from './memberInfo';
export * from './milestone';
export * from './milestoneStats';
export * from './objective';
export * from './objectiveSearchResult';
export * from './objectiveSearchResults';
export * from './objectiveStats';
export * from './profile';
export * from './project';
export * from './projectStats';
export * from './pullRequest';
export * from './pullRequestLabel';
export * from './removeCustomFieldParams';
export * from './removeLabelParams';
export * from './repository';
export * from './searchResults';
export * from './searchStories';
export * from './story';
export * from './storyComment';
export * from './storyContents';
export * from './storyContentsTask';
export * from './storyCustomField';
export * from './storyHistoryChangeAddsRemovesInt';
export * from './storyHistoryChangeAddsRemovesUuid';
export * from './storyHistoryChangeOldNewBool';
export * from './storyHistoryChangeOldNewInt';
export * from './storyHistoryChangeOldNewStr';
export * from './storyHistoryChangeOldNewUuid';
export * from './storyLink';
export * from './storyReaction';
export * from './storySearchResult';
export * from './storySearchResults';
export * from './storySlim';
export * from './storyStats';
export * from './syncedItem';
export * from './task';
export * from './threadedComment';
export * from './typedStoryLink';
export * from './unusableEntitlementError';
export * from './updateCategory';
export * from './updateComment';
export * from './updateCustomField';
export * from './updateCustomFieldEnumValue';
export * from './updateEntityTemplate';
export * from './updateEpic';
export * from './updateFile';
export * from './updateGroup';
export * from './updateIteration';
export * from './updateKeyResult';
export * from './updateLabel';
export * from './updateLinkedFile';
export * from './updateMilestone';
export * from './updateObjective';
export * from './updateProject';
export * from './updateStories';
export * from './updateStory';
export * from './updateStoryComment';
export * from './updateStoryContents';
export * from './updateStoryLink';
export * from './updateTask';
export * from './uploadedFile';
export * from './workflow';
export * from './workflowState';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { BaseTaskParams } from './baseTaskParams';
import { BasicWorkspaceInfo } from './basicWorkspaceInfo';
import { Branch } from './branch';
import { Category } from './category';
import { Commit } from './commit';
import { CreateCategory } from './createCategory';
import { CreateCategoryParams } from './createCategoryParams';
import { CreateCommentComment } from './createCommentComment';
import { CreateEntityTemplate } from './createEntityTemplate';
import { CreateEpic } from './createEpic';
import { CreateEpicComment } from './createEpicComment';
import { CreateGroup } from './createGroup';
import { CreateIteration } from './createIteration';
import { CreateLabelParams } from './createLabelParams';
import { CreateLinkedFile } from './createLinkedFile';
import { CreateMilestone } from './createMilestone';
import { CreateObjective } from './createObjective';
import { CreateOrDeleteStoryReaction } from './createOrDeleteStoryReaction';
import { CreateProject } from './createProject';
import { CreateStories } from './createStories';
import { CreateStoryComment } from './createStoryComment';
import { CreateStoryCommentParams } from './createStoryCommentParams';
import { CreateStoryContents } from './createStoryContents';
import { CreateStoryFromTemplateParams } from './createStoryFromTemplateParams';
import { CreateStoryLink } from './createStoryLink';
import { CreateStoryLinkParams } from './createStoryLinkParams';
import { CreateStoryParams } from './createStoryParams';
import { CreateSubTaskParams } from './createSubTaskParams';
import { CreateTask } from './createTask';
import { CreateTaskParams } from './createTaskParams';
import { CustomField } from './customField';
import { CustomFieldEnumValue } from './customFieldEnumValue';
import { CustomFieldValueParams } from './customFieldValueParams';
import { DataConflictError } from './dataConflictError';
import { DeleteStories } from './deleteStories';
import { EntityTemplate } from './entityTemplate';
import { Epic } from './epic';
import { EpicAssociatedGroup } from './epicAssociatedGroup';
import { EpicSearchResult } from './epicSearchResult';
import { EpicSearchResults } from './epicSearchResults';
import { EpicSlim } from './epicSlim';
import { EpicState } from './epicState';
import { EpicStats } from './epicStats';
import { EpicWorkflow } from './epicWorkflow';
import { Group } from './group';
import { History } from './history';
import { HistoryActionBranchCreate } from './historyActionBranchCreate';
import { HistoryActionBranchMerge } from './historyActionBranchMerge';
import { HistoryActionBranchPush } from './historyActionBranchPush';
import { HistoryActionLabelCreate } from './historyActionLabelCreate';
import { HistoryActionLabelDelete } from './historyActionLabelDelete';
import { HistoryActionLabelUpdate } from './historyActionLabelUpdate';
import { HistoryActionProjectUpdate } from './historyActionProjectUpdate';
import { HistoryActionPullRequest } from './historyActionPullRequest';
import { HistoryActionStoryCommentCreate } from './historyActionStoryCommentCreate';
import { HistoryActionStoryCreate } from './historyActionStoryCreate';
import { HistoryActionStoryDelete } from './historyActionStoryDelete';
import { HistoryActionStoryLinkCreate } from './historyActionStoryLinkCreate';
import { HistoryActionStoryLinkDelete } from './historyActionStoryLinkDelete';
import { HistoryActionStoryLinkUpdate } from './historyActionStoryLinkUpdate';
import { HistoryActionStoryUpdate } from './historyActionStoryUpdate';
import { HistoryActionTaskCreate } from './historyActionTaskCreate';
import { HistoryActionTaskDelete } from './historyActionTaskDelete';
import { HistoryActionTaskUpdate } from './historyActionTaskUpdate';
import { HistoryActionWorkspace2BulkUpdate } from './historyActionWorkspace2BulkUpdate';
import { HistoryChangesStory } from './historyChangesStory';
import { HistoryChangesStoryLink } from './historyChangesStoryLink';
import { HistoryChangesTask } from './historyChangesTask';
import { HistoryReferenceBranch } from './historyReferenceBranch';
import { HistoryReferenceCommit } from './historyReferenceCommit';
import { HistoryReferenceCustomFieldEnumValue } from './historyReferenceCustomFieldEnumValue';
import { HistoryReferenceEpic } from './historyReferenceEpic';
import { HistoryReferenceGeneral } from './historyReferenceGeneral';
import { HistoryReferenceGroup } from './historyReferenceGroup';
import { HistoryReferenceIteration } from './historyReferenceIteration';
import { HistoryReferenceLabel } from './historyReferenceLabel';
import { HistoryReferenceProject } from './historyReferenceProject';
import { HistoryReferenceStory } from './historyReferenceStory';
import { HistoryReferenceStoryTask } from './historyReferenceStoryTask';
import { HistoryReferenceWorkflowState } from './historyReferenceWorkflowState';
import { Icon } from './icon';
import { Identity } from './identity';
import { Iteration } from './iteration';
import { IterationAssociatedGroup } from './iterationAssociatedGroup';
import { IterationSearchResults } from './iterationSearchResults';
import { IterationSlim } from './iterationSlim';
import { IterationStats } from './iterationStats';
import { KeyResult } from './keyResult';
import { KeyResultValue } from './keyResultValue';
import { Label } from './label';
import { LabelSlim } from './labelSlim';
import { LabelStats } from './labelStats';
import { LinkedFile } from './linkedFile';
import { MaxSearchResultsExceededError } from './maxSearchResultsExceededError';
import { Member } from './member';
import { MemberInfo } from './memberInfo';
import { Milestone } from './milestone';
import { MilestoneStats } from './milestoneStats';
import { Objective } from './objective';
import { ObjectiveSearchResult } from './objectiveSearchResult';
import { ObjectiveSearchResults } from './objectiveSearchResults';
import { ObjectiveStats } from './objectiveStats';
import { Profile } from './profile';
import { Project } from './project';
import { ProjectStats } from './projectStats';
import { PullRequest } from './pullRequest';
import { PullRequestLabel } from './pullRequestLabel';
import { RemoveCustomFieldParams } from './removeCustomFieldParams';
import { RemoveLabelParams } from './removeLabelParams';
import { Repository } from './repository';
import { SearchResults } from './searchResults';
import { SearchStories } from './searchStories';
import { Story } from './story';
import { StoryComment } from './storyComment';
import { StoryContents } from './storyContents';
import { StoryContentsTask } from './storyContentsTask';
import { StoryCustomField } from './storyCustomField';
import { StoryHistoryChangeAddsRemovesInt } from './storyHistoryChangeAddsRemovesInt';
import { StoryHistoryChangeAddsRemovesUuid } from './storyHistoryChangeAddsRemovesUuid';
import { StoryHistoryChangeOldNewBool } from './storyHistoryChangeOldNewBool';
import { StoryHistoryChangeOldNewInt } from './storyHistoryChangeOldNewInt';
import { StoryHistoryChangeOldNewStr } from './storyHistoryChangeOldNewStr';
import { StoryHistoryChangeOldNewUuid } from './storyHistoryChangeOldNewUuid';
import { StoryLink } from './storyLink';
import { StoryReaction } from './storyReaction';
import { StorySearchResult } from './storySearchResult';
import { StorySearchResults } from './storySearchResults';
import { StorySlim } from './storySlim';
import { StoryStats } from './storyStats';
import { SyncedItem } from './syncedItem';
import { Task } from './task';
import { ThreadedComment } from './threadedComment';
import { TypedStoryLink } from './typedStoryLink';
import { UnusableEntitlementError } from './unusableEntitlementError';
import { UpdateCategory } from './updateCategory';
import { UpdateComment } from './updateComment';
import { UpdateCustomField } from './updateCustomField';
import { UpdateCustomFieldEnumValue } from './updateCustomFieldEnumValue';
import { UpdateEntityTemplate } from './updateEntityTemplate';
import { UpdateEpic } from './updateEpic';
import { UpdateFile } from './updateFile';
import { UpdateGroup } from './updateGroup';
import { UpdateIteration } from './updateIteration';
import { UpdateKeyResult } from './updateKeyResult';
import { UpdateLabel } from './updateLabel';
import { UpdateLinkedFile } from './updateLinkedFile';
import { UpdateMilestone } from './updateMilestone';
import { UpdateObjective } from './updateObjective';
import { UpdateProject } from './updateProject';
import { UpdateStories } from './updateStories';
import { UpdateStory } from './updateStory';
import { UpdateStoryComment } from './updateStoryComment';
import { UpdateStoryContents } from './updateStoryContents';
import { UpdateStoryLink } from './updateStoryLink';
import { UpdateTask } from './updateTask';
import { UploadedFile } from './uploadedFile';
import { Workflow } from './workflow';
import { WorkflowState } from './workflowState';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "CreateEpic.StateEnum": CreateEpic.StateEnum,
        "CreateGroup.ColorKeyEnum": CreateGroup.ColorKeyEnum,
        "CreateLinkedFile.TypeEnum": CreateLinkedFile.TypeEnum,
        "CreateMilestone.StateEnum": CreateMilestone.StateEnum,
        "CreateObjective.StateEnum": CreateObjective.StateEnum,
        "CreateStoryFromTemplateParams.StoryTypeEnum": CreateStoryFromTemplateParams.StoryTypeEnum,
        "CreateStoryFromTemplateParams.MoveToEnum": CreateStoryFromTemplateParams.MoveToEnum,
        "CreateStoryLink.VerbEnum": CreateStoryLink.VerbEnum,
        "CreateStoryLinkParams.VerbEnum": CreateStoryLinkParams.VerbEnum,
        "CreateStoryParams.StoryTypeEnum": CreateStoryParams.StoryTypeEnum,
        "CreateStoryParams.MoveToEnum": CreateStoryParams.MoveToEnum,
        "CustomField.EntityTypeEnum": CustomField.EntityTypeEnum,
        "CustomField.FieldTypeEnum": CustomField.FieldTypeEnum,
        "CustomFieldEnumValue.EntityTypeEnum": CustomFieldEnumValue.EntityTypeEnum,
        "DataConflictError.ErrorEnum": DataConflictError.ErrorEnum,
        "Group.ColorKeyEnum": Group.ColorKeyEnum,
        "History.VersionEnum": History.VersionEnum,
        "HistoryActionBranchCreate.ActionEnum": HistoryActionBranchCreate.ActionEnum,
        "HistoryActionBranchMerge.ActionEnum": HistoryActionBranchMerge.ActionEnum,
        "HistoryActionBranchPush.ActionEnum": HistoryActionBranchPush.ActionEnum,
        "HistoryActionLabelCreate.ActionEnum": HistoryActionLabelCreate.ActionEnum,
        "HistoryActionLabelDelete.ActionEnum": HistoryActionLabelDelete.ActionEnum,
        "HistoryActionLabelUpdate.ActionEnum": HistoryActionLabelUpdate.ActionEnum,
        "HistoryActionProjectUpdate.ActionEnum": HistoryActionProjectUpdate.ActionEnum,
        "HistoryActionPullRequest.ActionEnum": HistoryActionPullRequest.ActionEnum,
        "HistoryActionStoryCommentCreate.ActionEnum": HistoryActionStoryCommentCreate.ActionEnum,
        "HistoryActionStoryCreate.StoryTypeEnum": HistoryActionStoryCreate.StoryTypeEnum,
        "HistoryActionStoryCreate.ActionEnum": HistoryActionStoryCreate.ActionEnum,
        "HistoryActionStoryDelete.ActionEnum": HistoryActionStoryDelete.ActionEnum,
        "HistoryActionStoryDelete.StoryTypeEnum": HistoryActionStoryDelete.StoryTypeEnum,
        "HistoryActionStoryLinkCreate.ActionEnum": HistoryActionStoryLinkCreate.ActionEnum,
        "HistoryActionStoryLinkCreate.VerbEnum": HistoryActionStoryLinkCreate.VerbEnum,
        "HistoryActionStoryLinkDelete.ActionEnum": HistoryActionStoryLinkDelete.ActionEnum,
        "HistoryActionStoryLinkDelete.VerbEnum": HistoryActionStoryLinkDelete.VerbEnum,
        "HistoryActionStoryLinkUpdate.ActionEnum": HistoryActionStoryLinkUpdate.ActionEnum,
        "HistoryActionStoryLinkUpdate.VerbEnum": HistoryActionStoryLinkUpdate.VerbEnum,
        "HistoryActionStoryUpdate.ActionEnum": HistoryActionStoryUpdate.ActionEnum,
        "HistoryActionStoryUpdate.StoryTypeEnum": HistoryActionStoryUpdate.StoryTypeEnum,
        "HistoryActionTaskCreate.ActionEnum": HistoryActionTaskCreate.ActionEnum,
        "HistoryActionTaskDelete.ActionEnum": HistoryActionTaskDelete.ActionEnum,
        "HistoryActionTaskUpdate.ActionEnum": HistoryActionTaskUpdate.ActionEnum,
        "HistoryActionWorkspace2BulkUpdate.ActionEnum": HistoryActionWorkspace2BulkUpdate.ActionEnum,
        "HistoryReferenceStory.StoryTypeEnum": HistoryReferenceStory.StoryTypeEnum,
        "HistoryReferenceWorkflowState.TypeEnum": HistoryReferenceWorkflowState.TypeEnum,
        "Identity.TypeEnum": Identity.TypeEnum,
        "KeyResult.TypeEnum": KeyResult.TypeEnum,
        "MaxSearchResultsExceededError.ErrorEnum": MaxSearchResultsExceededError.ErrorEnum,
        "MaxSearchResultsExceededError.MaximumResultsEnum": MaxSearchResultsExceededError.MaximumResultsEnum,
        "Member.StateEnum": Member.StateEnum,
        "Repository.TypeEnum": Repository.TypeEnum,
        "SearchStories.StoryTypeEnum": SearchStories.StoryTypeEnum,
        "SearchStories.WorkflowStateTypesEnum": SearchStories.WorkflowStateTypesEnum,
        "UnusableEntitlementError.ReasonTagEnum": UnusableEntitlementError.ReasonTagEnum,
        "UpdateEpic.StateEnum": UpdateEpic.StateEnum,
        "UpdateGroup.ColorKeyEnum": UpdateGroup.ColorKeyEnum,
        "UpdateLinkedFile.TypeEnum": UpdateLinkedFile.TypeEnum,
        "UpdateMilestone.StateEnum": UpdateMilestone.StateEnum,
        "UpdateObjective.StateEnum": UpdateObjective.StateEnum,
        "UpdateStories.StoryTypeEnum": UpdateStories.StoryTypeEnum,
        "UpdateStories.MoveToEnum": UpdateStories.MoveToEnum,
        "UpdateStory.StoryTypeEnum": UpdateStory.StoryTypeEnum,
        "UpdateStory.MoveToEnum": UpdateStory.MoveToEnum,
        "UpdateStoryLink.VerbEnum": UpdateStoryLink.VerbEnum,
}

let typeMap: {[index: string]: any} = {
    "BaseTaskParams": BaseTaskParams,
    "BasicWorkspaceInfo": BasicWorkspaceInfo,
    "Branch": Branch,
    "Category": Category,
    "Commit": Commit,
    "CreateCategory": CreateCategory,
    "CreateCategoryParams": CreateCategoryParams,
    "CreateCommentComment": CreateCommentComment,
    "CreateEntityTemplate": CreateEntityTemplate,
    "CreateEpic": CreateEpic,
    "CreateEpicComment": CreateEpicComment,
    "CreateGroup": CreateGroup,
    "CreateIteration": CreateIteration,
    "CreateLabelParams": CreateLabelParams,
    "CreateLinkedFile": CreateLinkedFile,
    "CreateMilestone": CreateMilestone,
    "CreateObjective": CreateObjective,
    "CreateOrDeleteStoryReaction": CreateOrDeleteStoryReaction,
    "CreateProject": CreateProject,
    "CreateStories": CreateStories,
    "CreateStoryComment": CreateStoryComment,
    "CreateStoryCommentParams": CreateStoryCommentParams,
    "CreateStoryContents": CreateStoryContents,
    "CreateStoryFromTemplateParams": CreateStoryFromTemplateParams,
    "CreateStoryLink": CreateStoryLink,
    "CreateStoryLinkParams": CreateStoryLinkParams,
    "CreateStoryParams": CreateStoryParams,
    "CreateSubTaskParams": CreateSubTaskParams,
    "CreateTask": CreateTask,
    "CreateTaskParams": CreateTaskParams,
    "CustomField": CustomField,
    "CustomFieldEnumValue": CustomFieldEnumValue,
    "CustomFieldValueParams": CustomFieldValueParams,
    "DataConflictError": DataConflictError,
    "DeleteStories": DeleteStories,
    "EntityTemplate": EntityTemplate,
    "Epic": Epic,
    "EpicAssociatedGroup": EpicAssociatedGroup,
    "EpicSearchResult": EpicSearchResult,
    "EpicSearchResults": EpicSearchResults,
    "EpicSlim": EpicSlim,
    "EpicState": EpicState,
    "EpicStats": EpicStats,
    "EpicWorkflow": EpicWorkflow,
    "Group": Group,
    "History": History,
    "HistoryActionBranchCreate": HistoryActionBranchCreate,
    "HistoryActionBranchMerge": HistoryActionBranchMerge,
    "HistoryActionBranchPush": HistoryActionBranchPush,
    "HistoryActionLabelCreate": HistoryActionLabelCreate,
    "HistoryActionLabelDelete": HistoryActionLabelDelete,
    "HistoryActionLabelUpdate": HistoryActionLabelUpdate,
    "HistoryActionProjectUpdate": HistoryActionProjectUpdate,
    "HistoryActionPullRequest": HistoryActionPullRequest,
    "HistoryActionStoryCommentCreate": HistoryActionStoryCommentCreate,
    "HistoryActionStoryCreate": HistoryActionStoryCreate,
    "HistoryActionStoryDelete": HistoryActionStoryDelete,
    "HistoryActionStoryLinkCreate": HistoryActionStoryLinkCreate,
    "HistoryActionStoryLinkDelete": HistoryActionStoryLinkDelete,
    "HistoryActionStoryLinkUpdate": HistoryActionStoryLinkUpdate,
    "HistoryActionStoryUpdate": HistoryActionStoryUpdate,
    "HistoryActionTaskCreate": HistoryActionTaskCreate,
    "HistoryActionTaskDelete": HistoryActionTaskDelete,
    "HistoryActionTaskUpdate": HistoryActionTaskUpdate,
    "HistoryActionWorkspace2BulkUpdate": HistoryActionWorkspace2BulkUpdate,
    "HistoryChangesStory": HistoryChangesStory,
    "HistoryChangesStoryLink": HistoryChangesStoryLink,
    "HistoryChangesTask": HistoryChangesTask,
    "HistoryReferenceBranch": HistoryReferenceBranch,
    "HistoryReferenceCommit": HistoryReferenceCommit,
    "HistoryReferenceCustomFieldEnumValue": HistoryReferenceCustomFieldEnumValue,
    "HistoryReferenceEpic": HistoryReferenceEpic,
    "HistoryReferenceGeneral": HistoryReferenceGeneral,
    "HistoryReferenceGroup": HistoryReferenceGroup,
    "HistoryReferenceIteration": HistoryReferenceIteration,
    "HistoryReferenceLabel": HistoryReferenceLabel,
    "HistoryReferenceProject": HistoryReferenceProject,
    "HistoryReferenceStory": HistoryReferenceStory,
    "HistoryReferenceStoryTask": HistoryReferenceStoryTask,
    "HistoryReferenceWorkflowState": HistoryReferenceWorkflowState,
    "Icon": Icon,
    "Identity": Identity,
    "Iteration": Iteration,
    "IterationAssociatedGroup": IterationAssociatedGroup,
    "IterationSearchResults": IterationSearchResults,
    "IterationSlim": IterationSlim,
    "IterationStats": IterationStats,
    "KeyResult": KeyResult,
    "KeyResultValue": KeyResultValue,
    "Label": Label,
    "LabelSlim": LabelSlim,
    "LabelStats": LabelStats,
    "LinkedFile": LinkedFile,
    "MaxSearchResultsExceededError": MaxSearchResultsExceededError,
    "Member": Member,
    "MemberInfo": MemberInfo,
    "Milestone": Milestone,
    "MilestoneStats": MilestoneStats,
    "Objective": Objective,
    "ObjectiveSearchResult": ObjectiveSearchResult,
    "ObjectiveSearchResults": ObjectiveSearchResults,
    "ObjectiveStats": ObjectiveStats,
    "Profile": Profile,
    "Project": Project,
    "ProjectStats": ProjectStats,
    "PullRequest": PullRequest,
    "PullRequestLabel": PullRequestLabel,
    "RemoveCustomFieldParams": RemoveCustomFieldParams,
    "RemoveLabelParams": RemoveLabelParams,
    "Repository": Repository,
    "SearchResults": SearchResults,
    "SearchStories": SearchStories,
    "Story": Story,
    "StoryComment": StoryComment,
    "StoryContents": StoryContents,
    "StoryContentsTask": StoryContentsTask,
    "StoryCustomField": StoryCustomField,
    "StoryHistoryChangeAddsRemovesInt": StoryHistoryChangeAddsRemovesInt,
    "StoryHistoryChangeAddsRemovesUuid": StoryHistoryChangeAddsRemovesUuid,
    "StoryHistoryChangeOldNewBool": StoryHistoryChangeOldNewBool,
    "StoryHistoryChangeOldNewInt": StoryHistoryChangeOldNewInt,
    "StoryHistoryChangeOldNewStr": StoryHistoryChangeOldNewStr,
    "StoryHistoryChangeOldNewUuid": StoryHistoryChangeOldNewUuid,
    "StoryLink": StoryLink,
    "StoryReaction": StoryReaction,
    "StorySearchResult": StorySearchResult,
    "StorySearchResults": StorySearchResults,
    "StorySlim": StorySlim,
    "StoryStats": StoryStats,
    "SyncedItem": SyncedItem,
    "Task": Task,
    "ThreadedComment": ThreadedComment,
    "TypedStoryLink": TypedStoryLink,
    "UnusableEntitlementError": UnusableEntitlementError,
    "UpdateCategory": UpdateCategory,
    "UpdateComment": UpdateComment,
    "UpdateCustomField": UpdateCustomField,
    "UpdateCustomFieldEnumValue": UpdateCustomFieldEnumValue,
    "UpdateEntityTemplate": UpdateEntityTemplate,
    "UpdateEpic": UpdateEpic,
    "UpdateFile": UpdateFile,
    "UpdateGroup": UpdateGroup,
    "UpdateIteration": UpdateIteration,
    "UpdateKeyResult": UpdateKeyResult,
    "UpdateLabel": UpdateLabel,
    "UpdateLinkedFile": UpdateLinkedFile,
    "UpdateMilestone": UpdateMilestone,
    "UpdateObjective": UpdateObjective,
    "UpdateProject": UpdateProject,
    "UpdateStories": UpdateStories,
    "UpdateStory": UpdateStory,
    "UpdateStoryComment": UpdateStoryComment,
    "UpdateStoryContents": UpdateStoryContents,
    "UpdateStoryLink": UpdateStoryLink,
    "UpdateTask": UpdateTask,
    "UploadedFile": UploadedFile,
    "Workflow": Workflow,
    "WorkflowState": WorkflowState,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
