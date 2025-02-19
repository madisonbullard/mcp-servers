import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Create Category allows you to create a new Category in Shortcut.
     * Create Category
     * @param createCategory
     */
    public createCategoryWithHttpInfo(createCategory: CreateCategory, _options?: Configuration): Observable<HttpInfo<Category>> {
        const requestContextPromise = this.requestFactory.createCategory(createCategory, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Category allows you to create a new Category in Shortcut.
     * Create Category
     * @param createCategory
     */
    public createCategory(createCategory: CreateCategory, _options?: Configuration): Observable<Category> {
        return this.createCategoryWithHttpInfo(createCategory, _options).pipe(map((apiResponse: HttpInfo<Category>) => apiResponse.data));
    }

    /**
     * Create a new entity template for the Workspace.
     * Create Entity Template
     * @param createEntityTemplate Request parameters for creating an entirely new entity template.
     */
    public createEntityTemplateWithHttpInfo(createEntityTemplate: CreateEntityTemplate, _options?: Configuration): Observable<HttpInfo<EntityTemplate>> {
        const requestContextPromise = this.requestFactory.createEntityTemplate(createEntityTemplate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEntityTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new entity template for the Workspace.
     * Create Entity Template
     * @param createEntityTemplate Request parameters for creating an entirely new entity template.
     */
    public createEntityTemplate(createEntityTemplate: CreateEntityTemplate, _options?: Configuration): Observable<EntityTemplate> {
        return this.createEntityTemplateWithHttpInfo(createEntityTemplate, _options).pipe(map((apiResponse: HttpInfo<EntityTemplate>) => apiResponse.data));
    }

    /**
     * Create Epic allows you to create a new Epic in Shortcut.
     * Create Epic
     * @param createEpic
     */
    public createEpicWithHttpInfo(createEpic: CreateEpic, _options?: Configuration): Observable<HttpInfo<Epic>> {
        const requestContextPromise = this.requestFactory.createEpic(createEpic, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEpicWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Epic allows you to create a new Epic in Shortcut.
     * Create Epic
     * @param createEpic
     */
    public createEpic(createEpic: CreateEpic, _options?: Configuration): Observable<Epic> {
        return this.createEpicWithHttpInfo(createEpic, _options).pipe(map((apiResponse: HttpInfo<Epic>) => apiResponse.data));
    }

    /**
     * This endpoint allows you to create a threaded Comment on an Epic.
     * Create Epic Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param createEpicComment
     */
    public createEpicCommentWithHttpInfo(epicPublicId: number, createEpicComment: CreateEpicComment, _options?: Configuration): Observable<HttpInfo<ThreadedComment>> {
        const requestContextPromise = this.requestFactory.createEpicComment(epicPublicId, createEpicComment, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEpicCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint allows you to create a threaded Comment on an Epic.
     * Create Epic Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param createEpicComment
     */
    public createEpicComment(epicPublicId: number, createEpicComment: CreateEpicComment, _options?: Configuration): Observable<ThreadedComment> {
        return this.createEpicCommentWithHttpInfo(epicPublicId, createEpicComment, _options).pipe(map((apiResponse: HttpInfo<ThreadedComment>) => apiResponse.data));
    }

    /**
     * This endpoint allows you to create a nested Comment reply to an existing Epic Comment.
     * Create Epic Comment Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param commentPublicId The ID of the parent Epic Comment.
     * @param createCommentComment
     */
    public createEpicCommentCommentWithHttpInfo(epicPublicId: number, commentPublicId: number, createCommentComment: CreateCommentComment, _options?: Configuration): Observable<HttpInfo<ThreadedComment>> {
        const requestContextPromise = this.requestFactory.createEpicCommentComment(epicPublicId, commentPublicId, createCommentComment, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createEpicCommentCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint allows you to create a nested Comment reply to an existing Epic Comment.
     * Create Epic Comment Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param commentPublicId The ID of the parent Epic Comment.
     * @param createCommentComment
     */
    public createEpicCommentComment(epicPublicId: number, commentPublicId: number, createCommentComment: CreateCommentComment, _options?: Configuration): Observable<ThreadedComment> {
        return this.createEpicCommentCommentWithHttpInfo(epicPublicId, commentPublicId, createCommentComment, _options).pipe(map((apiResponse: HttpInfo<ThreadedComment>) => apiResponse.data));
    }

    /**
     * Create Group
     * @param createGroup
     */
    public createGroupWithHttpInfo(createGroup: CreateGroup, _options?: Configuration): Observable<HttpInfo<Group>> {
        const requestContextPromise = this.requestFactory.createGroup(createGroup, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Group
     * @param createGroup
     */
    public createGroup(createGroup: CreateGroup, _options?: Configuration): Observable<Group> {
        return this.createGroupWithHttpInfo(createGroup, _options).pipe(map((apiResponse: HttpInfo<Group>) => apiResponse.data));
    }

    /**
     * Create Iteration
     * @param createIteration
     */
    public createIterationWithHttpInfo(createIteration: CreateIteration, _options?: Configuration): Observable<HttpInfo<Iteration>> {
        const requestContextPromise = this.requestFactory.createIteration(createIteration, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createIterationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Iteration
     * @param createIteration
     */
    public createIteration(createIteration: CreateIteration, _options?: Configuration): Observable<Iteration> {
        return this.createIterationWithHttpInfo(createIteration, _options).pipe(map((apiResponse: HttpInfo<Iteration>) => apiResponse.data));
    }

    /**
     * Create Label allows you to create a new Label in Shortcut.
     * Create Label
     * @param createLabelParams Request parameters for creating a Label on a Shortcut Story.
     */
    public createLabelWithHttpInfo(createLabelParams: CreateLabelParams, _options?: Configuration): Observable<HttpInfo<Label>> {
        const requestContextPromise = this.requestFactory.createLabel(createLabelParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLabelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Label allows you to create a new Label in Shortcut.
     * Create Label
     * @param createLabelParams Request parameters for creating a Label on a Shortcut Story.
     */
    public createLabel(createLabelParams: CreateLabelParams, _options?: Configuration): Observable<Label> {
        return this.createLabelWithHttpInfo(createLabelParams, _options).pipe(map((apiResponse: HttpInfo<Label>) => apiResponse.data));
    }

    /**
     * Create Linked File allows you to create a new Linked File in Shortcut.
     * Create Linked File
     * @param createLinkedFile
     */
    public createLinkedFileWithHttpInfo(createLinkedFile: CreateLinkedFile, _options?: Configuration): Observable<HttpInfo<LinkedFile>> {
        const requestContextPromise = this.requestFactory.createLinkedFile(createLinkedFile, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLinkedFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Linked File allows you to create a new Linked File in Shortcut.
     * Create Linked File
     * @param createLinkedFile
     */
    public createLinkedFile(createLinkedFile: CreateLinkedFile, _options?: Configuration): Observable<LinkedFile> {
        return this.createLinkedFileWithHttpInfo(createLinkedFile, _options).pipe(map((apiResponse: HttpInfo<LinkedFile>) => apiResponse.data));
    }

    /**
     * (Deprecated: Use \'Create Objective\') Create Milestone allows you to create a new Milestone in Shortcut.
     * Create Milestone
     * @param createMilestone
     */
    public createMilestoneWithHttpInfo(createMilestone: CreateMilestone, _options?: Configuration): Observable<HttpInfo<Milestone>> {
        const requestContextPromise = this.requestFactory.createMilestone(createMilestone, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createMilestoneWithHttpInfo(rsp)));
            }));
    }

    /**
     * (Deprecated: Use \'Create Objective\') Create Milestone allows you to create a new Milestone in Shortcut.
     * Create Milestone
     * @param createMilestone
     */
    public createMilestone(createMilestone: CreateMilestone, _options?: Configuration): Observable<Milestone> {
        return this.createMilestoneWithHttpInfo(createMilestone, _options).pipe(map((apiResponse: HttpInfo<Milestone>) => apiResponse.data));
    }

    /**
     * Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as [Create Story](https://developer.shortcut.com/api/rest/v3#create-story).
     * Create Multiple Stories
     * @param createStories
     */
    public createMultipleStoriesWithHttpInfo(createStories: CreateStories, _options?: Configuration): Observable<HttpInfo<Array<StorySlim>>> {
        const requestContextPromise = this.requestFactory.createMultipleStories(createStories, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createMultipleStoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as [Create Story](https://developer.shortcut.com/api/rest/v3#create-story).
     * Create Multiple Stories
     * @param createStories
     */
    public createMultipleStories(createStories: CreateStories, _options?: Configuration): Observable<Array<StorySlim>> {
        return this.createMultipleStoriesWithHttpInfo(createStories, _options).pipe(map((apiResponse: HttpInfo<Array<StorySlim>>) => apiResponse.data));
    }

    /**
     * Create Objective allows you to create a new Objective in Shortcut.
     * Create Objective
     * @param createObjective
     */
    public createObjectiveWithHttpInfo(createObjective: CreateObjective, _options?: Configuration): Observable<HttpInfo<Objective>> {
        const requestContextPromise = this.requestFactory.createObjective(createObjective, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createObjectiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Objective allows you to create a new Objective in Shortcut.
     * Create Objective
     * @param createObjective
     */
    public createObjective(createObjective: CreateObjective, _options?: Configuration): Observable<Objective> {
        return this.createObjectiveWithHttpInfo(createObjective, _options).pipe(map((apiResponse: HttpInfo<Objective>) => apiResponse.data));
    }

    /**
     * Create Project is used to create a new Shortcut Project.
     * Create Project
     * @param createProject
     */
    public createProjectWithHttpInfo(createProject: CreateProject, _options?: Configuration): Observable<HttpInfo<Project>> {
        const requestContextPromise = this.requestFactory.createProject(createProject, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Project is used to create a new Shortcut Project.
     * Create Project
     * @param createProject
     */
    public createProject(createProject: CreateProject, _options?: Configuration): Observable<Project> {
        return this.createProjectWithHttpInfo(createProject, _options).pipe(map((apiResponse: HttpInfo<Project>) => apiResponse.data));
    }

    /**
     * Create Story is used to add a new story to your Shortcut Workspace.     This endpoint requires that either **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are specified. The workflow_state_id has been marked as required and is the recommended field to specify because we are in the process of sunsetting Projects in Shortcut.
     * Create Story
     * @param createStoryParams Request parameters for creating a story.
     */
    public createStoryWithHttpInfo(createStoryParams: CreateStoryParams, _options?: Configuration): Observable<HttpInfo<Story>> {
        const requestContextPromise = this.requestFactory.createStory(createStoryParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createStoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Story is used to add a new story to your Shortcut Workspace.     This endpoint requires that either **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are specified. The workflow_state_id has been marked as required and is the recommended field to specify because we are in the process of sunsetting Projects in Shortcut.
     * Create Story
     * @param createStoryParams Request parameters for creating a story.
     */
    public createStory(createStoryParams: CreateStoryParams, _options?: Configuration): Observable<Story> {
        return this.createStoryWithHttpInfo(createStoryParams, _options).pipe(map((apiResponse: HttpInfo<Story>) => apiResponse.data));
    }

    /**
     * Create Comment allows you to create a Comment on any Story.
     * Create Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param createStoryComment
     */
    public createStoryCommentWithHttpInfo(storyPublicId: number, createStoryComment: CreateStoryComment, _options?: Configuration): Observable<HttpInfo<StoryComment>> {
        const requestContextPromise = this.requestFactory.createStoryComment(storyPublicId, createStoryComment, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createStoryCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Comment allows you to create a Comment on any Story.
     * Create Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param createStoryComment
     */
    public createStoryComment(storyPublicId: number, createStoryComment: CreateStoryComment, _options?: Configuration): Observable<StoryComment> {
        return this.createStoryCommentWithHttpInfo(storyPublicId, createStoryComment, _options).pipe(map((apiResponse: HttpInfo<StoryComment>) => apiResponse.data));
    }

    /**
     * Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.
     * Create Story From Template
     * @param createStoryFromTemplateParams Request parameters for creating a story from a story template. These parameters are merged with the values derived from the template.
     */
    public createStoryFromTemplateWithHttpInfo(createStoryFromTemplateParams: CreateStoryFromTemplateParams, _options?: Configuration): Observable<HttpInfo<Story>> {
        const requestContextPromise = this.requestFactory.createStoryFromTemplate(createStoryFromTemplateParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createStoryFromTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.
     * Create Story From Template
     * @param createStoryFromTemplateParams Request parameters for creating a story from a story template. These parameters are merged with the values derived from the template.
     */
    public createStoryFromTemplate(createStoryFromTemplateParams: CreateStoryFromTemplateParams, _options?: Configuration): Observable<Story> {
        return this.createStoryFromTemplateWithHttpInfo(createStoryFromTemplateParams, _options).pipe(map((apiResponse: HttpInfo<Story>) => apiResponse.data));
    }

    /**
     * Story Links (called Story Relationships in the UI) allow you create semantic relationships between two stories. The parameters read like an active voice grammatical sentence:  subject -> verb -> object.  The subject story acts on the object Story; the object story is the direct object of the sentence.  The subject story \"blocks\", \"duplicates\", or \"relates to\" the object story.  Examples: - \"story 5 blocks story 6” -- story 6 is now \"blocked\" until story 5 is moved to a Done workflow state. - \"story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be archived). - \"story 7 relates to story 3”
     * Create Story Link
     * @param createStoryLink
     */
    public createStoryLinkWithHttpInfo(createStoryLink: CreateStoryLink, _options?: Configuration): Observable<HttpInfo<StoryLink>> {
        const requestContextPromise = this.requestFactory.createStoryLink(createStoryLink, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createStoryLinkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Story Links (called Story Relationships in the UI) allow you create semantic relationships between two stories. The parameters read like an active voice grammatical sentence:  subject -> verb -> object.  The subject story acts on the object Story; the object story is the direct object of the sentence.  The subject story \"blocks\", \"duplicates\", or \"relates to\" the object story.  Examples: - \"story 5 blocks story 6” -- story 6 is now \"blocked\" until story 5 is moved to a Done workflow state. - \"story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be archived). - \"story 7 relates to story 3”
     * Create Story Link
     * @param createStoryLink
     */
    public createStoryLink(createStoryLink: CreateStoryLink, _options?: Configuration): Observable<StoryLink> {
        return this.createStoryLinkWithHttpInfo(createStoryLink, _options).pipe(map((apiResponse: HttpInfo<StoryLink>) => apiResponse.data));
    }

    /**
     * Create a reaction to a story comment.
     * Create Story Reaction
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment.
     * @param createOrDeleteStoryReaction
     */
    public createStoryReactionWithHttpInfo(storyPublicId: number, commentPublicId: number, createOrDeleteStoryReaction: CreateOrDeleteStoryReaction, _options?: Configuration): Observable<HttpInfo<Array<StoryReaction>>> {
        const requestContextPromise = this.requestFactory.createStoryReaction(storyPublicId, commentPublicId, createOrDeleteStoryReaction, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createStoryReactionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a reaction to a story comment.
     * Create Story Reaction
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment.
     * @param createOrDeleteStoryReaction
     */
    public createStoryReaction(storyPublicId: number, commentPublicId: number, createOrDeleteStoryReaction: CreateOrDeleteStoryReaction, _options?: Configuration): Observable<Array<StoryReaction>> {
        return this.createStoryReactionWithHttpInfo(storyPublicId, commentPublicId, createOrDeleteStoryReaction, _options).pipe(map((apiResponse: HttpInfo<Array<StoryReaction>>) => apiResponse.data));
    }

    /**
     * Create Task is used to create a new task in a Story.
     * Create Task
     * @param storyPublicId The ID of the Story that the Task will be in.
     * @param createTask
     */
    public createTaskWithHttpInfo(storyPublicId: number, createTask: CreateTask, _options?: Configuration): Observable<HttpInfo<Task>> {
        const requestContextPromise = this.requestFactory.createTask(storyPublicId, createTask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTaskWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Task is used to create a new task in a Story.
     * Create Task
     * @param storyPublicId The ID of the Story that the Task will be in.
     * @param createTask
     */
    public createTask(storyPublicId: number, createTask: CreateTask, _options?: Configuration): Observable<Task> {
        return this.createTaskWithHttpInfo(storyPublicId, createTask, _options).pipe(map((apiResponse: HttpInfo<Task>) => apiResponse.data));
    }

    /**
     * Delete Category can be used to delete any Category.
     * Delete Category
     * @param categoryPublicId The unique ID of the Category.
     */
    public deleteCategoryWithHttpInfo(categoryPublicId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCategory(categoryPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Category can be used to delete any Category.
     * Delete Category
     * @param categoryPublicId The unique ID of the Category.
     */
    public deleteCategory(categoryPublicId: number, _options?: Configuration): Observable<void> {
        return this.deleteCategoryWithHttpInfo(categoryPublicId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete Custom Field
     * @param customFieldPublicId The unique ID of the CustomField.
     */
    public deleteCustomFieldWithHttpInfo(customFieldPublicId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCustomField(customFieldPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Custom Field
     * @param customFieldPublicId The unique ID of the CustomField.
     */
    public deleteCustomField(customFieldPublicId: string, _options?: Configuration): Observable<void> {
        return this.deleteCustomFieldWithHttpInfo(customFieldPublicId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete Entity Template
     * @param entityTemplatePublicId The unique ID of the entity template.
     */
    public deleteEntityTemplateWithHttpInfo(entityTemplatePublicId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteEntityTemplate(entityTemplatePublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEntityTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Entity Template
     * @param entityTemplatePublicId The unique ID of the entity template.
     */
    public deleteEntityTemplate(entityTemplatePublicId: string, _options?: Configuration): Observable<void> {
        return this.deleteEntityTemplateWithHttpInfo(entityTemplatePublicId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.
     * Delete Epic
     * @param epicPublicId The unique ID of the Epic.
     */
    public deleteEpicWithHttpInfo(epicPublicId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteEpic(epicPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEpicWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.
     * Delete Epic
     * @param epicPublicId The unique ID of the Epic.
     */
    public deleteEpic(epicPublicId: number, _options?: Configuration): Observable<void> {
        return this.deleteEpicWithHttpInfo(epicPublicId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This endpoint allows you to delete a Comment from an Epic.
     * Delete Epic Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param commentPublicId The ID of the Comment.
     */
    public deleteEpicCommentWithHttpInfo(epicPublicId: number, commentPublicId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteEpicComment(epicPublicId, commentPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEpicCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint allows you to delete a Comment from an Epic.
     * Delete Epic Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param commentPublicId The ID of the Comment.
     */
    public deleteEpicComment(epicPublicId: number, commentPublicId: number, _options?: Configuration): Observable<void> {
        return this.deleteEpicCommentWithHttpInfo(epicPublicId, commentPublicId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete File deletes a previously uploaded file.
     * Delete File
     * @param filePublicId The File’s unique ID.
     */
    public deleteFileWithHttpInfo(filePublicId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteFile(filePublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete File deletes a previously uploaded file.
     * Delete File
     * @param filePublicId The File’s unique ID.
     */
    public deleteFile(filePublicId: number, _options?: Configuration): Observable<void> {
        return this.deleteFileWithHttpInfo(filePublicId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete Iteration
     * @param iterationPublicId The unique ID of the Iteration.
     */
    public deleteIterationWithHttpInfo(iterationPublicId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteIteration(iterationPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteIterationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Iteration
     * @param iterationPublicId The unique ID of the Iteration.
     */
    public deleteIteration(iterationPublicId: number, _options?: Configuration): Observable<void> {
        return this.deleteIterationWithHttpInfo(iterationPublicId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete Label can be used to delete any Label.
     * Delete Label
     * @param labelPublicId The unique ID of the Label.
     */
    public deleteLabelWithHttpInfo(labelPublicId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteLabel(labelPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteLabelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Label can be used to delete any Label.
     * Delete Label
     * @param labelPublicId The unique ID of the Label.
     */
    public deleteLabel(labelPublicId: number, _options?: Configuration): Observable<void> {
        return this.deleteLabelWithHttpInfo(labelPublicId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete Linked File can be used to delete any previously attached Linked-File.
     * Delete Linked File
     * @param linkedFilePublicId The unique identifier of the linked file.
     */
    public deleteLinkedFileWithHttpInfo(linkedFilePublicId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteLinkedFile(linkedFilePublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteLinkedFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Linked File can be used to delete any previously attached Linked-File.
     * Delete Linked File
     * @param linkedFilePublicId The unique identifier of the linked file.
     */
    public deleteLinkedFile(linkedFilePublicId: number, _options?: Configuration): Observable<void> {
        return this.deleteLinkedFileWithHttpInfo(linkedFilePublicId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * (Deprecated: Use \'Delete Objective\') Delete Milestone can be used to delete any Milestone.
     * Delete Milestone
     * @param milestonePublicId The ID of the Milestone.
     */
    public deleteMilestoneWithHttpInfo(milestonePublicId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteMilestone(milestonePublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteMilestoneWithHttpInfo(rsp)));
            }));
    }

    /**
     * (Deprecated: Use \'Delete Objective\') Delete Milestone can be used to delete any Milestone.
     * Delete Milestone
     * @param milestonePublicId The ID of the Milestone.
     */
    public deleteMilestone(milestonePublicId: number, _options?: Configuration): Observable<void> {
        return this.deleteMilestoneWithHttpInfo(milestonePublicId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete Multiple Stories allows you to delete multiple archived stories at once.
     * Delete Multiple Stories
     * @param deleteStories
     */
    public deleteMultipleStoriesWithHttpInfo(deleteStories: DeleteStories, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteMultipleStories(deleteStories, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteMultipleStoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Multiple Stories allows you to delete multiple archived stories at once.
     * Delete Multiple Stories
     * @param deleteStories
     */
    public deleteMultipleStories(deleteStories: DeleteStories, _options?: Configuration): Observable<void> {
        return this.deleteMultipleStoriesWithHttpInfo(deleteStories, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete Objective can be used to delete any Objective.
     * Delete Objective
     * @param objectivePublicId The ID of the Objective.
     */
    public deleteObjectiveWithHttpInfo(objectivePublicId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteObjective(objectivePublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteObjectiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Objective can be used to delete any Objective.
     * Delete Objective
     * @param objectivePublicId The ID of the Objective.
     */
    public deleteObjective(objectivePublicId: number, _options?: Configuration): Observable<void> {
        return this.deleteObjectiveWithHttpInfo(objectivePublicId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.
     * Delete Project
     * @param projectPublicId The unique ID of the Project.
     */
    public deleteProjectWithHttpInfo(projectPublicId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteProject(projectPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.
     * Delete Project
     * @param projectPublicId The unique ID of the Project.
     */
    public deleteProject(projectPublicId: number, _options?: Configuration): Observable<void> {
        return this.deleteProjectWithHttpInfo(projectPublicId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete Story can be used to delete any Story.
     * Delete Story
     * @param storyPublicId The ID of the Story.
     */
    public deleteStoryWithHttpInfo(storyPublicId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteStory(storyPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteStoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Story can be used to delete any Story.
     * Delete Story
     * @param storyPublicId The ID of the Story.
     */
    public deleteStory(storyPublicId: number, _options?: Configuration): Observable<void> {
        return this.deleteStoryWithHttpInfo(storyPublicId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a Comment from any story.
     * Delete Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment.
     */
    public deleteStoryCommentWithHttpInfo(storyPublicId: number, commentPublicId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteStoryComment(storyPublicId, commentPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteStoryCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a Comment from any story.
     * Delete Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment.
     */
    public deleteStoryComment(storyPublicId: number, commentPublicId: number, _options?: Configuration): Observable<void> {
        return this.deleteStoryCommentWithHttpInfo(storyPublicId, commentPublicId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Removes the relationship between the stories for the given Story Link.
     * Delete Story Link
     * @param storyLinkPublicId The unique ID of the Story Link.
     */
    public deleteStoryLinkWithHttpInfo(storyLinkPublicId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteStoryLink(storyLinkPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteStoryLinkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes the relationship between the stories for the given Story Link.
     * Delete Story Link
     * @param storyLinkPublicId The unique ID of the Story Link.
     */
    public deleteStoryLink(storyLinkPublicId: number, _options?: Configuration): Observable<void> {
        return this.deleteStoryLinkWithHttpInfo(storyLinkPublicId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a reaction from any story comment.
     * Delete Story Reaction
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment.
     * @param createOrDeleteStoryReaction
     */
    public deleteStoryReactionWithHttpInfo(storyPublicId: number, commentPublicId: number, createOrDeleteStoryReaction: CreateOrDeleteStoryReaction, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteStoryReaction(storyPublicId, commentPublicId, createOrDeleteStoryReaction, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteStoryReactionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a reaction from any story comment.
     * Delete Story Reaction
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment.
     * @param createOrDeleteStoryReaction
     */
    public deleteStoryReaction(storyPublicId: number, commentPublicId: number, createOrDeleteStoryReaction: CreateOrDeleteStoryReaction, _options?: Configuration): Observable<void> {
        return this.deleteStoryReactionWithHttpInfo(storyPublicId, commentPublicId, createOrDeleteStoryReaction, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete Task can be used to delete any previously created Task on a Story.
     * Delete Task
     * @param storyPublicId The unique ID of the Story this Task is associated with.
     * @param taskPublicId The unique ID of the Task.
     */
    public deleteTaskWithHttpInfo(storyPublicId: number, taskPublicId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteTask(storyPublicId, taskPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTaskWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Task can be used to delete any previously created Task on a Story.
     * Delete Task
     * @param storyPublicId The unique ID of the Story this Task is associated with.
     * @param taskPublicId The unique ID of the Task.
     */
    public deleteTask(storyPublicId: number, taskPublicId: number, _options?: Configuration): Observable<void> {
        return this.deleteTaskWithHttpInfo(storyPublicId, taskPublicId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Disables Iterations for the current workspace
     * Disable Iterations
     */
    public disableIterationsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.disableIterations(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.disableIterationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Disables Iterations for the current workspace
     * Disable Iterations
     */
    public disableIterations(_options?: Configuration): Observable<void> {
        return this.disableIterationsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Disables the Story Template feature for the Workspace.
     * Disable Story Templates
     */
    public disableStoryTemplatesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.disableStoryTemplates(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.disableStoryTemplatesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Disables the Story Template feature for the Workspace.
     * Disable Story Templates
     */
    public disableStoryTemplates(_options?: Configuration): Observable<void> {
        return this.disableStoryTemplatesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Enables Iterations for the current workspace
     * Enable Iterations
     */
    public enableIterationsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.enableIterations(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.enableIterationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Enables Iterations for the current workspace
     * Enable Iterations
     */
    public enableIterations(_options?: Configuration): Observable<void> {
        return this.enableIterationsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Enables the Story Template feature for the Workspace.
     * Enable Story Templates
     */
    public enableStoryTemplatesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.enableStoryTemplates(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.enableStoryTemplatesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Enables the Story Template feature for the Workspace.
     * Enable Story Templates
     */
    public enableStoryTemplates(_options?: Configuration): Observable<void> {
        return this.enableStoryTemplatesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get Category returns information about the selected Category.
     * Get Category
     * @param categoryPublicId The unique ID of the Category.
     */
    public getCategoryWithHttpInfo(categoryPublicId: number, _options?: Configuration): Observable<HttpInfo<Category>> {
        const requestContextPromise = this.requestFactory.getCategory(categoryPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Category returns information about the selected Category.
     * Get Category
     * @param categoryPublicId The unique ID of the Category.
     */
    public getCategory(categoryPublicId: number, _options?: Configuration): Observable<Category> {
        return this.getCategoryWithHttpInfo(categoryPublicId, _options).pipe(map((apiResponse: HttpInfo<Category>) => apiResponse.data));
    }

    /**
     * Returns information about the authenticated member.
     * Get Current Member Info
     */
    public getCurrentMemberInfoWithHttpInfo(_options?: Configuration): Observable<HttpInfo<MemberInfo>> {
        const requestContextPromise = this.requestFactory.getCurrentMemberInfo(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCurrentMemberInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns information about the authenticated member.
     * Get Current Member Info
     */
    public getCurrentMemberInfo(_options?: Configuration): Observable<MemberInfo> {
        return this.getCurrentMemberInfoWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<MemberInfo>) => apiResponse.data));
    }

    /**
     * Get Custom Field
     * @param customFieldPublicId The unique ID of the CustomField.
     */
    public getCustomFieldWithHttpInfo(customFieldPublicId: string, _options?: Configuration): Observable<HttpInfo<CustomField>> {
        const requestContextPromise = this.requestFactory.getCustomField(customFieldPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Custom Field
     * @param customFieldPublicId The unique ID of the CustomField.
     */
    public getCustomField(customFieldPublicId: string, _options?: Configuration): Observable<CustomField> {
        return this.getCustomFieldWithHttpInfo(customFieldPublicId, _options).pipe(map((apiResponse: HttpInfo<CustomField>) => apiResponse.data));
    }

    /**
     * Get Entity Template returns information about a given entity template.
     * Get Entity Template
     * @param entityTemplatePublicId The unique ID of the entity template.
     */
    public getEntityTemplateWithHttpInfo(entityTemplatePublicId: string, _options?: Configuration): Observable<HttpInfo<EntityTemplate>> {
        const requestContextPromise = this.requestFactory.getEntityTemplate(entityTemplatePublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEntityTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Entity Template returns information about a given entity template.
     * Get Entity Template
     * @param entityTemplatePublicId The unique ID of the entity template.
     */
    public getEntityTemplate(entityTemplatePublicId: string, _options?: Configuration): Observable<EntityTemplate> {
        return this.getEntityTemplateWithHttpInfo(entityTemplatePublicId, _options).pipe(map((apiResponse: HttpInfo<EntityTemplate>) => apiResponse.data));
    }

    /**
     * Get Epic returns information about the selected Epic.
     * Get Epic
     * @param epicPublicId The unique ID of the Epic.
     */
    public getEpicWithHttpInfo(epicPublicId: number, _options?: Configuration): Observable<HttpInfo<Epic>> {
        const requestContextPromise = this.requestFactory.getEpic(epicPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEpicWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Epic returns information about the selected Epic.
     * Get Epic
     * @param epicPublicId The unique ID of the Epic.
     */
    public getEpic(epicPublicId: number, _options?: Configuration): Observable<Epic> {
        return this.getEpicWithHttpInfo(epicPublicId, _options).pipe(map((apiResponse: HttpInfo<Epic>) => apiResponse.data));
    }

    /**
     * This endpoint returns information about the selected Epic Comment.
     * Get Epic Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param commentPublicId The ID of the Comment.
     */
    public getEpicCommentWithHttpInfo(epicPublicId: number, commentPublicId: number, _options?: Configuration): Observable<HttpInfo<ThreadedComment>> {
        const requestContextPromise = this.requestFactory.getEpicComment(epicPublicId, commentPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEpicCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint returns information about the selected Epic Comment.
     * Get Epic Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param commentPublicId The ID of the Comment.
     */
    public getEpicComment(epicPublicId: number, commentPublicId: number, _options?: Configuration): Observable<ThreadedComment> {
        return this.getEpicCommentWithHttpInfo(epicPublicId, commentPublicId, _options).pipe(map((apiResponse: HttpInfo<ThreadedComment>) => apiResponse.data));
    }

    /**
     * Returns the Epic Workflow for the Workspace.
     * Get Epic Workflow
     */
    public getEpicWorkflowWithHttpInfo(_options?: Configuration): Observable<HttpInfo<EpicWorkflow>> {
        const requestContextPromise = this.requestFactory.getEpicWorkflow(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEpicWorkflowWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the Epic Workflow for the Workspace.
     * Get Epic Workflow
     */
    public getEpicWorkflow(_options?: Configuration): Observable<EpicWorkflow> {
        return this.getEpicWorkflowWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<EpicWorkflow>) => apiResponse.data));
    }

    /**
     * Get Stories which have a given External Link associated with them.
     * Get External Link Stories
     * @param externalLink The external link associated with one or more stories.
     */
    public getExternalLinkStoriesWithHttpInfo(externalLink: string, _options?: Configuration): Observable<HttpInfo<Array<StorySlim>>> {
        const requestContextPromise = this.requestFactory.getExternalLinkStories(externalLink, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExternalLinkStoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Stories which have a given External Link associated with them.
     * Get External Link Stories
     * @param externalLink The external link associated with one or more stories.
     */
    public getExternalLinkStories(externalLink: string, _options?: Configuration): Observable<Array<StorySlim>> {
        return this.getExternalLinkStoriesWithHttpInfo(externalLink, _options).pipe(map((apiResponse: HttpInfo<Array<StorySlim>>) => apiResponse.data));
    }

    /**
     * Get File returns information about the selected UploadedFile.
     * Get File
     * @param filePublicId The File’s unique ID.
     */
    public getFileWithHttpInfo(filePublicId: number, _options?: Configuration): Observable<HttpInfo<UploadedFile>> {
        const requestContextPromise = this.requestFactory.getFile(filePublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get File returns information about the selected UploadedFile.
     * Get File
     * @param filePublicId The File’s unique ID.
     */
    public getFile(filePublicId: number, _options?: Configuration): Observable<UploadedFile> {
        return this.getFileWithHttpInfo(filePublicId, _options).pipe(map((apiResponse: HttpInfo<UploadedFile>) => apiResponse.data));
    }

    /**
     * Get Group
     * @param groupPublicId The unique ID of the Group.
     */
    public getGroupWithHttpInfo(groupPublicId: string, _options?: Configuration): Observable<HttpInfo<Group>> {
        const requestContextPromise = this.requestFactory.getGroup(groupPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Group
     * @param groupPublicId The unique ID of the Group.
     */
    public getGroup(groupPublicId: string, _options?: Configuration): Observable<Group> {
        return this.getGroupWithHttpInfo(groupPublicId, _options).pipe(map((apiResponse: HttpInfo<Group>) => apiResponse.data));
    }

    /**
     * Get Iteration
     * @param iterationPublicId The unique ID of the Iteration.
     */
    public getIterationWithHttpInfo(iterationPublicId: number, _options?: Configuration): Observable<HttpInfo<Iteration>> {
        const requestContextPromise = this.requestFactory.getIteration(iterationPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getIterationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Iteration
     * @param iterationPublicId The unique ID of the Iteration.
     */
    public getIteration(iterationPublicId: number, _options?: Configuration): Observable<Iteration> {
        return this.getIterationWithHttpInfo(iterationPublicId, _options).pipe(map((apiResponse: HttpInfo<Iteration>) => apiResponse.data));
    }

    /**
     * Get Key Result returns information about a chosen Key Result.
     * Get Key Result
     * @param keyResultPublicId The ID of the Key Result.
     */
    public getKeyResultWithHttpInfo(keyResultPublicId: string, _options?: Configuration): Observable<HttpInfo<KeyResult>> {
        const requestContextPromise = this.requestFactory.getKeyResult(keyResultPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getKeyResultWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Key Result returns information about a chosen Key Result.
     * Get Key Result
     * @param keyResultPublicId The ID of the Key Result.
     */
    public getKeyResult(keyResultPublicId: string, _options?: Configuration): Observable<KeyResult> {
        return this.getKeyResultWithHttpInfo(keyResultPublicId, _options).pipe(map((apiResponse: HttpInfo<KeyResult>) => apiResponse.data));
    }

    /**
     * Get Label returns information about the selected Label.
     * Get Label
     * @param labelPublicId The unique ID of the Label.
     */
    public getLabelWithHttpInfo(labelPublicId: number, _options?: Configuration): Observable<HttpInfo<Label>> {
        const requestContextPromise = this.requestFactory.getLabel(labelPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLabelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Label returns information about the selected Label.
     * Get Label
     * @param labelPublicId The unique ID of the Label.
     */
    public getLabel(labelPublicId: number, _options?: Configuration): Observable<Label> {
        return this.getLabelWithHttpInfo(labelPublicId, _options).pipe(map((apiResponse: HttpInfo<Label>) => apiResponse.data));
    }

    /**
     * Get File returns information about the selected Linked File.
     * Get Linked File
     * @param linkedFilePublicId The unique identifier of the linked file.
     */
    public getLinkedFileWithHttpInfo(linkedFilePublicId: number, _options?: Configuration): Observable<HttpInfo<LinkedFile>> {
        const requestContextPromise = this.requestFactory.getLinkedFile(linkedFilePublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLinkedFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get File returns information about the selected Linked File.
     * Get Linked File
     * @param linkedFilePublicId The unique identifier of the linked file.
     */
    public getLinkedFile(linkedFilePublicId: number, _options?: Configuration): Observable<LinkedFile> {
        return this.getLinkedFileWithHttpInfo(linkedFilePublicId, _options).pipe(map((apiResponse: HttpInfo<LinkedFile>) => apiResponse.data));
    }

    /**
     * Returns information about a Member.
     * Get Member
     * @param memberPublicId The Member\&#39;s unique ID.
     * @param [orgPublicId] The unique ID of the Organization to limit the lookup to.
     */
    public getMemberWithHttpInfo(memberPublicId: string, orgPublicId?: string, _options?: Configuration): Observable<HttpInfo<Member>> {
        const requestContextPromise = this.requestFactory.getMember(memberPublicId, orgPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMemberWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns information about a Member.
     * Get Member
     * @param memberPublicId The Member\&#39;s unique ID.
     * @param [orgPublicId] The unique ID of the Organization to limit the lookup to.
     */
    public getMember(memberPublicId: string, orgPublicId?: string, _options?: Configuration): Observable<Member> {
        return this.getMemberWithHttpInfo(memberPublicId, orgPublicId, _options).pipe(map((apiResponse: HttpInfo<Member>) => apiResponse.data));
    }

    /**
     * (Deprecated: Use \'Get Objective\') Get Milestone returns information about a chosen Milestone.
     * Get Milestone
     * @param milestonePublicId The ID of the Milestone.
     */
    public getMilestoneWithHttpInfo(milestonePublicId: number, _options?: Configuration): Observable<HttpInfo<Milestone>> {
        const requestContextPromise = this.requestFactory.getMilestone(milestonePublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMilestoneWithHttpInfo(rsp)));
            }));
    }

    /**
     * (Deprecated: Use \'Get Objective\') Get Milestone returns information about a chosen Milestone.
     * Get Milestone
     * @param milestonePublicId The ID of the Milestone.
     */
    public getMilestone(milestonePublicId: number, _options?: Configuration): Observable<Milestone> {
        return this.getMilestoneWithHttpInfo(milestonePublicId, _options).pipe(map((apiResponse: HttpInfo<Milestone>) => apiResponse.data));
    }

    /**
     * Get Objective returns information about a chosen Objective.
     * Get Objective
     * @param objectivePublicId The ID of the Objective.
     */
    public getObjectiveWithHttpInfo(objectivePublicId: number, _options?: Configuration): Observable<HttpInfo<Objective>> {
        const requestContextPromise = this.requestFactory.getObjective(objectivePublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getObjectiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Objective returns information about a chosen Objective.
     * Get Objective
     * @param objectivePublicId The ID of the Objective.
     */
    public getObjective(objectivePublicId: number, _options?: Configuration): Observable<Objective> {
        return this.getObjectiveWithHttpInfo(objectivePublicId, _options).pipe(map((apiResponse: HttpInfo<Objective>) => apiResponse.data));
    }

    /**
     * Get Project returns information about the selected Project.
     * Get Project
     * @param projectPublicId The unique ID of the Project.
     */
    public getProjectWithHttpInfo(projectPublicId: number, _options?: Configuration): Observable<HttpInfo<Project>> {
        const requestContextPromise = this.requestFactory.getProject(projectPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Project returns information about the selected Project.
     * Get Project
     * @param projectPublicId The unique ID of the Project.
     */
    public getProject(projectPublicId: number, _options?: Configuration): Observable<Project> {
        return this.getProjectWithHttpInfo(projectPublicId, _options).pipe(map((apiResponse: HttpInfo<Project>) => apiResponse.data));
    }

    /**
     * Get Repository returns information about the selected Repository.
     * Get Repository
     * @param repoPublicId The unique ID of the Repository.
     */
    public getRepositoryWithHttpInfo(repoPublicId: number, _options?: Configuration): Observable<HttpInfo<Repository>> {
        const requestContextPromise = this.requestFactory.getRepository(repoPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRepositoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Repository returns information about the selected Repository.
     * Get Repository
     * @param repoPublicId The unique ID of the Repository.
     */
    public getRepository(repoPublicId: number, _options?: Configuration): Observable<Repository> {
        return this.getRepositoryWithHttpInfo(repoPublicId, _options).pipe(map((apiResponse: HttpInfo<Repository>) => apiResponse.data));
    }

    /**
     * Get Story returns information about a chosen Story.
     * Get Story
     * @param storyPublicId The ID of the Story.
     */
    public getStoryWithHttpInfo(storyPublicId: number, _options?: Configuration): Observable<HttpInfo<Story>> {
        const requestContextPromise = this.requestFactory.getStory(storyPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Story returns information about a chosen Story.
     * Get Story
     * @param storyPublicId The ID of the Story.
     */
    public getStory(storyPublicId: number, _options?: Configuration): Observable<Story> {
        return this.getStoryWithHttpInfo(storyPublicId, _options).pipe(map((apiResponse: HttpInfo<Story>) => apiResponse.data));
    }

    /**
     * Get Comment is used to get Comment information.
     * Get Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment.
     */
    public getStoryCommentWithHttpInfo(storyPublicId: number, commentPublicId: number, _options?: Configuration): Observable<HttpInfo<StoryComment>> {
        const requestContextPromise = this.requestFactory.getStoryComment(storyPublicId, commentPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStoryCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Comment is used to get Comment information.
     * Get Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment.
     */
    public getStoryComment(storyPublicId: number, commentPublicId: number, _options?: Configuration): Observable<StoryComment> {
        return this.getStoryCommentWithHttpInfo(storyPublicId, commentPublicId, _options).pipe(map((apiResponse: HttpInfo<StoryComment>) => apiResponse.data));
    }

    /**
     * Returns the stories and their relationship for the given Story Link.
     * Get Story Link
     * @param storyLinkPublicId The unique ID of the Story Link.
     */
    public getStoryLinkWithHttpInfo(storyLinkPublicId: number, _options?: Configuration): Observable<HttpInfo<StoryLink>> {
        const requestContextPromise = this.requestFactory.getStoryLink(storyLinkPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStoryLinkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the stories and their relationship for the given Story Link.
     * Get Story Link
     * @param storyLinkPublicId The unique ID of the Story Link.
     */
    public getStoryLink(storyLinkPublicId: number, _options?: Configuration): Observable<StoryLink> {
        return this.getStoryLinkWithHttpInfo(storyLinkPublicId, _options).pipe(map((apiResponse: HttpInfo<StoryLink>) => apiResponse.data));
    }

    /**
     * Returns information about a chosen Task.
     * Get Task
     * @param storyPublicId The unique ID of the Story this Task is associated with.
     * @param taskPublicId The unique ID of the Task.
     */
    public getTaskWithHttpInfo(storyPublicId: number, taskPublicId: number, _options?: Configuration): Observable<HttpInfo<Task>> {
        const requestContextPromise = this.requestFactory.getTask(storyPublicId, taskPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTaskWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns information about a chosen Task.
     * Get Task
     * @param storyPublicId The unique ID of the Story this Task is associated with.
     * @param taskPublicId The unique ID of the Task.
     */
    public getTask(storyPublicId: number, taskPublicId: number, _options?: Configuration): Observable<Task> {
        return this.getTaskWithHttpInfo(storyPublicId, taskPublicId, _options).pipe(map((apiResponse: HttpInfo<Task>) => apiResponse.data));
    }

    /**
     * Get Workflow returns information about a chosen Workflow.
     * Get Workflow
     * @param workflowPublicId The ID of the Workflow.
     */
    public getWorkflowWithHttpInfo(workflowPublicId: number, _options?: Configuration): Observable<HttpInfo<Workflow>> {
        const requestContextPromise = this.requestFactory.getWorkflow(workflowPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWorkflowWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Workflow returns information about a chosen Workflow.
     * Get Workflow
     * @param workflowPublicId The ID of the Workflow.
     */
    public getWorkflow(workflowPublicId: number, _options?: Configuration): Observable<Workflow> {
        return this.getWorkflowWithHttpInfo(workflowPublicId, _options).pipe(map((apiResponse: HttpInfo<Workflow>) => apiResponse.data));
    }

    /**
     * List Categories returns a list of all Categories and their attributes.
     * List Categories
     */
    public listCategoriesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Category>>> {
        const requestContextPromise = this.requestFactory.listCategories(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCategoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Categories returns a list of all Categories and their attributes.
     * List Categories
     */
    public listCategories(_options?: Configuration): Observable<Array<Category>> {
        return this.listCategoriesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Category>>) => apiResponse.data));
    }

    /**
     * List Category Milestones returns a list of all Milestones with the Category.
     * List Category Milestones
     * @param categoryPublicId The unique ID of the Category.
     */
    public listCategoryMilestonesWithHttpInfo(categoryPublicId: number, _options?: Configuration): Observable<HttpInfo<Array<Milestone>>> {
        const requestContextPromise = this.requestFactory.listCategoryMilestones(categoryPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCategoryMilestonesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Category Milestones returns a list of all Milestones with the Category.
     * List Category Milestones
     * @param categoryPublicId The unique ID of the Category.
     */
    public listCategoryMilestones(categoryPublicId: number, _options?: Configuration): Observable<Array<Milestone>> {
        return this.listCategoryMilestonesWithHttpInfo(categoryPublicId, _options).pipe(map((apiResponse: HttpInfo<Array<Milestone>>) => apiResponse.data));
    }

    /**
     * Returns a list of all Objectives with the Category.
     * List Category Objectives
     * @param categoryPublicId The unique ID of the Category.
     */
    public listCategoryObjectivesWithHttpInfo(categoryPublicId: number, _options?: Configuration): Observable<HttpInfo<Array<Milestone>>> {
        const requestContextPromise = this.requestFactory.listCategoryObjectives(categoryPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCategoryObjectivesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of all Objectives with the Category.
     * List Category Objectives
     * @param categoryPublicId The unique ID of the Category.
     */
    public listCategoryObjectives(categoryPublicId: number, _options?: Configuration): Observable<Array<Milestone>> {
        return this.listCategoryObjectivesWithHttpInfo(categoryPublicId, _options).pipe(map((apiResponse: HttpInfo<Array<Milestone>>) => apiResponse.data));
    }

    /**
     * List Custom Fields
     */
    public listCustomFieldsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<CustomField>>> {
        const requestContextPromise = this.requestFactory.listCustomFields(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCustomFieldsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Custom Fields
     */
    public listCustomFields(_options?: Configuration): Observable<Array<CustomField>> {
        return this.listCustomFieldsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<CustomField>>) => apiResponse.data));
    }

    /**
     * List all the entity templates for the Workspace.
     * List Entity Templates
     */
    public listEntityTemplatesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<EntityTemplate>>> {
        const requestContextPromise = this.requestFactory.listEntityTemplates(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEntityTemplatesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all the entity templates for the Workspace.
     * List Entity Templates
     */
    public listEntityTemplates(_options?: Configuration): Observable<Array<EntityTemplate>> {
        return this.listEntityTemplatesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<EntityTemplate>>) => apiResponse.data));
    }

    /**
     * Get a list of all Comments on an Epic.
     * List Epic Comments
     * @param epicPublicId The unique ID of the Epic.
     */
    public listEpicCommentsWithHttpInfo(epicPublicId: number, _options?: Configuration): Observable<HttpInfo<Array<ThreadedComment>>> {
        const requestContextPromise = this.requestFactory.listEpicComments(epicPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEpicCommentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all Comments on an Epic.
     * List Epic Comments
     * @param epicPublicId The unique ID of the Epic.
     */
    public listEpicComments(epicPublicId: number, _options?: Configuration): Observable<Array<ThreadedComment>> {
        return this.listEpicCommentsWithHttpInfo(epicPublicId, _options).pipe(map((apiResponse: HttpInfo<Array<ThreadedComment>>) => apiResponse.data));
    }

    /**
     * Get a list of all Stories in an Epic.
     * List Epic Stories
     * @param epicPublicId The unique ID of the Epic.
     * @param [includesDescription] A true/false boolean indicating whether to return Stories with their descriptions.
     */
    public listEpicStoriesWithHttpInfo(epicPublicId: number, includesDescription?: boolean, _options?: Configuration): Observable<HttpInfo<Array<StorySlim>>> {
        const requestContextPromise = this.requestFactory.listEpicStories(epicPublicId, includesDescription, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEpicStoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all Stories in an Epic.
     * List Epic Stories
     * @param epicPublicId The unique ID of the Epic.
     * @param [includesDescription] A true/false boolean indicating whether to return Stories with their descriptions.
     */
    public listEpicStories(epicPublicId: number, includesDescription?: boolean, _options?: Configuration): Observable<Array<StorySlim>> {
        return this.listEpicStoriesWithHttpInfo(epicPublicId, includesDescription, _options).pipe(map((apiResponse: HttpInfo<Array<StorySlim>>) => apiResponse.data));
    }

    /**
     * List Epics returns a list of all Epics and their attributes.
     * List Epics
     * @param [includesDescription] A true/false boolean indicating whether to return Epics with their descriptions.
     */
    public listEpicsWithHttpInfo(includesDescription?: boolean, _options?: Configuration): Observable<HttpInfo<Array<EpicSlim>>> {
        const requestContextPromise = this.requestFactory.listEpics(includesDescription, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listEpicsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Epics returns a list of all Epics and their attributes.
     * List Epics
     * @param [includesDescription] A true/false boolean indicating whether to return Epics with their descriptions.
     */
    public listEpics(includesDescription?: boolean, _options?: Configuration): Observable<Array<EpicSlim>> {
        return this.listEpicsWithHttpInfo(includesDescription, _options).pipe(map((apiResponse: HttpInfo<Array<EpicSlim>>) => apiResponse.data));
    }

    /**
     * List Files returns a list of all UploadedFiles in the workspace.
     * List Files
     */
    public listFilesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<UploadedFile>>> {
        const requestContextPromise = this.requestFactory.listFiles(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listFilesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Files returns a list of all UploadedFiles in the workspace.
     * List Files
     */
    public listFiles(_options?: Configuration): Observable<Array<UploadedFile>> {
        return this.listFilesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<UploadedFile>>) => apiResponse.data));
    }

    /**
     * List the Stories assigned to the Group. (By default, limited to 1,000).
     * List Group Stories
     * @param groupPublicId The unique ID of the Group.
     * @param [limit] The maximum number of results to return. (Defaults to 1000, max 1000)
     * @param [offset] The offset at which to begin returning results. (Defaults to 0)
     */
    public listGroupStoriesWithHttpInfo(groupPublicId: string, limit?: number, offset?: number, _options?: Configuration): Observable<HttpInfo<Array<StorySlim>>> {
        const requestContextPromise = this.requestFactory.listGroupStories(groupPublicId, limit, offset, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listGroupStoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List the Stories assigned to the Group. (By default, limited to 1,000).
     * List Group Stories
     * @param groupPublicId The unique ID of the Group.
     * @param [limit] The maximum number of results to return. (Defaults to 1000, max 1000)
     * @param [offset] The offset at which to begin returning results. (Defaults to 0)
     */
    public listGroupStories(groupPublicId: string, limit?: number, offset?: number, _options?: Configuration): Observable<Array<StorySlim>> {
        return this.listGroupStoriesWithHttpInfo(groupPublicId, limit, offset, _options).pipe(map((apiResponse: HttpInfo<Array<StorySlim>>) => apiResponse.data));
    }

    /**
     * A group in our API maps to a \"Team\" within the Shortcut Product. A Team is a collection of Users that can be associated to Stories, Epics, and Iterations within Shortcut.
     * List Groups
     */
    public listGroupsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Group>>> {
        const requestContextPromise = this.requestFactory.listGroups(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * A group in our API maps to a \"Team\" within the Shortcut Product. A Team is a collection of Users that can be associated to Stories, Epics, and Iterations within Shortcut.
     * List Groups
     */
    public listGroups(_options?: Configuration): Observable<Array<Group>> {
        return this.listGroupsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Group>>) => apiResponse.data));
    }

    /**
     * Get a list of all Stories in an Iteration.
     * List Iteration Stories
     * @param iterationPublicId The unique ID of the Iteration.
     * @param [includesDescription] A true/false boolean indicating whether to return Stories with their descriptions.
     */
    public listIterationStoriesWithHttpInfo(iterationPublicId: number, includesDescription?: boolean, _options?: Configuration): Observable<HttpInfo<Array<StorySlim>>> {
        const requestContextPromise = this.requestFactory.listIterationStories(iterationPublicId, includesDescription, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listIterationStoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a list of all Stories in an Iteration.
     * List Iteration Stories
     * @param iterationPublicId The unique ID of the Iteration.
     * @param [includesDescription] A true/false boolean indicating whether to return Stories with their descriptions.
     */
    public listIterationStories(iterationPublicId: number, includesDescription?: boolean, _options?: Configuration): Observable<Array<StorySlim>> {
        return this.listIterationStoriesWithHttpInfo(iterationPublicId, includesDescription, _options).pipe(map((apiResponse: HttpInfo<Array<StorySlim>>) => apiResponse.data));
    }

    /**
     * List Iterations
     */
    public listIterationsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<IterationSlim>>> {
        const requestContextPromise = this.requestFactory.listIterations(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listIterationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Iterations
     */
    public listIterations(_options?: Configuration): Observable<Array<IterationSlim>> {
        return this.listIterationsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<IterationSlim>>) => apiResponse.data));
    }

    /**
     * List all of the Epics with the Label.
     * List Label Epics
     * @param labelPublicId The unique ID of the Label.
     */
    public listLabelEpicsWithHttpInfo(labelPublicId: number, _options?: Configuration): Observable<HttpInfo<Array<EpicSlim>>> {
        const requestContextPromise = this.requestFactory.listLabelEpics(labelPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLabelEpicsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all of the Epics with the Label.
     * List Label Epics
     * @param labelPublicId The unique ID of the Label.
     */
    public listLabelEpics(labelPublicId: number, _options?: Configuration): Observable<Array<EpicSlim>> {
        return this.listLabelEpicsWithHttpInfo(labelPublicId, _options).pipe(map((apiResponse: HttpInfo<Array<EpicSlim>>) => apiResponse.data));
    }

    /**
     * List all of the Stories with the Label.
     * List Label Stories
     * @param labelPublicId The unique ID of the Label.
     * @param [includesDescription] A true/false boolean indicating whether to return Stories with their descriptions.
     */
    public listLabelStoriesWithHttpInfo(labelPublicId: number, includesDescription?: boolean, _options?: Configuration): Observable<HttpInfo<Array<StorySlim>>> {
        const requestContextPromise = this.requestFactory.listLabelStories(labelPublicId, includesDescription, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLabelStoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all of the Stories with the Label.
     * List Label Stories
     * @param labelPublicId The unique ID of the Label.
     * @param [includesDescription] A true/false boolean indicating whether to return Stories with their descriptions.
     */
    public listLabelStories(labelPublicId: number, includesDescription?: boolean, _options?: Configuration): Observable<Array<StorySlim>> {
        return this.listLabelStoriesWithHttpInfo(labelPublicId, includesDescription, _options).pipe(map((apiResponse: HttpInfo<Array<StorySlim>>) => apiResponse.data));
    }

    /**
     * List Labels returns a list of all Labels and their attributes.
     * List Labels
     * @param [slim] A true/false boolean indicating if the slim versions of the Label should be returned.
     */
    public listLabelsWithHttpInfo(slim?: boolean, _options?: Configuration): Observable<HttpInfo<Array<Label>>> {
        const requestContextPromise = this.requestFactory.listLabels(slim, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLabelsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Labels returns a list of all Labels and their attributes.
     * List Labels
     * @param [slim] A true/false boolean indicating if the slim versions of the Label should be returned.
     */
    public listLabels(slim?: boolean, _options?: Configuration): Observable<Array<Label>> {
        return this.listLabelsWithHttpInfo(slim, _options).pipe(map((apiResponse: HttpInfo<Array<Label>>) => apiResponse.data));
    }

    /**
     * List Linked Files returns a list of all Linked-Files and their attributes.
     * List Linked Files
     */
    public listLinkedFilesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<LinkedFile>>> {
        const requestContextPromise = this.requestFactory.listLinkedFiles(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLinkedFilesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Linked Files returns a list of all Linked-Files and their attributes.
     * List Linked Files
     */
    public listLinkedFiles(_options?: Configuration): Observable<Array<LinkedFile>> {
        return this.listLinkedFilesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<LinkedFile>>) => apiResponse.data));
    }

    /**
     * Returns information about members of the Workspace.
     * List Members
     * @param [orgPublicId] The unique ID of the Organization to limit the list to.
     */
    public listMembersWithHttpInfo(orgPublicId?: string, _options?: Configuration): Observable<HttpInfo<Array<Member>>> {
        const requestContextPromise = this.requestFactory.listMembers(orgPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMembersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns information about members of the Workspace.
     * List Members
     * @param [orgPublicId] The unique ID of the Organization to limit the list to.
     */
    public listMembers(orgPublicId?: string, _options?: Configuration): Observable<Array<Member>> {
        return this.listMembersWithHttpInfo(orgPublicId, _options).pipe(map((apiResponse: HttpInfo<Array<Member>>) => apiResponse.data));
    }

    /**
     * (Deprecated: Use \'List Objective Epics\') List all of the Epics within the Milestone.
     * List Milestone Epics
     * @param milestonePublicId The ID of the Milestone.
     */
    public listMilestoneEpicsWithHttpInfo(milestonePublicId: number, _options?: Configuration): Observable<HttpInfo<Array<EpicSlim>>> {
        const requestContextPromise = this.requestFactory.listMilestoneEpics(milestonePublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMilestoneEpicsWithHttpInfo(rsp)));
            }));
    }

    /**
     * (Deprecated: Use \'List Objective Epics\') List all of the Epics within the Milestone.
     * List Milestone Epics
     * @param milestonePublicId The ID of the Milestone.
     */
    public listMilestoneEpics(milestonePublicId: number, _options?: Configuration): Observable<Array<EpicSlim>> {
        return this.listMilestoneEpicsWithHttpInfo(milestonePublicId, _options).pipe(map((apiResponse: HttpInfo<Array<EpicSlim>>) => apiResponse.data));
    }

    /**
     * (Deprecated: Use \'List Objectives\') List Milestones returns a list of all Milestones and their attributes.
     * List Milestones
     */
    public listMilestonesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Milestone>>> {
        const requestContextPromise = this.requestFactory.listMilestones(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMilestonesWithHttpInfo(rsp)));
            }));
    }

    /**
     * (Deprecated: Use \'List Objectives\') List Milestones returns a list of all Milestones and their attributes.
     * List Milestones
     */
    public listMilestones(_options?: Configuration): Observable<Array<Milestone>> {
        return this.listMilestonesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Milestone>>) => apiResponse.data));
    }

    /**
     * List all of the Epics within the Objective.
     * List Objective Epics
     * @param objectivePublicId The ID of the Objective.
     */
    public listObjectiveEpicsWithHttpInfo(objectivePublicId: number, _options?: Configuration): Observable<HttpInfo<Array<EpicSlim>>> {
        const requestContextPromise = this.requestFactory.listObjectiveEpics(objectivePublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listObjectiveEpicsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all of the Epics within the Objective.
     * List Objective Epics
     * @param objectivePublicId The ID of the Objective.
     */
    public listObjectiveEpics(objectivePublicId: number, _options?: Configuration): Observable<Array<EpicSlim>> {
        return this.listObjectiveEpicsWithHttpInfo(objectivePublicId, _options).pipe(map((apiResponse: HttpInfo<Array<EpicSlim>>) => apiResponse.data));
    }

    /**
     * List Objectives returns a list of all Objectives and their attributes.
     * List Objectives
     */
    public listObjectivesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Objective>>> {
        const requestContextPromise = this.requestFactory.listObjectives(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listObjectivesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Objectives returns a list of all Objectives and their attributes.
     * List Objectives
     */
    public listObjectives(_options?: Configuration): Observable<Array<Objective>> {
        return this.listObjectivesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Objective>>) => apiResponse.data));
    }

    /**
     * List Projects returns a list of all Projects and their attributes.
     * List Projects
     */
    public listProjectsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Project>>> {
        const requestContextPromise = this.requestFactory.listProjects(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProjectsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Projects returns a list of all Projects and their attributes.
     * List Projects
     */
    public listProjects(_options?: Configuration): Observable<Array<Project>> {
        return this.listProjectsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Project>>) => apiResponse.data));
    }

    /**
     * List Repositories returns a list of all Repositories and their attributes.
     * List Repositories
     */
    public listRepositoriesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Repository>>> {
        const requestContextPromise = this.requestFactory.listRepositories(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRepositoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Repositories returns a list of all Repositories and their attributes.
     * List Repositories
     */
    public listRepositories(_options?: Configuration): Observable<Array<Repository>> {
        return this.listRepositoriesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Repository>>) => apiResponse.data));
    }

    /**
     * List Stories returns a list of all Stories in a selected Project and their attributes.
     * List Stories
     * @param projectPublicId The unique ID of the Project.
     * @param [includesDescription] A true/false boolean indicating whether to return Stories with their descriptions.
     */
    public listStoriesWithHttpInfo(projectPublicId: number, includesDescription?: boolean, _options?: Configuration): Observable<HttpInfo<Array<StorySlim>>> {
        const requestContextPromise = this.requestFactory.listStories(projectPublicId, includesDescription, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listStoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * List Stories returns a list of all Stories in a selected Project and their attributes.
     * List Stories
     * @param projectPublicId The unique ID of the Project.
     * @param [includesDescription] A true/false boolean indicating whether to return Stories with their descriptions.
     */
    public listStories(projectPublicId: number, includesDescription?: boolean, _options?: Configuration): Observable<Array<StorySlim>> {
        return this.listStoriesWithHttpInfo(projectPublicId, includesDescription, _options).pipe(map((apiResponse: HttpInfo<Array<StorySlim>>) => apiResponse.data));
    }

    /**
     * Lists Comments associated with a Story
     * List Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     */
    public listStoryCommentWithHttpInfo(storyPublicId: number, _options?: Configuration): Observable<HttpInfo<Array<StoryComment>>> {
        const requestContextPromise = this.requestFactory.listStoryComment(storyPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listStoryCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists Comments associated with a Story
     * List Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     */
    public listStoryComment(storyPublicId: number, _options?: Configuration): Observable<Array<StoryComment>> {
        return this.listStoryCommentWithHttpInfo(storyPublicId, _options).pipe(map((apiResponse: HttpInfo<Array<StoryComment>>) => apiResponse.data));
    }

    /**
     * Returns a list of all Workflows in the Workspace.
     * List Workflows
     */
    public listWorkflowsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Workflow>>> {
        const requestContextPromise = this.requestFactory.listWorkflows(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listWorkflowsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of all Workflows in the Workspace.
     * List Workflows
     */
    public listWorkflows(_options?: Configuration): Observable<Array<Workflow>> {
        return this.listWorkflowsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Workflow>>) => apiResponse.data));
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
    public searchWithHttpInfo(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Observable<HttpInfo<SearchResults>> {
        const requestContextPromise = this.requestFactory.search(query, pageSize, detail, next, entityTypes, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchWithHttpInfo(rsp)));
            }));
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
    public search(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Observable<SearchResults> {
        return this.searchWithHttpInfo(query, pageSize, detail, next, entityTypes, _options).pipe(map((apiResponse: HttpInfo<SearchResults>) => apiResponse.data));
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
    public searchEpicsWithHttpInfo(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Observable<HttpInfo<EpicSearchResults>> {
        const requestContextPromise = this.requestFactory.searchEpics(query, pageSize, detail, next, entityTypes, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchEpicsWithHttpInfo(rsp)));
            }));
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
    public searchEpics(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Observable<EpicSearchResults> {
        return this.searchEpicsWithHttpInfo(query, pageSize, detail, next, entityTypes, _options).pipe(map((apiResponse: HttpInfo<EpicSearchResults>) => apiResponse.data));
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
    public searchIterationsWithHttpInfo(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Observable<HttpInfo<IterationSearchResults>> {
        const requestContextPromise = this.requestFactory.searchIterations(query, pageSize, detail, next, entityTypes, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchIterationsWithHttpInfo(rsp)));
            }));
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
    public searchIterations(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Observable<IterationSearchResults> {
        return this.searchIterationsWithHttpInfo(query, pageSize, detail, next, entityTypes, _options).pipe(map((apiResponse: HttpInfo<IterationSearchResults>) => apiResponse.data));
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
    public searchMilestonesWithHttpInfo(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Observable<HttpInfo<ObjectiveSearchResults>> {
        const requestContextPromise = this.requestFactory.searchMilestones(query, pageSize, detail, next, entityTypes, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchMilestonesWithHttpInfo(rsp)));
            }));
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
    public searchMilestones(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Observable<ObjectiveSearchResults> {
        return this.searchMilestonesWithHttpInfo(query, pageSize, detail, next, entityTypes, _options).pipe(map((apiResponse: HttpInfo<ObjectiveSearchResults>) => apiResponse.data));
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
    public searchObjectivesWithHttpInfo(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Observable<HttpInfo<ObjectiveSearchResults>> {
        const requestContextPromise = this.requestFactory.searchObjectives(query, pageSize, detail, next, entityTypes, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchObjectivesWithHttpInfo(rsp)));
            }));
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
    public searchObjectives(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Observable<ObjectiveSearchResults> {
        return this.searchObjectivesWithHttpInfo(query, pageSize, detail, next, entityTypes, _options).pipe(map((apiResponse: HttpInfo<ObjectiveSearchResults>) => apiResponse.data));
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
    public searchStoriesWithHttpInfo(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Observable<HttpInfo<StorySearchResults>> {
        const requestContextPromise = this.requestFactory.searchStories(query, pageSize, detail, next, entityTypes, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchStoriesWithHttpInfo(rsp)));
            }));
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
    public searchStories(query: string, pageSize?: number, detail?: 'full' | 'slim', next?: string, entityTypes?: Array<'story' | 'milestone' | 'epic' | 'iteration' | 'objective'>, _options?: Configuration): Observable<StorySearchResults> {
        return this.searchStoriesWithHttpInfo(query, pageSize, detail, next, entityTypes, _options).pipe(map((apiResponse: HttpInfo<StorySearchResults>) => apiResponse.data));
    }

    /**
     * Search Stories lets you search Stories based on desired parameters.
     * Search Stories (Old)
     * @param searchStories
     */
    public searchStoriesOldWithHttpInfo(searchStories: SearchStories, _options?: Configuration): Observable<HttpInfo<Array<StorySlim>>> {
        const requestContextPromise = this.requestFactory.searchStoriesOld(searchStories, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchStoriesOldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search Stories lets you search Stories based on desired parameters.
     * Search Stories (Old)
     * @param searchStories
     */
    public searchStoriesOld(searchStories: SearchStories, _options?: Configuration): Observable<Array<StorySlim>> {
        return this.searchStoriesOldWithHttpInfo(searchStories, _options).pipe(map((apiResponse: HttpInfo<Array<StorySlim>>) => apiResponse.data));
    }

    /**
     * Story History
     * @param storyPublicId The ID of the Story.
     */
    public storyHistoryWithHttpInfo(storyPublicId: number, _options?: Configuration): Observable<HttpInfo<Array<History>>> {
        const requestContextPromise = this.requestFactory.storyHistory(storyPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.storyHistoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Story History
     * @param storyPublicId The ID of the Story.
     */
    public storyHistory(storyPublicId: number, _options?: Configuration): Observable<Array<History>> {
        return this.storyHistoryWithHttpInfo(storyPublicId, _options).pipe(map((apiResponse: HttpInfo<Array<History>>) => apiResponse.data));
    }

    /**
     * Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)
     * Unlink Comment thread from Slack
     * @param storyPublicId The ID of the Story to unlink.
     * @param commentPublicId The ID of the Comment to unlink.
     */
    public unlinkCommentThreadFromSlackWithHttpInfo(storyPublicId: number, commentPublicId: number, _options?: Configuration): Observable<HttpInfo<StoryComment>> {
        const requestContextPromise = this.requestFactory.unlinkCommentThreadFromSlack(storyPublicId, commentPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unlinkCommentThreadFromSlackWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)
     * Unlink Comment thread from Slack
     * @param storyPublicId The ID of the Story to unlink.
     * @param commentPublicId The ID of the Comment to unlink.
     */
    public unlinkCommentThreadFromSlack(storyPublicId: number, commentPublicId: number, _options?: Configuration): Observable<StoryComment> {
        return this.unlinkCommentThreadFromSlackWithHttpInfo(storyPublicId, commentPublicId, _options).pipe(map((apiResponse: HttpInfo<StoryComment>) => apiResponse.data));
    }

    /**
     * This endpoint allows you to unlink a productboard epic.
     * Unlink Productboard from Epic
     * @param epicPublicId The unique ID of the Epic.
     */
    public unlinkProductboardFromEpicWithHttpInfo(epicPublicId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.unlinkProductboardFromEpic(epicPublicId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.unlinkProductboardFromEpicWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint allows you to unlink a productboard epic.
     * Unlink Productboard from Epic
     * @param epicPublicId The unique ID of the Epic.
     */
    public unlinkProductboardFromEpic(epicPublicId: number, _options?: Configuration): Observable<void> {
        return this.unlinkProductboardFromEpicWithHttpInfo(epicPublicId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update Category allows you to replace a Category name with another name. If you try to name a Category something that already exists, you will receive a 422 response.
     * Update Category
     * @param categoryPublicId The unique ID of the Category you wish to update.
     * @param updateCategory
     */
    public updateCategoryWithHttpInfo(categoryPublicId: number, updateCategory: UpdateCategory, _options?: Configuration): Observable<HttpInfo<Category>> {
        const requestContextPromise = this.requestFactory.updateCategory(categoryPublicId, updateCategory, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCategoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Category allows you to replace a Category name with another name. If you try to name a Category something that already exists, you will receive a 422 response.
     * Update Category
     * @param categoryPublicId The unique ID of the Category you wish to update.
     * @param updateCategory
     */
    public updateCategory(categoryPublicId: number, updateCategory: UpdateCategory, _options?: Configuration): Observable<Category> {
        return this.updateCategoryWithHttpInfo(categoryPublicId, updateCategory, _options).pipe(map((apiResponse: HttpInfo<Category>) => apiResponse.data));
    }

    /**
     * Update Custom Field can be used to update the definition of a Custom Field. The order of items in the \'values\' collection is interpreted to be their ascending sort order.To delete an existing enum value, simply omit it from the \'values\' collection. New enum values may be created inline by including an object in the \'values\' collection having a \'value\' entry with no \'id\' (eg. {\'value\': \'myNewValue\', \'color_key\': \'green\'}).
     * Update Custom Field
     * @param customFieldPublicId The unique ID of the CustomField.
     * @param updateCustomField
     */
    public updateCustomFieldWithHttpInfo(customFieldPublicId: string, updateCustomField: UpdateCustomField, _options?: Configuration): Observable<HttpInfo<CustomField>> {
        const requestContextPromise = this.requestFactory.updateCustomField(customFieldPublicId, updateCustomField, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCustomFieldWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Custom Field can be used to update the definition of a Custom Field. The order of items in the \'values\' collection is interpreted to be their ascending sort order.To delete an existing enum value, simply omit it from the \'values\' collection. New enum values may be created inline by including an object in the \'values\' collection having a \'value\' entry with no \'id\' (eg. {\'value\': \'myNewValue\', \'color_key\': \'green\'}).
     * Update Custom Field
     * @param customFieldPublicId The unique ID of the CustomField.
     * @param updateCustomField
     */
    public updateCustomField(customFieldPublicId: string, updateCustomField: UpdateCustomField, _options?: Configuration): Observable<CustomField> {
        return this.updateCustomFieldWithHttpInfo(customFieldPublicId, updateCustomField, _options).pipe(map((apiResponse: HttpInfo<CustomField>) => apiResponse.data));
    }

    /**
     * Update an entity template\'s name or its contents.
     * Update Entity Template
     * @param entityTemplatePublicId The unique ID of the template to be updated.
     * @param updateEntityTemplate Request parameters for changing either a template\&#39;s name or any of   the attributes it is designed to pre-populate.
     */
    public updateEntityTemplateWithHttpInfo(entityTemplatePublicId: string, updateEntityTemplate: UpdateEntityTemplate, _options?: Configuration): Observable<HttpInfo<EntityTemplate>> {
        const requestContextPromise = this.requestFactory.updateEntityTemplate(entityTemplatePublicId, updateEntityTemplate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEntityTemplateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an entity template\'s name or its contents.
     * Update Entity Template
     * @param entityTemplatePublicId The unique ID of the template to be updated.
     * @param updateEntityTemplate Request parameters for changing either a template\&#39;s name or any of   the attributes it is designed to pre-populate.
     */
    public updateEntityTemplate(entityTemplatePublicId: string, updateEntityTemplate: UpdateEntityTemplate, _options?: Configuration): Observable<EntityTemplate> {
        return this.updateEntityTemplateWithHttpInfo(entityTemplatePublicId, updateEntityTemplate, _options).pipe(map((apiResponse: HttpInfo<EntityTemplate>) => apiResponse.data));
    }

    /**
     * Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which can be found in the Shortcut UI.
     * Update Epic
     * @param epicPublicId The unique ID of the Epic.
     * @param updateEpic
     */
    public updateEpicWithHttpInfo(epicPublicId: number, updateEpic: UpdateEpic, _options?: Configuration): Observable<HttpInfo<Epic>> {
        const requestContextPromise = this.requestFactory.updateEpic(epicPublicId, updateEpic, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEpicWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which can be found in the Shortcut UI.
     * Update Epic
     * @param epicPublicId The unique ID of the Epic.
     * @param updateEpic
     */
    public updateEpic(epicPublicId: number, updateEpic: UpdateEpic, _options?: Configuration): Observable<Epic> {
        return this.updateEpicWithHttpInfo(epicPublicId, updateEpic, _options).pipe(map((apiResponse: HttpInfo<Epic>) => apiResponse.data));
    }

    /**
     * This endpoint allows you to update a threaded Comment on an Epic.
     * Update Epic Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param commentPublicId The ID of the Comment.
     * @param updateComment
     */
    public updateEpicCommentWithHttpInfo(epicPublicId: number, commentPublicId: number, updateComment: UpdateComment, _options?: Configuration): Observable<HttpInfo<ThreadedComment>> {
        const requestContextPromise = this.requestFactory.updateEpicComment(epicPublicId, commentPublicId, updateComment, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEpicCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint allows you to update a threaded Comment on an Epic.
     * Update Epic Comment
     * @param epicPublicId The ID of the associated Epic.
     * @param commentPublicId The ID of the Comment.
     * @param updateComment
     */
    public updateEpicComment(epicPublicId: number, commentPublicId: number, updateComment: UpdateComment, _options?: Configuration): Observable<ThreadedComment> {
        return this.updateEpicCommentWithHttpInfo(epicPublicId, commentPublicId, updateComment, _options).pipe(map((apiResponse: HttpInfo<ThreadedComment>) => apiResponse.data));
    }

    /**
     * Update File updates the properties of an UploadedFile (but not its content).
     * Update File
     * @param filePublicId The unique ID assigned to the file in Shortcut.
     * @param updateFile
     */
    public updateFileWithHttpInfo(filePublicId: number, updateFile: UpdateFile, _options?: Configuration): Observable<HttpInfo<UploadedFile>> {
        const requestContextPromise = this.requestFactory.updateFile(filePublicId, updateFile, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update File updates the properties of an UploadedFile (but not its content).
     * Update File
     * @param filePublicId The unique ID assigned to the file in Shortcut.
     * @param updateFile
     */
    public updateFile(filePublicId: number, updateFile: UpdateFile, _options?: Configuration): Observable<UploadedFile> {
        return this.updateFileWithHttpInfo(filePublicId, updateFile, _options).pipe(map((apiResponse: HttpInfo<UploadedFile>) => apiResponse.data));
    }

    /**
     * Update Group
     * @param groupPublicId The unique ID of the Group.
     * @param updateGroup
     */
    public updateGroupWithHttpInfo(groupPublicId: string, updateGroup: UpdateGroup, _options?: Configuration): Observable<HttpInfo<Group>> {
        const requestContextPromise = this.requestFactory.updateGroup(groupPublicId, updateGroup, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Group
     * @param groupPublicId The unique ID of the Group.
     * @param updateGroup
     */
    public updateGroup(groupPublicId: string, updateGroup: UpdateGroup, _options?: Configuration): Observable<Group> {
        return this.updateGroupWithHttpInfo(groupPublicId, updateGroup, _options).pipe(map((apiResponse: HttpInfo<Group>) => apiResponse.data));
    }

    /**
     * Update Iteration
     * @param iterationPublicId The unique ID of the Iteration.
     * @param updateIteration
     */
    public updateIterationWithHttpInfo(iterationPublicId: number, updateIteration: UpdateIteration, _options?: Configuration): Observable<HttpInfo<Iteration>> {
        const requestContextPromise = this.requestFactory.updateIteration(iterationPublicId, updateIteration, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateIterationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Iteration
     * @param iterationPublicId The unique ID of the Iteration.
     * @param updateIteration
     */
    public updateIteration(iterationPublicId: number, updateIteration: UpdateIteration, _options?: Configuration): Observable<Iteration> {
        return this.updateIterationWithHttpInfo(iterationPublicId, updateIteration, _options).pipe(map((apiResponse: HttpInfo<Iteration>) => apiResponse.data));
    }

    /**
     * Update Key Result allows updating a Key Result\'s name or initial, observed, or target values.
     * Update Key Result
     * @param keyResultPublicId The ID of the Key Result.
     * @param updateKeyResult
     */
    public updateKeyResultWithHttpInfo(keyResultPublicId: string, updateKeyResult: UpdateKeyResult, _options?: Configuration): Observable<HttpInfo<KeyResult>> {
        const requestContextPromise = this.requestFactory.updateKeyResult(keyResultPublicId, updateKeyResult, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateKeyResultWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Key Result allows updating a Key Result\'s name or initial, observed, or target values.
     * Update Key Result
     * @param keyResultPublicId The ID of the Key Result.
     * @param updateKeyResult
     */
    public updateKeyResult(keyResultPublicId: string, updateKeyResult: UpdateKeyResult, _options?: Configuration): Observable<KeyResult> {
        return this.updateKeyResultWithHttpInfo(keyResultPublicId, updateKeyResult, _options).pipe(map((apiResponse: HttpInfo<KeyResult>) => apiResponse.data));
    }

    /**
     * Update Label allows you to replace a Label name with another name. If you try to name a Label something that already exists, you will receive a 422 response.
     * Update Label
     * @param labelPublicId The unique ID of the Label you wish to update.
     * @param updateLabel
     */
    public updateLabelWithHttpInfo(labelPublicId: number, updateLabel: UpdateLabel, _options?: Configuration): Observable<HttpInfo<Label>> {
        const requestContextPromise = this.requestFactory.updateLabel(labelPublicId, updateLabel, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLabelWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Label allows you to replace a Label name with another name. If you try to name a Label something that already exists, you will receive a 422 response.
     * Update Label
     * @param labelPublicId The unique ID of the Label you wish to update.
     * @param updateLabel
     */
    public updateLabel(labelPublicId: number, updateLabel: UpdateLabel, _options?: Configuration): Observable<Label> {
        return this.updateLabelWithHttpInfo(labelPublicId, updateLabel, _options).pipe(map((apiResponse: HttpInfo<Label>) => apiResponse.data));
    }

    /**
     * Updated Linked File allows you to update properties of a previously attached Linked-File.
     * Update Linked File
     * @param linkedFilePublicId The unique identifier of the linked file.
     * @param updateLinkedFile
     */
    public updateLinkedFileWithHttpInfo(linkedFilePublicId: number, updateLinkedFile: UpdateLinkedFile, _options?: Configuration): Observable<HttpInfo<LinkedFile>> {
        const requestContextPromise = this.requestFactory.updateLinkedFile(linkedFilePublicId, updateLinkedFile, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLinkedFileWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updated Linked File allows you to update properties of a previously attached Linked-File.
     * Update Linked File
     * @param linkedFilePublicId The unique identifier of the linked file.
     * @param updateLinkedFile
     */
    public updateLinkedFile(linkedFilePublicId: number, updateLinkedFile: UpdateLinkedFile, _options?: Configuration): Observable<LinkedFile> {
        return this.updateLinkedFileWithHttpInfo(linkedFilePublicId, updateLinkedFile, _options).pipe(map((apiResponse: HttpInfo<LinkedFile>) => apiResponse.data));
    }

    /**
     * (Deprecated: Use \'Update Objective\') Update Milestone can be used to update Milestone properties.
     * Update Milestone
     * @param milestonePublicId The ID of the Milestone.
     * @param updateMilestone
     */
    public updateMilestoneWithHttpInfo(milestonePublicId: number, updateMilestone: UpdateMilestone, _options?: Configuration): Observable<HttpInfo<Milestone>> {
        const requestContextPromise = this.requestFactory.updateMilestone(milestonePublicId, updateMilestone, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateMilestoneWithHttpInfo(rsp)));
            }));
    }

    /**
     * (Deprecated: Use \'Update Objective\') Update Milestone can be used to update Milestone properties.
     * Update Milestone
     * @param milestonePublicId The ID of the Milestone.
     * @param updateMilestone
     */
    public updateMilestone(milestonePublicId: number, updateMilestone: UpdateMilestone, _options?: Configuration): Observable<Milestone> {
        return this.updateMilestoneWithHttpInfo(milestonePublicId, updateMilestone, _options).pipe(map((apiResponse: HttpInfo<Milestone>) => apiResponse.data));
    }

    /**
     * Update Multiple Stories allows you to make changes to numerous stories at once.
     * Update Multiple Stories
     * @param updateStories
     */
    public updateMultipleStoriesWithHttpInfo(updateStories: UpdateStories, _options?: Configuration): Observable<HttpInfo<Array<StorySlim>>> {
        const requestContextPromise = this.requestFactory.updateMultipleStories(updateStories, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateMultipleStoriesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Multiple Stories allows you to make changes to numerous stories at once.
     * Update Multiple Stories
     * @param updateStories
     */
    public updateMultipleStories(updateStories: UpdateStories, _options?: Configuration): Observable<Array<StorySlim>> {
        return this.updateMultipleStoriesWithHttpInfo(updateStories, _options).pipe(map((apiResponse: HttpInfo<Array<StorySlim>>) => apiResponse.data));
    }

    /**
     * Update Objective can be used to update Objective properties.
     * Update Objective
     * @param objectivePublicId The ID of the Objective.
     * @param updateObjective
     */
    public updateObjectiveWithHttpInfo(objectivePublicId: number, updateObjective: UpdateObjective, _options?: Configuration): Observable<HttpInfo<Objective>> {
        const requestContextPromise = this.requestFactory.updateObjective(objectivePublicId, updateObjective, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateObjectiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Objective can be used to update Objective properties.
     * Update Objective
     * @param objectivePublicId The ID of the Objective.
     * @param updateObjective
     */
    public updateObjective(objectivePublicId: number, updateObjective: UpdateObjective, _options?: Configuration): Observable<Objective> {
        return this.updateObjectiveWithHttpInfo(objectivePublicId, updateObjective, _options).pipe(map((apiResponse: HttpInfo<Objective>) => apiResponse.data));
    }

    /**
     * Update Project can be used to change properties of a Project.
     * Update Project
     * @param projectPublicId The unique ID of the Project.
     * @param updateProject
     */
    public updateProjectWithHttpInfo(projectPublicId: number, updateProject: UpdateProject, _options?: Configuration): Observable<HttpInfo<Project>> {
        const requestContextPromise = this.requestFactory.updateProject(projectPublicId, updateProject, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Project can be used to change properties of a Project.
     * Update Project
     * @param projectPublicId The unique ID of the Project.
     * @param updateProject
     */
    public updateProject(projectPublicId: number, updateProject: UpdateProject, _options?: Configuration): Observable<Project> {
        return this.updateProjectWithHttpInfo(projectPublicId, updateProject, _options).pipe(map((apiResponse: HttpInfo<Project>) => apiResponse.data));
    }

    /**
     * Update Story can be used to update Story properties.
     * Update Story
     * @param storyPublicId The unique identifier of this story.
     * @param updateStory
     */
    public updateStoryWithHttpInfo(storyPublicId: number, updateStory: UpdateStory, _options?: Configuration): Observable<HttpInfo<Story>> {
        const requestContextPromise = this.requestFactory.updateStory(storyPublicId, updateStory, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateStoryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Story can be used to update Story properties.
     * Update Story
     * @param storyPublicId The unique identifier of this story.
     * @param updateStory
     */
    public updateStory(storyPublicId: number, updateStory: UpdateStory, _options?: Configuration): Observable<Story> {
        return this.updateStoryWithHttpInfo(storyPublicId, updateStory, _options).pipe(map((apiResponse: HttpInfo<Story>) => apiResponse.data));
    }

    /**
     * Update Comment replaces the text of the existing Comment.
     * Update Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment
     * @param updateStoryComment
     */
    public updateStoryCommentWithHttpInfo(storyPublicId: number, commentPublicId: number, updateStoryComment: UpdateStoryComment, _options?: Configuration): Observable<HttpInfo<StoryComment>> {
        const requestContextPromise = this.requestFactory.updateStoryComment(storyPublicId, commentPublicId, updateStoryComment, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateStoryCommentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Comment replaces the text of the existing Comment.
     * Update Story Comment
     * @param storyPublicId The ID of the Story that the Comment is in.
     * @param commentPublicId The ID of the Comment
     * @param updateStoryComment
     */
    public updateStoryComment(storyPublicId: number, commentPublicId: number, updateStoryComment: UpdateStoryComment, _options?: Configuration): Observable<StoryComment> {
        return this.updateStoryCommentWithHttpInfo(storyPublicId, commentPublicId, updateStoryComment, _options).pipe(map((apiResponse: HttpInfo<StoryComment>) => apiResponse.data));
    }

    /**
     * Updates the stories and/or the relationship for the given Story Link.
     * Update Story Link
     * @param storyLinkPublicId The unique ID of the Story Link.
     * @param updateStoryLink
     */
    public updateStoryLinkWithHttpInfo(storyLinkPublicId: number, updateStoryLink: UpdateStoryLink, _options?: Configuration): Observable<HttpInfo<StoryLink>> {
        const requestContextPromise = this.requestFactory.updateStoryLink(storyLinkPublicId, updateStoryLink, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateStoryLinkWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the stories and/or the relationship for the given Story Link.
     * Update Story Link
     * @param storyLinkPublicId The unique ID of the Story Link.
     * @param updateStoryLink
     */
    public updateStoryLink(storyLinkPublicId: number, updateStoryLink: UpdateStoryLink, _options?: Configuration): Observable<StoryLink> {
        return this.updateStoryLinkWithHttpInfo(storyLinkPublicId, updateStoryLink, _options).pipe(map((apiResponse: HttpInfo<StoryLink>) => apiResponse.data));
    }

    /**
     * Update Task can be used to update Task properties.
     * Update Task
     * @param storyPublicId The unique identifier of the parent Story.
     * @param taskPublicId The unique identifier of the Task you wish to update.
     * @param updateTask
     */
    public updateTaskWithHttpInfo(storyPublicId: number, taskPublicId: number, updateTask: UpdateTask, _options?: Configuration): Observable<HttpInfo<Task>> {
        const requestContextPromise = this.requestFactory.updateTask(storyPublicId, taskPublicId, updateTask, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTaskWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update Task can be used to update Task properties.
     * Update Task
     * @param storyPublicId The unique identifier of the parent Story.
     * @param taskPublicId The unique identifier of the Task you wish to update.
     * @param updateTask
     */
    public updateTask(storyPublicId: number, taskPublicId: number, updateTask: UpdateTask, _options?: Configuration): Observable<Task> {
        return this.updateTaskWithHttpInfo(storyPublicId, taskPublicId, updateTask, _options).pipe(map((apiResponse: HttpInfo<Task>) => apiResponse.data));
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
    public uploadFilesWithHttpInfo(file0: HttpFile, storyId?: number, file1?: HttpFile, file2?: HttpFile, file3?: HttpFile, _options?: Configuration): Observable<HttpInfo<Array<UploadedFile>>> {
        const requestContextPromise = this.requestFactory.uploadFiles(file0, storyId, file1, file2, file3, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadFilesWithHttpInfo(rsp)));
            }));
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
    public uploadFiles(file0: HttpFile, storyId?: number, file1?: HttpFile, file2?: HttpFile, file3?: HttpFile, _options?: Configuration): Observable<Array<UploadedFile>> {
        return this.uploadFilesWithHttpInfo(file0, storyId, file1, file2, file3, _options).pipe(map((apiResponse: HttpInfo<Array<UploadedFile>>) => apiResponse.data));
    }

}
