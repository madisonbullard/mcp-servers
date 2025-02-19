export * from '../models/BaseTaskParams';
export * from '../models/BasicWorkspaceInfo';
export * from '../models/Branch';
export * from '../models/Category';
export * from '../models/Commit';
export * from '../models/CreateCategory';
export * from '../models/CreateCategoryParams';
export * from '../models/CreateCommentComment';
export * from '../models/CreateEntityTemplate';
export * from '../models/CreateEpic';
export * from '../models/CreateEpicComment';
export * from '../models/CreateGroup';
export * from '../models/CreateIteration';
export * from '../models/CreateLabelParams';
export * from '../models/CreateLinkedFile';
export * from '../models/CreateMilestone';
export * from '../models/CreateObjective';
export * from '../models/CreateOrDeleteStoryReaction';
export * from '../models/CreateProject';
export * from '../models/CreateStories';
export * from '../models/CreateStoryComment';
export * from '../models/CreateStoryCommentParams';
export * from '../models/CreateStoryContents';
export * from '../models/CreateStoryFromTemplateParams';
export * from '../models/CreateStoryLink';
export * from '../models/CreateStoryLinkParams';
export * from '../models/CreateStoryParams';
export * from '../models/CreateSubTaskParams';
export * from '../models/CreateTask';
export * from '../models/CreateTaskParams';
export * from '../models/CustomField';
export * from '../models/CustomFieldEnumValue';
export * from '../models/CustomFieldValueParams';
export * from '../models/DataConflictError';
export * from '../models/DeleteStories';
export * from '../models/EntityTemplate';
export * from '../models/Epic';
export * from '../models/EpicAssociatedGroup';
export * from '../models/EpicSearchResult';
export * from '../models/EpicSearchResults';
export * from '../models/EpicSlim';
export * from '../models/EpicState';
export * from '../models/EpicStats';
export * from '../models/EpicWorkflow';
export * from '../models/Group';
export * from '../models/History';
export * from '../models/HistoryActionBranchCreate';
export * from '../models/HistoryActionBranchMerge';
export * from '../models/HistoryActionBranchPush';
export * from '../models/HistoryActionLabelCreate';
export * from '../models/HistoryActionLabelDelete';
export * from '../models/HistoryActionLabelUpdate';
export * from '../models/HistoryActionProjectUpdate';
export * from '../models/HistoryActionPullRequest';
export * from '../models/HistoryActionStoryCommentCreate';
export * from '../models/HistoryActionStoryCreate';
export * from '../models/HistoryActionStoryDelete';
export * from '../models/HistoryActionStoryLinkCreate';
export * from '../models/HistoryActionStoryLinkDelete';
export * from '../models/HistoryActionStoryLinkUpdate';
export * from '../models/HistoryActionStoryUpdate';
export * from '../models/HistoryActionTaskCreate';
export * from '../models/HistoryActionTaskDelete';
export * from '../models/HistoryActionTaskUpdate';
export * from '../models/HistoryActionWorkspace2BulkUpdate';
export * from '../models/HistoryChangesStory';
export * from '../models/HistoryChangesStoryLink';
export * from '../models/HistoryChangesTask';
export * from '../models/HistoryReferenceBranch';
export * from '../models/HistoryReferenceCommit';
export * from '../models/HistoryReferenceCustomFieldEnumValue';
export * from '../models/HistoryReferenceEpic';
export * from '../models/HistoryReferenceGeneral';
export * from '../models/HistoryReferenceGroup';
export * from '../models/HistoryReferenceIteration';
export * from '../models/HistoryReferenceLabel';
export * from '../models/HistoryReferenceProject';
export * from '../models/HistoryReferenceStory';
export * from '../models/HistoryReferenceStoryTask';
export * from '../models/HistoryReferenceWorkflowState';
export * from '../models/Icon';
export * from '../models/Identity';
export * from '../models/Iteration';
export * from '../models/IterationAssociatedGroup';
export * from '../models/IterationSearchResults';
export * from '../models/IterationSlim';
export * from '../models/IterationStats';
export * from '../models/KeyResult';
export * from '../models/KeyResultValue';
export * from '../models/Label';
export * from '../models/LabelSlim';
export * from '../models/LabelStats';
export * from '../models/LinkedFile';
export * from '../models/MaxSearchResultsExceededError';
export * from '../models/Member';
export * from '../models/MemberInfo';
export * from '../models/Milestone';
export * from '../models/MilestoneStats';
export * from '../models/Objective';
export * from '../models/ObjectiveSearchResult';
export * from '../models/ObjectiveSearchResults';
export * from '../models/ObjectiveStats';
export * from '../models/Profile';
export * from '../models/Project';
export * from '../models/ProjectStats';
export * from '../models/PullRequest';
export * from '../models/PullRequestLabel';
export * from '../models/RemoveCustomFieldParams';
export * from '../models/RemoveLabelParams';
export * from '../models/Repository';
export * from '../models/SearchResults';
export * from '../models/SearchStories';
export * from '../models/Story';
export * from '../models/StoryComment';
export * from '../models/StoryContents';
export * from '../models/StoryContentsTask';
export * from '../models/StoryCustomField';
export * from '../models/StoryHistoryChangeAddsRemovesInt';
export * from '../models/StoryHistoryChangeAddsRemovesUuid';
export * from '../models/StoryHistoryChangeOldNewBool';
export * from '../models/StoryHistoryChangeOldNewInt';
export * from '../models/StoryHistoryChangeOldNewStr';
export * from '../models/StoryHistoryChangeOldNewUuid';
export * from '../models/StoryLink';
export * from '../models/StoryReaction';
export * from '../models/StorySearchResult';
export * from '../models/StorySearchResults';
export * from '../models/StorySlim';
export * from '../models/StoryStats';
export * from '../models/SyncedItem';
export * from '../models/Task';
export * from '../models/ThreadedComment';
export * from '../models/TypedStoryLink';
export * from '../models/UnusableEntitlementError';
export * from '../models/UpdateCategory';
export * from '../models/UpdateComment';
export * from '../models/UpdateCustomField';
export * from '../models/UpdateCustomFieldEnumValue';
export * from '../models/UpdateEntityTemplate';
export * from '../models/UpdateEpic';
export * from '../models/UpdateFile';
export * from '../models/UpdateGroup';
export * from '../models/UpdateIteration';
export * from '../models/UpdateKeyResult';
export * from '../models/UpdateLabel';
export * from '../models/UpdateLinkedFile';
export * from '../models/UpdateMilestone';
export * from '../models/UpdateObjective';
export * from '../models/UpdateProject';
export * from '../models/UpdateStories';
export * from '../models/UpdateStory';
export * from '../models/UpdateStoryComment';
export * from '../models/UpdateStoryContents';
export * from '../models/UpdateStoryLink';
export * from '../models/UpdateTask';
export * from '../models/UploadedFile';
export * from '../models/Workflow';
export * from '../models/WorkflowState';

import { BaseTaskParams } from '../models/BaseTaskParams';
import { BasicWorkspaceInfo } from '../models/BasicWorkspaceInfo';
import { Branch } from '../models/Branch';
import { Category } from '../models/Category';
import { Commit } from '../models/Commit';
import { CreateCategory } from '../models/CreateCategory';
import { CreateCategoryParams } from '../models/CreateCategoryParams';
import { CreateCommentComment } from '../models/CreateCommentComment';
import { CreateEntityTemplate } from '../models/CreateEntityTemplate';
import { CreateEpic      , CreateEpicStateEnum               } from '../models/CreateEpic';
import { CreateEpicComment } from '../models/CreateEpicComment';
import { CreateGroup      , CreateGroupColorKeyEnum    } from '../models/CreateGroup';
import { CreateIteration } from '../models/CreateIteration';
import { CreateLabelParams } from '../models/CreateLabelParams';
import { CreateLinkedFile    , CreateLinkedFileTypeEnum       } from '../models/CreateLinkedFile';
import { CreateMilestone  , CreateMilestoneStateEnum      } from '../models/CreateMilestone';
import { CreateObjective  , CreateObjectiveStateEnum      } from '../models/CreateObjective';
import { CreateOrDeleteStoryReaction } from '../models/CreateOrDeleteStoryReaction';
import { CreateProject } from '../models/CreateProject';
import { CreateStories } from '../models/CreateStories';
import { CreateStoryComment } from '../models/CreateStoryComment';
import { CreateStoryCommentParams } from '../models/CreateStoryCommentParams';
import { CreateStoryContents } from '../models/CreateStoryContents';
import { CreateStoryFromTemplateParams     , CreateStoryFromTemplateParamsStoryTypeEnum   , CreateStoryFromTemplateParamsMoveToEnum                                        } from '../models/CreateStoryFromTemplateParams';
import { CreateStoryLink, CreateStoryLinkVerbEnum     } from '../models/CreateStoryLink';
import { CreateStoryLinkParams , CreateStoryLinkParamsVerbEnum    } from '../models/CreateStoryLinkParams';
import { CreateStoryParams    , CreateStoryParamsStoryTypeEnum   , CreateStoryParamsMoveToEnum                           } from '../models/CreateStoryParams';
import { CreateSubTaskParams } from '../models/CreateSubTaskParams';
import { CreateTask } from '../models/CreateTask';
import { CreateTaskParams } from '../models/CreateTaskParams';
import { CustomField  , CustomFieldEntityTypeEnum        , CustomFieldFieldTypeEnum       } from '../models/CustomField';
import { CustomFieldEnumValue    , CustomFieldEnumValueEntityTypeEnum    } from '../models/CustomFieldEnumValue';
import { CustomFieldValueParams } from '../models/CustomFieldValueParams';
import { DataConflictError, DataConflictErrorErrorEnum    } from '../models/DataConflictError';
import { DeleteStories } from '../models/DeleteStories';
import { EntityTemplate } from '../models/EntityTemplate';
import { Epic } from '../models/Epic';
import { EpicAssociatedGroup } from '../models/EpicAssociatedGroup';
import { EpicSearchResult } from '../models/EpicSearchResult';
import { EpicSearchResults } from '../models/EpicSearchResults';
import { EpicSlim } from '../models/EpicSlim';
import { EpicState } from '../models/EpicState';
import { EpicStats } from '../models/EpicStats';
import { EpicWorkflow } from '../models/EpicWorkflow';
import { Group         , GroupColorKeyEnum          } from '../models/Group';
import { History       , HistoryVersionEnum     } from '../models/History';
import { HistoryActionBranchCreate    , HistoryActionBranchCreateActionEnum   } from '../models/HistoryActionBranchCreate';
import { HistoryActionBranchMerge    , HistoryActionBranchMergeActionEnum   } from '../models/HistoryActionBranchMerge';
import { HistoryActionBranchPush    , HistoryActionBranchPushActionEnum   } from '../models/HistoryActionBranchPush';
import { HistoryActionLabelCreate  , HistoryActionLabelCreateActionEnum     } from '../models/HistoryActionLabelCreate';
import { HistoryActionLabelDelete  , HistoryActionLabelDeleteActionEnum    } from '../models/HistoryActionLabelDelete';
import { HistoryActionLabelUpdate  , HistoryActionLabelUpdateActionEnum   } from '../models/HistoryActionLabelUpdate';
import { HistoryActionProjectUpdate  , HistoryActionProjectUpdateActionEnum     } from '../models/HistoryActionProjectUpdate';
import { HistoryActionPullRequest  , HistoryActionPullRequestActionEnum      } from '../models/HistoryActionPullRequest';
import { HistoryActionStoryCommentCreate  , HistoryActionStoryCommentCreateActionEnum      } from '../models/HistoryActionStoryCommentCreate';
import { HistoryActionStoryCreate     , HistoryActionStoryCreateStoryTypeEnum                  , HistoryActionStoryCreateActionEnum      } from '../models/HistoryActionStoryCreate';
import { HistoryActionStoryDelete  , HistoryActionStoryDeleteActionEnum   , HistoryActionStoryDeleteStoryTypeEnum   } from '../models/HistoryActionStoryDelete';
import { HistoryActionStoryLinkCreate  , HistoryActionStoryLinkCreateActionEnum  , HistoryActionStoryLinkCreateVerbEnum     } from '../models/HistoryActionStoryLinkCreate';
import { HistoryActionStoryLinkDelete  , HistoryActionStoryLinkDeleteActionEnum  , HistoryActionStoryLinkDeleteVerbEnum     } from '../models/HistoryActionStoryLinkDelete';
import { HistoryActionStoryLinkUpdate  , HistoryActionStoryLinkUpdateActionEnum  , HistoryActionStoryLinkUpdateVerbEnum      } from '../models/HistoryActionStoryLinkUpdate';
import { HistoryActionStoryUpdate  , HistoryActionStoryUpdateActionEnum     , HistoryActionStoryUpdateStoryTypeEnum   } from '../models/HistoryActionStoryUpdate';
import { HistoryActionTaskCreate      , HistoryActionTaskCreateActionEnum     } from '../models/HistoryActionTaskCreate';
import { HistoryActionTaskDelete  , HistoryActionTaskDeleteActionEnum    } from '../models/HistoryActionTaskDelete';
import { HistoryActionTaskUpdate  , HistoryActionTaskUpdateActionEnum       } from '../models/HistoryActionTaskUpdate';
import { HistoryActionWorkspace2BulkUpdate  , HistoryActionWorkspace2BulkUpdateActionEnum    } from '../models/HistoryActionWorkspace2BulkUpdate';
import { HistoryChangesStory } from '../models/HistoryChangesStory';
import { HistoryChangesStoryLink } from '../models/HistoryChangesStoryLink';
import { HistoryChangesTask } from '../models/HistoryChangesTask';
import { HistoryReferenceBranch } from '../models/HistoryReferenceBranch';
import { HistoryReferenceCommit } from '../models/HistoryReferenceCommit';
import { HistoryReferenceCustomFieldEnumValue } from '../models/HistoryReferenceCustomFieldEnumValue';
import { HistoryReferenceEpic } from '../models/HistoryReferenceEpic';
import { HistoryReferenceGeneral } from '../models/HistoryReferenceGeneral';
import { HistoryReferenceGroup } from '../models/HistoryReferenceGroup';
import { HistoryReferenceIteration } from '../models/HistoryReferenceIteration';
import { HistoryReferenceLabel } from '../models/HistoryReferenceLabel';
import { HistoryReferenceProject } from '../models/HistoryReferenceProject';
import { HistoryReferenceStory    , HistoryReferenceStoryStoryTypeEnum   } from '../models/HistoryReferenceStory';
import { HistoryReferenceStoryTask } from '../models/HistoryReferenceStoryTask';
import { HistoryReferenceWorkflowState  , HistoryReferenceWorkflowStateTypeEnum    } from '../models/HistoryReferenceWorkflowState';
import { Icon } from '../models/Icon';
import { Identity  , IdentityTypeEnum   } from '../models/Identity';
import { Iteration } from '../models/Iteration';
import { IterationAssociatedGroup } from '../models/IterationAssociatedGroup';
import { IterationSearchResults } from '../models/IterationSearchResults';
import { IterationSlim } from '../models/IterationSlim';
import { IterationStats } from '../models/IterationStats';
import { KeyResult   , KeyResultTypeEnum       } from '../models/KeyResult';
import { KeyResultValue } from '../models/KeyResultValue';
import { Label } from '../models/Label';
import { LabelSlim } from '../models/LabelSlim';
import { LabelStats } from '../models/LabelStats';
import { LinkedFile } from '../models/LinkedFile';
import { MaxSearchResultsExceededError, MaxSearchResultsExceededErrorErrorEnum   , MaxSearchResultsExceededErrorMaximumResultsEnum   } from '../models/MaxSearchResultsExceededError';
import { Member    , MemberStateEnum          } from '../models/Member';
import { MemberInfo } from '../models/MemberInfo';
import { Milestone } from '../models/Milestone';
import { MilestoneStats } from '../models/MilestoneStats';
import { Objective } from '../models/Objective';
import { ObjectiveSearchResult } from '../models/ObjectiveSearchResult';
import { ObjectiveSearchResults } from '../models/ObjectiveSearchResults';
import { ObjectiveStats } from '../models/ObjectiveStats';
import { Profile } from '../models/Profile';
import { Project } from '../models/Project';
import { ProjectStats } from '../models/ProjectStats';
import { PullRequest } from '../models/PullRequest';
import { PullRequestLabel } from '../models/PullRequestLabel';
import { RemoveCustomFieldParams } from '../models/RemoveCustomFieldParams';
import { RemoveLabelParams } from '../models/RemoveLabelParams';
import { Repository  , RepositoryTypeEnum         } from '../models/Repository';
import { SearchResults } from '../models/SearchResults';
import { SearchStories  , SearchStoriesStoryTypeEnum      , SearchStoriesWorkflowStateTypesEnum                       } from '../models/SearchStories';
import { Story } from '../models/Story';
import { StoryComment } from '../models/StoryComment';
import { StoryContents } from '../models/StoryContents';
import { StoryContentsTask } from '../models/StoryContentsTask';
import { StoryCustomField } from '../models/StoryCustomField';
import { StoryHistoryChangeAddsRemovesInt } from '../models/StoryHistoryChangeAddsRemovesInt';
import { StoryHistoryChangeAddsRemovesUuid } from '../models/StoryHistoryChangeAddsRemovesUuid';
import { StoryHistoryChangeOldNewBool } from '../models/StoryHistoryChangeOldNewBool';
import { StoryHistoryChangeOldNewInt } from '../models/StoryHistoryChangeOldNewInt';
import { StoryHistoryChangeOldNewStr } from '../models/StoryHistoryChangeOldNewStr';
import { StoryHistoryChangeOldNewUuid } from '../models/StoryHistoryChangeOldNewUuid';
import { StoryLink } from '../models/StoryLink';
import { StoryReaction } from '../models/StoryReaction';
import { StorySearchResult } from '../models/StorySearchResult';
import { StorySearchResults } from '../models/StorySearchResults';
import { StorySlim } from '../models/StorySlim';
import { StoryStats } from '../models/StoryStats';
import { SyncedItem } from '../models/SyncedItem';
import { Task } from '../models/Task';
import { ThreadedComment } from '../models/ThreadedComment';
import { TypedStoryLink } from '../models/TypedStoryLink';
import { UnusableEntitlementError, UnusableEntitlementErrorReasonTagEnum     } from '../models/UnusableEntitlementError';
import { UpdateCategory } from '../models/UpdateCategory';
import { UpdateComment } from '../models/UpdateComment';
import { UpdateCustomField } from '../models/UpdateCustomField';
import { UpdateCustomFieldEnumValue } from '../models/UpdateCustomFieldEnumValue';
import { UpdateEntityTemplate } from '../models/UpdateEntityTemplate';
import { UpdateEpic       , UpdateEpicStateEnum               } from '../models/UpdateEpic';
import { UpdateFile } from '../models/UpdateFile';
import { UpdateGroup      , UpdateGroupColorKeyEnum     } from '../models/UpdateGroup';
import { UpdateIteration } from '../models/UpdateIteration';
import { UpdateKeyResult } from '../models/UpdateKeyResult';
import { UpdateLabel } from '../models/UpdateLabel';
import { UpdateLinkedFile    , UpdateLinkedFileTypeEnum      } from '../models/UpdateLinkedFile';
import { UpdateMilestone    , UpdateMilestoneStateEnum       } from '../models/UpdateMilestone';
import { UpdateObjective    , UpdateObjectiveStateEnum       } from '../models/UpdateObjective';
import { UpdateProject } from '../models/UpdateProject';
import { UpdateStories  , UpdateStoriesStoryTypeEnum  , UpdateStoriesMoveToEnum                      } from '../models/UpdateStories';
import { UpdateStory    , UpdateStoryStoryTypeEnum   , UpdateStoryMoveToEnum                       } from '../models/UpdateStory';
import { UpdateStoryComment } from '../models/UpdateStoryComment';
import { UpdateStoryContents } from '../models/UpdateStoryContents';
import { UpdateStoryLink, UpdateStoryLinkVerbEnum     } from '../models/UpdateStoryLink';
import { UpdateTask } from '../models/UpdateTask';
import { UploadedFile } from '../models/UploadedFile';
import { Workflow } from '../models/Workflow';
import { WorkflowState } from '../models/WorkflowState';

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

let enumsMap: Set<string> = new Set<string>([
    "CreateEpicStateEnum",
    "CreateGroupColorKeyEnum",
    "CreateLinkedFileTypeEnum",
    "CreateMilestoneStateEnum",
    "CreateObjectiveStateEnum",
    "CreateStoryFromTemplateParamsStoryTypeEnum",
    "CreateStoryFromTemplateParamsMoveToEnum",
    "CreateStoryLinkVerbEnum",
    "CreateStoryLinkParamsVerbEnum",
    "CreateStoryParamsStoryTypeEnum",
    "CreateStoryParamsMoveToEnum",
    "CustomFieldEntityTypeEnum",
    "CustomFieldFieldTypeEnum",
    "CustomFieldEnumValueEntityTypeEnum",
    "DataConflictErrorErrorEnum",
    "GroupColorKeyEnum",
    "HistoryVersionEnum",
    "HistoryActionBranchCreateActionEnum",
    "HistoryActionBranchMergeActionEnum",
    "HistoryActionBranchPushActionEnum",
    "HistoryActionLabelCreateActionEnum",
    "HistoryActionLabelDeleteActionEnum",
    "HistoryActionLabelUpdateActionEnum",
    "HistoryActionProjectUpdateActionEnum",
    "HistoryActionPullRequestActionEnum",
    "HistoryActionStoryCommentCreateActionEnum",
    "HistoryActionStoryCreateStoryTypeEnum",
    "HistoryActionStoryCreateActionEnum",
    "HistoryActionStoryDeleteActionEnum",
    "HistoryActionStoryDeleteStoryTypeEnum",
    "HistoryActionStoryLinkCreateActionEnum",
    "HistoryActionStoryLinkCreateVerbEnum",
    "HistoryActionStoryLinkDeleteActionEnum",
    "HistoryActionStoryLinkDeleteVerbEnum",
    "HistoryActionStoryLinkUpdateActionEnum",
    "HistoryActionStoryLinkUpdateVerbEnum",
    "HistoryActionStoryUpdateActionEnum",
    "HistoryActionStoryUpdateStoryTypeEnum",
    "HistoryActionTaskCreateActionEnum",
    "HistoryActionTaskDeleteActionEnum",
    "HistoryActionTaskUpdateActionEnum",
    "HistoryActionWorkspace2BulkUpdateActionEnum",
    "HistoryReferenceStoryStoryTypeEnum",
    "HistoryReferenceWorkflowStateTypeEnum",
    "IdentityTypeEnum",
    "KeyResultTypeEnum",
    "MaxSearchResultsExceededErrorErrorEnum",
    "MaxSearchResultsExceededErrorMaximumResultsEnum",
    "MemberStateEnum",
    "RepositoryTypeEnum",
    "SearchStoriesStoryTypeEnum",
    "SearchStoriesWorkflowStateTypesEnum",
    "UnusableEntitlementErrorReasonTagEnum",
    "UpdateEpicStateEnum",
    "UpdateGroupColorKeyEnum",
    "UpdateLinkedFileTypeEnum",
    "UpdateMilestoneStateEnum",
    "UpdateObjectiveStateEnum",
    "UpdateStoriesStoryTypeEnum",
    "UpdateStoriesMoveToEnum",
    "UpdateStoryStoryTypeEnum",
    "UpdateStoryMoveToEnum",
    "UpdateStoryLinkVerbEnum",
]);

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

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

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
            if (enumsMap.has(expectedType)) {
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
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
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
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
