import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BaseTaskParams } from '../models/BaseTaskParams';
import { BasicWorkspaceInfo } from '../models/BasicWorkspaceInfo';
import { Branch } from '../models/Branch';
import { Category } from '../models/Category';
import { Commit } from '../models/Commit';
import { CreateCategory } from '../models/CreateCategory';
import { CreateCategoryParams } from '../models/CreateCategoryParams';
import { CreateCommentComment } from '../models/CreateCommentComment';
import { CreateEntityTemplate } from '../models/CreateEntityTemplate';
import { CreateEpic } from '../models/CreateEpic';
import { CreateEpicComment } from '../models/CreateEpicComment';
import { CreateGroup } from '../models/CreateGroup';
import { CreateIteration } from '../models/CreateIteration';
import { CreateLabelParams } from '../models/CreateLabelParams';
import { CreateLinkedFile } from '../models/CreateLinkedFile';
import { CreateMilestone } from '../models/CreateMilestone';
import { CreateObjective } from '../models/CreateObjective';
import { CreateOrDeleteStoryReaction } from '../models/CreateOrDeleteStoryReaction';
import { CreateProject } from '../models/CreateProject';
import { CreateStories } from '../models/CreateStories';
import { CreateStoryComment } from '../models/CreateStoryComment';
import { CreateStoryCommentParams } from '../models/CreateStoryCommentParams';
import { CreateStoryContents } from '../models/CreateStoryContents';
import { CreateStoryFromTemplateParams } from '../models/CreateStoryFromTemplateParams';
import { CreateStoryLink } from '../models/CreateStoryLink';
import { CreateStoryLinkParams } from '../models/CreateStoryLinkParams';
import { CreateStoryParams } from '../models/CreateStoryParams';
import { CreateSubTaskParams } from '../models/CreateSubTaskParams';
import { CreateTask } from '../models/CreateTask';
import { CreateTaskParams } from '../models/CreateTaskParams';
import { CustomField } from '../models/CustomField';
import { CustomFieldEnumValue } from '../models/CustomFieldEnumValue';
import { CustomFieldValueParams } from '../models/CustomFieldValueParams';
import { DataConflictError } from '../models/DataConflictError';
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
import { Group } from '../models/Group';
import { History } from '../models/History';
import { HistoryActionBranchCreate } from '../models/HistoryActionBranchCreate';
import { HistoryActionBranchMerge } from '../models/HistoryActionBranchMerge';
import { HistoryActionBranchPush } from '../models/HistoryActionBranchPush';
import { HistoryActionLabelCreate } from '../models/HistoryActionLabelCreate';
import { HistoryActionLabelDelete } from '../models/HistoryActionLabelDelete';
import { HistoryActionLabelUpdate } from '../models/HistoryActionLabelUpdate';
import { HistoryActionProjectUpdate } from '../models/HistoryActionProjectUpdate';
import { HistoryActionPullRequest } from '../models/HistoryActionPullRequest';
import { HistoryActionStoryCommentCreate } from '../models/HistoryActionStoryCommentCreate';
import { HistoryActionStoryCreate } from '../models/HistoryActionStoryCreate';
import { HistoryActionStoryDelete } from '../models/HistoryActionStoryDelete';
import { HistoryActionStoryLinkCreate } from '../models/HistoryActionStoryLinkCreate';
import { HistoryActionStoryLinkDelete } from '../models/HistoryActionStoryLinkDelete';
import { HistoryActionStoryLinkUpdate } from '../models/HistoryActionStoryLinkUpdate';
import { HistoryActionStoryUpdate } from '../models/HistoryActionStoryUpdate';
import { HistoryActionTaskCreate } from '../models/HistoryActionTaskCreate';
import { HistoryActionTaskDelete } from '../models/HistoryActionTaskDelete';
import { HistoryActionTaskUpdate } from '../models/HistoryActionTaskUpdate';
import { HistoryActionWorkspace2BulkUpdate } from '../models/HistoryActionWorkspace2BulkUpdate';
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
import { HistoryReferenceStory } from '../models/HistoryReferenceStory';
import { HistoryReferenceStoryTask } from '../models/HistoryReferenceStoryTask';
import { HistoryReferenceWorkflowState } from '../models/HistoryReferenceWorkflowState';
import { Icon } from '../models/Icon';
import { Identity } from '../models/Identity';
import { Iteration } from '../models/Iteration';
import { IterationAssociatedGroup } from '../models/IterationAssociatedGroup';
import { IterationSearchResults } from '../models/IterationSearchResults';
import { IterationSlim } from '../models/IterationSlim';
import { IterationStats } from '../models/IterationStats';
import { KeyResult } from '../models/KeyResult';
import { KeyResultValue } from '../models/KeyResultValue';
import { Label } from '../models/Label';
import { LabelSlim } from '../models/LabelSlim';
import { LabelStats } from '../models/LabelStats';
import { LinkedFile } from '../models/LinkedFile';
import { MaxSearchResultsExceededError } from '../models/MaxSearchResultsExceededError';
import { Member } from '../models/Member';
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
import { Repository } from '../models/Repository';
import { SearchResults } from '../models/SearchResults';
import { SearchStories } from '../models/SearchStories';
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
import { UnusableEntitlementError } from '../models/UnusableEntitlementError';
import { UpdateCategory } from '../models/UpdateCategory';
import { UpdateComment } from '../models/UpdateComment';
import { UpdateCustomField } from '../models/UpdateCustomField';
import { UpdateCustomFieldEnumValue } from '../models/UpdateCustomFieldEnumValue';
import { UpdateEntityTemplate } from '../models/UpdateEntityTemplate';
import { UpdateEpic } from '../models/UpdateEpic';
import { UpdateFile } from '../models/UpdateFile';
import { UpdateGroup } from '../models/UpdateGroup';
import { UpdateIteration } from '../models/UpdateIteration';
import { UpdateKeyResult } from '../models/UpdateKeyResult';
import { UpdateLabel } from '../models/UpdateLabel';
import { UpdateLinkedFile } from '../models/UpdateLinkedFile';
import { UpdateMilestone } from '../models/UpdateMilestone';
import { UpdateObjective } from '../models/UpdateObjective';
import { UpdateProject } from '../models/UpdateProject';
import { UpdateStories } from '../models/UpdateStories';
import { UpdateStory } from '../models/UpdateStory';
import { UpdateStoryComment } from '../models/UpdateStoryComment';
import { UpdateStoryContents } from '../models/UpdateStoryContents';
import { UpdateStoryLink } from '../models/UpdateStoryLink';
import { UpdateTask } from '../models/UpdateTask';
import { UploadedFile } from '../models/UploadedFile';
import { Workflow } from '../models/Workflow';
import { WorkflowState } from '../models/WorkflowState';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiCreateCategoryRequest {
    /**
     * 
     * @type CreateCategory
     * @memberof DefaultApicreateCategory
     */
    createCategory: CreateCategory
}

export interface DefaultApiCreateEntityTemplateRequest {
    /**
     * Request parameters for creating an entirely new entity template.
     * @type CreateEntityTemplate
     * @memberof DefaultApicreateEntityTemplate
     */
    createEntityTemplate: CreateEntityTemplate
}

export interface DefaultApiCreateEpicRequest {
    /**
     * 
     * @type CreateEpic
     * @memberof DefaultApicreateEpic
     */
    createEpic: CreateEpic
}

export interface DefaultApiCreateEpicCommentRequest {
    /**
     * The ID of the associated Epic.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApicreateEpicComment
     */
    epicPublicId: number
    /**
     * 
     * @type CreateEpicComment
     * @memberof DefaultApicreateEpicComment
     */
    createEpicComment: CreateEpicComment
}

export interface DefaultApiCreateEpicCommentCommentRequest {
    /**
     * The ID of the associated Epic.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApicreateEpicCommentComment
     */
    epicPublicId: number
    /**
     * The ID of the parent Epic Comment.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApicreateEpicCommentComment
     */
    commentPublicId: number
    /**
     * 
     * @type CreateCommentComment
     * @memberof DefaultApicreateEpicCommentComment
     */
    createCommentComment: CreateCommentComment
}

export interface DefaultApiCreateGroupRequest {
    /**
     * 
     * @type CreateGroup
     * @memberof DefaultApicreateGroup
     */
    createGroup: CreateGroup
}

export interface DefaultApiCreateIterationRequest {
    /**
     * 
     * @type CreateIteration
     * @memberof DefaultApicreateIteration
     */
    createIteration: CreateIteration
}

export interface DefaultApiCreateLabelRequest {
    /**
     * Request parameters for creating a Label on a Shortcut Story.
     * @type CreateLabelParams
     * @memberof DefaultApicreateLabel
     */
    createLabelParams: CreateLabelParams
}

export interface DefaultApiCreateLinkedFileRequest {
    /**
     * 
     * @type CreateLinkedFile
     * @memberof DefaultApicreateLinkedFile
     */
    createLinkedFile: CreateLinkedFile
}

export interface DefaultApiCreateMilestoneRequest {
    /**
     * 
     * @type CreateMilestone
     * @memberof DefaultApicreateMilestone
     */
    createMilestone: CreateMilestone
}

export interface DefaultApiCreateMultipleStoriesRequest {
    /**
     * 
     * @type CreateStories
     * @memberof DefaultApicreateMultipleStories
     */
    createStories: CreateStories
}

export interface DefaultApiCreateObjectiveRequest {
    /**
     * 
     * @type CreateObjective
     * @memberof DefaultApicreateObjective
     */
    createObjective: CreateObjective
}

export interface DefaultApiCreateProjectRequest {
    /**
     * 
     * @type CreateProject
     * @memberof DefaultApicreateProject
     */
    createProject: CreateProject
}

export interface DefaultApiCreateStoryRequest {
    /**
     * Request parameters for creating a story.
     * @type CreateStoryParams
     * @memberof DefaultApicreateStory
     */
    createStoryParams: CreateStoryParams
}

export interface DefaultApiCreateStoryCommentRequest {
    /**
     * The ID of the Story that the Comment is in.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApicreateStoryComment
     */
    storyPublicId: number
    /**
     * 
     * @type CreateStoryComment
     * @memberof DefaultApicreateStoryComment
     */
    createStoryComment: CreateStoryComment
}

export interface DefaultApiCreateStoryFromTemplateRequest {
    /**
     * Request parameters for creating a story from a story template. These parameters are merged with the values derived from the template.
     * @type CreateStoryFromTemplateParams
     * @memberof DefaultApicreateStoryFromTemplate
     */
    createStoryFromTemplateParams: CreateStoryFromTemplateParams
}

export interface DefaultApiCreateStoryLinkRequest {
    /**
     * 
     * @type CreateStoryLink
     * @memberof DefaultApicreateStoryLink
     */
    createStoryLink: CreateStoryLink
}

export interface DefaultApiCreateStoryReactionRequest {
    /**
     * The ID of the Story that the Comment is in.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApicreateStoryReaction
     */
    storyPublicId: number
    /**
     * The ID of the Comment.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApicreateStoryReaction
     */
    commentPublicId: number
    /**
     * 
     * @type CreateOrDeleteStoryReaction
     * @memberof DefaultApicreateStoryReaction
     */
    createOrDeleteStoryReaction: CreateOrDeleteStoryReaction
}

export interface DefaultApiCreateTaskRequest {
    /**
     * The ID of the Story that the Task will be in.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApicreateTask
     */
    storyPublicId: number
    /**
     * 
     * @type CreateTask
     * @memberof DefaultApicreateTask
     */
    createTask: CreateTask
}

export interface DefaultApiDeleteCategoryRequest {
    /**
     * The unique ID of the Category.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteCategory
     */
    categoryPublicId: number
}

export interface DefaultApiDeleteCustomFieldRequest {
    /**
     * The unique ID of the CustomField.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteCustomField
     */
    customFieldPublicId: string
}

export interface DefaultApiDeleteEntityTemplateRequest {
    /**
     * The unique ID of the entity template.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApideleteEntityTemplate
     */
    entityTemplatePublicId: string
}

export interface DefaultApiDeleteEpicRequest {
    /**
     * The unique ID of the Epic.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteEpic
     */
    epicPublicId: number
}

export interface DefaultApiDeleteEpicCommentRequest {
    /**
     * The ID of the associated Epic.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteEpicComment
     */
    epicPublicId: number
    /**
     * The ID of the Comment.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteEpicComment
     */
    commentPublicId: number
}

export interface DefaultApiDeleteFileRequest {
    /**
     * The File’s unique ID.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteFile
     */
    filePublicId: number
}

export interface DefaultApiDeleteIterationRequest {
    /**
     * The unique ID of the Iteration.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteIteration
     */
    iterationPublicId: number
}

export interface DefaultApiDeleteLabelRequest {
    /**
     * The unique ID of the Label.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteLabel
     */
    labelPublicId: number
}

export interface DefaultApiDeleteLinkedFileRequest {
    /**
     * The unique identifier of the linked file.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteLinkedFile
     */
    linkedFilePublicId: number
}

export interface DefaultApiDeleteMilestoneRequest {
    /**
     * The ID of the Milestone.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteMilestone
     */
    milestonePublicId: number
}

export interface DefaultApiDeleteMultipleStoriesRequest {
    /**
     * 
     * @type DeleteStories
     * @memberof DefaultApideleteMultipleStories
     */
    deleteStories: DeleteStories
}

export interface DefaultApiDeleteObjectiveRequest {
    /**
     * The ID of the Objective.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteObjective
     */
    objectivePublicId: number
}

export interface DefaultApiDeleteProjectRequest {
    /**
     * The unique ID of the Project.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteProject
     */
    projectPublicId: number
}

export interface DefaultApiDeleteStoryRequest {
    /**
     * The ID of the Story.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteStory
     */
    storyPublicId: number
}

export interface DefaultApiDeleteStoryCommentRequest {
    /**
     * The ID of the Story that the Comment is in.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteStoryComment
     */
    storyPublicId: number
    /**
     * The ID of the Comment.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteStoryComment
     */
    commentPublicId: number
}

export interface DefaultApiDeleteStoryLinkRequest {
    /**
     * The unique ID of the Story Link.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteStoryLink
     */
    storyLinkPublicId: number
}

export interface DefaultApiDeleteStoryReactionRequest {
    /**
     * The ID of the Story that the Comment is in.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteStoryReaction
     */
    storyPublicId: number
    /**
     * The ID of the Comment.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteStoryReaction
     */
    commentPublicId: number
    /**
     * 
     * @type CreateOrDeleteStoryReaction
     * @memberof DefaultApideleteStoryReaction
     */
    createOrDeleteStoryReaction: CreateOrDeleteStoryReaction
}

export interface DefaultApiDeleteTaskRequest {
    /**
     * The unique ID of the Story this Task is associated with.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteTask
     */
    storyPublicId: number
    /**
     * The unique ID of the Task.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApideleteTask
     */
    taskPublicId: number
}

export interface DefaultApiDisableIterationsRequest {
}

export interface DefaultApiDisableStoryTemplatesRequest {
}

export interface DefaultApiEnableIterationsRequest {
}

export interface DefaultApiEnableStoryTemplatesRequest {
}

export interface DefaultApiGetCategoryRequest {
    /**
     * The unique ID of the Category.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetCategory
     */
    categoryPublicId: number
}

export interface DefaultApiGetCurrentMemberInfoRequest {
}

export interface DefaultApiGetCustomFieldRequest {
    /**
     * The unique ID of the CustomField.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApigetCustomField
     */
    customFieldPublicId: string
}

export interface DefaultApiGetEntityTemplateRequest {
    /**
     * The unique ID of the entity template.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApigetEntityTemplate
     */
    entityTemplatePublicId: string
}

export interface DefaultApiGetEpicRequest {
    /**
     * The unique ID of the Epic.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetEpic
     */
    epicPublicId: number
}

export interface DefaultApiGetEpicCommentRequest {
    /**
     * The ID of the associated Epic.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetEpicComment
     */
    epicPublicId: number
    /**
     * The ID of the Comment.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetEpicComment
     */
    commentPublicId: number
}

export interface DefaultApiGetEpicWorkflowRequest {
}

export interface DefaultApiGetExternalLinkStoriesRequest {
    /**
     * The external link associated with one or more stories.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApigetExternalLinkStories
     */
    externalLink: string
}

export interface DefaultApiGetFileRequest {
    /**
     * The File’s unique ID.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetFile
     */
    filePublicId: number
}

export interface DefaultApiGetGroupRequest {
    /**
     * The unique ID of the Group.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApigetGroup
     */
    groupPublicId: string
}

export interface DefaultApiGetIterationRequest {
    /**
     * The unique ID of the Iteration.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetIteration
     */
    iterationPublicId: number
}

export interface DefaultApiGetKeyResultRequest {
    /**
     * The ID of the Key Result.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApigetKeyResult
     */
    keyResultPublicId: string
}

export interface DefaultApiGetLabelRequest {
    /**
     * The unique ID of the Label.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetLabel
     */
    labelPublicId: number
}

export interface DefaultApiGetLinkedFileRequest {
    /**
     * The unique identifier of the linked file.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetLinkedFile
     */
    linkedFilePublicId: number
}

export interface DefaultApiGetMemberRequest {
    /**
     * The Member\&#39;s unique ID.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApigetMember
     */
    memberPublicId: string
    /**
     * The unique ID of the Organization to limit the lookup to.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApigetMember
     */
    orgPublicId?: string
}

export interface DefaultApiGetMilestoneRequest {
    /**
     * The ID of the Milestone.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetMilestone
     */
    milestonePublicId: number
}

export interface DefaultApiGetObjectiveRequest {
    /**
     * The ID of the Objective.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetObjective
     */
    objectivePublicId: number
}

export interface DefaultApiGetProjectRequest {
    /**
     * The unique ID of the Project.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetProject
     */
    projectPublicId: number
}

export interface DefaultApiGetRepositoryRequest {
    /**
     * The unique ID of the Repository.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetRepository
     */
    repoPublicId: number
}

export interface DefaultApiGetStoryRequest {
    /**
     * The ID of the Story.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetStory
     */
    storyPublicId: number
}

export interface DefaultApiGetStoryCommentRequest {
    /**
     * The ID of the Story that the Comment is in.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetStoryComment
     */
    storyPublicId: number
    /**
     * The ID of the Comment.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetStoryComment
     */
    commentPublicId: number
}

export interface DefaultApiGetStoryLinkRequest {
    /**
     * The unique ID of the Story Link.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetStoryLink
     */
    storyLinkPublicId: number
}

export interface DefaultApiGetTaskRequest {
    /**
     * The unique ID of the Story this Task is associated with.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetTask
     */
    storyPublicId: number
    /**
     * The unique ID of the Task.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetTask
     */
    taskPublicId: number
}

export interface DefaultApiGetWorkflowRequest {
    /**
     * The ID of the Workflow.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApigetWorkflow
     */
    workflowPublicId: number
}

export interface DefaultApiListCategoriesRequest {
}

export interface DefaultApiListCategoryMilestonesRequest {
    /**
     * The unique ID of the Category.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistCategoryMilestones
     */
    categoryPublicId: number
}

export interface DefaultApiListCategoryObjectivesRequest {
    /**
     * The unique ID of the Category.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistCategoryObjectives
     */
    categoryPublicId: number
}

export interface DefaultApiListCustomFieldsRequest {
}

export interface DefaultApiListEntityTemplatesRequest {
}

export interface DefaultApiListEpicCommentsRequest {
    /**
     * The unique ID of the Epic.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistEpicComments
     */
    epicPublicId: number
}

export interface DefaultApiListEpicStoriesRequest {
    /**
     * The unique ID of the Epic.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistEpicStories
     */
    epicPublicId: number
    /**
     * A true/false boolean indicating whether to return Stories with their descriptions.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistEpicStories
     */
    includesDescription?: boolean
}

export interface DefaultApiListEpicsRequest {
    /**
     * A true/false boolean indicating whether to return Epics with their descriptions.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistEpics
     */
    includesDescription?: boolean
}

export interface DefaultApiListFilesRequest {
}

export interface DefaultApiListGroupStoriesRequest {
    /**
     * The unique ID of the Group.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistGroupStories
     */
    groupPublicId: string
    /**
     * The maximum number of results to return. (Defaults to 1000, max 1000)
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistGroupStories
     */
    limit?: number
    /**
     * The offset at which to begin returning results. (Defaults to 0)
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistGroupStories
     */
    offset?: number
}

export interface DefaultApiListGroupsRequest {
}

export interface DefaultApiListIterationStoriesRequest {
    /**
     * The unique ID of the Iteration.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistIterationStories
     */
    iterationPublicId: number
    /**
     * A true/false boolean indicating whether to return Stories with their descriptions.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistIterationStories
     */
    includesDescription?: boolean
}

export interface DefaultApiListIterationsRequest {
}

export interface DefaultApiListLabelEpicsRequest {
    /**
     * The unique ID of the Label.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistLabelEpics
     */
    labelPublicId: number
}

export interface DefaultApiListLabelStoriesRequest {
    /**
     * The unique ID of the Label.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistLabelStories
     */
    labelPublicId: number
    /**
     * A true/false boolean indicating whether to return Stories with their descriptions.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistLabelStories
     */
    includesDescription?: boolean
}

export interface DefaultApiListLabelsRequest {
    /**
     * A true/false boolean indicating if the slim versions of the Label should be returned.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistLabels
     */
    slim?: boolean
}

export interface DefaultApiListLinkedFilesRequest {
}

export interface DefaultApiListMembersRequest {
    /**
     * The unique ID of the Organization to limit the list to.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApilistMembers
     */
    orgPublicId?: string
}

export interface DefaultApiListMilestoneEpicsRequest {
    /**
     * The ID of the Milestone.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistMilestoneEpics
     */
    milestonePublicId: number
}

export interface DefaultApiListMilestonesRequest {
}

export interface DefaultApiListObjectiveEpicsRequest {
    /**
     * The ID of the Objective.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistObjectiveEpics
     */
    objectivePublicId: number
}

export interface DefaultApiListObjectivesRequest {
}

export interface DefaultApiListProjectsRequest {
}

export interface DefaultApiListRepositoriesRequest {
}

export interface DefaultApiListStoriesRequest {
    /**
     * The unique ID of the Project.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistStories
     */
    projectPublicId: number
    /**
     * A true/false boolean indicating whether to return Stories with their descriptions.
     * Defaults to: undefined
     * @type boolean
     * @memberof DefaultApilistStories
     */
    includesDescription?: boolean
}

export interface DefaultApiListStoryCommentRequest {
    /**
     * The ID of the Story that the Comment is in.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApilistStoryComment
     */
    storyPublicId: number
}

export interface DefaultApiListWorkflowsRequest {
}

export interface DefaultApiSearchRequest {
    /**
     * See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApisearch
     */
    query: string
    /**
     * The number of search results to include in a page. Minimum of 1 and maximum of 25.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApisearch
     */
    pageSize?: number
    /**
     * The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;.
     * Defaults to: undefined
     * @type &#39;full&#39; | &#39;slim&#39;
     * @memberof DefaultApisearch
     */
    detail?: 'full' | 'slim'
    /**
     * The next page token.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApisearch
     */
    next?: string
    /**
     * A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
     * Defaults to: undefined
     * @type Array&lt;&#39;story&#39; | &#39;milestone&#39; | &#39;epic&#39; | &#39;iteration&#39; | &#39;objective&#39;&gt;
     * @memberof DefaultApisearch
     */
    entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>
}

export interface DefaultApiSearchEpicsRequest {
    /**
     * See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApisearchEpics
     */
    query: string
    /**
     * The number of search results to include in a page. Minimum of 1 and maximum of 25.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApisearchEpics
     */
    pageSize?: number
    /**
     * The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;.
     * Defaults to: undefined
     * @type &#39;full&#39; | &#39;slim&#39;
     * @memberof DefaultApisearchEpics
     */
    detail?: 'full' | 'slim'
    /**
     * The next page token.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApisearchEpics
     */
    next?: string
    /**
     * A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
     * Defaults to: undefined
     * @type Array&lt;&#39;story&#39; | &#39;milestone&#39; | &#39;epic&#39; | &#39;iteration&#39; | &#39;objective&#39;&gt;
     * @memberof DefaultApisearchEpics
     */
    entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>
}

export interface DefaultApiSearchIterationsRequest {
    /**
     * See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApisearchIterations
     */
    query: string
    /**
     * The number of search results to include in a page. Minimum of 1 and maximum of 25.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApisearchIterations
     */
    pageSize?: number
    /**
     * The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;.
     * Defaults to: undefined
     * @type &#39;full&#39; | &#39;slim&#39;
     * @memberof DefaultApisearchIterations
     */
    detail?: 'full' | 'slim'
    /**
     * The next page token.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApisearchIterations
     */
    next?: string
    /**
     * A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
     * Defaults to: undefined
     * @type Array&lt;&#39;story&#39; | &#39;milestone&#39; | &#39;epic&#39; | &#39;iteration&#39; | &#39;objective&#39;&gt;
     * @memberof DefaultApisearchIterations
     */
    entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>
}

export interface DefaultApiSearchMilestonesRequest {
    /**
     * See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApisearchMilestones
     */
    query: string
    /**
     * The number of search results to include in a page. Minimum of 1 and maximum of 25.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApisearchMilestones
     */
    pageSize?: number
    /**
     * The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;.
     * Defaults to: undefined
     * @type &#39;full&#39; | &#39;slim&#39;
     * @memberof DefaultApisearchMilestones
     */
    detail?: 'full' | 'slim'
    /**
     * The next page token.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApisearchMilestones
     */
    next?: string
    /**
     * A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
     * Defaults to: undefined
     * @type Array&lt;&#39;story&#39; | &#39;milestone&#39; | &#39;epic&#39; | &#39;iteration&#39; | &#39;objective&#39;&gt;
     * @memberof DefaultApisearchMilestones
     */
    entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>
}

export interface DefaultApiSearchObjectivesRequest {
    /**
     * See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApisearchObjectives
     */
    query: string
    /**
     * The number of search results to include in a page. Minimum of 1 and maximum of 25.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApisearchObjectives
     */
    pageSize?: number
    /**
     * The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;.
     * Defaults to: undefined
     * @type &#39;full&#39; | &#39;slim&#39;
     * @memberof DefaultApisearchObjectives
     */
    detail?: 'full' | 'slim'
    /**
     * The next page token.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApisearchObjectives
     */
    next?: string
    /**
     * A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
     * Defaults to: undefined
     * @type Array&lt;&#39;story&#39; | &#39;milestone&#39; | &#39;epic&#39; | &#39;iteration&#39; | &#39;objective&#39;&gt;
     * @memberof DefaultApisearchObjectives
     */
    entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>
}

export interface DefaultApiSearchStoriesRequest {
    /**
     * See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApisearchStories
     */
    query: string
    /**
     * The number of search results to include in a page. Minimum of 1 and maximum of 25.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApisearchStories
     */
    pageSize?: number
    /**
     * The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;.
     * Defaults to: undefined
     * @type &#39;full&#39; | &#39;slim&#39;
     * @memberof DefaultApisearchStories
     */
    detail?: 'full' | 'slim'
    /**
     * The next page token.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApisearchStories
     */
    next?: string
    /**
     * A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
     * Defaults to: undefined
     * @type Array&lt;&#39;story&#39; | &#39;milestone&#39; | &#39;epic&#39; | &#39;iteration&#39; | &#39;objective&#39;&gt;
     * @memberof DefaultApisearchStories
     */
    entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>
}

export interface DefaultApiSearchStoriesOldRequest {
    /**
     * 
     * @type SearchStories
     * @memberof DefaultApisearchStoriesOld
     */
    searchStories: SearchStories
}

export interface DefaultApiStoryHistoryRequest {
    /**
     * The ID of the Story.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApistoryHistory
     */
    storyPublicId: number
}

export interface DefaultApiUnlinkCommentThreadFromSlackRequest {
    /**
     * The ID of the Story to unlink.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiunlinkCommentThreadFromSlack
     */
    storyPublicId: number
    /**
     * The ID of the Comment to unlink.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiunlinkCommentThreadFromSlack
     */
    commentPublicId: number
}

export interface DefaultApiUnlinkProductboardFromEpicRequest {
    /**
     * The unique ID of the Epic.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiunlinkProductboardFromEpic
     */
    epicPublicId: number
}

export interface DefaultApiUpdateCategoryRequest {
    /**
     * The unique ID of the Category you wish to update.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateCategory
     */
    categoryPublicId: number
    /**
     * 
     * @type UpdateCategory
     * @memberof DefaultApiupdateCategory
     */
    updateCategory: UpdateCategory
}

export interface DefaultApiUpdateCustomFieldRequest {
    /**
     * The unique ID of the CustomField.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiupdateCustomField
     */
    customFieldPublicId: string
    /**
     * 
     * @type UpdateCustomField
     * @memberof DefaultApiupdateCustomField
     */
    updateCustomField: UpdateCustomField
}

export interface DefaultApiUpdateEntityTemplateRequest {
    /**
     * The unique ID of the template to be updated.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiupdateEntityTemplate
     */
    entityTemplatePublicId: string
    /**
     * Request parameters for changing either a template\&#39;s name or any of   the attributes it is designed to pre-populate.
     * @type UpdateEntityTemplate
     * @memberof DefaultApiupdateEntityTemplate
     */
    updateEntityTemplate: UpdateEntityTemplate
}

export interface DefaultApiUpdateEpicRequest {
    /**
     * The unique ID of the Epic.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateEpic
     */
    epicPublicId: number
    /**
     * 
     * @type UpdateEpic
     * @memberof DefaultApiupdateEpic
     */
    updateEpic: UpdateEpic
}

export interface DefaultApiUpdateEpicCommentRequest {
    /**
     * The ID of the associated Epic.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateEpicComment
     */
    epicPublicId: number
    /**
     * The ID of the Comment.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateEpicComment
     */
    commentPublicId: number
    /**
     * 
     * @type UpdateComment
     * @memberof DefaultApiupdateEpicComment
     */
    updateComment: UpdateComment
}

export interface DefaultApiUpdateFileRequest {
    /**
     * The unique ID assigned to the file in Shortcut.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateFile
     */
    filePublicId: number
    /**
     * 
     * @type UpdateFile
     * @memberof DefaultApiupdateFile
     */
    updateFile: UpdateFile
}

export interface DefaultApiUpdateGroupRequest {
    /**
     * The unique ID of the Group.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiupdateGroup
     */
    groupPublicId: string
    /**
     * 
     * @type UpdateGroup
     * @memberof DefaultApiupdateGroup
     */
    updateGroup: UpdateGroup
}

export interface DefaultApiUpdateIterationRequest {
    /**
     * The unique ID of the Iteration.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateIteration
     */
    iterationPublicId: number
    /**
     * 
     * @type UpdateIteration
     * @memberof DefaultApiupdateIteration
     */
    updateIteration: UpdateIteration
}

export interface DefaultApiUpdateKeyResultRequest {
    /**
     * The ID of the Key Result.
     * Defaults to: undefined
     * @type string
     * @memberof DefaultApiupdateKeyResult
     */
    keyResultPublicId: string
    /**
     * 
     * @type UpdateKeyResult
     * @memberof DefaultApiupdateKeyResult
     */
    updateKeyResult: UpdateKeyResult
}

export interface DefaultApiUpdateLabelRequest {
    /**
     * The unique ID of the Label you wish to update.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateLabel
     */
    labelPublicId: number
    /**
     * 
     * @type UpdateLabel
     * @memberof DefaultApiupdateLabel
     */
    updateLabel: UpdateLabel
}

export interface DefaultApiUpdateLinkedFileRequest {
    /**
     * The unique identifier of the linked file.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateLinkedFile
     */
    linkedFilePublicId: number
    /**
     * 
     * @type UpdateLinkedFile
     * @memberof DefaultApiupdateLinkedFile
     */
    updateLinkedFile: UpdateLinkedFile
}

export interface DefaultApiUpdateMilestoneRequest {
    /**
     * The ID of the Milestone.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateMilestone
     */
    milestonePublicId: number
    /**
     * 
     * @type UpdateMilestone
     * @memberof DefaultApiupdateMilestone
     */
    updateMilestone: UpdateMilestone
}

export interface DefaultApiUpdateMultipleStoriesRequest {
    /**
     * 
     * @type UpdateStories
     * @memberof DefaultApiupdateMultipleStories
     */
    updateStories: UpdateStories
}

export interface DefaultApiUpdateObjectiveRequest {
    /**
     * The ID of the Objective.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateObjective
     */
    objectivePublicId: number
    /**
     * 
     * @type UpdateObjective
     * @memberof DefaultApiupdateObjective
     */
    updateObjective: UpdateObjective
}

export interface DefaultApiUpdateProjectRequest {
    /**
     * The unique ID of the Project.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateProject
     */
    projectPublicId: number
    /**
     * 
     * @type UpdateProject
     * @memberof DefaultApiupdateProject
     */
    updateProject: UpdateProject
}

export interface DefaultApiUpdateStoryRequest {
    /**
     * The unique identifier of this story.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateStory
     */
    storyPublicId: number
    /**
     * 
     * @type UpdateStory
     * @memberof DefaultApiupdateStory
     */
    updateStory: UpdateStory
}

export interface DefaultApiUpdateStoryCommentRequest {
    /**
     * The ID of the Story that the Comment is in.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateStoryComment
     */
    storyPublicId: number
    /**
     * The ID of the Comment
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateStoryComment
     */
    commentPublicId: number
    /**
     * 
     * @type UpdateStoryComment
     * @memberof DefaultApiupdateStoryComment
     */
    updateStoryComment: UpdateStoryComment
}

export interface DefaultApiUpdateStoryLinkRequest {
    /**
     * The unique ID of the Story Link.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateStoryLink
     */
    storyLinkPublicId: number
    /**
     * 
     * @type UpdateStoryLink
     * @memberof DefaultApiupdateStoryLink
     */
    updateStoryLink: UpdateStoryLink
}

export interface DefaultApiUpdateTaskRequest {
    /**
     * The unique identifier of the parent Story.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateTask
     */
    storyPublicId: number
    /**
     * The unique identifier of the Task you wish to update.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiupdateTask
     */
    taskPublicId: number
    /**
     * 
     * @type UpdateTask
     * @memberof DefaultApiupdateTask
     */
    updateTask: UpdateTask
}

export interface DefaultApiUploadFilesRequest {
    /**
     * A file upload. At least one is required.
     * Defaults to: undefined
     * @type HttpFile
     * @memberof DefaultApiuploadFiles
     */
    file0: HttpFile
    /**
     * The story ID that these files will be associated with.
     * Defaults to: undefined
     * @type number
     * @memberof DefaultApiuploadFiles
     */
    storyId?: number
    /**
     * Optional additional files.
     * Defaults to: undefined
     * @type HttpFile
     * @memberof DefaultApiuploadFiles
     */
    file1?: HttpFile
    /**
     * Optional additional files.
     * Defaults to: undefined
     * @type HttpFile
     * @memberof DefaultApiuploadFiles
     */
    file2?: HttpFile
    /**
     * Optional additional files.
     * Defaults to: undefined
     * @type HttpFile
     * @memberof DefaultApiuploadFiles
     */
    file3?: HttpFile
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Category allows you to create a new Category in Shortcut.
     * Create Category
     * @param param the request object
     */
    public createCategoryWithHttpInfo(param: DefaultApiCreateCategoryRequest, options?: Configuration): Promise<HttpInfo<Category>> {
        return this.api.createCategoryWithHttpInfo(param.createCategory,  options).toPromise();
    }

    /**
     * Create Category allows you to create a new Category in Shortcut.
     * Create Category
     * @param param the request object
     */
    public createCategory(param: DefaultApiCreateCategoryRequest, options?: Configuration): Promise<Category> {
        return this.api.createCategory(param.createCategory,  options).toPromise();
    }

    /**
     * Create a new entity template for the Workspace.
     * Create Entity Template
     * @param param the request object
     */
    public createEntityTemplateWithHttpInfo(param: DefaultApiCreateEntityTemplateRequest, options?: Configuration): Promise<HttpInfo<EntityTemplate>> {
        return this.api.createEntityTemplateWithHttpInfo(param.createEntityTemplate,  options).toPromise();
    }

    /**
     * Create a new entity template for the Workspace.
     * Create Entity Template
     * @param param the request object
     */
    public createEntityTemplate(param: DefaultApiCreateEntityTemplateRequest, options?: Configuration): Promise<EntityTemplate> {
        return this.api.createEntityTemplate(param.createEntityTemplate,  options).toPromise();
    }

    /**
     * Create Epic allows you to create a new Epic in Shortcut.
     * Create Epic
     * @param param the request object
     */
    public createEpicWithHttpInfo(param: DefaultApiCreateEpicRequest, options?: Configuration): Promise<HttpInfo<Epic>> {
        return this.api.createEpicWithHttpInfo(param.createEpic,  options).toPromise();
    }

    /**
     * Create Epic allows you to create a new Epic in Shortcut.
     * Create Epic
     * @param param the request object
     */
    public createEpic(param: DefaultApiCreateEpicRequest, options?: Configuration): Promise<Epic> {
        return this.api.createEpic(param.createEpic,  options).toPromise();
    }

    /**
     * This endpoint allows you to create a threaded Comment on an Epic.
     * Create Epic Comment
     * @param param the request object
     */
    public createEpicCommentWithHttpInfo(param: DefaultApiCreateEpicCommentRequest, options?: Configuration): Promise<HttpInfo<ThreadedComment>> {
        return this.api.createEpicCommentWithHttpInfo(param.epicPublicId, param.createEpicComment,  options).toPromise();
    }

    /**
     * This endpoint allows you to create a threaded Comment on an Epic.
     * Create Epic Comment
     * @param param the request object
     */
    public createEpicComment(param: DefaultApiCreateEpicCommentRequest, options?: Configuration): Promise<ThreadedComment> {
        return this.api.createEpicComment(param.epicPublicId, param.createEpicComment,  options).toPromise();
    }

    /**
     * This endpoint allows you to create a nested Comment reply to an existing Epic Comment.
     * Create Epic Comment Comment
     * @param param the request object
     */
    public createEpicCommentCommentWithHttpInfo(param: DefaultApiCreateEpicCommentCommentRequest, options?: Configuration): Promise<HttpInfo<ThreadedComment>> {
        return this.api.createEpicCommentCommentWithHttpInfo(param.epicPublicId, param.commentPublicId, param.createCommentComment,  options).toPromise();
    }

    /**
     * This endpoint allows you to create a nested Comment reply to an existing Epic Comment.
     * Create Epic Comment Comment
     * @param param the request object
     */
    public createEpicCommentComment(param: DefaultApiCreateEpicCommentCommentRequest, options?: Configuration): Promise<ThreadedComment> {
        return this.api.createEpicCommentComment(param.epicPublicId, param.commentPublicId, param.createCommentComment,  options).toPromise();
    }

    /**
     * Create Group
     * @param param the request object
     */
    public createGroupWithHttpInfo(param: DefaultApiCreateGroupRequest, options?: Configuration): Promise<HttpInfo<Group>> {
        return this.api.createGroupWithHttpInfo(param.createGroup,  options).toPromise();
    }

    /**
     * Create Group
     * @param param the request object
     */
    public createGroup(param: DefaultApiCreateGroupRequest, options?: Configuration): Promise<Group> {
        return this.api.createGroup(param.createGroup,  options).toPromise();
    }

    /**
     * Create Iteration
     * @param param the request object
     */
    public createIterationWithHttpInfo(param: DefaultApiCreateIterationRequest, options?: Configuration): Promise<HttpInfo<Iteration>> {
        return this.api.createIterationWithHttpInfo(param.createIteration,  options).toPromise();
    }

    /**
     * Create Iteration
     * @param param the request object
     */
    public createIteration(param: DefaultApiCreateIterationRequest, options?: Configuration): Promise<Iteration> {
        return this.api.createIteration(param.createIteration,  options).toPromise();
    }

    /**
     * Create Label allows you to create a new Label in Shortcut.
     * Create Label
     * @param param the request object
     */
    public createLabelWithHttpInfo(param: DefaultApiCreateLabelRequest, options?: Configuration): Promise<HttpInfo<Label>> {
        return this.api.createLabelWithHttpInfo(param.createLabelParams,  options).toPromise();
    }

    /**
     * Create Label allows you to create a new Label in Shortcut.
     * Create Label
     * @param param the request object
     */
    public createLabel(param: DefaultApiCreateLabelRequest, options?: Configuration): Promise<Label> {
        return this.api.createLabel(param.createLabelParams,  options).toPromise();
    }

    /**
     * Create Linked File allows you to create a new Linked File in Shortcut.
     * Create Linked File
     * @param param the request object
     */
    public createLinkedFileWithHttpInfo(param: DefaultApiCreateLinkedFileRequest, options?: Configuration): Promise<HttpInfo<LinkedFile>> {
        return this.api.createLinkedFileWithHttpInfo(param.createLinkedFile,  options).toPromise();
    }

    /**
     * Create Linked File allows you to create a new Linked File in Shortcut.
     * Create Linked File
     * @param param the request object
     */
    public createLinkedFile(param: DefaultApiCreateLinkedFileRequest, options?: Configuration): Promise<LinkedFile> {
        return this.api.createLinkedFile(param.createLinkedFile,  options).toPromise();
    }

    /**
     * (Deprecated: Use \'Create Objective\') Create Milestone allows you to create a new Milestone in Shortcut.
     * Create Milestone
     * @param param the request object
     */
    public createMilestoneWithHttpInfo(param: DefaultApiCreateMilestoneRequest, options?: Configuration): Promise<HttpInfo<Milestone>> {
        return this.api.createMilestoneWithHttpInfo(param.createMilestone,  options).toPromise();
    }

    /**
     * (Deprecated: Use \'Create Objective\') Create Milestone allows you to create a new Milestone in Shortcut.
     * Create Milestone
     * @param param the request object
     */
    public createMilestone(param: DefaultApiCreateMilestoneRequest, options?: Configuration): Promise<Milestone> {
        return this.api.createMilestone(param.createMilestone,  options).toPromise();
    }

    /**
     * Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as [Create Story](https://developer.shortcut.com/api/rest/v3#create-story).
     * Create Multiple Stories
     * @param param the request object
     */
    public createMultipleStoriesWithHttpInfo(param: DefaultApiCreateMultipleStoriesRequest, options?: Configuration): Promise<HttpInfo<Array<StorySlim>>> {
        return this.api.createMultipleStoriesWithHttpInfo(param.createStories,  options).toPromise();
    }

    /**
     * Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as [Create Story](https://developer.shortcut.com/api/rest/v3#create-story).
     * Create Multiple Stories
     * @param param the request object
     */
    public createMultipleStories(param: DefaultApiCreateMultipleStoriesRequest, options?: Configuration): Promise<Array<StorySlim>> {
        return this.api.createMultipleStories(param.createStories,  options).toPromise();
    }

    /**
     * Create Objective allows you to create a new Objective in Shortcut.
     * Create Objective
     * @param param the request object
     */
    public createObjectiveWithHttpInfo(param: DefaultApiCreateObjectiveRequest, options?: Configuration): Promise<HttpInfo<Objective>> {
        return this.api.createObjectiveWithHttpInfo(param.createObjective,  options).toPromise();
    }

    /**
     * Create Objective allows you to create a new Objective in Shortcut.
     * Create Objective
     * @param param the request object
     */
    public createObjective(param: DefaultApiCreateObjectiveRequest, options?: Configuration): Promise<Objective> {
        return this.api.createObjective(param.createObjective,  options).toPromise();
    }

    /**
     * Create Project is used to create a new Shortcut Project.
     * Create Project
     * @param param the request object
     */
    public createProjectWithHttpInfo(param: DefaultApiCreateProjectRequest, options?: Configuration): Promise<HttpInfo<Project>> {
        return this.api.createProjectWithHttpInfo(param.createProject,  options).toPromise();
    }

    /**
     * Create Project is used to create a new Shortcut Project.
     * Create Project
     * @param param the request object
     */
    public createProject(param: DefaultApiCreateProjectRequest, options?: Configuration): Promise<Project> {
        return this.api.createProject(param.createProject,  options).toPromise();
    }

    /**
     * Create Story is used to add a new story to your Shortcut Workspace.     This endpoint requires that either **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are specified. The workflow_state_id has been marked as required and is the recommended field to specify because we are in the process of sunsetting Projects in Shortcut.
     * Create Story
     * @param param the request object
     */
    public createStoryWithHttpInfo(param: DefaultApiCreateStoryRequest, options?: Configuration): Promise<HttpInfo<Story>> {
        return this.api.createStoryWithHttpInfo(param.createStoryParams,  options).toPromise();
    }

    /**
     * Create Story is used to add a new story to your Shortcut Workspace.     This endpoint requires that either **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are specified. The workflow_state_id has been marked as required and is the recommended field to specify because we are in the process of sunsetting Projects in Shortcut.
     * Create Story
     * @param param the request object
     */
    public createStory(param: DefaultApiCreateStoryRequest, options?: Configuration): Promise<Story> {
        return this.api.createStory(param.createStoryParams,  options).toPromise();
    }

    /**
     * Create Comment allows you to create a Comment on any Story.
     * Create Story Comment
     * @param param the request object
     */
    public createStoryCommentWithHttpInfo(param: DefaultApiCreateStoryCommentRequest, options?: Configuration): Promise<HttpInfo<StoryComment>> {
        return this.api.createStoryCommentWithHttpInfo(param.storyPublicId, param.createStoryComment,  options).toPromise();
    }

    /**
     * Create Comment allows you to create a Comment on any Story.
     * Create Story Comment
     * @param param the request object
     */
    public createStoryComment(param: DefaultApiCreateStoryCommentRequest, options?: Configuration): Promise<StoryComment> {
        return this.api.createStoryComment(param.storyPublicId, param.createStoryComment,  options).toPromise();
    }

    /**
     * Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.
     * Create Story From Template
     * @param param the request object
     */
    public createStoryFromTemplateWithHttpInfo(param: DefaultApiCreateStoryFromTemplateRequest, options?: Configuration): Promise<HttpInfo<Story>> {
        return this.api.createStoryFromTemplateWithHttpInfo(param.createStoryFromTemplateParams,  options).toPromise();
    }

    /**
     * Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.
     * Create Story From Template
     * @param param the request object
     */
    public createStoryFromTemplate(param: DefaultApiCreateStoryFromTemplateRequest, options?: Configuration): Promise<Story> {
        return this.api.createStoryFromTemplate(param.createStoryFromTemplateParams,  options).toPromise();
    }

    /**
     * Story Links (called Story Relationships in the UI) allow you create semantic relationships between two stories. The parameters read like an active voice grammatical sentence:  subject -> verb -> object.  The subject story acts on the object Story; the object story is the direct object of the sentence.  The subject story \"blocks\", \"duplicates\", or \"relates to\" the object story.  Examples: - \"story 5 blocks story 6” -- story 6 is now \"blocked\" until story 5 is moved to a Done workflow state. - \"story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be archived). - \"story 7 relates to story 3”
     * Create Story Link
     * @param param the request object
     */
    public createStoryLinkWithHttpInfo(param: DefaultApiCreateStoryLinkRequest, options?: Configuration): Promise<HttpInfo<StoryLink>> {
        return this.api.createStoryLinkWithHttpInfo(param.createStoryLink,  options).toPromise();
    }

    /**
     * Story Links (called Story Relationships in the UI) allow you create semantic relationships between two stories. The parameters read like an active voice grammatical sentence:  subject -> verb -> object.  The subject story acts on the object Story; the object story is the direct object of the sentence.  The subject story \"blocks\", \"duplicates\", or \"relates to\" the object story.  Examples: - \"story 5 blocks story 6” -- story 6 is now \"blocked\" until story 5 is moved to a Done workflow state. - \"story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be archived). - \"story 7 relates to story 3”
     * Create Story Link
     * @param param the request object
     */
    public createStoryLink(param: DefaultApiCreateStoryLinkRequest, options?: Configuration): Promise<StoryLink> {
        return this.api.createStoryLink(param.createStoryLink,  options).toPromise();
    }

    /**
     * Create a reaction to a story comment.
     * Create Story Reaction
     * @param param the request object
     */
    public createStoryReactionWithHttpInfo(param: DefaultApiCreateStoryReactionRequest, options?: Configuration): Promise<HttpInfo<Array<StoryReaction>>> {
        return this.api.createStoryReactionWithHttpInfo(param.storyPublicId, param.commentPublicId, param.createOrDeleteStoryReaction,  options).toPromise();
    }

    /**
     * Create a reaction to a story comment.
     * Create Story Reaction
     * @param param the request object
     */
    public createStoryReaction(param: DefaultApiCreateStoryReactionRequest, options?: Configuration): Promise<Array<StoryReaction>> {
        return this.api.createStoryReaction(param.storyPublicId, param.commentPublicId, param.createOrDeleteStoryReaction,  options).toPromise();
    }

    /**
     * Create Task is used to create a new task in a Story.
     * Create Task
     * @param param the request object
     */
    public createTaskWithHttpInfo(param: DefaultApiCreateTaskRequest, options?: Configuration): Promise<HttpInfo<Task>> {
        return this.api.createTaskWithHttpInfo(param.storyPublicId, param.createTask,  options).toPromise();
    }

    /**
     * Create Task is used to create a new task in a Story.
     * Create Task
     * @param param the request object
     */
    public createTask(param: DefaultApiCreateTaskRequest, options?: Configuration): Promise<Task> {
        return this.api.createTask(param.storyPublicId, param.createTask,  options).toPromise();
    }

    /**
     * Delete Category can be used to delete any Category.
     * Delete Category
     * @param param the request object
     */
    public deleteCategoryWithHttpInfo(param: DefaultApiDeleteCategoryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCategoryWithHttpInfo(param.categoryPublicId,  options).toPromise();
    }

    /**
     * Delete Category can be used to delete any Category.
     * Delete Category
     * @param param the request object
     */
    public deleteCategory(param: DefaultApiDeleteCategoryRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCategory(param.categoryPublicId,  options).toPromise();
    }

    /**
     * Delete Custom Field
     * @param param the request object
     */
    public deleteCustomFieldWithHttpInfo(param: DefaultApiDeleteCustomFieldRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCustomFieldWithHttpInfo(param.customFieldPublicId,  options).toPromise();
    }

    /**
     * Delete Custom Field
     * @param param the request object
     */
    public deleteCustomField(param: DefaultApiDeleteCustomFieldRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCustomField(param.customFieldPublicId,  options).toPromise();
    }

    /**
     * Delete Entity Template
     * @param param the request object
     */
    public deleteEntityTemplateWithHttpInfo(param: DefaultApiDeleteEntityTemplateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteEntityTemplateWithHttpInfo(param.entityTemplatePublicId,  options).toPromise();
    }

    /**
     * Delete Entity Template
     * @param param the request object
     */
    public deleteEntityTemplate(param: DefaultApiDeleteEntityTemplateRequest, options?: Configuration): Promise<void> {
        return this.api.deleteEntityTemplate(param.entityTemplatePublicId,  options).toPromise();
    }

    /**
     * Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.
     * Delete Epic
     * @param param the request object
     */
    public deleteEpicWithHttpInfo(param: DefaultApiDeleteEpicRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteEpicWithHttpInfo(param.epicPublicId,  options).toPromise();
    }

    /**
     * Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.
     * Delete Epic
     * @param param the request object
     */
    public deleteEpic(param: DefaultApiDeleteEpicRequest, options?: Configuration): Promise<void> {
        return this.api.deleteEpic(param.epicPublicId,  options).toPromise();
    }

    /**
     * This endpoint allows you to delete a Comment from an Epic.
     * Delete Epic Comment
     * @param param the request object
     */
    public deleteEpicCommentWithHttpInfo(param: DefaultApiDeleteEpicCommentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteEpicCommentWithHttpInfo(param.epicPublicId, param.commentPublicId,  options).toPromise();
    }

    /**
     * This endpoint allows you to delete a Comment from an Epic.
     * Delete Epic Comment
     * @param param the request object
     */
    public deleteEpicComment(param: DefaultApiDeleteEpicCommentRequest, options?: Configuration): Promise<void> {
        return this.api.deleteEpicComment(param.epicPublicId, param.commentPublicId,  options).toPromise();
    }

    /**
     * Delete File deletes a previously uploaded file.
     * Delete File
     * @param param the request object
     */
    public deleteFileWithHttpInfo(param: DefaultApiDeleteFileRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteFileWithHttpInfo(param.filePublicId,  options).toPromise();
    }

    /**
     * Delete File deletes a previously uploaded file.
     * Delete File
     * @param param the request object
     */
    public deleteFile(param: DefaultApiDeleteFileRequest, options?: Configuration): Promise<void> {
        return this.api.deleteFile(param.filePublicId,  options).toPromise();
    }

    /**
     * Delete Iteration
     * @param param the request object
     */
    public deleteIterationWithHttpInfo(param: DefaultApiDeleteIterationRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteIterationWithHttpInfo(param.iterationPublicId,  options).toPromise();
    }

    /**
     * Delete Iteration
     * @param param the request object
     */
    public deleteIteration(param: DefaultApiDeleteIterationRequest, options?: Configuration): Promise<void> {
        return this.api.deleteIteration(param.iterationPublicId,  options).toPromise();
    }

    /**
     * Delete Label can be used to delete any Label.
     * Delete Label
     * @param param the request object
     */
    public deleteLabelWithHttpInfo(param: DefaultApiDeleteLabelRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteLabelWithHttpInfo(param.labelPublicId,  options).toPromise();
    }

    /**
     * Delete Label can be used to delete any Label.
     * Delete Label
     * @param param the request object
     */
    public deleteLabel(param: DefaultApiDeleteLabelRequest, options?: Configuration): Promise<void> {
        return this.api.deleteLabel(param.labelPublicId,  options).toPromise();
    }

    /**
     * Delete Linked File can be used to delete any previously attached Linked-File.
     * Delete Linked File
     * @param param the request object
     */
    public deleteLinkedFileWithHttpInfo(param: DefaultApiDeleteLinkedFileRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteLinkedFileWithHttpInfo(param.linkedFilePublicId,  options).toPromise();
    }

    /**
     * Delete Linked File can be used to delete any previously attached Linked-File.
     * Delete Linked File
     * @param param the request object
     */
    public deleteLinkedFile(param: DefaultApiDeleteLinkedFileRequest, options?: Configuration): Promise<void> {
        return this.api.deleteLinkedFile(param.linkedFilePublicId,  options).toPromise();
    }

    /**
     * (Deprecated: Use \'Delete Objective\') Delete Milestone can be used to delete any Milestone.
     * Delete Milestone
     * @param param the request object
     */
    public deleteMilestoneWithHttpInfo(param: DefaultApiDeleteMilestoneRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteMilestoneWithHttpInfo(param.milestonePublicId,  options).toPromise();
    }

    /**
     * (Deprecated: Use \'Delete Objective\') Delete Milestone can be used to delete any Milestone.
     * Delete Milestone
     * @param param the request object
     */
    public deleteMilestone(param: DefaultApiDeleteMilestoneRequest, options?: Configuration): Promise<void> {
        return this.api.deleteMilestone(param.milestonePublicId,  options).toPromise();
    }

    /**
     * Delete Multiple Stories allows you to delete multiple archived stories at once.
     * Delete Multiple Stories
     * @param param the request object
     */
    public deleteMultipleStoriesWithHttpInfo(param: DefaultApiDeleteMultipleStoriesRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteMultipleStoriesWithHttpInfo(param.deleteStories,  options).toPromise();
    }

    /**
     * Delete Multiple Stories allows you to delete multiple archived stories at once.
     * Delete Multiple Stories
     * @param param the request object
     */
    public deleteMultipleStories(param: DefaultApiDeleteMultipleStoriesRequest, options?: Configuration): Promise<void> {
        return this.api.deleteMultipleStories(param.deleteStories,  options).toPromise();
    }

    /**
     * Delete Objective can be used to delete any Objective.
     * Delete Objective
     * @param param the request object
     */
    public deleteObjectiveWithHttpInfo(param: DefaultApiDeleteObjectiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteObjectiveWithHttpInfo(param.objectivePublicId,  options).toPromise();
    }

    /**
     * Delete Objective can be used to delete any Objective.
     * Delete Objective
     * @param param the request object
     */
    public deleteObjective(param: DefaultApiDeleteObjectiveRequest, options?: Configuration): Promise<void> {
        return this.api.deleteObjective(param.objectivePublicId,  options).toPromise();
    }

    /**
     * Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.
     * Delete Project
     * @param param the request object
     */
    public deleteProjectWithHttpInfo(param: DefaultApiDeleteProjectRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteProjectWithHttpInfo(param.projectPublicId,  options).toPromise();
    }

    /**
     * Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.
     * Delete Project
     * @param param the request object
     */
    public deleteProject(param: DefaultApiDeleteProjectRequest, options?: Configuration): Promise<void> {
        return this.api.deleteProject(param.projectPublicId,  options).toPromise();
    }

    /**
     * Delete Story can be used to delete any Story.
     * Delete Story
     * @param param the request object
     */
    public deleteStoryWithHttpInfo(param: DefaultApiDeleteStoryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteStoryWithHttpInfo(param.storyPublicId,  options).toPromise();
    }

    /**
     * Delete Story can be used to delete any Story.
     * Delete Story
     * @param param the request object
     */
    public deleteStory(param: DefaultApiDeleteStoryRequest, options?: Configuration): Promise<void> {
        return this.api.deleteStory(param.storyPublicId,  options).toPromise();
    }

    /**
     * Delete a Comment from any story.
     * Delete Story Comment
     * @param param the request object
     */
    public deleteStoryCommentWithHttpInfo(param: DefaultApiDeleteStoryCommentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteStoryCommentWithHttpInfo(param.storyPublicId, param.commentPublicId,  options).toPromise();
    }

    /**
     * Delete a Comment from any story.
     * Delete Story Comment
     * @param param the request object
     */
    public deleteStoryComment(param: DefaultApiDeleteStoryCommentRequest, options?: Configuration): Promise<void> {
        return this.api.deleteStoryComment(param.storyPublicId, param.commentPublicId,  options).toPromise();
    }

    /**
     * Removes the relationship between the stories for the given Story Link.
     * Delete Story Link
     * @param param the request object
     */
    public deleteStoryLinkWithHttpInfo(param: DefaultApiDeleteStoryLinkRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteStoryLinkWithHttpInfo(param.storyLinkPublicId,  options).toPromise();
    }

    /**
     * Removes the relationship between the stories for the given Story Link.
     * Delete Story Link
     * @param param the request object
     */
    public deleteStoryLink(param: DefaultApiDeleteStoryLinkRequest, options?: Configuration): Promise<void> {
        return this.api.deleteStoryLink(param.storyLinkPublicId,  options).toPromise();
    }

    /**
     * Delete a reaction from any story comment.
     * Delete Story Reaction
     * @param param the request object
     */
    public deleteStoryReactionWithHttpInfo(param: DefaultApiDeleteStoryReactionRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteStoryReactionWithHttpInfo(param.storyPublicId, param.commentPublicId, param.createOrDeleteStoryReaction,  options).toPromise();
    }

    /**
     * Delete a reaction from any story comment.
     * Delete Story Reaction
     * @param param the request object
     */
    public deleteStoryReaction(param: DefaultApiDeleteStoryReactionRequest, options?: Configuration): Promise<void> {
        return this.api.deleteStoryReaction(param.storyPublicId, param.commentPublicId, param.createOrDeleteStoryReaction,  options).toPromise();
    }

    /**
     * Delete Task can be used to delete any previously created Task on a Story.
     * Delete Task
     * @param param the request object
     */
    public deleteTaskWithHttpInfo(param: DefaultApiDeleteTaskRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteTaskWithHttpInfo(param.storyPublicId, param.taskPublicId,  options).toPromise();
    }

    /**
     * Delete Task can be used to delete any previously created Task on a Story.
     * Delete Task
     * @param param the request object
     */
    public deleteTask(param: DefaultApiDeleteTaskRequest, options?: Configuration): Promise<void> {
        return this.api.deleteTask(param.storyPublicId, param.taskPublicId,  options).toPromise();
    }

    /**
     * Disables Iterations for the current workspace
     * Disable Iterations
     * @param param the request object
     */
    public disableIterationsWithHttpInfo(param: DefaultApiDisableIterationsRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.disableIterationsWithHttpInfo( options).toPromise();
    }

    /**
     * Disables Iterations for the current workspace
     * Disable Iterations
     * @param param the request object
     */
    public disableIterations(param: DefaultApiDisableIterationsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.disableIterations( options).toPromise();
    }

    /**
     * Disables the Story Template feature for the Workspace.
     * Disable Story Templates
     * @param param the request object
     */
    public disableStoryTemplatesWithHttpInfo(param: DefaultApiDisableStoryTemplatesRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.disableStoryTemplatesWithHttpInfo( options).toPromise();
    }

    /**
     * Disables the Story Template feature for the Workspace.
     * Disable Story Templates
     * @param param the request object
     */
    public disableStoryTemplates(param: DefaultApiDisableStoryTemplatesRequest = {}, options?: Configuration): Promise<void> {
        return this.api.disableStoryTemplates( options).toPromise();
    }

    /**
     * Enables Iterations for the current workspace
     * Enable Iterations
     * @param param the request object
     */
    public enableIterationsWithHttpInfo(param: DefaultApiEnableIterationsRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.enableIterationsWithHttpInfo( options).toPromise();
    }

    /**
     * Enables Iterations for the current workspace
     * Enable Iterations
     * @param param the request object
     */
    public enableIterations(param: DefaultApiEnableIterationsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.enableIterations( options).toPromise();
    }

    /**
     * Enables the Story Template feature for the Workspace.
     * Enable Story Templates
     * @param param the request object
     */
    public enableStoryTemplatesWithHttpInfo(param: DefaultApiEnableStoryTemplatesRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.enableStoryTemplatesWithHttpInfo( options).toPromise();
    }

    /**
     * Enables the Story Template feature for the Workspace.
     * Enable Story Templates
     * @param param the request object
     */
    public enableStoryTemplates(param: DefaultApiEnableStoryTemplatesRequest = {}, options?: Configuration): Promise<void> {
        return this.api.enableStoryTemplates( options).toPromise();
    }

    /**
     * Get Category returns information about the selected Category.
     * Get Category
     * @param param the request object
     */
    public getCategoryWithHttpInfo(param: DefaultApiGetCategoryRequest, options?: Configuration): Promise<HttpInfo<Category>> {
        return this.api.getCategoryWithHttpInfo(param.categoryPublicId,  options).toPromise();
    }

    /**
     * Get Category returns information about the selected Category.
     * Get Category
     * @param param the request object
     */
    public getCategory(param: DefaultApiGetCategoryRequest, options?: Configuration): Promise<Category> {
        return this.api.getCategory(param.categoryPublicId,  options).toPromise();
    }

    /**
     * Returns information about the authenticated member.
     * Get Current Member Info
     * @param param the request object
     */
    public getCurrentMemberInfoWithHttpInfo(param: DefaultApiGetCurrentMemberInfoRequest = {}, options?: Configuration): Promise<HttpInfo<MemberInfo>> {
        return this.api.getCurrentMemberInfoWithHttpInfo( options).toPromise();
    }

    /**
     * Returns information about the authenticated member.
     * Get Current Member Info
     * @param param the request object
     */
    public getCurrentMemberInfo(param: DefaultApiGetCurrentMemberInfoRequest = {}, options?: Configuration): Promise<MemberInfo> {
        return this.api.getCurrentMemberInfo( options).toPromise();
    }

    /**
     * Get Custom Field
     * @param param the request object
     */
    public getCustomFieldWithHttpInfo(param: DefaultApiGetCustomFieldRequest, options?: Configuration): Promise<HttpInfo<CustomField>> {
        return this.api.getCustomFieldWithHttpInfo(param.customFieldPublicId,  options).toPromise();
    }

    /**
     * Get Custom Field
     * @param param the request object
     */
    public getCustomField(param: DefaultApiGetCustomFieldRequest, options?: Configuration): Promise<CustomField> {
        return this.api.getCustomField(param.customFieldPublicId,  options).toPromise();
    }

    /**
     * Get Entity Template returns information about a given entity template.
     * Get Entity Template
     * @param param the request object
     */
    public getEntityTemplateWithHttpInfo(param: DefaultApiGetEntityTemplateRequest, options?: Configuration): Promise<HttpInfo<EntityTemplate>> {
        return this.api.getEntityTemplateWithHttpInfo(param.entityTemplatePublicId,  options).toPromise();
    }

    /**
     * Get Entity Template returns information about a given entity template.
     * Get Entity Template
     * @param param the request object
     */
    public getEntityTemplate(param: DefaultApiGetEntityTemplateRequest, options?: Configuration): Promise<EntityTemplate> {
        return this.api.getEntityTemplate(param.entityTemplatePublicId,  options).toPromise();
    }

    /**
     * Get Epic returns information about the selected Epic.
     * Get Epic
     * @param param the request object
     */
    public getEpicWithHttpInfo(param: DefaultApiGetEpicRequest, options?: Configuration): Promise<HttpInfo<Epic>> {
        return this.api.getEpicWithHttpInfo(param.epicPublicId,  options).toPromise();
    }

    /**
     * Get Epic returns information about the selected Epic.
     * Get Epic
     * @param param the request object
     */
    public getEpic(param: DefaultApiGetEpicRequest, options?: Configuration): Promise<Epic> {
        return this.api.getEpic(param.epicPublicId,  options).toPromise();
    }

    /**
     * This endpoint returns information about the selected Epic Comment.
     * Get Epic Comment
     * @param param the request object
     */
    public getEpicCommentWithHttpInfo(param: DefaultApiGetEpicCommentRequest, options?: Configuration): Promise<HttpInfo<ThreadedComment>> {
        return this.api.getEpicCommentWithHttpInfo(param.epicPublicId, param.commentPublicId,  options).toPromise();
    }

    /**
     * This endpoint returns information about the selected Epic Comment.
     * Get Epic Comment
     * @param param the request object
     */
    public getEpicComment(param: DefaultApiGetEpicCommentRequest, options?: Configuration): Promise<ThreadedComment> {
        return this.api.getEpicComment(param.epicPublicId, param.commentPublicId,  options).toPromise();
    }

    /**
     * Returns the Epic Workflow for the Workspace.
     * Get Epic Workflow
     * @param param the request object
     */
    public getEpicWorkflowWithHttpInfo(param: DefaultApiGetEpicWorkflowRequest = {}, options?: Configuration): Promise<HttpInfo<EpicWorkflow>> {
        return this.api.getEpicWorkflowWithHttpInfo( options).toPromise();
    }

    /**
     * Returns the Epic Workflow for the Workspace.
     * Get Epic Workflow
     * @param param the request object
     */
    public getEpicWorkflow(param: DefaultApiGetEpicWorkflowRequest = {}, options?: Configuration): Promise<EpicWorkflow> {
        return this.api.getEpicWorkflow( options).toPromise();
    }

    /**
     * Get Stories which have a given External Link associated with them.
     * Get External Link Stories
     * @param param the request object
     */
    public getExternalLinkStoriesWithHttpInfo(param: DefaultApiGetExternalLinkStoriesRequest, options?: Configuration): Promise<HttpInfo<Array<StorySlim>>> {
        return this.api.getExternalLinkStoriesWithHttpInfo(param.externalLink,  options).toPromise();
    }

    /**
     * Get Stories which have a given External Link associated with them.
     * Get External Link Stories
     * @param param the request object
     */
    public getExternalLinkStories(param: DefaultApiGetExternalLinkStoriesRequest, options?: Configuration): Promise<Array<StorySlim>> {
        return this.api.getExternalLinkStories(param.externalLink,  options).toPromise();
    }

    /**
     * Get File returns information about the selected UploadedFile.
     * Get File
     * @param param the request object
     */
    public getFileWithHttpInfo(param: DefaultApiGetFileRequest, options?: Configuration): Promise<HttpInfo<UploadedFile>> {
        return this.api.getFileWithHttpInfo(param.filePublicId,  options).toPromise();
    }

    /**
     * Get File returns information about the selected UploadedFile.
     * Get File
     * @param param the request object
     */
    public getFile(param: DefaultApiGetFileRequest, options?: Configuration): Promise<UploadedFile> {
        return this.api.getFile(param.filePublicId,  options).toPromise();
    }

    /**
     * Get Group
     * @param param the request object
     */
    public getGroupWithHttpInfo(param: DefaultApiGetGroupRequest, options?: Configuration): Promise<HttpInfo<Group>> {
        return this.api.getGroupWithHttpInfo(param.groupPublicId,  options).toPromise();
    }

    /**
     * Get Group
     * @param param the request object
     */
    public getGroup(param: DefaultApiGetGroupRequest, options?: Configuration): Promise<Group> {
        return this.api.getGroup(param.groupPublicId,  options).toPromise();
    }

    /**
     * Get Iteration
     * @param param the request object
     */
    public getIterationWithHttpInfo(param: DefaultApiGetIterationRequest, options?: Configuration): Promise<HttpInfo<Iteration>> {
        return this.api.getIterationWithHttpInfo(param.iterationPublicId,  options).toPromise();
    }

    /**
     * Get Iteration
     * @param param the request object
     */
    public getIteration(param: DefaultApiGetIterationRequest, options?: Configuration): Promise<Iteration> {
        return this.api.getIteration(param.iterationPublicId,  options).toPromise();
    }

    /**
     * Get Key Result returns information about a chosen Key Result.
     * Get Key Result
     * @param param the request object
     */
    public getKeyResultWithHttpInfo(param: DefaultApiGetKeyResultRequest, options?: Configuration): Promise<HttpInfo<KeyResult>> {
        return this.api.getKeyResultWithHttpInfo(param.keyResultPublicId,  options).toPromise();
    }

    /**
     * Get Key Result returns information about a chosen Key Result.
     * Get Key Result
     * @param param the request object
     */
    public getKeyResult(param: DefaultApiGetKeyResultRequest, options?: Configuration): Promise<KeyResult> {
        return this.api.getKeyResult(param.keyResultPublicId,  options).toPromise();
    }

    /**
     * Get Label returns information about the selected Label.
     * Get Label
     * @param param the request object
     */
    public getLabelWithHttpInfo(param: DefaultApiGetLabelRequest, options?: Configuration): Promise<HttpInfo<Label>> {
        return this.api.getLabelWithHttpInfo(param.labelPublicId,  options).toPromise();
    }

    /**
     * Get Label returns information about the selected Label.
     * Get Label
     * @param param the request object
     */
    public getLabel(param: DefaultApiGetLabelRequest, options?: Configuration): Promise<Label> {
        return this.api.getLabel(param.labelPublicId,  options).toPromise();
    }

    /**
     * Get File returns information about the selected Linked File.
     * Get Linked File
     * @param param the request object
     */
    public getLinkedFileWithHttpInfo(param: DefaultApiGetLinkedFileRequest, options?: Configuration): Promise<HttpInfo<LinkedFile>> {
        return this.api.getLinkedFileWithHttpInfo(param.linkedFilePublicId,  options).toPromise();
    }

    /**
     * Get File returns information about the selected Linked File.
     * Get Linked File
     * @param param the request object
     */
    public getLinkedFile(param: DefaultApiGetLinkedFileRequest, options?: Configuration): Promise<LinkedFile> {
        return this.api.getLinkedFile(param.linkedFilePublicId,  options).toPromise();
    }

    /**
     * Returns information about a Member.
     * Get Member
     * @param param the request object
     */
    public getMemberWithHttpInfo(param: DefaultApiGetMemberRequest, options?: Configuration): Promise<HttpInfo<Member>> {
        return this.api.getMemberWithHttpInfo(param.memberPublicId, param.orgPublicId,  options).toPromise();
    }

    /**
     * Returns information about a Member.
     * Get Member
     * @param param the request object
     */
    public getMember(param: DefaultApiGetMemberRequest, options?: Configuration): Promise<Member> {
        return this.api.getMember(param.memberPublicId, param.orgPublicId,  options).toPromise();
    }

    /**
     * (Deprecated: Use \'Get Objective\') Get Milestone returns information about a chosen Milestone.
     * Get Milestone
     * @param param the request object
     */
    public getMilestoneWithHttpInfo(param: DefaultApiGetMilestoneRequest, options?: Configuration): Promise<HttpInfo<Milestone>> {
        return this.api.getMilestoneWithHttpInfo(param.milestonePublicId,  options).toPromise();
    }

    /**
     * (Deprecated: Use \'Get Objective\') Get Milestone returns information about a chosen Milestone.
     * Get Milestone
     * @param param the request object
     */
    public getMilestone(param: DefaultApiGetMilestoneRequest, options?: Configuration): Promise<Milestone> {
        return this.api.getMilestone(param.milestonePublicId,  options).toPromise();
    }

    /**
     * Get Objective returns information about a chosen Objective.
     * Get Objective
     * @param param the request object
     */
    public getObjectiveWithHttpInfo(param: DefaultApiGetObjectiveRequest, options?: Configuration): Promise<HttpInfo<Objective>> {
        return this.api.getObjectiveWithHttpInfo(param.objectivePublicId,  options).toPromise();
    }

    /**
     * Get Objective returns information about a chosen Objective.
     * Get Objective
     * @param param the request object
     */
    public getObjective(param: DefaultApiGetObjectiveRequest, options?: Configuration): Promise<Objective> {
        return this.api.getObjective(param.objectivePublicId,  options).toPromise();
    }

    /**
     * Get Project returns information about the selected Project.
     * Get Project
     * @param param the request object
     */
    public getProjectWithHttpInfo(param: DefaultApiGetProjectRequest, options?: Configuration): Promise<HttpInfo<Project>> {
        return this.api.getProjectWithHttpInfo(param.projectPublicId,  options).toPromise();
    }

    /**
     * Get Project returns information about the selected Project.
     * Get Project
     * @param param the request object
     */
    public getProject(param: DefaultApiGetProjectRequest, options?: Configuration): Promise<Project> {
        return this.api.getProject(param.projectPublicId,  options).toPromise();
    }

    /**
     * Get Repository returns information about the selected Repository.
     * Get Repository
     * @param param the request object
     */
    public getRepositoryWithHttpInfo(param: DefaultApiGetRepositoryRequest, options?: Configuration): Promise<HttpInfo<Repository>> {
        return this.api.getRepositoryWithHttpInfo(param.repoPublicId,  options).toPromise();
    }

    /**
     * Get Repository returns information about the selected Repository.
     * Get Repository
     * @param param the request object
     */
    public getRepository(param: DefaultApiGetRepositoryRequest, options?: Configuration): Promise<Repository> {
        return this.api.getRepository(param.repoPublicId,  options).toPromise();
    }

    /**
     * Get Story returns information about a chosen Story.
     * Get Story
     * @param param the request object
     */
    public getStoryWithHttpInfo(param: DefaultApiGetStoryRequest, options?: Configuration): Promise<HttpInfo<Story>> {
        return this.api.getStoryWithHttpInfo(param.storyPublicId,  options).toPromise();
    }

    /**
     * Get Story returns information about a chosen Story.
     * Get Story
     * @param param the request object
     */
    public getStory(param: DefaultApiGetStoryRequest, options?: Configuration): Promise<Story> {
        return this.api.getStory(param.storyPublicId,  options).toPromise();
    }

    /**
     * Get Comment is used to get Comment information.
     * Get Story Comment
     * @param param the request object
     */
    public getStoryCommentWithHttpInfo(param: DefaultApiGetStoryCommentRequest, options?: Configuration): Promise<HttpInfo<StoryComment>> {
        return this.api.getStoryCommentWithHttpInfo(param.storyPublicId, param.commentPublicId,  options).toPromise();
    }

    /**
     * Get Comment is used to get Comment information.
     * Get Story Comment
     * @param param the request object
     */
    public getStoryComment(param: DefaultApiGetStoryCommentRequest, options?: Configuration): Promise<StoryComment> {
        return this.api.getStoryComment(param.storyPublicId, param.commentPublicId,  options).toPromise();
    }

    /**
     * Returns the stories and their relationship for the given Story Link.
     * Get Story Link
     * @param param the request object
     */
    public getStoryLinkWithHttpInfo(param: DefaultApiGetStoryLinkRequest, options?: Configuration): Promise<HttpInfo<StoryLink>> {
        return this.api.getStoryLinkWithHttpInfo(param.storyLinkPublicId,  options).toPromise();
    }

    /**
     * Returns the stories and their relationship for the given Story Link.
     * Get Story Link
     * @param param the request object
     */
    public getStoryLink(param: DefaultApiGetStoryLinkRequest, options?: Configuration): Promise<StoryLink> {
        return this.api.getStoryLink(param.storyLinkPublicId,  options).toPromise();
    }

    /**
     * Returns information about a chosen Task.
     * Get Task
     * @param param the request object
     */
    public getTaskWithHttpInfo(param: DefaultApiGetTaskRequest, options?: Configuration): Promise<HttpInfo<Task>> {
        return this.api.getTaskWithHttpInfo(param.storyPublicId, param.taskPublicId,  options).toPromise();
    }

    /**
     * Returns information about a chosen Task.
     * Get Task
     * @param param the request object
     */
    public getTask(param: DefaultApiGetTaskRequest, options?: Configuration): Promise<Task> {
        return this.api.getTask(param.storyPublicId, param.taskPublicId,  options).toPromise();
    }

    /**
     * Get Workflow returns information about a chosen Workflow.
     * Get Workflow
     * @param param the request object
     */
    public getWorkflowWithHttpInfo(param: DefaultApiGetWorkflowRequest, options?: Configuration): Promise<HttpInfo<Workflow>> {
        return this.api.getWorkflowWithHttpInfo(param.workflowPublicId,  options).toPromise();
    }

    /**
     * Get Workflow returns information about a chosen Workflow.
     * Get Workflow
     * @param param the request object
     */
    public getWorkflow(param: DefaultApiGetWorkflowRequest, options?: Configuration): Promise<Workflow> {
        return this.api.getWorkflow(param.workflowPublicId,  options).toPromise();
    }

    /**
     * List Categories returns a list of all Categories and their attributes.
     * List Categories
     * @param param the request object
     */
    public listCategoriesWithHttpInfo(param: DefaultApiListCategoriesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Category>>> {
        return this.api.listCategoriesWithHttpInfo( options).toPromise();
    }

    /**
     * List Categories returns a list of all Categories and their attributes.
     * List Categories
     * @param param the request object
     */
    public listCategories(param: DefaultApiListCategoriesRequest = {}, options?: Configuration): Promise<Array<Category>> {
        return this.api.listCategories( options).toPromise();
    }

    /**
     * List Category Milestones returns a list of all Milestones with the Category.
     * List Category Milestones
     * @param param the request object
     */
    public listCategoryMilestonesWithHttpInfo(param: DefaultApiListCategoryMilestonesRequest, options?: Configuration): Promise<HttpInfo<Array<Milestone>>> {
        return this.api.listCategoryMilestonesWithHttpInfo(param.categoryPublicId,  options).toPromise();
    }

    /**
     * List Category Milestones returns a list of all Milestones with the Category.
     * List Category Milestones
     * @param param the request object
     */
    public listCategoryMilestones(param: DefaultApiListCategoryMilestonesRequest, options?: Configuration): Promise<Array<Milestone>> {
        return this.api.listCategoryMilestones(param.categoryPublicId,  options).toPromise();
    }

    /**
     * Returns a list of all Objectives with the Category.
     * List Category Objectives
     * @param param the request object
     */
    public listCategoryObjectivesWithHttpInfo(param: DefaultApiListCategoryObjectivesRequest, options?: Configuration): Promise<HttpInfo<Array<Milestone>>> {
        return this.api.listCategoryObjectivesWithHttpInfo(param.categoryPublicId,  options).toPromise();
    }

    /**
     * Returns a list of all Objectives with the Category.
     * List Category Objectives
     * @param param the request object
     */
    public listCategoryObjectives(param: DefaultApiListCategoryObjectivesRequest, options?: Configuration): Promise<Array<Milestone>> {
        return this.api.listCategoryObjectives(param.categoryPublicId,  options).toPromise();
    }

    /**
     * List Custom Fields
     * @param param the request object
     */
    public listCustomFieldsWithHttpInfo(param: DefaultApiListCustomFieldsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<CustomField>>> {
        return this.api.listCustomFieldsWithHttpInfo( options).toPromise();
    }

    /**
     * List Custom Fields
     * @param param the request object
     */
    public listCustomFields(param: DefaultApiListCustomFieldsRequest = {}, options?: Configuration): Promise<Array<CustomField>> {
        return this.api.listCustomFields( options).toPromise();
    }

    /**
     * List all the entity templates for the Workspace.
     * List Entity Templates
     * @param param the request object
     */
    public listEntityTemplatesWithHttpInfo(param: DefaultApiListEntityTemplatesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<EntityTemplate>>> {
        return this.api.listEntityTemplatesWithHttpInfo( options).toPromise();
    }

    /**
     * List all the entity templates for the Workspace.
     * List Entity Templates
     * @param param the request object
     */
    public listEntityTemplates(param: DefaultApiListEntityTemplatesRequest = {}, options?: Configuration): Promise<Array<EntityTemplate>> {
        return this.api.listEntityTemplates( options).toPromise();
    }

    /**
     * Get a list of all Comments on an Epic.
     * List Epic Comments
     * @param param the request object
     */
    public listEpicCommentsWithHttpInfo(param: DefaultApiListEpicCommentsRequest, options?: Configuration): Promise<HttpInfo<Array<ThreadedComment>>> {
        return this.api.listEpicCommentsWithHttpInfo(param.epicPublicId,  options).toPromise();
    }

    /**
     * Get a list of all Comments on an Epic.
     * List Epic Comments
     * @param param the request object
     */
    public listEpicComments(param: DefaultApiListEpicCommentsRequest, options?: Configuration): Promise<Array<ThreadedComment>> {
        return this.api.listEpicComments(param.epicPublicId,  options).toPromise();
    }

    /**
     * Get a list of all Stories in an Epic.
     * List Epic Stories
     * @param param the request object
     */
    public listEpicStoriesWithHttpInfo(param: DefaultApiListEpicStoriesRequest, options?: Configuration): Promise<HttpInfo<Array<StorySlim>>> {
        return this.api.listEpicStoriesWithHttpInfo(param.epicPublicId, param.includesDescription,  options).toPromise();
    }

    /**
     * Get a list of all Stories in an Epic.
     * List Epic Stories
     * @param param the request object
     */
    public listEpicStories(param: DefaultApiListEpicStoriesRequest, options?: Configuration): Promise<Array<StorySlim>> {
        return this.api.listEpicStories(param.epicPublicId, param.includesDescription,  options).toPromise();
    }

    /**
     * List Epics returns a list of all Epics and their attributes.
     * List Epics
     * @param param the request object
     */
    public listEpicsWithHttpInfo(param: DefaultApiListEpicsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<EpicSlim>>> {
        return this.api.listEpicsWithHttpInfo(param.includesDescription,  options).toPromise();
    }

    /**
     * List Epics returns a list of all Epics and their attributes.
     * List Epics
     * @param param the request object
     */
    public listEpics(param: DefaultApiListEpicsRequest = {}, options?: Configuration): Promise<Array<EpicSlim>> {
        return this.api.listEpics(param.includesDescription,  options).toPromise();
    }

    /**
     * List Files returns a list of all UploadedFiles in the workspace.
     * List Files
     * @param param the request object
     */
    public listFilesWithHttpInfo(param: DefaultApiListFilesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<UploadedFile>>> {
        return this.api.listFilesWithHttpInfo( options).toPromise();
    }

    /**
     * List Files returns a list of all UploadedFiles in the workspace.
     * List Files
     * @param param the request object
     */
    public listFiles(param: DefaultApiListFilesRequest = {}, options?: Configuration): Promise<Array<UploadedFile>> {
        return this.api.listFiles( options).toPromise();
    }

    /**
     * List the Stories assigned to the Group. (By default, limited to 1,000).
     * List Group Stories
     * @param param the request object
     */
    public listGroupStoriesWithHttpInfo(param: DefaultApiListGroupStoriesRequest, options?: Configuration): Promise<HttpInfo<Array<StorySlim>>> {
        return this.api.listGroupStoriesWithHttpInfo(param.groupPublicId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * List the Stories assigned to the Group. (By default, limited to 1,000).
     * List Group Stories
     * @param param the request object
     */
    public listGroupStories(param: DefaultApiListGroupStoriesRequest, options?: Configuration): Promise<Array<StorySlim>> {
        return this.api.listGroupStories(param.groupPublicId, param.limit, param.offset,  options).toPromise();
    }

    /**
     * A group in our API maps to a \"Team\" within the Shortcut Product. A Team is a collection of Users that can be associated to Stories, Epics, and Iterations within Shortcut.
     * List Groups
     * @param param the request object
     */
    public listGroupsWithHttpInfo(param: DefaultApiListGroupsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Group>>> {
        return this.api.listGroupsWithHttpInfo( options).toPromise();
    }

    /**
     * A group in our API maps to a \"Team\" within the Shortcut Product. A Team is a collection of Users that can be associated to Stories, Epics, and Iterations within Shortcut.
     * List Groups
     * @param param the request object
     */
    public listGroups(param: DefaultApiListGroupsRequest = {}, options?: Configuration): Promise<Array<Group>> {
        return this.api.listGroups( options).toPromise();
    }

    /**
     * Get a list of all Stories in an Iteration.
     * List Iteration Stories
     * @param param the request object
     */
    public listIterationStoriesWithHttpInfo(param: DefaultApiListIterationStoriesRequest, options?: Configuration): Promise<HttpInfo<Array<StorySlim>>> {
        return this.api.listIterationStoriesWithHttpInfo(param.iterationPublicId, param.includesDescription,  options).toPromise();
    }

    /**
     * Get a list of all Stories in an Iteration.
     * List Iteration Stories
     * @param param the request object
     */
    public listIterationStories(param: DefaultApiListIterationStoriesRequest, options?: Configuration): Promise<Array<StorySlim>> {
        return this.api.listIterationStories(param.iterationPublicId, param.includesDescription,  options).toPromise();
    }

    /**
     * List Iterations
     * @param param the request object
     */
    public listIterationsWithHttpInfo(param: DefaultApiListIterationsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<IterationSlim>>> {
        return this.api.listIterationsWithHttpInfo( options).toPromise();
    }

    /**
     * List Iterations
     * @param param the request object
     */
    public listIterations(param: DefaultApiListIterationsRequest = {}, options?: Configuration): Promise<Array<IterationSlim>> {
        return this.api.listIterations( options).toPromise();
    }

    /**
     * List all of the Epics with the Label.
     * List Label Epics
     * @param param the request object
     */
    public listLabelEpicsWithHttpInfo(param: DefaultApiListLabelEpicsRequest, options?: Configuration): Promise<HttpInfo<Array<EpicSlim>>> {
        return this.api.listLabelEpicsWithHttpInfo(param.labelPublicId,  options).toPromise();
    }

    /**
     * List all of the Epics with the Label.
     * List Label Epics
     * @param param the request object
     */
    public listLabelEpics(param: DefaultApiListLabelEpicsRequest, options?: Configuration): Promise<Array<EpicSlim>> {
        return this.api.listLabelEpics(param.labelPublicId,  options).toPromise();
    }

    /**
     * List all of the Stories with the Label.
     * List Label Stories
     * @param param the request object
     */
    public listLabelStoriesWithHttpInfo(param: DefaultApiListLabelStoriesRequest, options?: Configuration): Promise<HttpInfo<Array<StorySlim>>> {
        return this.api.listLabelStoriesWithHttpInfo(param.labelPublicId, param.includesDescription,  options).toPromise();
    }

    /**
     * List all of the Stories with the Label.
     * List Label Stories
     * @param param the request object
     */
    public listLabelStories(param: DefaultApiListLabelStoriesRequest, options?: Configuration): Promise<Array<StorySlim>> {
        return this.api.listLabelStories(param.labelPublicId, param.includesDescription,  options).toPromise();
    }

    /**
     * List Labels returns a list of all Labels and their attributes.
     * List Labels
     * @param param the request object
     */
    public listLabelsWithHttpInfo(param: DefaultApiListLabelsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Label>>> {
        return this.api.listLabelsWithHttpInfo(param.slim,  options).toPromise();
    }

    /**
     * List Labels returns a list of all Labels and their attributes.
     * List Labels
     * @param param the request object
     */
    public listLabels(param: DefaultApiListLabelsRequest = {}, options?: Configuration): Promise<Array<Label>> {
        return this.api.listLabels(param.slim,  options).toPromise();
    }

    /**
     * List Linked Files returns a list of all Linked-Files and their attributes.
     * List Linked Files
     * @param param the request object
     */
    public listLinkedFilesWithHttpInfo(param: DefaultApiListLinkedFilesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<LinkedFile>>> {
        return this.api.listLinkedFilesWithHttpInfo( options).toPromise();
    }

    /**
     * List Linked Files returns a list of all Linked-Files and their attributes.
     * List Linked Files
     * @param param the request object
     */
    public listLinkedFiles(param: DefaultApiListLinkedFilesRequest = {}, options?: Configuration): Promise<Array<LinkedFile>> {
        return this.api.listLinkedFiles( options).toPromise();
    }

    /**
     * Returns information about members of the Workspace.
     * List Members
     * @param param the request object
     */
    public listMembersWithHttpInfo(param: DefaultApiListMembersRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Member>>> {
        return this.api.listMembersWithHttpInfo(param.orgPublicId,  options).toPromise();
    }

    /**
     * Returns information about members of the Workspace.
     * List Members
     * @param param the request object
     */
    public listMembers(param: DefaultApiListMembersRequest = {}, options?: Configuration): Promise<Array<Member>> {
        return this.api.listMembers(param.orgPublicId,  options).toPromise();
    }

    /**
     * (Deprecated: Use \'List Objective Epics\') List all of the Epics within the Milestone.
     * List Milestone Epics
     * @param param the request object
     */
    public listMilestoneEpicsWithHttpInfo(param: DefaultApiListMilestoneEpicsRequest, options?: Configuration): Promise<HttpInfo<Array<EpicSlim>>> {
        return this.api.listMilestoneEpicsWithHttpInfo(param.milestonePublicId,  options).toPromise();
    }

    /**
     * (Deprecated: Use \'List Objective Epics\') List all of the Epics within the Milestone.
     * List Milestone Epics
     * @param param the request object
     */
    public listMilestoneEpics(param: DefaultApiListMilestoneEpicsRequest, options?: Configuration): Promise<Array<EpicSlim>> {
        return this.api.listMilestoneEpics(param.milestonePublicId,  options).toPromise();
    }

    /**
     * (Deprecated: Use \'List Objectives\') List Milestones returns a list of all Milestones and their attributes.
     * List Milestones
     * @param param the request object
     */
    public listMilestonesWithHttpInfo(param: DefaultApiListMilestonesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Milestone>>> {
        return this.api.listMilestonesWithHttpInfo( options).toPromise();
    }

    /**
     * (Deprecated: Use \'List Objectives\') List Milestones returns a list of all Milestones and their attributes.
     * List Milestones
     * @param param the request object
     */
    public listMilestones(param: DefaultApiListMilestonesRequest = {}, options?: Configuration): Promise<Array<Milestone>> {
        return this.api.listMilestones( options).toPromise();
    }

    /**
     * List all of the Epics within the Objective.
     * List Objective Epics
     * @param param the request object
     */
    public listObjectiveEpicsWithHttpInfo(param: DefaultApiListObjectiveEpicsRequest, options?: Configuration): Promise<HttpInfo<Array<EpicSlim>>> {
        return this.api.listObjectiveEpicsWithHttpInfo(param.objectivePublicId,  options).toPromise();
    }

    /**
     * List all of the Epics within the Objective.
     * List Objective Epics
     * @param param the request object
     */
    public listObjectiveEpics(param: DefaultApiListObjectiveEpicsRequest, options?: Configuration): Promise<Array<EpicSlim>> {
        return this.api.listObjectiveEpics(param.objectivePublicId,  options).toPromise();
    }

    /**
     * List Objectives returns a list of all Objectives and their attributes.
     * List Objectives
     * @param param the request object
     */
    public listObjectivesWithHttpInfo(param: DefaultApiListObjectivesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Objective>>> {
        return this.api.listObjectivesWithHttpInfo( options).toPromise();
    }

    /**
     * List Objectives returns a list of all Objectives and their attributes.
     * List Objectives
     * @param param the request object
     */
    public listObjectives(param: DefaultApiListObjectivesRequest = {}, options?: Configuration): Promise<Array<Objective>> {
        return this.api.listObjectives( options).toPromise();
    }

    /**
     * List Projects returns a list of all Projects and their attributes.
     * List Projects
     * @param param the request object
     */
    public listProjectsWithHttpInfo(param: DefaultApiListProjectsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Project>>> {
        return this.api.listProjectsWithHttpInfo( options).toPromise();
    }

    /**
     * List Projects returns a list of all Projects and their attributes.
     * List Projects
     * @param param the request object
     */
    public listProjects(param: DefaultApiListProjectsRequest = {}, options?: Configuration): Promise<Array<Project>> {
        return this.api.listProjects( options).toPromise();
    }

    /**
     * List Repositories returns a list of all Repositories and their attributes.
     * List Repositories
     * @param param the request object
     */
    public listRepositoriesWithHttpInfo(param: DefaultApiListRepositoriesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Repository>>> {
        return this.api.listRepositoriesWithHttpInfo( options).toPromise();
    }

    /**
     * List Repositories returns a list of all Repositories and their attributes.
     * List Repositories
     * @param param the request object
     */
    public listRepositories(param: DefaultApiListRepositoriesRequest = {}, options?: Configuration): Promise<Array<Repository>> {
        return this.api.listRepositories( options).toPromise();
    }

    /**
     * List Stories returns a list of all Stories in a selected Project and their attributes.
     * List Stories
     * @param param the request object
     */
    public listStoriesWithHttpInfo(param: DefaultApiListStoriesRequest, options?: Configuration): Promise<HttpInfo<Array<StorySlim>>> {
        return this.api.listStoriesWithHttpInfo(param.projectPublicId, param.includesDescription,  options).toPromise();
    }

    /**
     * List Stories returns a list of all Stories in a selected Project and their attributes.
     * List Stories
     * @param param the request object
     */
    public listStories(param: DefaultApiListStoriesRequest, options?: Configuration): Promise<Array<StorySlim>> {
        return this.api.listStories(param.projectPublicId, param.includesDescription,  options).toPromise();
    }

    /**
     * Lists Comments associated with a Story
     * List Story Comment
     * @param param the request object
     */
    public listStoryCommentWithHttpInfo(param: DefaultApiListStoryCommentRequest, options?: Configuration): Promise<HttpInfo<Array<StoryComment>>> {
        return this.api.listStoryCommentWithHttpInfo(param.storyPublicId,  options).toPromise();
    }

    /**
     * Lists Comments associated with a Story
     * List Story Comment
     * @param param the request object
     */
    public listStoryComment(param: DefaultApiListStoryCommentRequest, options?: Configuration): Promise<Array<StoryComment>> {
        return this.api.listStoryComment(param.storyPublicId,  options).toPromise();
    }

    /**
     * Returns a list of all Workflows in the Workspace.
     * List Workflows
     * @param param the request object
     */
    public listWorkflowsWithHttpInfo(param: DefaultApiListWorkflowsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Workflow>>> {
        return this.api.listWorkflowsWithHttpInfo( options).toPromise();
    }

    /**
     * Returns a list of all Workflows in the Workspace.
     * List Workflows
     * @param param the request object
     */
    public listWorkflows(param: DefaultApiListWorkflowsRequest = {}, options?: Configuration): Promise<Array<Workflow>> {
        return this.api.listWorkflows( options).toPromise();
    }

    /**
     * Search lets you search Epics and Stories based on desired parameters. Since ordering of the results can change over time (due to search ranking decay, new Epics and Stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search
     * @param param the request object
     */
    public searchWithHttpInfo(param: DefaultApiSearchRequest, options?: Configuration): Promise<HttpInfo<SearchResults>> {
        return this.api.searchWithHttpInfo(param.query, param.pageSize, param.detail, param.next, param.entityTypes,  options).toPromise();
    }

    /**
     * Search lets you search Epics and Stories based on desired parameters. Since ordering of the results can change over time (due to search ranking decay, new Epics and Stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search
     * @param param the request object
     */
    public search(param: DefaultApiSearchRequest, options?: Configuration): Promise<SearchResults> {
        return this.api.search(param.query, param.pageSize, param.detail, param.next, param.entityTypes,  options).toPromise();
    }

    /**
     * Search Epics lets you search Epics based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new Epics being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Epics
     * @param param the request object
     */
    public searchEpicsWithHttpInfo(param: DefaultApiSearchEpicsRequest, options?: Configuration): Promise<HttpInfo<EpicSearchResults>> {
        return this.api.searchEpicsWithHttpInfo(param.query, param.pageSize, param.detail, param.next, param.entityTypes,  options).toPromise();
    }

    /**
     * Search Epics lets you search Epics based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new Epics being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Epics
     * @param param the request object
     */
    public searchEpics(param: DefaultApiSearchEpicsRequest, options?: Configuration): Promise<EpicSearchResults> {
        return this.api.searchEpics(param.query, param.pageSize, param.detail, param.next, param.entityTypes,  options).toPromise();
    }

    /**
     * Search Iterations lets you search Iterations based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Iterations being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Iterations
     * @param param the request object
     */
    public searchIterationsWithHttpInfo(param: DefaultApiSearchIterationsRequest, options?: Configuration): Promise<HttpInfo<IterationSearchResults>> {
        return this.api.searchIterationsWithHttpInfo(param.query, param.pageSize, param.detail, param.next, param.entityTypes,  options).toPromise();
    }

    /**
     * Search Iterations lets you search Iterations based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Iterations being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Iterations
     * @param param the request object
     */
    public searchIterations(param: DefaultApiSearchIterationsRequest, options?: Configuration): Promise<IterationSearchResults> {
        return this.api.searchIterations(param.query, param.pageSize, param.detail, param.next, param.entityTypes,  options).toPromise();
    }

    /**
     * Search Milestones lets you search Milestones based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Milestones being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Milestones
     * @param param the request object
     */
    public searchMilestonesWithHttpInfo(param: DefaultApiSearchMilestonesRequest, options?: Configuration): Promise<HttpInfo<ObjectiveSearchResults>> {
        return this.api.searchMilestonesWithHttpInfo(param.query, param.pageSize, param.detail, param.next, param.entityTypes,  options).toPromise();
    }

    /**
     * Search Milestones lets you search Milestones based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Milestones being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Milestones
     * @param param the request object
     */
    public searchMilestones(param: DefaultApiSearchMilestonesRequest, options?: Configuration): Promise<ObjectiveSearchResults> {
        return this.api.searchMilestones(param.query, param.pageSize, param.detail, param.next, param.entityTypes,  options).toPromise();
    }

    /**
     * Search Objectives lets you search Objectives based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Objectives being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Objectives
     * @param param the request object
     */
    public searchObjectivesWithHttpInfo(param: DefaultApiSearchObjectivesRequest, options?: Configuration): Promise<HttpInfo<ObjectiveSearchResults>> {
        return this.api.searchObjectivesWithHttpInfo(param.query, param.pageSize, param.detail, param.next, param.entityTypes,  options).toPromise();
    }

    /**
     * Search Objectives lets you search Objectives based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Objectives being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Objectives
     * @param param the request object
     */
    public searchObjectives(param: DefaultApiSearchObjectivesRequest, options?: Configuration): Promise<ObjectiveSearchResults> {
        return this.api.searchObjectives(param.query, param.pageSize, param.detail, param.next, param.entityTypes,  options).toPromise();
    }

    /**
     * Search Stories lets you search Stories based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Stories
     * @param param the request object
     */
    public searchStoriesWithHttpInfo(param: DefaultApiSearchStoriesRequest, options?: Configuration): Promise<HttpInfo<StorySearchResults>> {
        return this.api.searchStoriesWithHttpInfo(param.query, param.pageSize, param.detail, param.next, param.entityTypes,  options).toPromise();
    }

    /**
     * Search Stories lets you search Stories based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Stories
     * @param param the request object
     */
    public searchStories(param: DefaultApiSearchStoriesRequest, options?: Configuration): Promise<StorySearchResults> {
        return this.api.searchStories(param.query, param.pageSize, param.detail, param.next, param.entityTypes,  options).toPromise();
    }

    /**
     * Search Stories lets you search Stories based on desired parameters.
     * Search Stories (Old)
     * @param param the request object
     */
    public searchStoriesOldWithHttpInfo(param: DefaultApiSearchStoriesOldRequest, options?: Configuration): Promise<HttpInfo<Array<StorySlim>>> {
        return this.api.searchStoriesOldWithHttpInfo(param.searchStories,  options).toPromise();
    }

    /**
     * Search Stories lets you search Stories based on desired parameters.
     * Search Stories (Old)
     * @param param the request object
     */
    public searchStoriesOld(param: DefaultApiSearchStoriesOldRequest, options?: Configuration): Promise<Array<StorySlim>> {
        return this.api.searchStoriesOld(param.searchStories,  options).toPromise();
    }

    /**
     * Story History
     * @param param the request object
     */
    public storyHistoryWithHttpInfo(param: DefaultApiStoryHistoryRequest, options?: Configuration): Promise<HttpInfo<Array<History>>> {
        return this.api.storyHistoryWithHttpInfo(param.storyPublicId,  options).toPromise();
    }

    /**
     * Story History
     * @param param the request object
     */
    public storyHistory(param: DefaultApiStoryHistoryRequest, options?: Configuration): Promise<Array<History>> {
        return this.api.storyHistory(param.storyPublicId,  options).toPromise();
    }

    /**
     * Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)
     * Unlink Comment thread from Slack
     * @param param the request object
     */
    public unlinkCommentThreadFromSlackWithHttpInfo(param: DefaultApiUnlinkCommentThreadFromSlackRequest, options?: Configuration): Promise<HttpInfo<StoryComment>> {
        return this.api.unlinkCommentThreadFromSlackWithHttpInfo(param.storyPublicId, param.commentPublicId,  options).toPromise();
    }

    /**
     * Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)
     * Unlink Comment thread from Slack
     * @param param the request object
     */
    public unlinkCommentThreadFromSlack(param: DefaultApiUnlinkCommentThreadFromSlackRequest, options?: Configuration): Promise<StoryComment> {
        return this.api.unlinkCommentThreadFromSlack(param.storyPublicId, param.commentPublicId,  options).toPromise();
    }

    /**
     * This endpoint allows you to unlink a productboard epic.
     * Unlink Productboard from Epic
     * @param param the request object
     */
    public unlinkProductboardFromEpicWithHttpInfo(param: DefaultApiUnlinkProductboardFromEpicRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.unlinkProductboardFromEpicWithHttpInfo(param.epicPublicId,  options).toPromise();
    }

    /**
     * This endpoint allows you to unlink a productboard epic.
     * Unlink Productboard from Epic
     * @param param the request object
     */
    public unlinkProductboardFromEpic(param: DefaultApiUnlinkProductboardFromEpicRequest, options?: Configuration): Promise<void> {
        return this.api.unlinkProductboardFromEpic(param.epicPublicId,  options).toPromise();
    }

    /**
     * Update Category allows you to replace a Category name with another name. If you try to name a Category something that already exists, you will receive a 422 response.
     * Update Category
     * @param param the request object
     */
    public updateCategoryWithHttpInfo(param: DefaultApiUpdateCategoryRequest, options?: Configuration): Promise<HttpInfo<Category>> {
        return this.api.updateCategoryWithHttpInfo(param.categoryPublicId, param.updateCategory,  options).toPromise();
    }

    /**
     * Update Category allows you to replace a Category name with another name. If you try to name a Category something that already exists, you will receive a 422 response.
     * Update Category
     * @param param the request object
     */
    public updateCategory(param: DefaultApiUpdateCategoryRequest, options?: Configuration): Promise<Category> {
        return this.api.updateCategory(param.categoryPublicId, param.updateCategory,  options).toPromise();
    }

    /**
     * Update Custom Field can be used to update the definition of a Custom Field. The order of items in the \'values\' collection is interpreted to be their ascending sort order.To delete an existing enum value, simply omit it from the \'values\' collection. New enum values may be created inline by including an object in the \'values\' collection having a \'value\' entry with no \'id\' (eg. {\'value\': \'myNewValue\', \'color_key\': \'green\'}).
     * Update Custom Field
     * @param param the request object
     */
    public updateCustomFieldWithHttpInfo(param: DefaultApiUpdateCustomFieldRequest, options?: Configuration): Promise<HttpInfo<CustomField>> {
        return this.api.updateCustomFieldWithHttpInfo(param.customFieldPublicId, param.updateCustomField,  options).toPromise();
    }

    /**
     * Update Custom Field can be used to update the definition of a Custom Field. The order of items in the \'values\' collection is interpreted to be their ascending sort order.To delete an existing enum value, simply omit it from the \'values\' collection. New enum values may be created inline by including an object in the \'values\' collection having a \'value\' entry with no \'id\' (eg. {\'value\': \'myNewValue\', \'color_key\': \'green\'}).
     * Update Custom Field
     * @param param the request object
     */
    public updateCustomField(param: DefaultApiUpdateCustomFieldRequest, options?: Configuration): Promise<CustomField> {
        return this.api.updateCustomField(param.customFieldPublicId, param.updateCustomField,  options).toPromise();
    }

    /**
     * Update an entity template\'s name or its contents.
     * Update Entity Template
     * @param param the request object
     */
    public updateEntityTemplateWithHttpInfo(param: DefaultApiUpdateEntityTemplateRequest, options?: Configuration): Promise<HttpInfo<EntityTemplate>> {
        return this.api.updateEntityTemplateWithHttpInfo(param.entityTemplatePublicId, param.updateEntityTemplate,  options).toPromise();
    }

    /**
     * Update an entity template\'s name or its contents.
     * Update Entity Template
     * @param param the request object
     */
    public updateEntityTemplate(param: DefaultApiUpdateEntityTemplateRequest, options?: Configuration): Promise<EntityTemplate> {
        return this.api.updateEntityTemplate(param.entityTemplatePublicId, param.updateEntityTemplate,  options).toPromise();
    }

    /**
     * Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which can be found in the Shortcut UI.
     * Update Epic
     * @param param the request object
     */
    public updateEpicWithHttpInfo(param: DefaultApiUpdateEpicRequest, options?: Configuration): Promise<HttpInfo<Epic>> {
        return this.api.updateEpicWithHttpInfo(param.epicPublicId, param.updateEpic,  options).toPromise();
    }

    /**
     * Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which can be found in the Shortcut UI.
     * Update Epic
     * @param param the request object
     */
    public updateEpic(param: DefaultApiUpdateEpicRequest, options?: Configuration): Promise<Epic> {
        return this.api.updateEpic(param.epicPublicId, param.updateEpic,  options).toPromise();
    }

    /**
     * This endpoint allows you to update a threaded Comment on an Epic.
     * Update Epic Comment
     * @param param the request object
     */
    public updateEpicCommentWithHttpInfo(param: DefaultApiUpdateEpicCommentRequest, options?: Configuration): Promise<HttpInfo<ThreadedComment>> {
        return this.api.updateEpicCommentWithHttpInfo(param.epicPublicId, param.commentPublicId, param.updateComment,  options).toPromise();
    }

    /**
     * This endpoint allows you to update a threaded Comment on an Epic.
     * Update Epic Comment
     * @param param the request object
     */
    public updateEpicComment(param: DefaultApiUpdateEpicCommentRequest, options?: Configuration): Promise<ThreadedComment> {
        return this.api.updateEpicComment(param.epicPublicId, param.commentPublicId, param.updateComment,  options).toPromise();
    }

    /**
     * Update File updates the properties of an UploadedFile (but not its content).
     * Update File
     * @param param the request object
     */
    public updateFileWithHttpInfo(param: DefaultApiUpdateFileRequest, options?: Configuration): Promise<HttpInfo<UploadedFile>> {
        return this.api.updateFileWithHttpInfo(param.filePublicId, param.updateFile,  options).toPromise();
    }

    /**
     * Update File updates the properties of an UploadedFile (but not its content).
     * Update File
     * @param param the request object
     */
    public updateFile(param: DefaultApiUpdateFileRequest, options?: Configuration): Promise<UploadedFile> {
        return this.api.updateFile(param.filePublicId, param.updateFile,  options).toPromise();
    }

    /**
     * Update Group
     * @param param the request object
     */
    public updateGroupWithHttpInfo(param: DefaultApiUpdateGroupRequest, options?: Configuration): Promise<HttpInfo<Group>> {
        return this.api.updateGroupWithHttpInfo(param.groupPublicId, param.updateGroup,  options).toPromise();
    }

    /**
     * Update Group
     * @param param the request object
     */
    public updateGroup(param: DefaultApiUpdateGroupRequest, options?: Configuration): Promise<Group> {
        return this.api.updateGroup(param.groupPublicId, param.updateGroup,  options).toPromise();
    }

    /**
     * Update Iteration
     * @param param the request object
     */
    public updateIterationWithHttpInfo(param: DefaultApiUpdateIterationRequest, options?: Configuration): Promise<HttpInfo<Iteration>> {
        return this.api.updateIterationWithHttpInfo(param.iterationPublicId, param.updateIteration,  options).toPromise();
    }

    /**
     * Update Iteration
     * @param param the request object
     */
    public updateIteration(param: DefaultApiUpdateIterationRequest, options?: Configuration): Promise<Iteration> {
        return this.api.updateIteration(param.iterationPublicId, param.updateIteration,  options).toPromise();
    }

    /**
     * Update Key Result allows updating a Key Result\'s name or initial, observed, or target values.
     * Update Key Result
     * @param param the request object
     */
    public updateKeyResultWithHttpInfo(param: DefaultApiUpdateKeyResultRequest, options?: Configuration): Promise<HttpInfo<KeyResult>> {
        return this.api.updateKeyResultWithHttpInfo(param.keyResultPublicId, param.updateKeyResult,  options).toPromise();
    }

    /**
     * Update Key Result allows updating a Key Result\'s name or initial, observed, or target values.
     * Update Key Result
     * @param param the request object
     */
    public updateKeyResult(param: DefaultApiUpdateKeyResultRequest, options?: Configuration): Promise<KeyResult> {
        return this.api.updateKeyResult(param.keyResultPublicId, param.updateKeyResult,  options).toPromise();
    }

    /**
     * Update Label allows you to replace a Label name with another name. If you try to name a Label something that already exists, you will receive a 422 response.
     * Update Label
     * @param param the request object
     */
    public updateLabelWithHttpInfo(param: DefaultApiUpdateLabelRequest, options?: Configuration): Promise<HttpInfo<Label>> {
        return this.api.updateLabelWithHttpInfo(param.labelPublicId, param.updateLabel,  options).toPromise();
    }

    /**
     * Update Label allows you to replace a Label name with another name. If you try to name a Label something that already exists, you will receive a 422 response.
     * Update Label
     * @param param the request object
     */
    public updateLabel(param: DefaultApiUpdateLabelRequest, options?: Configuration): Promise<Label> {
        return this.api.updateLabel(param.labelPublicId, param.updateLabel,  options).toPromise();
    }

    /**
     * Updated Linked File allows you to update properties of a previously attached Linked-File.
     * Update Linked File
     * @param param the request object
     */
    public updateLinkedFileWithHttpInfo(param: DefaultApiUpdateLinkedFileRequest, options?: Configuration): Promise<HttpInfo<LinkedFile>> {
        return this.api.updateLinkedFileWithHttpInfo(param.linkedFilePublicId, param.updateLinkedFile,  options).toPromise();
    }

    /**
     * Updated Linked File allows you to update properties of a previously attached Linked-File.
     * Update Linked File
     * @param param the request object
     */
    public updateLinkedFile(param: DefaultApiUpdateLinkedFileRequest, options?: Configuration): Promise<LinkedFile> {
        return this.api.updateLinkedFile(param.linkedFilePublicId, param.updateLinkedFile,  options).toPromise();
    }

    /**
     * (Deprecated: Use \'Update Objective\') Update Milestone can be used to update Milestone properties.
     * Update Milestone
     * @param param the request object
     */
    public updateMilestoneWithHttpInfo(param: DefaultApiUpdateMilestoneRequest, options?: Configuration): Promise<HttpInfo<Milestone>> {
        return this.api.updateMilestoneWithHttpInfo(param.milestonePublicId, param.updateMilestone,  options).toPromise();
    }

    /**
     * (Deprecated: Use \'Update Objective\') Update Milestone can be used to update Milestone properties.
     * Update Milestone
     * @param param the request object
     */
    public updateMilestone(param: DefaultApiUpdateMilestoneRequest, options?: Configuration): Promise<Milestone> {
        return this.api.updateMilestone(param.milestonePublicId, param.updateMilestone,  options).toPromise();
    }

    /**
     * Update Multiple Stories allows you to make changes to numerous stories at once.
     * Update Multiple Stories
     * @param param the request object
     */
    public updateMultipleStoriesWithHttpInfo(param: DefaultApiUpdateMultipleStoriesRequest, options?: Configuration): Promise<HttpInfo<Array<StorySlim>>> {
        return this.api.updateMultipleStoriesWithHttpInfo(param.updateStories,  options).toPromise();
    }

    /**
     * Update Multiple Stories allows you to make changes to numerous stories at once.
     * Update Multiple Stories
     * @param param the request object
     */
    public updateMultipleStories(param: DefaultApiUpdateMultipleStoriesRequest, options?: Configuration): Promise<Array<StorySlim>> {
        return this.api.updateMultipleStories(param.updateStories,  options).toPromise();
    }

    /**
     * Update Objective can be used to update Objective properties.
     * Update Objective
     * @param param the request object
     */
    public updateObjectiveWithHttpInfo(param: DefaultApiUpdateObjectiveRequest, options?: Configuration): Promise<HttpInfo<Objective>> {
        return this.api.updateObjectiveWithHttpInfo(param.objectivePublicId, param.updateObjective,  options).toPromise();
    }

    /**
     * Update Objective can be used to update Objective properties.
     * Update Objective
     * @param param the request object
     */
    public updateObjective(param: DefaultApiUpdateObjectiveRequest, options?: Configuration): Promise<Objective> {
        return this.api.updateObjective(param.objectivePublicId, param.updateObjective,  options).toPromise();
    }

    /**
     * Update Project can be used to change properties of a Project.
     * Update Project
     * @param param the request object
     */
    public updateProjectWithHttpInfo(param: DefaultApiUpdateProjectRequest, options?: Configuration): Promise<HttpInfo<Project>> {
        return this.api.updateProjectWithHttpInfo(param.projectPublicId, param.updateProject,  options).toPromise();
    }

    /**
     * Update Project can be used to change properties of a Project.
     * Update Project
     * @param param the request object
     */
    public updateProject(param: DefaultApiUpdateProjectRequest, options?: Configuration): Promise<Project> {
        return this.api.updateProject(param.projectPublicId, param.updateProject,  options).toPromise();
    }

    /**
     * Update Story can be used to update Story properties.
     * Update Story
     * @param param the request object
     */
    public updateStoryWithHttpInfo(param: DefaultApiUpdateStoryRequest, options?: Configuration): Promise<HttpInfo<Story>> {
        return this.api.updateStoryWithHttpInfo(param.storyPublicId, param.updateStory,  options).toPromise();
    }

    /**
     * Update Story can be used to update Story properties.
     * Update Story
     * @param param the request object
     */
    public updateStory(param: DefaultApiUpdateStoryRequest, options?: Configuration): Promise<Story> {
        return this.api.updateStory(param.storyPublicId, param.updateStory,  options).toPromise();
    }

    /**
     * Update Comment replaces the text of the existing Comment.
     * Update Story Comment
     * @param param the request object
     */
    public updateStoryCommentWithHttpInfo(param: DefaultApiUpdateStoryCommentRequest, options?: Configuration): Promise<HttpInfo<StoryComment>> {
        return this.api.updateStoryCommentWithHttpInfo(param.storyPublicId, param.commentPublicId, param.updateStoryComment,  options).toPromise();
    }

    /**
     * Update Comment replaces the text of the existing Comment.
     * Update Story Comment
     * @param param the request object
     */
    public updateStoryComment(param: DefaultApiUpdateStoryCommentRequest, options?: Configuration): Promise<StoryComment> {
        return this.api.updateStoryComment(param.storyPublicId, param.commentPublicId, param.updateStoryComment,  options).toPromise();
    }

    /**
     * Updates the stories and/or the relationship for the given Story Link.
     * Update Story Link
     * @param param the request object
     */
    public updateStoryLinkWithHttpInfo(param: DefaultApiUpdateStoryLinkRequest, options?: Configuration): Promise<HttpInfo<StoryLink>> {
        return this.api.updateStoryLinkWithHttpInfo(param.storyLinkPublicId, param.updateStoryLink,  options).toPromise();
    }

    /**
     * Updates the stories and/or the relationship for the given Story Link.
     * Update Story Link
     * @param param the request object
     */
    public updateStoryLink(param: DefaultApiUpdateStoryLinkRequest, options?: Configuration): Promise<StoryLink> {
        return this.api.updateStoryLink(param.storyLinkPublicId, param.updateStoryLink,  options).toPromise();
    }

    /**
     * Update Task can be used to update Task properties.
     * Update Task
     * @param param the request object
     */
    public updateTaskWithHttpInfo(param: DefaultApiUpdateTaskRequest, options?: Configuration): Promise<HttpInfo<Task>> {
        return this.api.updateTaskWithHttpInfo(param.storyPublicId, param.taskPublicId, param.updateTask,  options).toPromise();
    }

    /**
     * Update Task can be used to update Task properties.
     * Update Task
     * @param param the request object
     */
    public updateTask(param: DefaultApiUpdateTaskRequest, options?: Configuration): Promise<Task> {
        return this.api.updateTask(param.storyPublicId, param.taskPublicId, param.updateTask,  options).toPromise();
    }

    /**
     * Upload Files uploads one or many files and optionally associates them with a story.    Use the multipart/form-data content-type to upload.    Each `file` key should contain a separate file.    Each UploadedFile\'s name comes from the Content-Disposition header \"filename\" directive for that field.
     * Upload Files
     * @param param the request object
     */
    public uploadFilesWithHttpInfo(param: DefaultApiUploadFilesRequest, options?: Configuration): Promise<HttpInfo<Array<UploadedFile>>> {
        return this.api.uploadFilesWithHttpInfo(param.file0, param.storyId, param.file1, param.file2, param.file3,  options).toPromise();
    }

    /**
     * Upload Files uploads one or many files and optionally associates them with a story.    Use the multipart/form-data content-type to upload.    Each `file` key should contain a separate file.    Each UploadedFile\'s name comes from the Content-Disposition header \"filename\" directive for that field.
     * Upload Files
     * @param param the request object
     */
    public uploadFiles(param: DefaultApiUploadFilesRequest, options?: Configuration): Promise<Array<UploadedFile>> {
        return this.api.uploadFiles(param.file0, param.storyId, param.file1, param.file2, param.file3,  options).toPromise();
    }

}
