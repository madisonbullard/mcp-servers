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
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Category allows you to create a new Category in Shortcut.
     * Create Category
     * @param createCategory
     */
    public createCategoryWithHttpInfo(createCategory: CreateCategory, _options?: Configuration): Promise<HttpInfo<Category>> {
        const result = this.api.createCategoryWithHttpInfo(createCategory, _options);
        return result.toPromise();
    }

    /**
     * Create Category allows you to create a new Category in Shortcut.
     * Create Category
     * @param createCategory
     */
    public createCategory(createCategory: CreateCategory, _options?: Configuration): Promise<Category> {
        const result = this.api.createCategory(createCategory, _options);
        return result.toPromise();
    }

    /**
     * Create a new entity template for the Workspace.
     * Create Entity Template
     * @param createEntityTemplate Request parameters for creating an entirely new entity template.
     */
    public createEntityTemplateWithHttpInfo(createEntityTemplate: CreateEntityTemplate, _options?: Configuration): Promise<HttpInfo<EntityTemplate>> {
        const result = this.api.createEntityTemplateWithHttpInfo(createEntityTemplate, _options);
        return result.toPromise();
    }

    /**
     * Create a new entity template for the Workspace.
     * Create Entity Template
     * @param createEntityTemplate Request parameters for creating an entirely new entity template.
     */
    public createEntityTemplate(createEntityTemplate: CreateEntityTemplate, _options?: Configuration): Promise<EntityTemplate> {
        const result = this.api.createEntityTemplate(createEntityTemplate, _options);
        return result.toPromise();
    }

    /**
     * Create Epic allows you to create a new Epic in Shortcut.
     * Create Epic
     * @param createEpic
     */
    public createEpicWithHttpInfo(createEpic: CreateEpic, _options?: Configuration): Promise<HttpInfo<Epic>> {
        const result = this.api.createEpicWithHttpInfo(createEpic, _options);
        return result.toPromise();
    }

    /**
     * Create Epic allows you to create a new Epic in Shortcut.
     * Create Epic
     * @param createEpic
     */
    public createEpic(createEpic: CreateEpic, _options?: Configuration): Promise<Epic> {
        const result = this.api.createEpic(createEpic, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to create a threaded Comment on an Epic.
     * Create Epic Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param createEpicComment
     */
    public createEpicCommentWithHttpInfo(epicPublicId: number, createEpicComment: CreateEpicComment, _options?: Configuration): Promise<HttpInfo<ThreadedComment>> {
        const result = this.api.createEpicCommentWithHttpInfo(epicPublicId, createEpicComment, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to create a threaded Comment on an Epic.
     * Create Epic Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param createEpicComment
     */
    public createEpicComment(epicPublicId: number, createEpicComment: CreateEpicComment, _options?: Configuration): Promise<ThreadedComment> {
        const result = this.api.createEpicComment(epicPublicId, createEpicComment, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to create a nested Comment reply to an existing Epic Comment.
     * Create Epic Comment Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param commentPublicId The ID of the parent Epic Comment.
     * @param createCommentComment
     */
    public createEpicCommentCommentWithHttpInfo(epicPublicId: number, commentPublicId: number, createCommentComment: CreateCommentComment, _options?: Configuration): Promise<HttpInfo<ThreadedComment>> {
        const result = this.api.createEpicCommentCommentWithHttpInfo(epicPublicId, commentPublicId, createCommentComment, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to create a nested Comment reply to an existing Epic Comment.
     * Create Epic Comment Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param commentPublicId The ID of the parent Epic Comment.
     * @param createCommentComment
     */
    public createEpicCommentComment(epicPublicId: number, commentPublicId: number, createCommentComment: CreateCommentComment, _options?: Configuration): Promise<ThreadedComment> {
        const result = this.api.createEpicCommentComment(epicPublicId, commentPublicId, createCommentComment, _options);
        return result.toPromise();
    }

    /**
     * Create Group
     * @param createGroup
     */
    public createGroupWithHttpInfo(createGroup: CreateGroup, _options?: Configuration): Promise<HttpInfo<Group>> {
        const result = this.api.createGroupWithHttpInfo(createGroup, _options);
        return result.toPromise();
    }

    /**
     * Create Group
     * @param createGroup
     */
    public createGroup(createGroup: CreateGroup, _options?: Configuration): Promise<Group> {
        const result = this.api.createGroup(createGroup, _options);
        return result.toPromise();
    }

    /**
     * Create Iteration
     * @param createIteration
     */
    public createIterationWithHttpInfo(createIteration: CreateIteration, _options?: Configuration): Promise<HttpInfo<Iteration>> {
        const result = this.api.createIterationWithHttpInfo(createIteration, _options);
        return result.toPromise();
    }

    /**
     * Create Iteration
     * @param createIteration
     */
    public createIteration(createIteration: CreateIteration, _options?: Configuration): Promise<Iteration> {
        const result = this.api.createIteration(createIteration, _options);
        return result.toPromise();
    }

    /**
     * Create Label allows you to create a new Label in Shortcut.
     * Create Label
     * @param createLabelParams Request parameters for creating a Label on a Shortcut Story.
     */
    public createLabelWithHttpInfo(createLabelParams: CreateLabelParams, _options?: Configuration): Promise<HttpInfo<Label>> {
        const result = this.api.createLabelWithHttpInfo(createLabelParams, _options);
        return result.toPromise();
    }

    /**
     * Create Label allows you to create a new Label in Shortcut.
     * Create Label
     * @param createLabelParams Request parameters for creating a Label on a Shortcut Story.
     */
    public createLabel(createLabelParams: CreateLabelParams, _options?: Configuration): Promise<Label> {
        const result = this.api.createLabel(createLabelParams, _options);
        return result.toPromise();
    }

    /**
     * Create Linked File allows you to create a new Linked File in Shortcut.
     * Create Linked File
     * @param createLinkedFile
     */
    public createLinkedFileWithHttpInfo(createLinkedFile: CreateLinkedFile, _options?: Configuration): Promise<HttpInfo<LinkedFile>> {
        const result = this.api.createLinkedFileWithHttpInfo(createLinkedFile, _options);
        return result.toPromise();
    }

    /**
     * Create Linked File allows you to create a new Linked File in Shortcut.
     * Create Linked File
     * @param createLinkedFile
     */
    public createLinkedFile(createLinkedFile: CreateLinkedFile, _options?: Configuration): Promise<LinkedFile> {
        const result = this.api.createLinkedFile(createLinkedFile, _options);
        return result.toPromise();
    }

    /**
     * (Deprecated: Use \'Create Objective\') Create Milestone allows you to create a new Milestone in Shortcut.
     * Create Milestone
     * @param createMilestone
     */
    public createMilestoneWithHttpInfo(createMilestone: CreateMilestone, _options?: Configuration): Promise<HttpInfo<Milestone>> {
        const result = this.api.createMilestoneWithHttpInfo(createMilestone, _options);
        return result.toPromise();
    }

    /**
     * (Deprecated: Use \'Create Objective\') Create Milestone allows you to create a new Milestone in Shortcut.
     * Create Milestone
     * @param createMilestone
     */
    public createMilestone(createMilestone: CreateMilestone, _options?: Configuration): Promise<Milestone> {
        const result = this.api.createMilestone(createMilestone, _options);
        return result.toPromise();
    }

    /**
     * Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as [Create Story](https://developer.shortcut.com/api/rest/v3#create-story).
     * Create Multiple Stories
     * @param createStories
     */
    public createMultipleStoriesWithHttpInfo(createStories: CreateStories, _options?: Configuration): Promise<HttpInfo<Array<StorySlim>>> {
        const result = this.api.createMultipleStoriesWithHttpInfo(createStories, _options);
        return result.toPromise();
    }

    /**
     * Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as [Create Story](https://developer.shortcut.com/api/rest/v3#create-story).
     * Create Multiple Stories
     * @param createStories
     */
    public createMultipleStories(createStories: CreateStories, _options?: Configuration): Promise<Array<StorySlim>> {
        const result = this.api.createMultipleStories(createStories, _options);
        return result.toPromise();
    }

    /**
     * Create Objective allows you to create a new Objective in Shortcut.
     * Create Objective
     * @param createObjective
     */
    public createObjectiveWithHttpInfo(createObjective: CreateObjective, _options?: Configuration): Promise<HttpInfo<Objective>> {
        const result = this.api.createObjectiveWithHttpInfo(createObjective, _options);
        return result.toPromise();
    }

    /**
     * Create Objective allows you to create a new Objective in Shortcut.
     * Create Objective
     * @param createObjective
     */
    public createObjective(createObjective: CreateObjective, _options?: Configuration): Promise<Objective> {
        const result = this.api.createObjective(createObjective, _options);
        return result.toPromise();
    }

    /**
     * Create Project is used to create a new Shortcut Project.
     * Create Project
     * @param createProject
     */
    public createProjectWithHttpInfo(createProject: CreateProject, _options?: Configuration): Promise<HttpInfo<Project>> {
        const result = this.api.createProjectWithHttpInfo(createProject, _options);
        return result.toPromise();
    }

    /**
     * Create Project is used to create a new Shortcut Project.
     * Create Project
     * @param createProject
     */
    public createProject(createProject: CreateProject, _options?: Configuration): Promise<Project> {
        const result = this.api.createProject(createProject, _options);
        return result.toPromise();
    }

    /**
     * Create Story is used to add a new story to your Shortcut Workspace.     This endpoint requires that either **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are specified. The workflow_state_id has been marked as required and is the recommended field to specify because we are in the process of sunsetting Projects in Shortcut.
     * Create Story
     * @param createStoryParams Request parameters for creating a story.
     */
    public createStoryWithHttpInfo(createStoryParams: CreateStoryParams, _options?: Configuration): Promise<HttpInfo<Story>> {
        const result = this.api.createStoryWithHttpInfo(createStoryParams, _options);
        return result.toPromise();
    }

    /**
     * Create Story is used to add a new story to your Shortcut Workspace.     This endpoint requires that either **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are specified. The workflow_state_id has been marked as required and is the recommended field to specify because we are in the process of sunsetting Projects in Shortcut.
     * Create Story
     * @param createStoryParams Request parameters for creating a story.
     */
    public createStory(createStoryParams: CreateStoryParams, _options?: Configuration): Promise<Story> {
        const result = this.api.createStory(createStoryParams, _options);
        return result.toPromise();
    }

    /**
     * Create Comment allows you to create a Comment on any Story.
     * Create Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param createStoryComment
     */
    public createStoryCommentWithHttpInfo(storyPublicId: number, createStoryComment: CreateStoryComment, _options?: Configuration): Promise<HttpInfo<StoryComment>> {
        const result = this.api.createStoryCommentWithHttpInfo(storyPublicId, createStoryComment, _options);
        return result.toPromise();
    }

    /**
     * Create Comment allows you to create a Comment on any Story.
     * Create Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param createStoryComment
     */
    public createStoryComment(storyPublicId: number, createStoryComment: CreateStoryComment, _options?: Configuration): Promise<StoryComment> {
        const result = this.api.createStoryComment(storyPublicId, createStoryComment, _options);
        return result.toPromise();
    }

    /**
     * Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.
     * Create Story From Template
     * @param createStoryFromTemplateParams Request parameters for creating a story from a story template. These parameters are merged with the values derived from the template.
     */
    public createStoryFromTemplateWithHttpInfo(createStoryFromTemplateParams: CreateStoryFromTemplateParams, _options?: Configuration): Promise<HttpInfo<Story>> {
        const result = this.api.createStoryFromTemplateWithHttpInfo(createStoryFromTemplateParams, _options);
        return result.toPromise();
    }

    /**
     * Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.
     * Create Story From Template
     * @param createStoryFromTemplateParams Request parameters for creating a story from a story template. These parameters are merged with the values derived from the template.
     */
    public createStoryFromTemplate(createStoryFromTemplateParams: CreateStoryFromTemplateParams, _options?: Configuration): Promise<Story> {
        const result = this.api.createStoryFromTemplate(createStoryFromTemplateParams, _options);
        return result.toPromise();
    }

    /**
     * Story Links (called Story Relationships in the UI) allow you create semantic relationships between two stories. The parameters read like an active voice grammatical sentence:  subject -> verb -> object.  The subject story acts on the object Story; the object story is the direct object of the sentence.  The subject story \"blocks\", \"duplicates\", or \"relates to\" the object story.  Examples: - \"story 5 blocks story 6” -- story 6 is now \"blocked\" until story 5 is moved to a Done workflow state. - \"story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be archived). - \"story 7 relates to story 3”
     * Create Story Link
     * @param createStoryLink
     */
    public createStoryLinkWithHttpInfo(createStoryLink: CreateStoryLink, _options?: Configuration): Promise<HttpInfo<StoryLink>> {
        const result = this.api.createStoryLinkWithHttpInfo(createStoryLink, _options);
        return result.toPromise();
    }

    /**
     * Story Links (called Story Relationships in the UI) allow you create semantic relationships between two stories. The parameters read like an active voice grammatical sentence:  subject -> verb -> object.  The subject story acts on the object Story; the object story is the direct object of the sentence.  The subject story \"blocks\", \"duplicates\", or \"relates to\" the object story.  Examples: - \"story 5 blocks story 6” -- story 6 is now \"blocked\" until story 5 is moved to a Done workflow state. - \"story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be archived). - \"story 7 relates to story 3”
     * Create Story Link
     * @param createStoryLink
     */
    public createStoryLink(createStoryLink: CreateStoryLink, _options?: Configuration): Promise<StoryLink> {
        const result = this.api.createStoryLink(createStoryLink, _options);
        return result.toPromise();
    }

    /**
     * Create a reaction to a story comment.
     * Create Story Reaction
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment.
     * @param createOrDeleteStoryReaction
     */
    public createStoryReactionWithHttpInfo(storyPublicId: number, commentPublicId: number, createOrDeleteStoryReaction: CreateOrDeleteStoryReaction, _options?: Configuration): Promise<HttpInfo<Array<StoryReaction>>> {
        const result = this.api.createStoryReactionWithHttpInfo(storyPublicId, commentPublicId, createOrDeleteStoryReaction, _options);
        return result.toPromise();
    }

    /**
     * Create a reaction to a story comment.
     * Create Story Reaction
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment.
     * @param createOrDeleteStoryReaction
     */
    public createStoryReaction(storyPublicId: number, commentPublicId: number, createOrDeleteStoryReaction: CreateOrDeleteStoryReaction, _options?: Configuration): Promise<Array<StoryReaction>> {
        const result = this.api.createStoryReaction(storyPublicId, commentPublicId, createOrDeleteStoryReaction, _options);
        return result.toPromise();
    }

    /**
     * Create Task is used to create a new task in a Story.
     * Create Task
     * @param storyPublicId The ID of the Story that the Task will be in.
     * @param createTask
     */
    public createTaskWithHttpInfo(storyPublicId: number, createTask: CreateTask, _options?: Configuration): Promise<HttpInfo<Task>> {
        const result = this.api.createTaskWithHttpInfo(storyPublicId, createTask, _options);
        return result.toPromise();
    }

    /**
     * Create Task is used to create a new task in a Story.
     * Create Task
     * @param storyPublicId The ID of the Story that the Task will be in.
     * @param createTask
     */
    public createTask(storyPublicId: number, createTask: CreateTask, _options?: Configuration): Promise<Task> {
        const result = this.api.createTask(storyPublicId, createTask, _options);
        return result.toPromise();
    }

    /**
     * Delete Category can be used to delete any Category.
     * Delete Category
     * @param categoryPublicId The unique ID of the Category.
     */
    public deleteCategoryWithHttpInfo(categoryPublicId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCategoryWithHttpInfo(categoryPublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Category can be used to delete any Category.
     * Delete Category
     * @param categoryPublicId The unique ID of the Category.
     */
    public deleteCategory(categoryPublicId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCategory(categoryPublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Custom Field
     * @param customFieldPublicId The unique ID of the CustomField.
     */
    public deleteCustomFieldWithHttpInfo(customFieldPublicId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCustomFieldWithHttpInfo(customFieldPublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Custom Field
     * @param customFieldPublicId The unique ID of the CustomField.
     */
    public deleteCustomField(customFieldPublicId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCustomField(customFieldPublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Entity Template
     * @param entityTemplatePublicId The unique ID of the entity template.
     */
    public deleteEntityTemplateWithHttpInfo(entityTemplatePublicId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteEntityTemplateWithHttpInfo(entityTemplatePublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Entity Template
     * @param entityTemplatePublicId The unique ID of the entity template.
     */
    public deleteEntityTemplate(entityTemplatePublicId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteEntityTemplate(entityTemplatePublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.
     * Delete Epic
     * @param epicPublicId The unique ID of the Epic.
     */
    public deleteEpicWithHttpInfo(epicPublicId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteEpicWithHttpInfo(epicPublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.
     * Delete Epic
     * @param epicPublicId The unique ID of the Epic.
     */
    public deleteEpic(epicPublicId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteEpic(epicPublicId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to delete a Comment from an Epic.
     * Delete Epic Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param commentPublicId The ID of the Comment.
     */
    public deleteEpicCommentWithHttpInfo(epicPublicId: number, commentPublicId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteEpicCommentWithHttpInfo(epicPublicId, commentPublicId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to delete a Comment from an Epic.
     * Delete Epic Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param commentPublicId The ID of the Comment.
     */
    public deleteEpicComment(epicPublicId: number, commentPublicId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteEpicComment(epicPublicId, commentPublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete File deletes a previously uploaded file.
     * Delete File
     * @param filePublicId The File’s unique ID.
     */
    public deleteFileWithHttpInfo(filePublicId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteFileWithHttpInfo(filePublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete File deletes a previously uploaded file.
     * Delete File
     * @param filePublicId The File’s unique ID.
     */
    public deleteFile(filePublicId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteFile(filePublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Iteration
     * @param iterationPublicId The unique ID of the Iteration.
     */
    public deleteIterationWithHttpInfo(iterationPublicId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteIterationWithHttpInfo(iterationPublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Iteration
     * @param iterationPublicId The unique ID of the Iteration.
     */
    public deleteIteration(iterationPublicId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteIteration(iterationPublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Label can be used to delete any Label.
     * Delete Label
     * @param labelPublicId The unique ID of the Label.
     */
    public deleteLabelWithHttpInfo(labelPublicId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteLabelWithHttpInfo(labelPublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Label can be used to delete any Label.
     * Delete Label
     * @param labelPublicId The unique ID of the Label.
     */
    public deleteLabel(labelPublicId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteLabel(labelPublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Linked File can be used to delete any previously attached Linked-File.
     * Delete Linked File
     * @param linkedFilePublicId The unique identifier of the linked file.
     */
    public deleteLinkedFileWithHttpInfo(linkedFilePublicId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteLinkedFileWithHttpInfo(linkedFilePublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Linked File can be used to delete any previously attached Linked-File.
     * Delete Linked File
     * @param linkedFilePublicId The unique identifier of the linked file.
     */
    public deleteLinkedFile(linkedFilePublicId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteLinkedFile(linkedFilePublicId, _options);
        return result.toPromise();
    }

    /**
     * (Deprecated: Use \'Delete Objective\') Delete Milestone can be used to delete any Milestone.
     * Delete Milestone
     * @param milestonePublicId The ID of the Milestone.
     */
    public deleteMilestoneWithHttpInfo(milestonePublicId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteMilestoneWithHttpInfo(milestonePublicId, _options);
        return result.toPromise();
    }

    /**
     * (Deprecated: Use \'Delete Objective\') Delete Milestone can be used to delete any Milestone.
     * Delete Milestone
     * @param milestonePublicId The ID of the Milestone.
     */
    public deleteMilestone(milestonePublicId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteMilestone(milestonePublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Multiple Stories allows you to delete multiple archived stories at once.
     * Delete Multiple Stories
     * @param deleteStories
     */
    public deleteMultipleStoriesWithHttpInfo(deleteStories: DeleteStories, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteMultipleStoriesWithHttpInfo(deleteStories, _options);
        return result.toPromise();
    }

    /**
     * Delete Multiple Stories allows you to delete multiple archived stories at once.
     * Delete Multiple Stories
     * @param deleteStories
     */
    public deleteMultipleStories(deleteStories: DeleteStories, _options?: Configuration): Promise<void> {
        const result = this.api.deleteMultipleStories(deleteStories, _options);
        return result.toPromise();
    }

    /**
     * Delete Objective can be used to delete any Objective.
     * Delete Objective
     * @param objectivePublicId The ID of the Objective.
     */
    public deleteObjectiveWithHttpInfo(objectivePublicId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteObjectiveWithHttpInfo(objectivePublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Objective can be used to delete any Objective.
     * Delete Objective
     * @param objectivePublicId The ID of the Objective.
     */
    public deleteObjective(objectivePublicId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteObjective(objectivePublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.
     * Delete Project
     * @param projectPublicId The unique ID of the Project.
     */
    public deleteProjectWithHttpInfo(projectPublicId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteProjectWithHttpInfo(projectPublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.
     * Delete Project
     * @param projectPublicId The unique ID of the Project.
     */
    public deleteProject(projectPublicId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteProject(projectPublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Story can be used to delete any Story.
     * Delete Story
     * @param storyPublicId The ID of the Story.
     */
    public deleteStoryWithHttpInfo(storyPublicId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteStoryWithHttpInfo(storyPublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Story can be used to delete any Story.
     * Delete Story
     * @param storyPublicId The ID of the Story.
     */
    public deleteStory(storyPublicId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteStory(storyPublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete a Comment from any story.
     * Delete Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment.
     */
    public deleteStoryCommentWithHttpInfo(storyPublicId: number, commentPublicId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteStoryCommentWithHttpInfo(storyPublicId, commentPublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete a Comment from any story.
     * Delete Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment.
     */
    public deleteStoryComment(storyPublicId: number, commentPublicId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteStoryComment(storyPublicId, commentPublicId, _options);
        return result.toPromise();
    }

    /**
     * Removes the relationship between the stories for the given Story Link.
     * Delete Story Link
     * @param storyLinkPublicId The unique ID of the Story Link.
     */
    public deleteStoryLinkWithHttpInfo(storyLinkPublicId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteStoryLinkWithHttpInfo(storyLinkPublicId, _options);
        return result.toPromise();
    }

    /**
     * Removes the relationship between the stories for the given Story Link.
     * Delete Story Link
     * @param storyLinkPublicId The unique ID of the Story Link.
     */
    public deleteStoryLink(storyLinkPublicId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteStoryLink(storyLinkPublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete a reaction from any story comment.
     * Delete Story Reaction
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment.
     * @param createOrDeleteStoryReaction
     */
    public deleteStoryReactionWithHttpInfo(storyPublicId: number, commentPublicId: number, createOrDeleteStoryReaction: CreateOrDeleteStoryReaction, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteStoryReactionWithHttpInfo(storyPublicId, commentPublicId, createOrDeleteStoryReaction, _options);
        return result.toPromise();
    }

    /**
     * Delete a reaction from any story comment.
     * Delete Story Reaction
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment.
     * @param createOrDeleteStoryReaction
     */
    public deleteStoryReaction(storyPublicId: number, commentPublicId: number, createOrDeleteStoryReaction: CreateOrDeleteStoryReaction, _options?: Configuration): Promise<void> {
        const result = this.api.deleteStoryReaction(storyPublicId, commentPublicId, createOrDeleteStoryReaction, _options);
        return result.toPromise();
    }

    /**
     * Delete Task can be used to delete any previously created Task on a Story.
     * Delete Task
     * @param storyPublicId The unique ID of the Story this Task is associated with.
     * @param taskPublicId The unique ID of the Task.
     */
    public deleteTaskWithHttpInfo(storyPublicId: number, taskPublicId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteTaskWithHttpInfo(storyPublicId, taskPublicId, _options);
        return result.toPromise();
    }

    /**
     * Delete Task can be used to delete any previously created Task on a Story.
     * Delete Task
     * @param storyPublicId The unique ID of the Story this Task is associated with.
     * @param taskPublicId The unique ID of the Task.
     */
    public deleteTask(storyPublicId: number, taskPublicId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteTask(storyPublicId, taskPublicId, _options);
        return result.toPromise();
    }

    /**
     * Disables Iterations for the current workspace
     * Disable Iterations
     */
    public disableIterationsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.disableIterationsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Disables Iterations for the current workspace
     * Disable Iterations
     */
    public disableIterations(_options?: Configuration): Promise<void> {
        const result = this.api.disableIterations(_options);
        return result.toPromise();
    }

    /**
     * Disables the Story Template feature for the Workspace.
     * Disable Story Templates
     */
    public disableStoryTemplatesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.disableStoryTemplatesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Disables the Story Template feature for the Workspace.
     * Disable Story Templates
     */
    public disableStoryTemplates(_options?: Configuration): Promise<void> {
        const result = this.api.disableStoryTemplates(_options);
        return result.toPromise();
    }

    /**
     * Enables Iterations for the current workspace
     * Enable Iterations
     */
    public enableIterationsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.enableIterationsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Enables Iterations for the current workspace
     * Enable Iterations
     */
    public enableIterations(_options?: Configuration): Promise<void> {
        const result = this.api.enableIterations(_options);
        return result.toPromise();
    }

    /**
     * Enables the Story Template feature for the Workspace.
     * Enable Story Templates
     */
    public enableStoryTemplatesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.enableStoryTemplatesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Enables the Story Template feature for the Workspace.
     * Enable Story Templates
     */
    public enableStoryTemplates(_options?: Configuration): Promise<void> {
        const result = this.api.enableStoryTemplates(_options);
        return result.toPromise();
    }

    /**
     * Get Category returns information about the selected Category.
     * Get Category
     * @param categoryPublicId The unique ID of the Category.
     */
    public getCategoryWithHttpInfo(categoryPublicId: number, _options?: Configuration): Promise<HttpInfo<Category>> {
        const result = this.api.getCategoryWithHttpInfo(categoryPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Category returns information about the selected Category.
     * Get Category
     * @param categoryPublicId The unique ID of the Category.
     */
    public getCategory(categoryPublicId: number, _options?: Configuration): Promise<Category> {
        const result = this.api.getCategory(categoryPublicId, _options);
        return result.toPromise();
    }

    /**
     * Returns information about the authenticated member.
     * Get Current Member Info
     */
    public getCurrentMemberInfoWithHttpInfo(_options?: Configuration): Promise<HttpInfo<MemberInfo>> {
        const result = this.api.getCurrentMemberInfoWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns information about the authenticated member.
     * Get Current Member Info
     */
    public getCurrentMemberInfo(_options?: Configuration): Promise<MemberInfo> {
        const result = this.api.getCurrentMemberInfo(_options);
        return result.toPromise();
    }

    /**
     * Get Custom Field
     * @param customFieldPublicId The unique ID of the CustomField.
     */
    public getCustomFieldWithHttpInfo(customFieldPublicId: string, _options?: Configuration): Promise<HttpInfo<CustomField>> {
        const result = this.api.getCustomFieldWithHttpInfo(customFieldPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Custom Field
     * @param customFieldPublicId The unique ID of the CustomField.
     */
    public getCustomField(customFieldPublicId: string, _options?: Configuration): Promise<CustomField> {
        const result = this.api.getCustomField(customFieldPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Entity Template returns information about a given entity template.
     * Get Entity Template
     * @param entityTemplatePublicId The unique ID of the entity template.
     */
    public getEntityTemplateWithHttpInfo(entityTemplatePublicId: string, _options?: Configuration): Promise<HttpInfo<EntityTemplate>> {
        const result = this.api.getEntityTemplateWithHttpInfo(entityTemplatePublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Entity Template returns information about a given entity template.
     * Get Entity Template
     * @param entityTemplatePublicId The unique ID of the entity template.
     */
    public getEntityTemplate(entityTemplatePublicId: string, _options?: Configuration): Promise<EntityTemplate> {
        const result = this.api.getEntityTemplate(entityTemplatePublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Epic returns information about the selected Epic.
     * Get Epic
     * @param epicPublicId The unique ID of the Epic.
     */
    public getEpicWithHttpInfo(epicPublicId: number, _options?: Configuration): Promise<HttpInfo<Epic>> {
        const result = this.api.getEpicWithHttpInfo(epicPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Epic returns information about the selected Epic.
     * Get Epic
     * @param epicPublicId The unique ID of the Epic.
     */
    public getEpic(epicPublicId: number, _options?: Configuration): Promise<Epic> {
        const result = this.api.getEpic(epicPublicId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns information about the selected Epic Comment.
     * Get Epic Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param commentPublicId The ID of the Comment.
     */
    public getEpicCommentWithHttpInfo(epicPublicId: number, commentPublicId: number, _options?: Configuration): Promise<HttpInfo<ThreadedComment>> {
        const result = this.api.getEpicCommentWithHttpInfo(epicPublicId, commentPublicId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint returns information about the selected Epic Comment.
     * Get Epic Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param commentPublicId The ID of the Comment.
     */
    public getEpicComment(epicPublicId: number, commentPublicId: number, _options?: Configuration): Promise<ThreadedComment> {
        const result = this.api.getEpicComment(epicPublicId, commentPublicId, _options);
        return result.toPromise();
    }

    /**
     * Returns the Epic Workflow for the Workspace.
     * Get Epic Workflow
     */
    public getEpicWorkflowWithHttpInfo(_options?: Configuration): Promise<HttpInfo<EpicWorkflow>> {
        const result = this.api.getEpicWorkflowWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns the Epic Workflow for the Workspace.
     * Get Epic Workflow
     */
    public getEpicWorkflow(_options?: Configuration): Promise<EpicWorkflow> {
        const result = this.api.getEpicWorkflow(_options);
        return result.toPromise();
    }

    /**
     * Get Stories which have a given External Link associated with them.
     * Get External Link Stories
     * @param externalLink The external link associated with one or more stories.
     */
    public getExternalLinkStoriesWithHttpInfo(externalLink: string, _options?: Configuration): Promise<HttpInfo<Array<StorySlim>>> {
        const result = this.api.getExternalLinkStoriesWithHttpInfo(externalLink, _options);
        return result.toPromise();
    }

    /**
     * Get Stories which have a given External Link associated with them.
     * Get External Link Stories
     * @param externalLink The external link associated with one or more stories.
     */
    public getExternalLinkStories(externalLink: string, _options?: Configuration): Promise<Array<StorySlim>> {
        const result = this.api.getExternalLinkStories(externalLink, _options);
        return result.toPromise();
    }

    /**
     * Get File returns information about the selected UploadedFile.
     * Get File
     * @param filePublicId The File’s unique ID.
     */
    public getFileWithHttpInfo(filePublicId: number, _options?: Configuration): Promise<HttpInfo<UploadedFile>> {
        const result = this.api.getFileWithHttpInfo(filePublicId, _options);
        return result.toPromise();
    }

    /**
     * Get File returns information about the selected UploadedFile.
     * Get File
     * @param filePublicId The File’s unique ID.
     */
    public getFile(filePublicId: number, _options?: Configuration): Promise<UploadedFile> {
        const result = this.api.getFile(filePublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Group
     * @param groupPublicId The unique ID of the Group.
     */
    public getGroupWithHttpInfo(groupPublicId: string, _options?: Configuration): Promise<HttpInfo<Group>> {
        const result = this.api.getGroupWithHttpInfo(groupPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Group
     * @param groupPublicId The unique ID of the Group.
     */
    public getGroup(groupPublicId: string, _options?: Configuration): Promise<Group> {
        const result = this.api.getGroup(groupPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Iteration
     * @param iterationPublicId The unique ID of the Iteration.
     */
    public getIterationWithHttpInfo(iterationPublicId: number, _options?: Configuration): Promise<HttpInfo<Iteration>> {
        const result = this.api.getIterationWithHttpInfo(iterationPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Iteration
     * @param iterationPublicId The unique ID of the Iteration.
     */
    public getIteration(iterationPublicId: number, _options?: Configuration): Promise<Iteration> {
        const result = this.api.getIteration(iterationPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Key Result returns information about a chosen Key Result.
     * Get Key Result
     * @param keyResultPublicId The ID of the Key Result.
     */
    public getKeyResultWithHttpInfo(keyResultPublicId: string, _options?: Configuration): Promise<HttpInfo<KeyResult>> {
        const result = this.api.getKeyResultWithHttpInfo(keyResultPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Key Result returns information about a chosen Key Result.
     * Get Key Result
     * @param keyResultPublicId The ID of the Key Result.
     */
    public getKeyResult(keyResultPublicId: string, _options?: Configuration): Promise<KeyResult> {
        const result = this.api.getKeyResult(keyResultPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Label returns information about the selected Label.
     * Get Label
     * @param labelPublicId The unique ID of the Label.
     */
    public getLabelWithHttpInfo(labelPublicId: number, _options?: Configuration): Promise<HttpInfo<Label>> {
        const result = this.api.getLabelWithHttpInfo(labelPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Label returns information about the selected Label.
     * Get Label
     * @param labelPublicId The unique ID of the Label.
     */
    public getLabel(labelPublicId: number, _options?: Configuration): Promise<Label> {
        const result = this.api.getLabel(labelPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get File returns information about the selected Linked File.
     * Get Linked File
     * @param linkedFilePublicId The unique identifier of the linked file.
     */
    public getLinkedFileWithHttpInfo(linkedFilePublicId: number, _options?: Configuration): Promise<HttpInfo<LinkedFile>> {
        const result = this.api.getLinkedFileWithHttpInfo(linkedFilePublicId, _options);
        return result.toPromise();
    }

    /**
     * Get File returns information about the selected Linked File.
     * Get Linked File
     * @param linkedFilePublicId The unique identifier of the linked file.
     */
    public getLinkedFile(linkedFilePublicId: number, _options?: Configuration): Promise<LinkedFile> {
        const result = this.api.getLinkedFile(linkedFilePublicId, _options);
        return result.toPromise();
    }

    /**
     * Returns information about a Member.
     * Get Member
     * @param memberPublicId The Member\&#39;s unique ID.
     * @param [orgPublicId] The unique ID of the Organization to limit the lookup to.
     */
    public getMemberWithHttpInfo(memberPublicId: string, orgPublicId?: string, _options?: Configuration): Promise<HttpInfo<Member>> {
        const result = this.api.getMemberWithHttpInfo(memberPublicId, orgPublicId, _options);
        return result.toPromise();
    }

    /**
     * Returns information about a Member.
     * Get Member
     * @param memberPublicId The Member\&#39;s unique ID.
     * @param [orgPublicId] The unique ID of the Organization to limit the lookup to.
     */
    public getMember(memberPublicId: string, orgPublicId?: string, _options?: Configuration): Promise<Member> {
        const result = this.api.getMember(memberPublicId, orgPublicId, _options);
        return result.toPromise();
    }

    /**
     * (Deprecated: Use \'Get Objective\') Get Milestone returns information about a chosen Milestone.
     * Get Milestone
     * @param milestonePublicId The ID of the Milestone.
     */
    public getMilestoneWithHttpInfo(milestonePublicId: number, _options?: Configuration): Promise<HttpInfo<Milestone>> {
        const result = this.api.getMilestoneWithHttpInfo(milestonePublicId, _options);
        return result.toPromise();
    }

    /**
     * (Deprecated: Use \'Get Objective\') Get Milestone returns information about a chosen Milestone.
     * Get Milestone
     * @param milestonePublicId The ID of the Milestone.
     */
    public getMilestone(milestonePublicId: number, _options?: Configuration): Promise<Milestone> {
        const result = this.api.getMilestone(milestonePublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Objective returns information about a chosen Objective.
     * Get Objective
     * @param objectivePublicId The ID of the Objective.
     */
    public getObjectiveWithHttpInfo(objectivePublicId: number, _options?: Configuration): Promise<HttpInfo<Objective>> {
        const result = this.api.getObjectiveWithHttpInfo(objectivePublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Objective returns information about a chosen Objective.
     * Get Objective
     * @param objectivePublicId The ID of the Objective.
     */
    public getObjective(objectivePublicId: number, _options?: Configuration): Promise<Objective> {
        const result = this.api.getObjective(objectivePublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Project returns information about the selected Project.
     * Get Project
     * @param projectPublicId The unique ID of the Project.
     */
    public getProjectWithHttpInfo(projectPublicId: number, _options?: Configuration): Promise<HttpInfo<Project>> {
        const result = this.api.getProjectWithHttpInfo(projectPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Project returns information about the selected Project.
     * Get Project
     * @param projectPublicId The unique ID of the Project.
     */
    public getProject(projectPublicId: number, _options?: Configuration): Promise<Project> {
        const result = this.api.getProject(projectPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Repository returns information about the selected Repository.
     * Get Repository
     * @param repoPublicId The unique ID of the Repository.
     */
    public getRepositoryWithHttpInfo(repoPublicId: number, _options?: Configuration): Promise<HttpInfo<Repository>> {
        const result = this.api.getRepositoryWithHttpInfo(repoPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Repository returns information about the selected Repository.
     * Get Repository
     * @param repoPublicId The unique ID of the Repository.
     */
    public getRepository(repoPublicId: number, _options?: Configuration): Promise<Repository> {
        const result = this.api.getRepository(repoPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Story returns information about a chosen Story.
     * Get Story
     * @param storyPublicId The ID of the Story.
     */
    public getStoryWithHttpInfo(storyPublicId: number, _options?: Configuration): Promise<HttpInfo<Story>> {
        const result = this.api.getStoryWithHttpInfo(storyPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Story returns information about a chosen Story.
     * Get Story
     * @param storyPublicId The ID of the Story.
     */
    public getStory(storyPublicId: number, _options?: Configuration): Promise<Story> {
        const result = this.api.getStory(storyPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Comment is used to get Comment information.
     * Get Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment.
     */
    public getStoryCommentWithHttpInfo(storyPublicId: number, commentPublicId: number, _options?: Configuration): Promise<HttpInfo<StoryComment>> {
        const result = this.api.getStoryCommentWithHttpInfo(storyPublicId, commentPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Comment is used to get Comment information.
     * Get Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment.
     */
    public getStoryComment(storyPublicId: number, commentPublicId: number, _options?: Configuration): Promise<StoryComment> {
        const result = this.api.getStoryComment(storyPublicId, commentPublicId, _options);
        return result.toPromise();
    }

    /**
     * Returns the stories and their relationship for the given Story Link.
     * Get Story Link
     * @param storyLinkPublicId The unique ID of the Story Link.
     */
    public getStoryLinkWithHttpInfo(storyLinkPublicId: number, _options?: Configuration): Promise<HttpInfo<StoryLink>> {
        const result = this.api.getStoryLinkWithHttpInfo(storyLinkPublicId, _options);
        return result.toPromise();
    }

    /**
     * Returns the stories and their relationship for the given Story Link.
     * Get Story Link
     * @param storyLinkPublicId The unique ID of the Story Link.
     */
    public getStoryLink(storyLinkPublicId: number, _options?: Configuration): Promise<StoryLink> {
        const result = this.api.getStoryLink(storyLinkPublicId, _options);
        return result.toPromise();
    }

    /**
     * Returns information about a chosen Task.
     * Get Task
     * @param storyPublicId The unique ID of the Story this Task is associated with.
     * @param taskPublicId The unique ID of the Task.
     */
    public getTaskWithHttpInfo(storyPublicId: number, taskPublicId: number, _options?: Configuration): Promise<HttpInfo<Task>> {
        const result = this.api.getTaskWithHttpInfo(storyPublicId, taskPublicId, _options);
        return result.toPromise();
    }

    /**
     * Returns information about a chosen Task.
     * Get Task
     * @param storyPublicId The unique ID of the Story this Task is associated with.
     * @param taskPublicId The unique ID of the Task.
     */
    public getTask(storyPublicId: number, taskPublicId: number, _options?: Configuration): Promise<Task> {
        const result = this.api.getTask(storyPublicId, taskPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Workflow returns information about a chosen Workflow.
     * Get Workflow
     * @param workflowPublicId The ID of the Workflow.
     */
    public getWorkflowWithHttpInfo(workflowPublicId: number, _options?: Configuration): Promise<HttpInfo<Workflow>> {
        const result = this.api.getWorkflowWithHttpInfo(workflowPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get Workflow returns information about a chosen Workflow.
     * Get Workflow
     * @param workflowPublicId The ID of the Workflow.
     */
    public getWorkflow(workflowPublicId: number, _options?: Configuration): Promise<Workflow> {
        const result = this.api.getWorkflow(workflowPublicId, _options);
        return result.toPromise();
    }

    /**
     * List Categories returns a list of all Categories and their attributes.
     * List Categories
     */
    public listCategoriesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Category>>> {
        const result = this.api.listCategoriesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List Categories returns a list of all Categories and their attributes.
     * List Categories
     */
    public listCategories(_options?: Configuration): Promise<Array<Category>> {
        const result = this.api.listCategories(_options);
        return result.toPromise();
    }

    /**
     * List Category Milestones returns a list of all Milestones with the Category.
     * List Category Milestones
     * @param categoryPublicId The unique ID of the Category.
     */
    public listCategoryMilestonesWithHttpInfo(categoryPublicId: number, _options?: Configuration): Promise<HttpInfo<Array<Milestone>>> {
        const result = this.api.listCategoryMilestonesWithHttpInfo(categoryPublicId, _options);
        return result.toPromise();
    }

    /**
     * List Category Milestones returns a list of all Milestones with the Category.
     * List Category Milestones
     * @param categoryPublicId The unique ID of the Category.
     */
    public listCategoryMilestones(categoryPublicId: number, _options?: Configuration): Promise<Array<Milestone>> {
        const result = this.api.listCategoryMilestones(categoryPublicId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of all Objectives with the Category.
     * List Category Objectives
     * @param categoryPublicId The unique ID of the Category.
     */
    public listCategoryObjectivesWithHttpInfo(categoryPublicId: number, _options?: Configuration): Promise<HttpInfo<Array<Milestone>>> {
        const result = this.api.listCategoryObjectivesWithHttpInfo(categoryPublicId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of all Objectives with the Category.
     * List Category Objectives
     * @param categoryPublicId The unique ID of the Category.
     */
    public listCategoryObjectives(categoryPublicId: number, _options?: Configuration): Promise<Array<Milestone>> {
        const result = this.api.listCategoryObjectives(categoryPublicId, _options);
        return result.toPromise();
    }

    /**
     * List Custom Fields
     */
    public listCustomFieldsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<CustomField>>> {
        const result = this.api.listCustomFieldsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List Custom Fields
     */
    public listCustomFields(_options?: Configuration): Promise<Array<CustomField>> {
        const result = this.api.listCustomFields(_options);
        return result.toPromise();
    }

    /**
     * List all the entity templates for the Workspace.
     * List Entity Templates
     */
    public listEntityTemplatesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<EntityTemplate>>> {
        const result = this.api.listEntityTemplatesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List all the entity templates for the Workspace.
     * List Entity Templates
     */
    public listEntityTemplates(_options?: Configuration): Promise<Array<EntityTemplate>> {
        const result = this.api.listEntityTemplates(_options);
        return result.toPromise();
    }

    /**
     * Get a list of all Comments on an Epic.
     * List Epic Comments
     * @param epicPublicId The unique ID of the Epic.
     */
    public listEpicCommentsWithHttpInfo(epicPublicId: number, _options?: Configuration): Promise<HttpInfo<Array<ThreadedComment>>> {
        const result = this.api.listEpicCommentsWithHttpInfo(epicPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all Comments on an Epic.
     * List Epic Comments
     * @param epicPublicId The unique ID of the Epic.
     */
    public listEpicComments(epicPublicId: number, _options?: Configuration): Promise<Array<ThreadedComment>> {
        const result = this.api.listEpicComments(epicPublicId, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all Stories in an Epic.
     * List Epic Stories
     * @param epicPublicId The unique ID of the Epic.
     * @param [includesDescription] A true/false boolean indicating whether to return Stories with their descriptions.
     */
    public listEpicStoriesWithHttpInfo(epicPublicId: number, includesDescription?: boolean, _options?: Configuration): Promise<HttpInfo<Array<StorySlim>>> {
        const result = this.api.listEpicStoriesWithHttpInfo(epicPublicId, includesDescription, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all Stories in an Epic.
     * List Epic Stories
     * @param epicPublicId The unique ID of the Epic.
     * @param [includesDescription] A true/false boolean indicating whether to return Stories with their descriptions.
     */
    public listEpicStories(epicPublicId: number, includesDescription?: boolean, _options?: Configuration): Promise<Array<StorySlim>> {
        const result = this.api.listEpicStories(epicPublicId, includesDescription, _options);
        return result.toPromise();
    }

    /**
     * List Epics returns a list of all Epics and their attributes.
     * List Epics
     * @param [includesDescription] A true/false boolean indicating whether to return Epics with their descriptions.
     */
    public listEpicsWithHttpInfo(includesDescription?: boolean, _options?: Configuration): Promise<HttpInfo<Array<EpicSlim>>> {
        const result = this.api.listEpicsWithHttpInfo(includesDescription, _options);
        return result.toPromise();
    }

    /**
     * List Epics returns a list of all Epics and their attributes.
     * List Epics
     * @param [includesDescription] A true/false boolean indicating whether to return Epics with their descriptions.
     */
    public listEpics(includesDescription?: boolean, _options?: Configuration): Promise<Array<EpicSlim>> {
        const result = this.api.listEpics(includesDescription, _options);
        return result.toPromise();
    }

    /**
     * List Files returns a list of all UploadedFiles in the workspace.
     * List Files
     */
    public listFilesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<UploadedFile>>> {
        const result = this.api.listFilesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List Files returns a list of all UploadedFiles in the workspace.
     * List Files
     */
    public listFiles(_options?: Configuration): Promise<Array<UploadedFile>> {
        const result = this.api.listFiles(_options);
        return result.toPromise();
    }

    /**
     * List the Stories assigned to the Group. (By default, limited to 1,000).
     * List Group Stories
     * @param groupPublicId The unique ID of the Group.
     * @param [limit] The maximum number of results to return. (Defaults to 1000, max 1000)
     * @param [offset] The offset at which to begin returning results. (Defaults to 0)
     */
    public listGroupStoriesWithHttpInfo(groupPublicId: string, limit?: number, offset?: number, _options?: Configuration): Promise<HttpInfo<Array<StorySlim>>> {
        const result = this.api.listGroupStoriesWithHttpInfo(groupPublicId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * List the Stories assigned to the Group. (By default, limited to 1,000).
     * List Group Stories
     * @param groupPublicId The unique ID of the Group.
     * @param [limit] The maximum number of results to return. (Defaults to 1000, max 1000)
     * @param [offset] The offset at which to begin returning results. (Defaults to 0)
     */
    public listGroupStories(groupPublicId: string, limit?: number, offset?: number, _options?: Configuration): Promise<Array<StorySlim>> {
        const result = this.api.listGroupStories(groupPublicId, limit, offset, _options);
        return result.toPromise();
    }

    /**
     * A group in our API maps to a \"Team\" within the Shortcut Product. A Team is a collection of Users that can be associated to Stories, Epics, and Iterations within Shortcut.
     * List Groups
     */
    public listGroupsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Group>>> {
        const result = this.api.listGroupsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * A group in our API maps to a \"Team\" within the Shortcut Product. A Team is a collection of Users that can be associated to Stories, Epics, and Iterations within Shortcut.
     * List Groups
     */
    public listGroups(_options?: Configuration): Promise<Array<Group>> {
        const result = this.api.listGroups(_options);
        return result.toPromise();
    }

    /**
     * Get a list of all Stories in an Iteration.
     * List Iteration Stories
     * @param iterationPublicId The unique ID of the Iteration.
     * @param [includesDescription] A true/false boolean indicating whether to return Stories with their descriptions.
     */
    public listIterationStoriesWithHttpInfo(iterationPublicId: number, includesDescription?: boolean, _options?: Configuration): Promise<HttpInfo<Array<StorySlim>>> {
        const result = this.api.listIterationStoriesWithHttpInfo(iterationPublicId, includesDescription, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all Stories in an Iteration.
     * List Iteration Stories
     * @param iterationPublicId The unique ID of the Iteration.
     * @param [includesDescription] A true/false boolean indicating whether to return Stories with their descriptions.
     */
    public listIterationStories(iterationPublicId: number, includesDescription?: boolean, _options?: Configuration): Promise<Array<StorySlim>> {
        const result = this.api.listIterationStories(iterationPublicId, includesDescription, _options);
        return result.toPromise();
    }

    /**
     * List Iterations
     */
    public listIterationsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<IterationSlim>>> {
        const result = this.api.listIterationsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List Iterations
     */
    public listIterations(_options?: Configuration): Promise<Array<IterationSlim>> {
        const result = this.api.listIterations(_options);
        return result.toPromise();
    }

    /**
     * List all of the Epics with the Label.
     * List Label Epics
     * @param labelPublicId The unique ID of the Label.
     */
    public listLabelEpicsWithHttpInfo(labelPublicId: number, _options?: Configuration): Promise<HttpInfo<Array<EpicSlim>>> {
        const result = this.api.listLabelEpicsWithHttpInfo(labelPublicId, _options);
        return result.toPromise();
    }

    /**
     * List all of the Epics with the Label.
     * List Label Epics
     * @param labelPublicId The unique ID of the Label.
     */
    public listLabelEpics(labelPublicId: number, _options?: Configuration): Promise<Array<EpicSlim>> {
        const result = this.api.listLabelEpics(labelPublicId, _options);
        return result.toPromise();
    }

    /**
     * List all of the Stories with the Label.
     * List Label Stories
     * @param labelPublicId The unique ID of the Label.
     * @param [includesDescription] A true/false boolean indicating whether to return Stories with their descriptions.
     */
    public listLabelStoriesWithHttpInfo(labelPublicId: number, includesDescription?: boolean, _options?: Configuration): Promise<HttpInfo<Array<StorySlim>>> {
        const result = this.api.listLabelStoriesWithHttpInfo(labelPublicId, includesDescription, _options);
        return result.toPromise();
    }

    /**
     * List all of the Stories with the Label.
     * List Label Stories
     * @param labelPublicId The unique ID of the Label.
     * @param [includesDescription] A true/false boolean indicating whether to return Stories with their descriptions.
     */
    public listLabelStories(labelPublicId: number, includesDescription?: boolean, _options?: Configuration): Promise<Array<StorySlim>> {
        const result = this.api.listLabelStories(labelPublicId, includesDescription, _options);
        return result.toPromise();
    }

    /**
     * List Labels returns a list of all Labels and their attributes.
     * List Labels
     * @param [slim] A true/false boolean indicating if the slim versions of the Label should be returned.
     */
    public listLabelsWithHttpInfo(slim?: boolean, _options?: Configuration): Promise<HttpInfo<Array<Label>>> {
        const result = this.api.listLabelsWithHttpInfo(slim, _options);
        return result.toPromise();
    }

    /**
     * List Labels returns a list of all Labels and their attributes.
     * List Labels
     * @param [slim] A true/false boolean indicating if the slim versions of the Label should be returned.
     */
    public listLabels(slim?: boolean, _options?: Configuration): Promise<Array<Label>> {
        const result = this.api.listLabels(slim, _options);
        return result.toPromise();
    }

    /**
     * List Linked Files returns a list of all Linked-Files and their attributes.
     * List Linked Files
     */
    public listLinkedFilesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<LinkedFile>>> {
        const result = this.api.listLinkedFilesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List Linked Files returns a list of all Linked-Files and their attributes.
     * List Linked Files
     */
    public listLinkedFiles(_options?: Configuration): Promise<Array<LinkedFile>> {
        const result = this.api.listLinkedFiles(_options);
        return result.toPromise();
    }

    /**
     * Returns information about members of the Workspace.
     * List Members
     * @param [orgPublicId] The unique ID of the Organization to limit the list to.
     */
    public listMembersWithHttpInfo(orgPublicId?: string, _options?: Configuration): Promise<HttpInfo<Array<Member>>> {
        const result = this.api.listMembersWithHttpInfo(orgPublicId, _options);
        return result.toPromise();
    }

    /**
     * Returns information about members of the Workspace.
     * List Members
     * @param [orgPublicId] The unique ID of the Organization to limit the list to.
     */
    public listMembers(orgPublicId?: string, _options?: Configuration): Promise<Array<Member>> {
        const result = this.api.listMembers(orgPublicId, _options);
        return result.toPromise();
    }

    /**
     * (Deprecated: Use \'List Objective Epics\') List all of the Epics within the Milestone.
     * List Milestone Epics
     * @param milestonePublicId The ID of the Milestone.
     */
    public listMilestoneEpicsWithHttpInfo(milestonePublicId: number, _options?: Configuration): Promise<HttpInfo<Array<EpicSlim>>> {
        const result = this.api.listMilestoneEpicsWithHttpInfo(milestonePublicId, _options);
        return result.toPromise();
    }

    /**
     * (Deprecated: Use \'List Objective Epics\') List all of the Epics within the Milestone.
     * List Milestone Epics
     * @param milestonePublicId The ID of the Milestone.
     */
    public listMilestoneEpics(milestonePublicId: number, _options?: Configuration): Promise<Array<EpicSlim>> {
        const result = this.api.listMilestoneEpics(milestonePublicId, _options);
        return result.toPromise();
    }

    /**
     * (Deprecated: Use \'List Objectives\') List Milestones returns a list of all Milestones and their attributes.
     * List Milestones
     */
    public listMilestonesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Milestone>>> {
        const result = this.api.listMilestonesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * (Deprecated: Use \'List Objectives\') List Milestones returns a list of all Milestones and their attributes.
     * List Milestones
     */
    public listMilestones(_options?: Configuration): Promise<Array<Milestone>> {
        const result = this.api.listMilestones(_options);
        return result.toPromise();
    }

    /**
     * List all of the Epics within the Objective.
     * List Objective Epics
     * @param objectivePublicId The ID of the Objective.
     */
    public listObjectiveEpicsWithHttpInfo(objectivePublicId: number, _options?: Configuration): Promise<HttpInfo<Array<EpicSlim>>> {
        const result = this.api.listObjectiveEpicsWithHttpInfo(objectivePublicId, _options);
        return result.toPromise();
    }

    /**
     * List all of the Epics within the Objective.
     * List Objective Epics
     * @param objectivePublicId The ID of the Objective.
     */
    public listObjectiveEpics(objectivePublicId: number, _options?: Configuration): Promise<Array<EpicSlim>> {
        const result = this.api.listObjectiveEpics(objectivePublicId, _options);
        return result.toPromise();
    }

    /**
     * List Objectives returns a list of all Objectives and their attributes.
     * List Objectives
     */
    public listObjectivesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Objective>>> {
        const result = this.api.listObjectivesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List Objectives returns a list of all Objectives and their attributes.
     * List Objectives
     */
    public listObjectives(_options?: Configuration): Promise<Array<Objective>> {
        const result = this.api.listObjectives(_options);
        return result.toPromise();
    }

    /**
     * List Projects returns a list of all Projects and their attributes.
     * List Projects
     */
    public listProjectsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Project>>> {
        const result = this.api.listProjectsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List Projects returns a list of all Projects and their attributes.
     * List Projects
     */
    public listProjects(_options?: Configuration): Promise<Array<Project>> {
        const result = this.api.listProjects(_options);
        return result.toPromise();
    }

    /**
     * List Repositories returns a list of all Repositories and their attributes.
     * List Repositories
     */
    public listRepositoriesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Repository>>> {
        const result = this.api.listRepositoriesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List Repositories returns a list of all Repositories and their attributes.
     * List Repositories
     */
    public listRepositories(_options?: Configuration): Promise<Array<Repository>> {
        const result = this.api.listRepositories(_options);
        return result.toPromise();
    }

    /**
     * List Stories returns a list of all Stories in a selected Project and their attributes.
     * List Stories
     * @param projectPublicId The unique ID of the Project.
     * @param [includesDescription] A true/false boolean indicating whether to return Stories with their descriptions.
     */
    public listStoriesWithHttpInfo(projectPublicId: number, includesDescription?: boolean, _options?: Configuration): Promise<HttpInfo<Array<StorySlim>>> {
        const result = this.api.listStoriesWithHttpInfo(projectPublicId, includesDescription, _options);
        return result.toPromise();
    }

    /**
     * List Stories returns a list of all Stories in a selected Project and their attributes.
     * List Stories
     * @param projectPublicId The unique ID of the Project.
     * @param [includesDescription] A true/false boolean indicating whether to return Stories with their descriptions.
     */
    public listStories(projectPublicId: number, includesDescription?: boolean, _options?: Configuration): Promise<Array<StorySlim>> {
        const result = this.api.listStories(projectPublicId, includesDescription, _options);
        return result.toPromise();
    }

    /**
     * Lists Comments associated with a Story
     * List Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     */
    public listStoryCommentWithHttpInfo(storyPublicId: number, _options?: Configuration): Promise<HttpInfo<Array<StoryComment>>> {
        const result = this.api.listStoryCommentWithHttpInfo(storyPublicId, _options);
        return result.toPromise();
    }

    /**
     * Lists Comments associated with a Story
     * List Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     */
    public listStoryComment(storyPublicId: number, _options?: Configuration): Promise<Array<StoryComment>> {
        const result = this.api.listStoryComment(storyPublicId, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of all Workflows in the Workspace.
     * List Workflows
     */
    public listWorkflowsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Workflow>>> {
        const result = this.api.listWorkflowsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns a list of all Workflows in the Workspace.
     * List Workflows
     */
    public listWorkflows(_options?: Configuration): Promise<Array<Workflow>> {
        const result = this.api.listWorkflows(_options);
        return result.toPromise();
    }

    /**
     * Search lets you search Epics and Stories based on desired parameters. Since ordering of the results can change over time (due to search ranking decay, new Epics and Stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search
     * @param query See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     * @param [pageSize] The number of search results to include in a page. Minimum of 1 and maximum of 25.
     * @param [detail] The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;.
     * @param [next] The next page token.
     * @param [entityTypes] A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
     */
    public searchWithHttpInfo(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Promise<HttpInfo<SearchResults>> {
        const result = this.api.searchWithHttpInfo(query, pageSize, detail, next, entityTypes, _options);
        return result.toPromise();
    }

    /**
     * Search lets you search Epics and Stories based on desired parameters. Since ordering of the results can change over time (due to search ranking decay, new Epics and Stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search
     * @param query See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     * @param [pageSize] The number of search results to include in a page. Minimum of 1 and maximum of 25.
     * @param [detail] The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;.
     * @param [next] The next page token.
     * @param [entityTypes] A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
     */
    public search(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Promise<SearchResults> {
        const result = this.api.search(query, pageSize, detail, next, entityTypes, _options);
        return result.toPromise();
    }

    /**
     * Search Epics lets you search Epics based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new Epics being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Epics
     * @param query See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     * @param [pageSize] The number of search results to include in a page. Minimum of 1 and maximum of 25.
     * @param [detail] The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;.
     * @param [next] The next page token.
     * @param [entityTypes] A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
     */
    public searchEpicsWithHttpInfo(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Promise<HttpInfo<EpicSearchResults>> {
        const result = this.api.searchEpicsWithHttpInfo(query, pageSize, detail, next, entityTypes, _options);
        return result.toPromise();
    }

    /**
     * Search Epics lets you search Epics based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new Epics being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Epics
     * @param query See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     * @param [pageSize] The number of search results to include in a page. Minimum of 1 and maximum of 25.
     * @param [detail] The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;.
     * @param [next] The next page token.
     * @param [entityTypes] A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
     */
    public searchEpics(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Promise<EpicSearchResults> {
        const result = this.api.searchEpics(query, pageSize, detail, next, entityTypes, _options);
        return result.toPromise();
    }

    /**
     * Search Iterations lets you search Iterations based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Iterations being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Iterations
     * @param query See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     * @param [pageSize] The number of search results to include in a page. Minimum of 1 and maximum of 25.
     * @param [detail] The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;.
     * @param [next] The next page token.
     * @param [entityTypes] A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
     */
    public searchIterationsWithHttpInfo(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Promise<HttpInfo<IterationSearchResults>> {
        const result = this.api.searchIterationsWithHttpInfo(query, pageSize, detail, next, entityTypes, _options);
        return result.toPromise();
    }

    /**
     * Search Iterations lets you search Iterations based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Iterations being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Iterations
     * @param query See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     * @param [pageSize] The number of search results to include in a page. Minimum of 1 and maximum of 25.
     * @param [detail] The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;.
     * @param [next] The next page token.
     * @param [entityTypes] A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
     */
    public searchIterations(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Promise<IterationSearchResults> {
        const result = this.api.searchIterations(query, pageSize, detail, next, entityTypes, _options);
        return result.toPromise();
    }

    /**
     * Search Milestones lets you search Milestones based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Milestones being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Milestones
     * @param query See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     * @param [pageSize] The number of search results to include in a page. Minimum of 1 and maximum of 25.
     * @param [detail] The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;.
     * @param [next] The next page token.
     * @param [entityTypes] A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
     */
    public searchMilestonesWithHttpInfo(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Promise<HttpInfo<ObjectiveSearchResults>> {
        const result = this.api.searchMilestonesWithHttpInfo(query, pageSize, detail, next, entityTypes, _options);
        return result.toPromise();
    }

    /**
     * Search Milestones lets you search Milestones based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Milestones being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Milestones
     * @param query See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     * @param [pageSize] The number of search results to include in a page. Minimum of 1 and maximum of 25.
     * @param [detail] The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;.
     * @param [next] The next page token.
     * @param [entityTypes] A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
     */
    public searchMilestones(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Promise<ObjectiveSearchResults> {
        const result = this.api.searchMilestones(query, pageSize, detail, next, entityTypes, _options);
        return result.toPromise();
    }

    /**
     * Search Objectives lets you search Objectives based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Objectives being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Objectives
     * @param query See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     * @param [pageSize] The number of search results to include in a page. Minimum of 1 and maximum of 25.
     * @param [detail] The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;.
     * @param [next] The next page token.
     * @param [entityTypes] A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
     */
    public searchObjectivesWithHttpInfo(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Promise<HttpInfo<ObjectiveSearchResults>> {
        const result = this.api.searchObjectivesWithHttpInfo(query, pageSize, detail, next, entityTypes, _options);
        return result.toPromise();
    }

    /**
     * Search Objectives lets you search Objectives based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Objectives being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Objectives
     * @param query See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     * @param [pageSize] The number of search results to include in a page. Minimum of 1 and maximum of 25.
     * @param [detail] The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;.
     * @param [next] The next page token.
     * @param [entityTypes] A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
     */
    public searchObjectives(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Promise<ObjectiveSearchResults> {
        const result = this.api.searchObjectives(query, pageSize, detail, next, entityTypes, _options);
        return result.toPromise();
    }

    /**
     * Search Stories lets you search Stories based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Stories
     * @param query See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     * @param [pageSize] The number of search results to include in a page. Minimum of 1 and maximum of 25.
     * @param [detail] The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;.
     * @param [next] The next page token.
     * @param [entityTypes] A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
     */
    public searchStoriesWithHttpInfo(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Promise<HttpInfo<StorySearchResults>> {
        const result = this.api.searchStoriesWithHttpInfo(query, pageSize, detail, next, entityTypes, _options);
        return result.toPromise();
    }

    /**
     * Search Stories lets you search Stories based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
     * Search Stories
     * @param query See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
     * @param [pageSize] The number of search results to include in a page. Minimum of 1 and maximum of 25.
     * @param [detail] The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;.
     * @param [next] The next page token.
     * @param [entityTypes] A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story.
     */
    public searchStories(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Promise<StorySearchResults> {
        const result = this.api.searchStories(query, pageSize, detail, next, entityTypes, _options);
        return result.toPromise();
    }

    /**
     * Search Stories lets you search Stories based on desired parameters.
     * Search Stories (Old)
     * @param searchStories
     */
    public searchStoriesOldWithHttpInfo(searchStories: SearchStories, _options?: Configuration): Promise<HttpInfo<Array<StorySlim>>> {
        const result = this.api.searchStoriesOldWithHttpInfo(searchStories, _options);
        return result.toPromise();
    }

    /**
     * Search Stories lets you search Stories based on desired parameters.
     * Search Stories (Old)
     * @param searchStories
     */
    public searchStoriesOld(searchStories: SearchStories, _options?: Configuration): Promise<Array<StorySlim>> {
        const result = this.api.searchStoriesOld(searchStories, _options);
        return result.toPromise();
    }

    /**
     * Story History
     * @param storyPublicId The ID of the Story.
     */
    public storyHistoryWithHttpInfo(storyPublicId: number, _options?: Configuration): Promise<HttpInfo<Array<History>>> {
        const result = this.api.storyHistoryWithHttpInfo(storyPublicId, _options);
        return result.toPromise();
    }

    /**
     * Story History
     * @param storyPublicId The ID of the Story.
     */
    public storyHistory(storyPublicId: number, _options?: Configuration): Promise<Array<History>> {
        const result = this.api.storyHistory(storyPublicId, _options);
        return result.toPromise();
    }

    /**
     * Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)
     * Unlink Comment thread from Slack
     * @param storyPublicId The ID of the Story to unlink.
     * @param commentPublicId The ID of the Comment to unlink.
     */
    public unlinkCommentThreadFromSlackWithHttpInfo(storyPublicId: number, commentPublicId: number, _options?: Configuration): Promise<HttpInfo<StoryComment>> {
        const result = this.api.unlinkCommentThreadFromSlackWithHttpInfo(storyPublicId, commentPublicId, _options);
        return result.toPromise();
    }

    /**
     * Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)
     * Unlink Comment thread from Slack
     * @param storyPublicId The ID of the Story to unlink.
     * @param commentPublicId The ID of the Comment to unlink.
     */
    public unlinkCommentThreadFromSlack(storyPublicId: number, commentPublicId: number, _options?: Configuration): Promise<StoryComment> {
        const result = this.api.unlinkCommentThreadFromSlack(storyPublicId, commentPublicId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to unlink a productboard epic.
     * Unlink Productboard from Epic
     * @param epicPublicId The unique ID of the Epic.
     */
    public unlinkProductboardFromEpicWithHttpInfo(epicPublicId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.unlinkProductboardFromEpicWithHttpInfo(epicPublicId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to unlink a productboard epic.
     * Unlink Productboard from Epic
     * @param epicPublicId The unique ID of the Epic.
     */
    public unlinkProductboardFromEpic(epicPublicId: number, _options?: Configuration): Promise<void> {
        const result = this.api.unlinkProductboardFromEpic(epicPublicId, _options);
        return result.toPromise();
    }

    /**
     * Update Category allows you to replace a Category name with another name. If you try to name a Category something that already exists, you will receive a 422 response.
     * Update Category
     * @param categoryPublicId The unique ID of the Category you wish to update.
     * @param updateCategory
     */
    public updateCategoryWithHttpInfo(categoryPublicId: number, updateCategory: UpdateCategory, _options?: Configuration): Promise<HttpInfo<Category>> {
        const result = this.api.updateCategoryWithHttpInfo(categoryPublicId, updateCategory, _options);
        return result.toPromise();
    }

    /**
     * Update Category allows you to replace a Category name with another name. If you try to name a Category something that already exists, you will receive a 422 response.
     * Update Category
     * @param categoryPublicId The unique ID of the Category you wish to update.
     * @param updateCategory
     */
    public updateCategory(categoryPublicId: number, updateCategory: UpdateCategory, _options?: Configuration): Promise<Category> {
        const result = this.api.updateCategory(categoryPublicId, updateCategory, _options);
        return result.toPromise();
    }

    /**
     * Update Custom Field can be used to update the definition of a Custom Field. The order of items in the \'values\' collection is interpreted to be their ascending sort order.To delete an existing enum value, simply omit it from the \'values\' collection. New enum values may be created inline by including an object in the \'values\' collection having a \'value\' entry with no \'id\' (eg. {\'value\': \'myNewValue\', \'color_key\': \'green\'}).
     * Update Custom Field
     * @param customFieldPublicId The unique ID of the CustomField.
     * @param updateCustomField
     */
    public updateCustomFieldWithHttpInfo(customFieldPublicId: string, updateCustomField: UpdateCustomField, _options?: Configuration): Promise<HttpInfo<CustomField>> {
        const result = this.api.updateCustomFieldWithHttpInfo(customFieldPublicId, updateCustomField, _options);
        return result.toPromise();
    }

    /**
     * Update Custom Field can be used to update the definition of a Custom Field. The order of items in the \'values\' collection is interpreted to be their ascending sort order.To delete an existing enum value, simply omit it from the \'values\' collection. New enum values may be created inline by including an object in the \'values\' collection having a \'value\' entry with no \'id\' (eg. {\'value\': \'myNewValue\', \'color_key\': \'green\'}).
     * Update Custom Field
     * @param customFieldPublicId The unique ID of the CustomField.
     * @param updateCustomField
     */
    public updateCustomField(customFieldPublicId: string, updateCustomField: UpdateCustomField, _options?: Configuration): Promise<CustomField> {
        const result = this.api.updateCustomField(customFieldPublicId, updateCustomField, _options);
        return result.toPromise();
    }

    /**
     * Update an entity template\'s name or its contents.
     * Update Entity Template
     * @param entityTemplatePublicId The unique ID of the template to be updated.
     * @param updateEntityTemplate Request parameters for changing either a template\&#39;s name or any of   the attributes it is designed to pre-populate.
     */
    public updateEntityTemplateWithHttpInfo(entityTemplatePublicId: string, updateEntityTemplate: UpdateEntityTemplate, _options?: Configuration): Promise<HttpInfo<EntityTemplate>> {
        const result = this.api.updateEntityTemplateWithHttpInfo(entityTemplatePublicId, updateEntityTemplate, _options);
        return result.toPromise();
    }

    /**
     * Update an entity template\'s name or its contents.
     * Update Entity Template
     * @param entityTemplatePublicId The unique ID of the template to be updated.
     * @param updateEntityTemplate Request parameters for changing either a template\&#39;s name or any of   the attributes it is designed to pre-populate.
     */
    public updateEntityTemplate(entityTemplatePublicId: string, updateEntityTemplate: UpdateEntityTemplate, _options?: Configuration): Promise<EntityTemplate> {
        const result = this.api.updateEntityTemplate(entityTemplatePublicId, updateEntityTemplate, _options);
        return result.toPromise();
    }

    /**
     * Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which can be found in the Shortcut UI.
     * Update Epic
     * @param epicPublicId The unique ID of the Epic.
     * @param updateEpic
     */
    public updateEpicWithHttpInfo(epicPublicId: number, updateEpic: UpdateEpic, _options?: Configuration): Promise<HttpInfo<Epic>> {
        const result = this.api.updateEpicWithHttpInfo(epicPublicId, updateEpic, _options);
        return result.toPromise();
    }

    /**
     * Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which can be found in the Shortcut UI.
     * Update Epic
     * @param epicPublicId The unique ID of the Epic.
     * @param updateEpic
     */
    public updateEpic(epicPublicId: number, updateEpic: UpdateEpic, _options?: Configuration): Promise<Epic> {
        const result = this.api.updateEpic(epicPublicId, updateEpic, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to update a threaded Comment on an Epic.
     * Update Epic Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param commentPublicId The ID of the Comment.
     * @param updateComment
     */
    public updateEpicCommentWithHttpInfo(epicPublicId: number, commentPublicId: number, updateComment: UpdateComment, _options?: Configuration): Promise<HttpInfo<ThreadedComment>> {
        const result = this.api.updateEpicCommentWithHttpInfo(epicPublicId, commentPublicId, updateComment, _options);
        return result.toPromise();
    }

    /**
     * This endpoint allows you to update a threaded Comment on an Epic.
     * Update Epic Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param commentPublicId The ID of the Comment.
     * @param updateComment
     */
    public updateEpicComment(epicPublicId: number, commentPublicId: number, updateComment: UpdateComment, _options?: Configuration): Promise<ThreadedComment> {
        const result = this.api.updateEpicComment(epicPublicId, commentPublicId, updateComment, _options);
        return result.toPromise();
    }

    /**
     * Update File updates the properties of an UploadedFile (but not its content).
     * Update File
     * @param filePublicId The unique ID assigned to the file in Shortcut.
     * @param updateFile
     */
    public updateFileWithHttpInfo(filePublicId: number, updateFile: UpdateFile, _options?: Configuration): Promise<HttpInfo<UploadedFile>> {
        const result = this.api.updateFileWithHttpInfo(filePublicId, updateFile, _options);
        return result.toPromise();
    }

    /**
     * Update File updates the properties of an UploadedFile (but not its content).
     * Update File
     * @param filePublicId The unique ID assigned to the file in Shortcut.
     * @param updateFile
     */
    public updateFile(filePublicId: number, updateFile: UpdateFile, _options?: Configuration): Promise<UploadedFile> {
        const result = this.api.updateFile(filePublicId, updateFile, _options);
        return result.toPromise();
    }

    /**
     * Update Group
     * @param groupPublicId The unique ID of the Group.
     * @param updateGroup
     */
    public updateGroupWithHttpInfo(groupPublicId: string, updateGroup: UpdateGroup, _options?: Configuration): Promise<HttpInfo<Group>> {
        const result = this.api.updateGroupWithHttpInfo(groupPublicId, updateGroup, _options);
        return result.toPromise();
    }

    /**
     * Update Group
     * @param groupPublicId The unique ID of the Group.
     * @param updateGroup
     */
    public updateGroup(groupPublicId: string, updateGroup: UpdateGroup, _options?: Configuration): Promise<Group> {
        const result = this.api.updateGroup(groupPublicId, updateGroup, _options);
        return result.toPromise();
    }

    /**
     * Update Iteration
     * @param iterationPublicId The unique ID of the Iteration.
     * @param updateIteration
     */
    public updateIterationWithHttpInfo(iterationPublicId: number, updateIteration: UpdateIteration, _options?: Configuration): Promise<HttpInfo<Iteration>> {
        const result = this.api.updateIterationWithHttpInfo(iterationPublicId, updateIteration, _options);
        return result.toPromise();
    }

    /**
     * Update Iteration
     * @param iterationPublicId The unique ID of the Iteration.
     * @param updateIteration
     */
    public updateIteration(iterationPublicId: number, updateIteration: UpdateIteration, _options?: Configuration): Promise<Iteration> {
        const result = this.api.updateIteration(iterationPublicId, updateIteration, _options);
        return result.toPromise();
    }

    /**
     * Update Key Result allows updating a Key Result\'s name or initial, observed, or target values.
     * Update Key Result
     * @param keyResultPublicId The ID of the Key Result.
     * @param updateKeyResult
     */
    public updateKeyResultWithHttpInfo(keyResultPublicId: string, updateKeyResult: UpdateKeyResult, _options?: Configuration): Promise<HttpInfo<KeyResult>> {
        const result = this.api.updateKeyResultWithHttpInfo(keyResultPublicId, updateKeyResult, _options);
        return result.toPromise();
    }

    /**
     * Update Key Result allows updating a Key Result\'s name or initial, observed, or target values.
     * Update Key Result
     * @param keyResultPublicId The ID of the Key Result.
     * @param updateKeyResult
     */
    public updateKeyResult(keyResultPublicId: string, updateKeyResult: UpdateKeyResult, _options?: Configuration): Promise<KeyResult> {
        const result = this.api.updateKeyResult(keyResultPublicId, updateKeyResult, _options);
        return result.toPromise();
    }

    /**
     * Update Label allows you to replace a Label name with another name. If you try to name a Label something that already exists, you will receive a 422 response.
     * Update Label
     * @param labelPublicId The unique ID of the Label you wish to update.
     * @param updateLabel
     */
    public updateLabelWithHttpInfo(labelPublicId: number, updateLabel: UpdateLabel, _options?: Configuration): Promise<HttpInfo<Label>> {
        const result = this.api.updateLabelWithHttpInfo(labelPublicId, updateLabel, _options);
        return result.toPromise();
    }

    /**
     * Update Label allows you to replace a Label name with another name. If you try to name a Label something that already exists, you will receive a 422 response.
     * Update Label
     * @param labelPublicId The unique ID of the Label you wish to update.
     * @param updateLabel
     */
    public updateLabel(labelPublicId: number, updateLabel: UpdateLabel, _options?: Configuration): Promise<Label> {
        const result = this.api.updateLabel(labelPublicId, updateLabel, _options);
        return result.toPromise();
    }

    /**
     * Updated Linked File allows you to update properties of a previously attached Linked-File.
     * Update Linked File
     * @param linkedFilePublicId The unique identifier of the linked file.
     * @param updateLinkedFile
     */
    public updateLinkedFileWithHttpInfo(linkedFilePublicId: number, updateLinkedFile: UpdateLinkedFile, _options?: Configuration): Promise<HttpInfo<LinkedFile>> {
        const result = this.api.updateLinkedFileWithHttpInfo(linkedFilePublicId, updateLinkedFile, _options);
        return result.toPromise();
    }

    /**
     * Updated Linked File allows you to update properties of a previously attached Linked-File.
     * Update Linked File
     * @param linkedFilePublicId The unique identifier of the linked file.
     * @param updateLinkedFile
     */
    public updateLinkedFile(linkedFilePublicId: number, updateLinkedFile: UpdateLinkedFile, _options?: Configuration): Promise<LinkedFile> {
        const result = this.api.updateLinkedFile(linkedFilePublicId, updateLinkedFile, _options);
        return result.toPromise();
    }

    /**
     * (Deprecated: Use \'Update Objective\') Update Milestone can be used to update Milestone properties.
     * Update Milestone
     * @param milestonePublicId The ID of the Milestone.
     * @param updateMilestone
     */
    public updateMilestoneWithHttpInfo(milestonePublicId: number, updateMilestone: UpdateMilestone, _options?: Configuration): Promise<HttpInfo<Milestone>> {
        const result = this.api.updateMilestoneWithHttpInfo(milestonePublicId, updateMilestone, _options);
        return result.toPromise();
    }

    /**
     * (Deprecated: Use \'Update Objective\') Update Milestone can be used to update Milestone properties.
     * Update Milestone
     * @param milestonePublicId The ID of the Milestone.
     * @param updateMilestone
     */
    public updateMilestone(milestonePublicId: number, updateMilestone: UpdateMilestone, _options?: Configuration): Promise<Milestone> {
        const result = this.api.updateMilestone(milestonePublicId, updateMilestone, _options);
        return result.toPromise();
    }

    /**
     * Update Multiple Stories allows you to make changes to numerous stories at once.
     * Update Multiple Stories
     * @param updateStories
     */
    public updateMultipleStoriesWithHttpInfo(updateStories: UpdateStories, _options?: Configuration): Promise<HttpInfo<Array<StorySlim>>> {
        const result = this.api.updateMultipleStoriesWithHttpInfo(updateStories, _options);
        return result.toPromise();
    }

    /**
     * Update Multiple Stories allows you to make changes to numerous stories at once.
     * Update Multiple Stories
     * @param updateStories
     */
    public updateMultipleStories(updateStories: UpdateStories, _options?: Configuration): Promise<Array<StorySlim>> {
        const result = this.api.updateMultipleStories(updateStories, _options);
        return result.toPromise();
    }

    /**
     * Update Objective can be used to update Objective properties.
     * Update Objective
     * @param objectivePublicId The ID of the Objective.
     * @param updateObjective
     */
    public updateObjectiveWithHttpInfo(objectivePublicId: number, updateObjective: UpdateObjective, _options?: Configuration): Promise<HttpInfo<Objective>> {
        const result = this.api.updateObjectiveWithHttpInfo(objectivePublicId, updateObjective, _options);
        return result.toPromise();
    }

    /**
     * Update Objective can be used to update Objective properties.
     * Update Objective
     * @param objectivePublicId The ID of the Objective.
     * @param updateObjective
     */
    public updateObjective(objectivePublicId: number, updateObjective: UpdateObjective, _options?: Configuration): Promise<Objective> {
        const result = this.api.updateObjective(objectivePublicId, updateObjective, _options);
        return result.toPromise();
    }

    /**
     * Update Project can be used to change properties of a Project.
     * Update Project
     * @param projectPublicId The unique ID of the Project.
     * @param updateProject
     */
    public updateProjectWithHttpInfo(projectPublicId: number, updateProject: UpdateProject, _options?: Configuration): Promise<HttpInfo<Project>> {
        const result = this.api.updateProjectWithHttpInfo(projectPublicId, updateProject, _options);
        return result.toPromise();
    }

    /**
     * Update Project can be used to change properties of a Project.
     * Update Project
     * @param projectPublicId The unique ID of the Project.
     * @param updateProject
     */
    public updateProject(projectPublicId: number, updateProject: UpdateProject, _options?: Configuration): Promise<Project> {
        const result = this.api.updateProject(projectPublicId, updateProject, _options);
        return result.toPromise();
    }

    /**
     * Update Story can be used to update Story properties.
     * Update Story
     * @param storyPublicId The unique identifier of this story.
     * @param updateStory
     */
    public updateStoryWithHttpInfo(storyPublicId: number, updateStory: UpdateStory, _options?: Configuration): Promise<HttpInfo<Story>> {
        const result = this.api.updateStoryWithHttpInfo(storyPublicId, updateStory, _options);
        return result.toPromise();
    }

    /**
     * Update Story can be used to update Story properties.
     * Update Story
     * @param storyPublicId The unique identifier of this story.
     * @param updateStory
     */
    public updateStory(storyPublicId: number, updateStory: UpdateStory, _options?: Configuration): Promise<Story> {
        const result = this.api.updateStory(storyPublicId, updateStory, _options);
        return result.toPromise();
    }

    /**
     * Update Comment replaces the text of the existing Comment.
     * Update Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment
     * @param updateStoryComment
     */
    public updateStoryCommentWithHttpInfo(storyPublicId: number, commentPublicId: number, updateStoryComment: UpdateStoryComment, _options?: Configuration): Promise<HttpInfo<StoryComment>> {
        const result = this.api.updateStoryCommentWithHttpInfo(storyPublicId, commentPublicId, updateStoryComment, _options);
        return result.toPromise();
    }

    /**
     * Update Comment replaces the text of the existing Comment.
     * Update Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment
     * @param updateStoryComment
     */
    public updateStoryComment(storyPublicId: number, commentPublicId: number, updateStoryComment: UpdateStoryComment, _options?: Configuration): Promise<StoryComment> {
        const result = this.api.updateStoryComment(storyPublicId, commentPublicId, updateStoryComment, _options);
        return result.toPromise();
    }

    /**
     * Updates the stories and/or the relationship for the given Story Link.
     * Update Story Link
     * @param storyLinkPublicId The unique ID of the Story Link.
     * @param updateStoryLink
     */
    public updateStoryLinkWithHttpInfo(storyLinkPublicId: number, updateStoryLink: UpdateStoryLink, _options?: Configuration): Promise<HttpInfo<StoryLink>> {
        const result = this.api.updateStoryLinkWithHttpInfo(storyLinkPublicId, updateStoryLink, _options);
        return result.toPromise();
    }

    /**
     * Updates the stories and/or the relationship for the given Story Link.
     * Update Story Link
     * @param storyLinkPublicId The unique ID of the Story Link.
     * @param updateStoryLink
     */
    public updateStoryLink(storyLinkPublicId: number, updateStoryLink: UpdateStoryLink, _options?: Configuration): Promise<StoryLink> {
        const result = this.api.updateStoryLink(storyLinkPublicId, updateStoryLink, _options);
        return result.toPromise();
    }

    /**
     * Update Task can be used to update Task properties.
     * Update Task
     * @param storyPublicId The unique identifier of the parent Story.
     * @param taskPublicId The unique identifier of the Task you wish to update.
     * @param updateTask
     */
    public updateTaskWithHttpInfo(storyPublicId: number, taskPublicId: number, updateTask: UpdateTask, _options?: Configuration): Promise<HttpInfo<Task>> {
        const result = this.api.updateTaskWithHttpInfo(storyPublicId, taskPublicId, updateTask, _options);
        return result.toPromise();
    }

    /**
     * Update Task can be used to update Task properties.
     * Update Task
     * @param storyPublicId The unique identifier of the parent Story.
     * @param taskPublicId The unique identifier of the Task you wish to update.
     * @param updateTask
     */
    public updateTask(storyPublicId: number, taskPublicId: number, updateTask: UpdateTask, _options?: Configuration): Promise<Task> {
        const result = this.api.updateTask(storyPublicId, taskPublicId, updateTask, _options);
        return result.toPromise();
    }

    /**
     * Upload Files uploads one or many files and optionally associates them with a story.    Use the multipart/form-data content-type to upload.    Each `file` key should contain a separate file.    Each UploadedFile\'s name comes from the Content-Disposition header \"filename\" directive for that field.
     * Upload Files
     * @param file0 A file upload. At least one is required.
     * @param [storyId] The story ID that these files will be associated with.
     * @param [file1] Optional additional files.
     * @param [file2] Optional additional files.
     * @param [file3] Optional additional files.
     */
    public uploadFilesWithHttpInfo(file0: HttpFile, storyId?: number, file1?: HttpFile, file2?: HttpFile, file3?: HttpFile, _options?: Configuration): Promise<HttpInfo<Array<UploadedFile>>> {
        const result = this.api.uploadFilesWithHttpInfo(file0, storyId, file1, file2, file3, _options);
        return result.toPromise();
    }

    /**
     * Upload Files uploads one or many files and optionally associates them with a story.    Use the multipart/form-data content-type to upload.    Each `file` key should contain a separate file.    Each UploadedFile\'s name comes from the Content-Disposition header \"filename\" directive for that field.
     * Upload Files
     * @param file0 A file upload. At least one is required.
     * @param [storyId] The story ID that these files will be associated with.
     * @param [file1] Optional additional files.
     * @param [file2] Optional additional files.
     * @param [file3] Optional additional files.
     */
    public uploadFiles(file0: HttpFile, storyId?: number, file1?: HttpFile, file2?: HttpFile, file3?: HttpFile, _options?: Configuration): Promise<Array<UploadedFile>> {
        const result = this.api.uploadFiles(file0, storyId, file1, file2, file3, _options);
        return result.toPromise();
    }


}



