# .DefaultApi

All URIs are relative to *https://api.app.shortcut.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategory**](DefaultApi.md#createCategory) | **POST** /api/v3/categories | Create Category
[**createEntityTemplate**](DefaultApi.md#createEntityTemplate) | **POST** /api/v3/entity-templates | Create Entity Template
[**createEpic**](DefaultApi.md#createEpic) | **POST** /api/v3/epics | Create Epic
[**createEpicComment**](DefaultApi.md#createEpicComment) | **POST** /api/v3/epics/{epic-public-id}/comments | Create Epic Comment
[**createEpicCommentComment**](DefaultApi.md#createEpicCommentComment) | **POST** /api/v3/epics/{epic-public-id}/comments/{comment-public-id} | Create Epic Comment Comment
[**createGroup**](DefaultApi.md#createGroup) | **POST** /api/v3/groups | Create Group
[**createIteration**](DefaultApi.md#createIteration) | **POST** /api/v3/iterations | Create Iteration
[**createLabel**](DefaultApi.md#createLabel) | **POST** /api/v3/labels | Create Label
[**createLinkedFile**](DefaultApi.md#createLinkedFile) | **POST** /api/v3/linked-files | Create Linked File
[**createMilestone**](DefaultApi.md#createMilestone) | **POST** /api/v3/milestones | Create Milestone
[**createMultipleStories**](DefaultApi.md#createMultipleStories) | **POST** /api/v3/stories/bulk | Create Multiple Stories
[**createObjective**](DefaultApi.md#createObjective) | **POST** /api/v3/objectives | Create Objective
[**createProject**](DefaultApi.md#createProject) | **POST** /api/v3/projects | Create Project
[**createStory**](DefaultApi.md#createStory) | **POST** /api/v3/stories | Create Story
[**createStoryComment**](DefaultApi.md#createStoryComment) | **POST** /api/v3/stories/{story-public-id}/comments | Create Story Comment
[**createStoryFromTemplate**](DefaultApi.md#createStoryFromTemplate) | **POST** /api/v3/stories/from-template | Create Story From Template
[**createStoryLink**](DefaultApi.md#createStoryLink) | **POST** /api/v3/story-links | Create Story Link
[**createStoryReaction**](DefaultApi.md#createStoryReaction) | **POST** /api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions | Create Story Reaction
[**createTask**](DefaultApi.md#createTask) | **POST** /api/v3/stories/{story-public-id}/tasks | Create Task
[**deleteCategory**](DefaultApi.md#deleteCategory) | **DELETE** /api/v3/categories/{category-public-id} | Delete Category
[**deleteCustomField**](DefaultApi.md#deleteCustomField) | **DELETE** /api/v3/custom-fields/{custom-field-public-id} | Delete Custom Field
[**deleteEntityTemplate**](DefaultApi.md#deleteEntityTemplate) | **DELETE** /api/v3/entity-templates/{entity-template-public-id} | Delete Entity Template
[**deleteEpic**](DefaultApi.md#deleteEpic) | **DELETE** /api/v3/epics/{epic-public-id} | Delete Epic
[**deleteEpicComment**](DefaultApi.md#deleteEpicComment) | **DELETE** /api/v3/epics/{epic-public-id}/comments/{comment-public-id} | Delete Epic Comment
[**deleteFile**](DefaultApi.md#deleteFile) | **DELETE** /api/v3/files/{file-public-id} | Delete File
[**deleteIteration**](DefaultApi.md#deleteIteration) | **DELETE** /api/v3/iterations/{iteration-public-id} | Delete Iteration
[**deleteLabel**](DefaultApi.md#deleteLabel) | **DELETE** /api/v3/labels/{label-public-id} | Delete Label
[**deleteLinkedFile**](DefaultApi.md#deleteLinkedFile) | **DELETE** /api/v3/linked-files/{linked-file-public-id} | Delete Linked File
[**deleteMilestone**](DefaultApi.md#deleteMilestone) | **DELETE** /api/v3/milestones/{milestone-public-id} | Delete Milestone
[**deleteMultipleStories**](DefaultApi.md#deleteMultipleStories) | **DELETE** /api/v3/stories/bulk | Delete Multiple Stories
[**deleteObjective**](DefaultApi.md#deleteObjective) | **DELETE** /api/v3/objectives/{objective-public-id} | Delete Objective
[**deleteProject**](DefaultApi.md#deleteProject) | **DELETE** /api/v3/projects/{project-public-id} | Delete Project
[**deleteStory**](DefaultApi.md#deleteStory) | **DELETE** /api/v3/stories/{story-public-id} | Delete Story
[**deleteStoryComment**](DefaultApi.md#deleteStoryComment) | **DELETE** /api/v3/stories/{story-public-id}/comments/{comment-public-id} | Delete Story Comment
[**deleteStoryLink**](DefaultApi.md#deleteStoryLink) | **DELETE** /api/v3/story-links/{story-link-public-id} | Delete Story Link
[**deleteStoryReaction**](DefaultApi.md#deleteStoryReaction) | **DELETE** /api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions | Delete Story Reaction
[**deleteTask**](DefaultApi.md#deleteTask) | **DELETE** /api/v3/stories/{story-public-id}/tasks/{task-public-id} | Delete Task
[**disableIterations**](DefaultApi.md#disableIterations) | **PUT** /api/v3/iterations/disable | Disable Iterations
[**disableStoryTemplates**](DefaultApi.md#disableStoryTemplates) | **PUT** /api/v3/entity-templates/disable | Disable Story Templates
[**enableIterations**](DefaultApi.md#enableIterations) | **PUT** /api/v3/iterations/enable | Enable Iterations
[**enableStoryTemplates**](DefaultApi.md#enableStoryTemplates) | **PUT** /api/v3/entity-templates/enable | Enable Story Templates
[**getCategory**](DefaultApi.md#getCategory) | **GET** /api/v3/categories/{category-public-id} | Get Category
[**getCurrentMemberInfo**](DefaultApi.md#getCurrentMemberInfo) | **GET** /api/v3/member | Get Current Member Info
[**getCustomField**](DefaultApi.md#getCustomField) | **GET** /api/v3/custom-fields/{custom-field-public-id} | Get Custom Field
[**getEntityTemplate**](DefaultApi.md#getEntityTemplate) | **GET** /api/v3/entity-templates/{entity-template-public-id} | Get Entity Template
[**getEpic**](DefaultApi.md#getEpic) | **GET** /api/v3/epics/{epic-public-id} | Get Epic
[**getEpicComment**](DefaultApi.md#getEpicComment) | **GET** /api/v3/epics/{epic-public-id}/comments/{comment-public-id} | Get Epic Comment
[**getEpicWorkflow**](DefaultApi.md#getEpicWorkflow) | **GET** /api/v3/epic-workflow | Get Epic Workflow
[**getExternalLinkStories**](DefaultApi.md#getExternalLinkStories) | **GET** /api/v3/external-link/stories | Get External Link Stories
[**getFile**](DefaultApi.md#getFile) | **GET** /api/v3/files/{file-public-id} | Get File
[**getGroup**](DefaultApi.md#getGroup) | **GET** /api/v3/groups/{group-public-id} | Get Group
[**getIteration**](DefaultApi.md#getIteration) | **GET** /api/v3/iterations/{iteration-public-id} | Get Iteration
[**getKeyResult**](DefaultApi.md#getKeyResult) | **GET** /api/v3/key-results/{key-result-public-id} | Get Key Result
[**getLabel**](DefaultApi.md#getLabel) | **GET** /api/v3/labels/{label-public-id} | Get Label
[**getLinkedFile**](DefaultApi.md#getLinkedFile) | **GET** /api/v3/linked-files/{linked-file-public-id} | Get Linked File
[**getMember**](DefaultApi.md#getMember) | **GET** /api/v3/members/{member-public-id} | Get Member
[**getMilestone**](DefaultApi.md#getMilestone) | **GET** /api/v3/milestones/{milestone-public-id} | Get Milestone
[**getObjective**](DefaultApi.md#getObjective) | **GET** /api/v3/objectives/{objective-public-id} | Get Objective
[**getProject**](DefaultApi.md#getProject) | **GET** /api/v3/projects/{project-public-id} | Get Project
[**getRepository**](DefaultApi.md#getRepository) | **GET** /api/v3/repositories/{repo-public-id} | Get Repository
[**getStory**](DefaultApi.md#getStory) | **GET** /api/v3/stories/{story-public-id} | Get Story
[**getStoryComment**](DefaultApi.md#getStoryComment) | **GET** /api/v3/stories/{story-public-id}/comments/{comment-public-id} | Get Story Comment
[**getStoryLink**](DefaultApi.md#getStoryLink) | **GET** /api/v3/story-links/{story-link-public-id} | Get Story Link
[**getTask**](DefaultApi.md#getTask) | **GET** /api/v3/stories/{story-public-id}/tasks/{task-public-id} | Get Task
[**getWorkflow**](DefaultApi.md#getWorkflow) | **GET** /api/v3/workflows/{workflow-public-id} | Get Workflow
[**listCategories**](DefaultApi.md#listCategories) | **GET** /api/v3/categories | List Categories
[**listCategoryMilestones**](DefaultApi.md#listCategoryMilestones) | **GET** /api/v3/categories/{category-public-id}/milestones | List Category Milestones
[**listCategoryObjectives**](DefaultApi.md#listCategoryObjectives) | **GET** /api/v3/categories/{category-public-id}/objectives | List Category Objectives
[**listCustomFields**](DefaultApi.md#listCustomFields) | **GET** /api/v3/custom-fields | List Custom Fields
[**listEntityTemplates**](DefaultApi.md#listEntityTemplates) | **GET** /api/v3/entity-templates | List Entity Templates
[**listEpicComments**](DefaultApi.md#listEpicComments) | **GET** /api/v3/epics/{epic-public-id}/comments | List Epic Comments
[**listEpicStories**](DefaultApi.md#listEpicStories) | **GET** /api/v3/epics/{epic-public-id}/stories | List Epic Stories
[**listEpics**](DefaultApi.md#listEpics) | **GET** /api/v3/epics | List Epics
[**listFiles**](DefaultApi.md#listFiles) | **GET** /api/v3/files | List Files
[**listGroupStories**](DefaultApi.md#listGroupStories) | **GET** /api/v3/groups/{group-public-id}/stories | List Group Stories
[**listGroups**](DefaultApi.md#listGroups) | **GET** /api/v3/groups | List Groups
[**listIterationStories**](DefaultApi.md#listIterationStories) | **GET** /api/v3/iterations/{iteration-public-id}/stories | List Iteration Stories
[**listIterations**](DefaultApi.md#listIterations) | **GET** /api/v3/iterations | List Iterations
[**listLabelEpics**](DefaultApi.md#listLabelEpics) | **GET** /api/v3/labels/{label-public-id}/epics | List Label Epics
[**listLabelStories**](DefaultApi.md#listLabelStories) | **GET** /api/v3/labels/{label-public-id}/stories | List Label Stories
[**listLabels**](DefaultApi.md#listLabels) | **GET** /api/v3/labels | List Labels
[**listLinkedFiles**](DefaultApi.md#listLinkedFiles) | **GET** /api/v3/linked-files | List Linked Files
[**listMembers**](DefaultApi.md#listMembers) | **GET** /api/v3/members | List Members
[**listMilestoneEpics**](DefaultApi.md#listMilestoneEpics) | **GET** /api/v3/milestones/{milestone-public-id}/epics | List Milestone Epics
[**listMilestones**](DefaultApi.md#listMilestones) | **GET** /api/v3/milestones | List Milestones
[**listObjectiveEpics**](DefaultApi.md#listObjectiveEpics) | **GET** /api/v3/objectives/{objective-public-id}/epics | List Objective Epics
[**listObjectives**](DefaultApi.md#listObjectives) | **GET** /api/v3/objectives | List Objectives
[**listProjects**](DefaultApi.md#listProjects) | **GET** /api/v3/projects | List Projects
[**listRepositories**](DefaultApi.md#listRepositories) | **GET** /api/v3/repositories | List Repositories
[**listStories**](DefaultApi.md#listStories) | **GET** /api/v3/projects/{project-public-id}/stories | List Stories
[**listStoryComment**](DefaultApi.md#listStoryComment) | **GET** /api/v3/stories/{story-public-id}/comments | List Story Comment
[**listWorkflows**](DefaultApi.md#listWorkflows) | **GET** /api/v3/workflows | List Workflows
[**search**](DefaultApi.md#search) | **GET** /api/v3/search | Search
[**searchEpics**](DefaultApi.md#searchEpics) | **GET** /api/v3/search/epics | Search Epics
[**searchIterations**](DefaultApi.md#searchIterations) | **GET** /api/v3/search/iterations | Search Iterations
[**searchMilestones**](DefaultApi.md#searchMilestones) | **GET** /api/v3/search/milestones | Search Milestones
[**searchObjectives**](DefaultApi.md#searchObjectives) | **GET** /api/v3/search/objectives | Search Objectives
[**searchStories**](DefaultApi.md#searchStories) | **GET** /api/v3/search/stories | Search Stories
[**searchStoriesOld**](DefaultApi.md#searchStoriesOld) | **POST** /api/v3/stories/search | Search Stories (Old)
[**storyHistory**](DefaultApi.md#storyHistory) | **GET** /api/v3/stories/{story-public-id}/history | Story History
[**unlinkCommentThreadFromSlack**](DefaultApi.md#unlinkCommentThreadFromSlack) | **POST** /api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack | Unlink Comment thread from Slack
[**unlinkProductboardFromEpic**](DefaultApi.md#unlinkProductboardFromEpic) | **POST** /api/v3/epics/{epic-public-id}/unlink-productboard | Unlink Productboard from Epic
[**updateCategory**](DefaultApi.md#updateCategory) | **PUT** /api/v3/categories/{category-public-id} | Update Category
[**updateCustomField**](DefaultApi.md#updateCustomField) | **PUT** /api/v3/custom-fields/{custom-field-public-id} | Update Custom Field
[**updateEntityTemplate**](DefaultApi.md#updateEntityTemplate) | **PUT** /api/v3/entity-templates/{entity-template-public-id} | Update Entity Template
[**updateEpic**](DefaultApi.md#updateEpic) | **PUT** /api/v3/epics/{epic-public-id} | Update Epic
[**updateEpicComment**](DefaultApi.md#updateEpicComment) | **PUT** /api/v3/epics/{epic-public-id}/comments/{comment-public-id} | Update Epic Comment
[**updateFile**](DefaultApi.md#updateFile) | **PUT** /api/v3/files/{file-public-id} | Update File
[**updateGroup**](DefaultApi.md#updateGroup) | **PUT** /api/v3/groups/{group-public-id} | Update Group
[**updateIteration**](DefaultApi.md#updateIteration) | **PUT** /api/v3/iterations/{iteration-public-id} | Update Iteration
[**updateKeyResult**](DefaultApi.md#updateKeyResult) | **PUT** /api/v3/key-results/{key-result-public-id} | Update Key Result
[**updateLabel**](DefaultApi.md#updateLabel) | **PUT** /api/v3/labels/{label-public-id} | Update Label
[**updateLinkedFile**](DefaultApi.md#updateLinkedFile) | **PUT** /api/v3/linked-files/{linked-file-public-id} | Update Linked File
[**updateMilestone**](DefaultApi.md#updateMilestone) | **PUT** /api/v3/milestones/{milestone-public-id} | Update Milestone
[**updateMultipleStories**](DefaultApi.md#updateMultipleStories) | **PUT** /api/v3/stories/bulk | Update Multiple Stories
[**updateObjective**](DefaultApi.md#updateObjective) | **PUT** /api/v3/objectives/{objective-public-id} | Update Objective
[**updateProject**](DefaultApi.md#updateProject) | **PUT** /api/v3/projects/{project-public-id} | Update Project
[**updateStory**](DefaultApi.md#updateStory) | **PUT** /api/v3/stories/{story-public-id} | Update Story
[**updateStoryComment**](DefaultApi.md#updateStoryComment) | **PUT** /api/v3/stories/{story-public-id}/comments/{comment-public-id} | Update Story Comment
[**updateStoryLink**](DefaultApi.md#updateStoryLink) | **PUT** /api/v3/story-links/{story-link-public-id} | Update Story Link
[**updateTask**](DefaultApi.md#updateTask) | **PUT** /api/v3/stories/{story-public-id}/tasks/{task-public-id} | Update Task
[**uploadFiles**](DefaultApi.md#uploadFiles) | **POST** /api/v3/files | Upload Files


# **createCategory**
> Category createCategory(createCategory)

Create Category allows you to create a new Category in Shortcut.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateCategoryRequest = {
  
  createCategory: {
    name: "name_example",
    color: "#62ECB0",
    externalId: "externalId_example",
    type: {},
  },
};

const data = await apiInstance.createCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCategory** | **CreateCategory**|  |


### Return type

**Category**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEntityTemplate**
> EntityTemplate createEntityTemplate(createEntityTemplate)

Create a new entity template for the Workspace.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateEntityTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateEntityTemplateRequest = {
    // Request parameters for creating an entirely new entity template.
  createEntityTemplate: {
    name: "name_example",
    authorId: "authorId_example",
    storyContents: {
      description: "description_example",
      labels: [
        {
          name: "name_example",
          description: "description_example",
          color: "#62ECB0",
          externalId: "externalId_example",
        },
      ],
      storyType: "storyType_example",
      customFields: [
        {
          fieldId: "fieldId_example",
          valueId: "valueId_example",
          value: "value_example",
        },
      ],
      fileIds: [
        1,
      ],
      name: "name_example",
      epicId: 1,
      externalLinks: [
        "externalLinks_example",
      ],
      iterationId: 1,
      tasks: [
        {
          description: "description_example",
          complete: true,
          ownerIds: [
            "ownerIds_example",
          ],
          externalId: "externalId_example",
        },
      ],
      groupId: "groupId_example",
      workflowStateId: 1,
      followerIds: [
        "followerIds_example",
      ],
      ownerIds: [
        "ownerIds_example",
      ],
      estimate: 1,
      projectId: 1,
      linkedFileIds: [
        1,
      ],
      deadline: new Date('1970-01-01T00:00:00.00Z'),
    },
  },
};

const data = await apiInstance.createEntityTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEntityTemplate** | **CreateEntityTemplate**| Request parameters for creating an entirely new entity template. |


### Return type

**EntityTemplate**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEpic**
> Epic createEpic(createEpic)

Create Epic allows you to create a new Epic in Shortcut.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateEpicRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateEpicRequest = {
  
  createEpic: {
    description: "description_example",
    labels: [
      {
        name: "name_example",
        description: "description_example",
        color: "#62ECB0",
        externalId: "externalId_example",
      },
    ],
    completedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
    objectiveIds: [
      1,
    ],
    name: "name_example",
    plannedStartDate: new Date('1970-01-01T00:00:00.00Z'),
    state: "in progress",
    milestoneId: 1,
    requestedById: "requestedById_example",
    epicStateId: 1,
    startedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
    groupId: "groupId_example",
    updatedAt: new Date('1970-01-01T00:00:00.00Z'),
    followerIds: [
      "followerIds_example",
    ],
    groupIds: [
      "groupIds_example",
    ],
    ownerIds: [
      "ownerIds_example",
    ],
    externalId: "externalId_example",
    deadline: new Date('1970-01-01T00:00:00.00Z'),
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
  },
};

const data = await apiInstance.createEpic(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEpic** | **CreateEpic**|  |


### Return type

**Epic**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEpicComment**
> ThreadedComment createEpicComment(createEpicComment)

This endpoint allows you to create a threaded Comment on an Epic.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateEpicCommentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateEpicCommentRequest = {
    // The ID of the associated Epic.
  epicPublicId: 1,
  
  createEpicComment: {
    text: "text_example",
    authorId: "authorId_example",
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
    updatedAt: new Date('1970-01-01T00:00:00.00Z'),
    externalId: "externalId_example",
  },
};

const data = await apiInstance.createEpicComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEpicComment** | **CreateEpicComment**|  |
 **epicPublicId** | [**number**] | The ID of the associated Epic. | defaults to undefined


### Return type

**ThreadedComment**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createEpicCommentComment**
> ThreadedComment createEpicCommentComment(createCommentComment)

This endpoint allows you to create a nested Comment reply to an existing Epic Comment.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateEpicCommentCommentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateEpicCommentCommentRequest = {
    // The ID of the associated Epic.
  epicPublicId: 1,
    // The ID of the parent Epic Comment.
  commentPublicId: 1,
  
  createCommentComment: {
    text: "text_example",
    authorId: "authorId_example",
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
    updatedAt: new Date('1970-01-01T00:00:00.00Z'),
    externalId: "externalId_example",
  },
};

const data = await apiInstance.createEpicCommentComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCommentComment** | **CreateCommentComment**|  |
 **epicPublicId** | [**number**] | The ID of the associated Epic. | defaults to undefined
 **commentPublicId** | [**number**] | The ID of the parent Epic Comment. | defaults to undefined


### Return type

**ThreadedComment**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createGroup**
> Group createGroup(createGroup)


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateGroupRequest = {
  
  createGroup: {
    description: "description_example",
    memberIds: [
      "memberIds_example",
    ],
    workflowIds: [
      1,
    ],
    name: "name_example",
    mentionName: "mentionName_example",
    color: "#62ECB0",
    colorKey: "blue",
    displayIconId: "displayIconId_example",
  },
};

const data = await apiInstance.createGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGroup** | **CreateGroup**|  |


### Return type

**Group**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**403** |  |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createIteration**
> Iteration createIteration(createIteration)


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateIterationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateIterationRequest = {
  
  createIteration: {
    followerIds: [
      "followerIds_example",
    ],
    groupIds: [
      "groupIds_example",
    ],
    labels: [
      {
        name: "name_example",
        description: "description_example",
        color: "#62ECB0",
        externalId: "externalId_example",
      },
    ],
    description: "description_example",
    name: "name_example",
    startDate: "startDate_example",
    endDate: "endDate_example",
  },
};

const data = await apiInstance.createIteration(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createIteration** | **CreateIteration**|  |


### Return type

**Iteration**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createLabel**
> Label createLabel(createLabelParams)

Create Label allows you to create a new Label in Shortcut.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateLabelRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateLabelRequest = {
    // Request parameters for creating a Label on a Shortcut Story.
  createLabelParams: {
    name: "name_example",
    description: "description_example",
    color: "#62ECB0",
    externalId: "externalId_example",
  },
};

const data = await apiInstance.createLabel(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLabelParams** | **CreateLabelParams**| Request parameters for creating a Label on a Shortcut Story. |


### Return type

**Label**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createLinkedFile**
> LinkedFile createLinkedFile(createLinkedFile)

Create Linked File allows you to create a new Linked File in Shortcut.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateLinkedFileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateLinkedFileRequest = {
  
  createLinkedFile: {
    description: "description_example",
    storyId: 1,
    name: "name_example",
    thumbnailUrl: "https://UR,rZ",
    type: "google",
    size: 1,
    uploaderId: "uploaderId_example",
    contentType: "contentType_example",
    url: "https://UR,rZ",
  },
};

const data = await apiInstance.createLinkedFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLinkedFile** | **CreateLinkedFile**|  |


### Return type

**LinkedFile**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createMilestone**
> Milestone createMilestone(createMilestone)

(Deprecated: Use \'Create Objective\') Create Milestone allows you to create a new Milestone in Shortcut.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateMilestoneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateMilestoneRequest = {
  
  createMilestone: {
    name: "name_example",
    description: "description_example",
    state: "in progress",
    startedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
    completedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
    categories: [
      {
        name: "name_example",
        color: "#62ECB0",
        externalId: "externalId_example",
      },
    ],
  },
};

const data = await apiInstance.createMilestone(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createMilestone** | **CreateMilestone**|  |


### Return type

**Milestone**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**403** |  |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createMultipleStories**
> Array<StorySlim> createMultipleStories(createStories)

Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as [Create Story](https://developer.shortcut.com/api/rest/v3#create-story).

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateMultipleStoriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateMultipleStoriesRequest = {
  
  createStories: {
    stories: [
      {
        description: "description_example",
        archived: true,
        storyLinks: [
          {
            subjectId: 1,
            verb: "blocks",
            objectId: 1,
          },
        ],
        labels: [
          {
            name: "name_example",
            description: "description_example",
            color: "#62ECB0",
            externalId: "externalId_example",
          },
        ],
        storyType: "feature",
        customFields: [
          {
            fieldId: "fieldId_example",
            valueId: "valueId_example",
            value: "value_example",
          },
        ],
        moveTo: "last",
        fileIds: [
          1,
        ],
        sourceTaskId: 1,
        completedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
        name: "name_example",
        comments: [
          {
            text: "text_example",
            authorId: "authorId_example",
            createdAt: new Date('1970-01-01T00:00:00.00Z'),
            updatedAt: new Date('1970-01-01T00:00:00.00Z'),
            externalId: "externalId_example",
            parentId: 1,
          },
        ],
        epicId: 1,
        storyTemplateId: "storyTemplateId_example",
        externalLinks: [
          "externalLinks_example",
        ],
        subTasks: [
          {
            name: "name_example",
          },
        ],
        requestedById: "requestedById_example",
        iterationId: 1,
        tasks: [
          {
            description: "description_example",
            complete: true,
            ownerIds: [
              "ownerIds_example",
            ],
            externalId: "externalId_example",
            createdAt: new Date('1970-01-01T00:00:00.00Z'),
            updatedAt: new Date('1970-01-01T00:00:00.00Z'),
          },
        ],
        startedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
        groupId: "groupId_example",
        workflowStateId: 1,
        updatedAt: new Date('1970-01-01T00:00:00.00Z'),
        followerIds: [
          "followerIds_example",
        ],
        ownerIds: [
          "ownerIds_example",
        ],
        externalId: "externalId_example",
        estimate: 1,
        projectId: 1,
        linkedFileIds: [
          1,
        ],
        deadline: new Date('1970-01-01T00:00:00.00Z'),
        createdAt: new Date('1970-01-01T00:00:00.00Z'),
      },
    ],
  },
};

const data = await apiInstance.createMultipleStories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createStories** | **CreateStories**|  |


### Return type

**Array<StorySlim>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createObjective**
> Objective createObjective(createObjective)

Create Objective allows you to create a new Objective in Shortcut.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateObjectiveRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateObjectiveRequest = {
  
  createObjective: {
    name: "name_example",
    description: "description_example",
    state: "in progress",
    startedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
    completedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
    categories: [
      {
        name: "name_example",
        color: "#62ECB0",
        externalId: "externalId_example",
      },
    ],
  },
};

const data = await apiInstance.createObjective(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createObjective** | **CreateObjective**|  |


### Return type

**Objective**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**403** |  |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createProject**
> Project createProject(createProject)

Create Project is used to create a new Shortcut Project.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateProjectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateProjectRequest = {
  
  createProject: {
    description: "description_example",
    color: "#62ECB0",
    name: "name_example",
    startTime: new Date('1970-01-01T00:00:00.00Z'),
    updatedAt: new Date('1970-01-01T00:00:00.00Z'),
    followerIds: [
      "followerIds_example",
    ],
    externalId: "externalId_example",
    teamId: 1,
    iterationLength: 1,
    abbreviation: "abbreviation_example",
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
  },
};

const data = await apiInstance.createProject(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProject** | **CreateProject**|  |


### Return type

**Project**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createStory**
> Story createStory(createStoryParams)

Create Story is used to add a new story to your Shortcut Workspace.     This endpoint requires that either **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are specified. The workflow_state_id has been marked as required and is the recommended field to specify because we are in the process of sunsetting Projects in Shortcut.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateStoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateStoryRequest = {
    // Request parameters for creating a story.
  createStoryParams: {
    description: "description_example",
    archived: true,
    storyLinks: [
      {
        subjectId: 1,
        verb: "blocks",
        objectId: 1,
      },
    ],
    labels: [
      {
        name: "name_example",
        description: "description_example",
        color: "#62ECB0",
        externalId: "externalId_example",
      },
    ],
    storyType: "feature",
    customFields: [
      {
        fieldId: "fieldId_example",
        valueId: "valueId_example",
        value: "value_example",
      },
    ],
    moveTo: "last",
    fileIds: [
      1,
    ],
    sourceTaskId: 1,
    completedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
    name: "name_example",
    comments: [
      {
        text: "text_example",
        authorId: "authorId_example",
        createdAt: new Date('1970-01-01T00:00:00.00Z'),
        updatedAt: new Date('1970-01-01T00:00:00.00Z'),
        externalId: "externalId_example",
        parentId: 1,
      },
    ],
    epicId: 1,
    storyTemplateId: "storyTemplateId_example",
    externalLinks: [
      "externalLinks_example",
    ],
    subTasks: [
      {
        name: "name_example",
      },
    ],
    requestedById: "requestedById_example",
    iterationId: 1,
    tasks: [
      {
        description: "description_example",
        complete: true,
        ownerIds: [
          "ownerIds_example",
        ],
        externalId: "externalId_example",
        createdAt: new Date('1970-01-01T00:00:00.00Z'),
        updatedAt: new Date('1970-01-01T00:00:00.00Z'),
      },
    ],
    startedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
    groupId: "groupId_example",
    workflowStateId: 1,
    updatedAt: new Date('1970-01-01T00:00:00.00Z'),
    followerIds: [
      "followerIds_example",
    ],
    ownerIds: [
      "ownerIds_example",
    ],
    externalId: "externalId_example",
    estimate: 1,
    projectId: 1,
    linkedFileIds: [
      1,
    ],
    deadline: new Date('1970-01-01T00:00:00.00Z'),
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
  },
};

const data = await apiInstance.createStory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createStoryParams** | **CreateStoryParams**| Request parameters for creating a story. |


### Return type

**Story**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createStoryComment**
> StoryComment createStoryComment(createStoryComment)

Create Comment allows you to create a Comment on any Story.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateStoryCommentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateStoryCommentRequest = {
    // The ID of the Story that the Comment is in.
  storyPublicId: 1,
  
  createStoryComment: {
    text: "text_example",
    authorId: "authorId_example",
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
    updatedAt: new Date('1970-01-01T00:00:00.00Z'),
    externalId: "externalId_example",
    parentId: 1,
  },
};

const data = await apiInstance.createStoryComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createStoryComment** | **CreateStoryComment**|  |
 **storyPublicId** | [**number**] | The ID of the Story that the Comment is in. | defaults to undefined


### Return type

**StoryComment**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createStoryFromTemplate**
> Story createStoryFromTemplate(createStoryFromTemplateParams)

Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateStoryFromTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateStoryFromTemplateRequest = {
    // Request parameters for creating a story from a story template. These parameters are merged with the values derived from the template.
  createStoryFromTemplateParams: {
    description: "description_example",
    archived: true,
    storyLinks: [
      {
        subjectId: 1,
        verb: "blocks",
        objectId: 1,
      },
    ],
    labels: [
      {
        name: "name_example",
        description: "description_example",
        color: "#62ECB0",
        externalId: "externalId_example",
      },
    ],
    externalLinksAdd: [
      "externalLinksAdd_example",
    ],
    storyType: "feature",
    customFields: [
      {
        fieldId: "fieldId_example",
        valueId: "valueId_example",
        value: "value_example",
      },
    ],
    moveTo: "last",
    fileIds: [
      1,
    ],
    sourceTaskId: 1,
    completedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
    name: "name_example",
    fileIdsAdd: [
      1,
    ],
    fileIdsRemove: [
      1,
    ],
    comments: [
      {
        text: "text_example",
        authorId: "authorId_example",
        createdAt: new Date('1970-01-01T00:00:00.00Z'),
        updatedAt: new Date('1970-01-01T00:00:00.00Z'),
        externalId: "externalId_example",
        parentId: 1,
      },
    ],
    followerIdsAdd: [
      "followerIdsAdd_example",
    ],
    epicId: 1,
    storyTemplateId: "storyTemplateId_example",
    externalLinks: [
      "externalLinks_example",
    ],
    followerIdsRemove: [
      "followerIdsRemove_example",
    ],
    subTasks: [
      {
        name: "name_example",
      },
    ],
    linkedFileIdsRemove: [
      1,
    ],
    requestedById: "requestedById_example",
    iterationId: 1,
    customFieldsRemove: [
      {
        fieldId: "fieldId_example",
      },
    ],
    tasks: [
      {
        description: "description_example",
        complete: true,
        ownerIds: [
          "ownerIds_example",
        ],
        externalId: "externalId_example",
        createdAt: new Date('1970-01-01T00:00:00.00Z'),
        updatedAt: new Date('1970-01-01T00:00:00.00Z'),
      },
    ],
    startedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
    labelsAdd: [
      {
        name: "name_example",
        description: "description_example",
        color: "#62ECB0",
        externalId: "externalId_example",
      },
    ],
    groupId: "groupId_example",
    workflowStateId: 1,
    updatedAt: new Date('1970-01-01T00:00:00.00Z'),
    followerIds: [
      "followerIds_example",
    ],
    ownerIds: [
      "ownerIds_example",
    ],
    externalId: "externalId_example",
    estimate: 1,
    ownerIdsRemove: [
      "ownerIdsRemove_example",
    ],
    customFieldsAdd: [
      {
        fieldId: "fieldId_example",
        valueId: "valueId_example",
        value: "value_example",
      },
    ],
    projectId: 1,
    linkedFileIdsAdd: [
      1,
    ],
    linkedFileIds: [
      1,
    ],
    labelsRemove: [
      {
        name: "name_example",
      },
    ],
    deadline: new Date('1970-01-01T00:00:00.00Z'),
    ownerIdsAdd: [
      "ownerIdsAdd_example",
    ],
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
    externalLinksRemove: [
      "externalLinksRemove_example",
    ],
  },
};

const data = await apiInstance.createStoryFromTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createStoryFromTemplateParams** | **CreateStoryFromTemplateParams**| Request parameters for creating a story from a story template. These parameters are merged with the values derived from the template. |


### Return type

**Story**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createStoryLink**
> StoryLink createStoryLink(createStoryLink)

Story Links (called Story Relationships in the UI) allow you create semantic relationships between two stories. The parameters read like an active voice grammatical sentence:  subject -> verb -> object.  The subject story acts on the object Story; the object story is the direct object of the sentence.  The subject story \"blocks\", \"duplicates\", or \"relates to\" the object story.  Examples: - \"story 5 blocks story 6” -- story 6 is now \"blocked\" until story 5 is moved to a Done workflow state. - \"story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be archived). - \"story 7 relates to story 3”

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateStoryLinkRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateStoryLinkRequest = {
  
  createStoryLink: {
    verb: "blocks",
    subjectId: 1,
    objectId: 1,
  },
};

const data = await apiInstance.createStoryLink(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createStoryLink** | **CreateStoryLink**|  |


### Return type

**StoryLink**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createStoryReaction**
> Array<StoryReaction> createStoryReaction(createOrDeleteStoryReaction)

Create a reaction to a story comment.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateStoryReactionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateStoryReactionRequest = {
    // The ID of the Story that the Comment is in.
  storyPublicId: 1,
    // The ID of the Comment.
  commentPublicId: 1,
  
  createOrDeleteStoryReaction: {
    emoji: "emoji_example",
  },
};

const data = await apiInstance.createStoryReaction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrDeleteStoryReaction** | **CreateOrDeleteStoryReaction**|  |
 **storyPublicId** | [**number**] | The ID of the Story that the Comment is in. | defaults to undefined
 **commentPublicId** | [**number**] | The ID of the Comment. | defaults to undefined


### Return type

**Array<StoryReaction>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createTask**
> Task createTask(createTask)

Create Task is used to create a new task in a Story.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiCreateTaskRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiCreateTaskRequest = {
    // The ID of the Story that the Task will be in.
  storyPublicId: 1,
  
  createTask: {
    description: "description_example",
    complete: true,
    ownerIds: [
      "ownerIds_example",
    ],
    externalId: "externalId_example",
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
    updatedAt: new Date('1970-01-01T00:00:00.00Z'),
  },
};

const data = await apiInstance.createTask(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTask** | **CreateTask**|  |
 **storyPublicId** | [**number**] | The ID of the Story that the Task will be in. | defaults to undefined


### Return type

**Task**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCategory**
> void deleteCategory()

Delete Category can be used to delete any Category.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteCategoryRequest = {
    // The unique ID of the Category.
  categoryPublicId: 1,
};

const data = await apiInstance.deleteCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryPublicId** | [**number**] | The unique ID of the Category. | defaults to undefined


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCustomField**
> void deleteCustomField()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteCustomFieldRequest = {
    // The unique ID of the CustomField.
  customFieldPublicId: "custom-field-public-id_example",
};

const data = await apiInstance.deleteCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldPublicId** | [**string**] | The unique ID of the CustomField. | defaults to undefined


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteEntityTemplate**
> void deleteEntityTemplate()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteEntityTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteEntityTemplateRequest = {
    // The unique ID of the entity template.
  entityTemplatePublicId: "entity-template-public-id_example",
};

const data = await apiInstance.deleteEntityTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityTemplatePublicId** | [**string**] | The unique ID of the entity template. | defaults to undefined


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteEpic**
> void deleteEpic()

Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteEpicRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteEpicRequest = {
    // The unique ID of the Epic.
  epicPublicId: 1,
};

const data = await apiInstance.deleteEpic(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **epicPublicId** | [**number**] | The unique ID of the Epic. | defaults to undefined


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteEpicComment**
> void deleteEpicComment()

This endpoint allows you to delete a Comment from an Epic.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteEpicCommentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteEpicCommentRequest = {
    // The ID of the associated Epic.
  epicPublicId: 1,
    // The ID of the Comment.
  commentPublicId: 1,
};

const data = await apiInstance.deleteEpicComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **epicPublicId** | [**number**] | The ID of the associated Epic. | defaults to undefined
 **commentPublicId** | [**number**] | The ID of the Comment. | defaults to undefined


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteFile**
> void deleteFile()

Delete File deletes a previously uploaded file.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteFileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteFileRequest = {
    // The File’s unique ID.
  filePublicId: 1,
};

const data = await apiInstance.deleteFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePublicId** | [**number**] | The File’s unique ID. | defaults to undefined


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteIteration**
> void deleteIteration()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteIterationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteIterationRequest = {
    // The unique ID of the Iteration.
  iterationPublicId: 1,
};

const data = await apiInstance.deleteIteration(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iterationPublicId** | [**number**] | The unique ID of the Iteration. | defaults to undefined


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteLabel**
> void deleteLabel()

Delete Label can be used to delete any Label.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteLabelRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteLabelRequest = {
    // The unique ID of the Label.
  labelPublicId: 1,
};

const data = await apiInstance.deleteLabel(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **labelPublicId** | [**number**] | The unique ID of the Label. | defaults to undefined


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteLinkedFile**
> void deleteLinkedFile()

Delete Linked File can be used to delete any previously attached Linked-File.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteLinkedFileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteLinkedFileRequest = {
    // The unique identifier of the linked file.
  linkedFilePublicId: 1,
};

const data = await apiInstance.deleteLinkedFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkedFilePublicId** | [**number**] | The unique identifier of the linked file. | defaults to undefined


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteMilestone**
> void deleteMilestone()

(Deprecated: Use \'Delete Objective\') Delete Milestone can be used to delete any Milestone.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteMilestoneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteMilestoneRequest = {
    // The ID of the Milestone.
  milestonePublicId: 1,
};

const data = await apiInstance.deleteMilestone(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **milestonePublicId** | [**number**] | The ID of the Milestone. | defaults to undefined


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteMultipleStories**
> void deleteMultipleStories(deleteStories)

Delete Multiple Stories allows you to delete multiple archived stories at once.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteMultipleStoriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteMultipleStoriesRequest = {
  
  deleteStories: {
    storyIds: [
      1,
    ],
  },
};

const data = await apiInstance.deleteMultipleStories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteStories** | **DeleteStories**|  |


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteObjective**
> void deleteObjective()

Delete Objective can be used to delete any Objective.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteObjectiveRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteObjectiveRequest = {
    // The ID of the Objective.
  objectivePublicId: 1,
};

const data = await apiInstance.deleteObjective(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectivePublicId** | [**number**] | The ID of the Objective. | defaults to undefined


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteProject**
> void deleteProject()

Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteProjectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteProjectRequest = {
    // The unique ID of the Project.
  projectPublicId: 1,
};

const data = await apiInstance.deleteProject(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPublicId** | [**number**] | The unique ID of the Project. | defaults to undefined


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteStory**
> void deleteStory()

Delete Story can be used to delete any Story.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteStoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteStoryRequest = {
    // The ID of the Story.
  storyPublicId: 1,
};

const data = await apiInstance.deleteStory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storyPublicId** | [**number**] | The ID of the Story. | defaults to undefined


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteStoryComment**
> void deleteStoryComment()

Delete a Comment from any story.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteStoryCommentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteStoryCommentRequest = {
    // The ID of the Story that the Comment is in.
  storyPublicId: 1,
    // The ID of the Comment.
  commentPublicId: 1,
};

const data = await apiInstance.deleteStoryComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storyPublicId** | [**number**] | The ID of the Story that the Comment is in. | defaults to undefined
 **commentPublicId** | [**number**] | The ID of the Comment. | defaults to undefined


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteStoryLink**
> void deleteStoryLink()

Removes the relationship between the stories for the given Story Link.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteStoryLinkRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteStoryLinkRequest = {
    // The unique ID of the Story Link.
  storyLinkPublicId: 1,
};

const data = await apiInstance.deleteStoryLink(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storyLinkPublicId** | [**number**] | The unique ID of the Story Link. | defaults to undefined


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteStoryReaction**
> void deleteStoryReaction(createOrDeleteStoryReaction)

Delete a reaction from any story comment.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteStoryReactionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteStoryReactionRequest = {
    // The ID of the Story that the Comment is in.
  storyPublicId: 1,
    // The ID of the Comment.
  commentPublicId: 1,
  
  createOrDeleteStoryReaction: {
    emoji: "emoji_example",
  },
};

const data = await apiInstance.deleteStoryReaction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrDeleteStoryReaction** | **CreateOrDeleteStoryReaction**|  |
 **storyPublicId** | [**number**] | The ID of the Story that the Comment is in. | defaults to undefined
 **commentPublicId** | [**number**] | The ID of the Comment. | defaults to undefined


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteTask**
> void deleteTask()

Delete Task can be used to delete any previously created Task on a Story.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiDeleteTaskRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiDeleteTaskRequest = {
    // The unique ID of the Story this Task is associated with.
  storyPublicId: 1,
    // The unique ID of the Task.
  taskPublicId: 1,
};

const data = await apiInstance.deleteTask(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storyPublicId** | [**number**] | The unique ID of the Story this Task is associated with. | defaults to undefined
 **taskPublicId** | [**number**] | The unique ID of the Task. | defaults to undefined


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **disableIterations**
> void disableIterations()

Disables Iterations for the current workspace

### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.disableIterations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **disableStoryTemplates**
> void disableStoryTemplates()

Disables the Story Template feature for the Workspace.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.disableStoryTemplates(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **enableIterations**
> void enableIterations()

Enables Iterations for the current workspace

### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.enableIterations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **enableStoryTemplates**
> void enableStoryTemplates()

Enables the Story Template feature for the Workspace.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.enableStoryTemplates(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCategory**
> Category getCategory()

Get Category returns information about the selected Category.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetCategoryRequest = {
    // The unique ID of the Category.
  categoryPublicId: 1,
};

const data = await apiInstance.getCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryPublicId** | [**number**] | The unique ID of the Category. | defaults to undefined


### Return type

**Category**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCurrentMemberInfo**
> MemberInfo getCurrentMemberInfo()

Returns information about the authenticated member.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.getCurrentMemberInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**MemberInfo**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCustomField**
> CustomField getCustomField()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetCustomFieldRequest = {
    // The unique ID of the CustomField.
  customFieldPublicId: "custom-field-public-id_example",
};

const data = await apiInstance.getCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFieldPublicId** | [**string**] | The unique ID of the CustomField. | defaults to undefined


### Return type

**CustomField**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEntityTemplate**
> EntityTemplate getEntityTemplate()

Get Entity Template returns information about a given entity template.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetEntityTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetEntityTemplateRequest = {
    // The unique ID of the entity template.
  entityTemplatePublicId: "entity-template-public-id_example",
};

const data = await apiInstance.getEntityTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityTemplatePublicId** | [**string**] | The unique ID of the entity template. | defaults to undefined


### Return type

**EntityTemplate**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEpic**
> Epic getEpic()

Get Epic returns information about the selected Epic.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetEpicRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetEpicRequest = {
    // The unique ID of the Epic.
  epicPublicId: 1,
};

const data = await apiInstance.getEpic(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **epicPublicId** | [**number**] | The unique ID of the Epic. | defaults to undefined


### Return type

**Epic**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEpicComment**
> ThreadedComment getEpicComment()

This endpoint returns information about the selected Epic Comment.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetEpicCommentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetEpicCommentRequest = {
    // The ID of the associated Epic.
  epicPublicId: 1,
    // The ID of the Comment.
  commentPublicId: 1,
};

const data = await apiInstance.getEpicComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **epicPublicId** | [**number**] | The ID of the associated Epic. | defaults to undefined
 **commentPublicId** | [**number**] | The ID of the Comment. | defaults to undefined


### Return type

**ThreadedComment**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEpicWorkflow**
> EpicWorkflow getEpicWorkflow()

Returns the Epic Workflow for the Workspace.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.getEpicWorkflow(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**EpicWorkflow**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getExternalLinkStories**
> Array<StorySlim> getExternalLinkStories()

Get Stories which have a given External Link associated with them.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetExternalLinkStoriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetExternalLinkStoriesRequest = {
    // The external link associated with one or more stories.
  externalLink: "https://UR,rZ",
};

const data = await apiInstance.getExternalLinkStories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalLink** | [**string**] | The external link associated with one or more stories. | defaults to undefined


### Return type

**Array<StorySlim>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getFile**
> UploadedFile getFile()

Get File returns information about the selected UploadedFile.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetFileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetFileRequest = {
    // The File’s unique ID.
  filePublicId: 1,
};

const data = await apiInstance.getFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filePublicId** | [**number**] | The File’s unique ID. | defaults to undefined


### Return type

**UploadedFile**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getGroup**
> Group getGroup()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetGroupRequest = {
    // The unique ID of the Group.
  groupPublicId: "group-public-id_example",
};

const data = await apiInstance.getGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupPublicId** | [**string**] | The unique ID of the Group. | defaults to undefined


### Return type

**Group**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getIteration**
> Iteration getIteration()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetIterationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetIterationRequest = {
    // The unique ID of the Iteration.
  iterationPublicId: 1,
};

const data = await apiInstance.getIteration(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iterationPublicId** | [**number**] | The unique ID of the Iteration. | defaults to undefined


### Return type

**Iteration**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getKeyResult**
> KeyResult getKeyResult()

Get Key Result returns information about a chosen Key Result.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetKeyResultRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetKeyResultRequest = {
    // The ID of the Key Result.
  keyResultPublicId: "key-result-public-id_example",
};

const data = await apiInstance.getKeyResult(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyResultPublicId** | [**string**] | The ID of the Key Result. | defaults to undefined


### Return type

**KeyResult**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLabel**
> Label getLabel()

Get Label returns information about the selected Label.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetLabelRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetLabelRequest = {
    // The unique ID of the Label.
  labelPublicId: 1,
};

const data = await apiInstance.getLabel(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **labelPublicId** | [**number**] | The unique ID of the Label. | defaults to undefined


### Return type

**Label**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getLinkedFile**
> LinkedFile getLinkedFile()

Get File returns information about the selected Linked File.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetLinkedFileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetLinkedFileRequest = {
    // The unique identifier of the linked file.
  linkedFilePublicId: 1,
};

const data = await apiInstance.getLinkedFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkedFilePublicId** | [**number**] | The unique identifier of the linked file. | defaults to undefined


### Return type

**LinkedFile**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMember**
> Member getMember()

Returns information about a Member.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetMemberRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetMemberRequest = {
    // The Member\'s unique ID.
  memberPublicId: "member-public-id_example",
    // The unique ID of the Organization to limit the lookup to. (optional)
  orgPublicId: "org-public-id_example",
};

const data = await apiInstance.getMember(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberPublicId** | [**string**] | The Member\&#39;s unique ID. | defaults to undefined
 **orgPublicId** | [**string**] | The unique ID of the Organization to limit the lookup to. | (optional) defaults to undefined


### Return type

**Member**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getMilestone**
> Milestone getMilestone()

(Deprecated: Use \'Get Objective\') Get Milestone returns information about a chosen Milestone.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetMilestoneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetMilestoneRequest = {
    // The ID of the Milestone.
  milestonePublicId: 1,
};

const data = await apiInstance.getMilestone(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **milestonePublicId** | [**number**] | The ID of the Milestone. | defaults to undefined


### Return type

**Milestone**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getObjective**
> Objective getObjective()

Get Objective returns information about a chosen Objective.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetObjectiveRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetObjectiveRequest = {
    // The ID of the Objective.
  objectivePublicId: 1,
};

const data = await apiInstance.getObjective(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectivePublicId** | [**number**] | The ID of the Objective. | defaults to undefined


### Return type

**Objective**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProject**
> Project getProject()

Get Project returns information about the selected Project.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetProjectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetProjectRequest = {
    // The unique ID of the Project.
  projectPublicId: 1,
};

const data = await apiInstance.getProject(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPublicId** | [**number**] | The unique ID of the Project. | defaults to undefined


### Return type

**Project**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getRepository**
> Repository getRepository()

Get Repository returns information about the selected Repository.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetRepositoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetRepositoryRequest = {
    // The unique ID of the Repository.
  repoPublicId: 1,
};

const data = await apiInstance.getRepository(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repoPublicId** | [**number**] | The unique ID of the Repository. | defaults to undefined


### Return type

**Repository**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getStory**
> Story getStory()

Get Story returns information about a chosen Story.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetStoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetStoryRequest = {
    // The ID of the Story.
  storyPublicId: 1,
};

const data = await apiInstance.getStory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storyPublicId** | [**number**] | The ID of the Story. | defaults to undefined


### Return type

**Story**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getStoryComment**
> StoryComment getStoryComment()

Get Comment is used to get Comment information.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetStoryCommentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetStoryCommentRequest = {
    // The ID of the Story that the Comment is in.
  storyPublicId: 1,
    // The ID of the Comment.
  commentPublicId: 1,
};

const data = await apiInstance.getStoryComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storyPublicId** | [**number**] | The ID of the Story that the Comment is in. | defaults to undefined
 **commentPublicId** | [**number**] | The ID of the Comment. | defaults to undefined


### Return type

**StoryComment**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getStoryLink**
> StoryLink getStoryLink()

Returns the stories and their relationship for the given Story Link.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetStoryLinkRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetStoryLinkRequest = {
    // The unique ID of the Story Link.
  storyLinkPublicId: 1,
};

const data = await apiInstance.getStoryLink(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storyLinkPublicId** | [**number**] | The unique ID of the Story Link. | defaults to undefined


### Return type

**StoryLink**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTask**
> Task getTask()

Returns information about a chosen Task.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetTaskRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetTaskRequest = {
    // The unique ID of the Story this Task is associated with.
  storyPublicId: 1,
    // The unique ID of the Task.
  taskPublicId: 1,
};

const data = await apiInstance.getTask(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storyPublicId** | [**number**] | The unique ID of the Story this Task is associated with. | defaults to undefined
 **taskPublicId** | [**number**] | The unique ID of the Task. | defaults to undefined


### Return type

**Task**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getWorkflow**
> Workflow getWorkflow()

Get Workflow returns information about a chosen Workflow.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiGetWorkflowRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiGetWorkflowRequest = {
    // The ID of the Workflow.
  workflowPublicId: 1,
};

const data = await apiInstance.getWorkflow(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowPublicId** | [**number**] | The ID of the Workflow. | defaults to undefined


### Return type

**Workflow**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCategories**
> Array<Category> listCategories()

List Categories returns a list of all Categories and their attributes.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.listCategories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Category>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCategoryMilestones**
> Array<Milestone> listCategoryMilestones()

List Category Milestones returns a list of all Milestones with the Category.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiListCategoryMilestonesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiListCategoryMilestonesRequest = {
    // The unique ID of the Category.
  categoryPublicId: 1,
};

const data = await apiInstance.listCategoryMilestones(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryPublicId** | [**number**] | The unique ID of the Category. | defaults to undefined


### Return type

**Array<Milestone>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCategoryObjectives**
> Array<Milestone> listCategoryObjectives()

Returns a list of all Objectives with the Category.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiListCategoryObjectivesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiListCategoryObjectivesRequest = {
    // The unique ID of the Category.
  categoryPublicId: 1,
};

const data = await apiInstance.listCategoryObjectives(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryPublicId** | [**number**] | The unique ID of the Category. | defaults to undefined


### Return type

**Array<Milestone>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCustomFields**
> Array<CustomField> listCustomFields()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.listCustomFields(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<CustomField>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listEntityTemplates**
> Array<EntityTemplate> listEntityTemplates()

List all the entity templates for the Workspace.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.listEntityTemplates(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<EntityTemplate>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listEpicComments**
> Array<ThreadedComment> listEpicComments()

Get a list of all Comments on an Epic.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiListEpicCommentsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiListEpicCommentsRequest = {
    // The unique ID of the Epic.
  epicPublicId: 1,
};

const data = await apiInstance.listEpicComments(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **epicPublicId** | [**number**] | The unique ID of the Epic. | defaults to undefined


### Return type

**Array<ThreadedComment>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listEpicStories**
> Array<StorySlim> listEpicStories()

Get a list of all Stories in an Epic.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiListEpicStoriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiListEpicStoriesRequest = {
    // The unique ID of the Epic.
  epicPublicId: 1,
    // A true/false boolean indicating whether to return Stories with their descriptions. (optional)
  includesDescription: true,
};

const data = await apiInstance.listEpicStories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **epicPublicId** | [**number**] | The unique ID of the Epic. | defaults to undefined
 **includesDescription** | [**boolean**] | A true/false boolean indicating whether to return Stories with their descriptions. | (optional) defaults to undefined


### Return type

**Array<StorySlim>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listEpics**
> Array<EpicSlim> listEpics()

List Epics returns a list of all Epics and their attributes.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiListEpicsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiListEpicsRequest = {
    // A true/false boolean indicating whether to return Epics with their descriptions. (optional)
  includesDescription: true,
};

const data = await apiInstance.listEpics(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includesDescription** | [**boolean**] | A true/false boolean indicating whether to return Epics with their descriptions. | (optional) defaults to undefined


### Return type

**Array<EpicSlim>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listFiles**
> Array<UploadedFile> listFiles()

List Files returns a list of all UploadedFiles in the workspace.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.listFiles(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<UploadedFile>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listGroupStories**
> Array<StorySlim> listGroupStories()

List the Stories assigned to the Group. (By default, limited to 1,000).

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiListGroupStoriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiListGroupStoriesRequest = {
    // The unique ID of the Group.
  groupPublicId: "group-public-id_example",
    // The maximum number of results to return. (Defaults to 1000, max 1000) (optional)
  limit: 1,
    // The offset at which to begin returning results. (Defaults to 0) (optional)
  offset: 1,
};

const data = await apiInstance.listGroupStories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupPublicId** | [**string**] | The unique ID of the Group. | defaults to undefined
 **limit** | [**number**] | The maximum number of results to return. (Defaults to 1000, max 1000) | (optional) defaults to undefined
 **offset** | [**number**] | The offset at which to begin returning results. (Defaults to 0) | (optional) defaults to undefined


### Return type

**Array<StorySlim>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listGroups**
> Array<Group> listGroups()

A group in our API maps to a \"Team\" within the Shortcut Product. A Team is a collection of Users that can be associated to Stories, Epics, and Iterations within Shortcut.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.listGroups(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Group>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listIterationStories**
> Array<StorySlim> listIterationStories()

Get a list of all Stories in an Iteration.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiListIterationStoriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiListIterationStoriesRequest = {
    // The unique ID of the Iteration.
  iterationPublicId: 1,
    // A true/false boolean indicating whether to return Stories with their descriptions. (optional)
  includesDescription: true,
};

const data = await apiInstance.listIterationStories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **iterationPublicId** | [**number**] | The unique ID of the Iteration. | defaults to undefined
 **includesDescription** | [**boolean**] | A true/false boolean indicating whether to return Stories with their descriptions. | (optional) defaults to undefined


### Return type

**Array<StorySlim>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listIterations**
> Array<IterationSlim> listIterations()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.listIterations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<IterationSlim>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listLabelEpics**
> Array<EpicSlim> listLabelEpics()

List all of the Epics with the Label.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiListLabelEpicsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiListLabelEpicsRequest = {
    // The unique ID of the Label.
  labelPublicId: 1,
};

const data = await apiInstance.listLabelEpics(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **labelPublicId** | [**number**] | The unique ID of the Label. | defaults to undefined


### Return type

**Array<EpicSlim>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listLabelStories**
> Array<StorySlim> listLabelStories()

List all of the Stories with the Label.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiListLabelStoriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiListLabelStoriesRequest = {
    // The unique ID of the Label.
  labelPublicId: 1,
    // A true/false boolean indicating whether to return Stories with their descriptions. (optional)
  includesDescription: true,
};

const data = await apiInstance.listLabelStories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **labelPublicId** | [**number**] | The unique ID of the Label. | defaults to undefined
 **includesDescription** | [**boolean**] | A true/false boolean indicating whether to return Stories with their descriptions. | (optional) defaults to undefined


### Return type

**Array<StorySlim>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listLabels**
> Array<Label> listLabels()

List Labels returns a list of all Labels and their attributes.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiListLabelsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiListLabelsRequest = {
    // A true/false boolean indicating if the slim versions of the Label should be returned. (optional)
  slim: true,
};

const data = await apiInstance.listLabels(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slim** | [**boolean**] | A true/false boolean indicating if the slim versions of the Label should be returned. | (optional) defaults to undefined


### Return type

**Array<Label>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listLinkedFiles**
> Array<LinkedFile> listLinkedFiles()

List Linked Files returns a list of all Linked-Files and their attributes.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.listLinkedFiles(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<LinkedFile>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMembers**
> Array<Member> listMembers()

Returns information about members of the Workspace.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiListMembersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiListMembersRequest = {
    // The unique ID of the Organization to limit the list to. (optional)
  orgPublicId: "org-public-id_example",
};

const data = await apiInstance.listMembers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgPublicId** | [**string**] | The unique ID of the Organization to limit the list to. | (optional) defaults to undefined


### Return type

**Array<Member>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMilestoneEpics**
> Array<EpicSlim> listMilestoneEpics()

(Deprecated: Use \'List Objective Epics\') List all of the Epics within the Milestone.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiListMilestoneEpicsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiListMilestoneEpicsRequest = {
    // The ID of the Milestone.
  milestonePublicId: 1,
};

const data = await apiInstance.listMilestoneEpics(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **milestonePublicId** | [**number**] | The ID of the Milestone. | defaults to undefined


### Return type

**Array<EpicSlim>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMilestones**
> Array<Milestone> listMilestones()

(Deprecated: Use \'List Objectives\') List Milestones returns a list of all Milestones and their attributes.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.listMilestones(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Milestone>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listObjectiveEpics**
> Array<EpicSlim> listObjectiveEpics()

List all of the Epics within the Objective.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiListObjectiveEpicsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiListObjectiveEpicsRequest = {
    // The ID of the Objective.
  objectivePublicId: 1,
};

const data = await apiInstance.listObjectiveEpics(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **objectivePublicId** | [**number**] | The ID of the Objective. | defaults to undefined


### Return type

**Array<EpicSlim>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listObjectives**
> Array<Objective> listObjectives()

List Objectives returns a list of all Objectives and their attributes.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.listObjectives(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Objective>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listProjects**
> Array<Project> listProjects()

List Projects returns a list of all Projects and their attributes.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.listProjects(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Project>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listRepositories**
> Array<Repository> listRepositories()

List Repositories returns a list of all Repositories and their attributes.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.listRepositories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Repository>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listStories**
> Array<StorySlim> listStories()

List Stories returns a list of all Stories in a selected Project and their attributes.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiListStoriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiListStoriesRequest = {
    // The unique ID of the Project.
  projectPublicId: 1,
    // A true/false boolean indicating whether to return Stories with their descriptions. (optional)
  includesDescription: true,
};

const data = await apiInstance.listStories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPublicId** | [**number**] | The unique ID of the Project. | defaults to undefined
 **includesDescription** | [**boolean**] | A true/false boolean indicating whether to return Stories with their descriptions. | (optional) defaults to undefined


### Return type

**Array<StorySlim>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listStoryComment**
> Array<StoryComment> listStoryComment()

Lists Comments associated with a Story

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiListStoryCommentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiListStoryCommentRequest = {
    // The ID of the Story that the Comment is in.
  storyPublicId: 1,
};

const data = await apiInstance.listStoryComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storyPublicId** | [**number**] | The ID of the Story that the Comment is in. | defaults to undefined


### Return type

**Array<StoryComment>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listWorkflows**
> Array<Workflow> listWorkflows()

Returns a list of all Workflows in the Workspace.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request = {};

const data = await apiInstance.listWorkflows(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Workflow>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **search**
> SearchResults search()

Search lets you search Epics and Stories based on desired parameters. Since ordering of the results can change over time (due to search ranking decay, new Epics and Stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiSearchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiSearchRequest = {
    // See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
  query: "query_example",
    // The number of search results to include in a page. Minimum of 1 and maximum of 25. (optional)
  pageSize: 1,
    // The amount of detail included in each result item.    \"full\" will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \"slim\" omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \"full\". (optional)
  detail: "full",
    // The next page token. (optional)
  next: "next_example",
    // A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. (optional)
  entityTypes: [
    "story",
  ],
};

const data = await apiInstance.search(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) | defaults to undefined
 **pageSize** | [**number**] | The number of search results to include in a page. Minimum of 1 and maximum of 25. | (optional) defaults to undefined
 **detail** | [**&#39;full&#39; | &#39;slim&#39;**]**Array<&#39;full&#39; &#124; &#39;slim&#39;>** | The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;. | (optional) defaults to undefined
 **next** | [**string**] | The next page token. | (optional) defaults to undefined
 **entityTypes** | **Array<&#39;story&#39; &#124; &#39;milestone&#39; &#124; &#39;epic&#39; &#124; &#39;iteration&#39; &#124; &#39;objective&#39;>** | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. | (optional) defaults to undefined


### Return type

**SearchResults**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded  |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchEpics**
> EpicSearchResults searchEpics()

Search Epics lets you search Epics based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new Epics being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiSearchEpicsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiSearchEpicsRequest = {
    // See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
  query: "query_example",
    // The number of search results to include in a page. Minimum of 1 and maximum of 25. (optional)
  pageSize: 1,
    // The amount of detail included in each result item.    \"full\" will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \"slim\" omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \"full\". (optional)
  detail: "full",
    // The next page token. (optional)
  next: "next_example",
    // A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. (optional)
  entityTypes: [
    "story",
  ],
};

const data = await apiInstance.searchEpics(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) | defaults to undefined
 **pageSize** | [**number**] | The number of search results to include in a page. Minimum of 1 and maximum of 25. | (optional) defaults to undefined
 **detail** | [**&#39;full&#39; | &#39;slim&#39;**]**Array<&#39;full&#39; &#124; &#39;slim&#39;>** | The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;. | (optional) defaults to undefined
 **next** | [**string**] | The next page token. | (optional) defaults to undefined
 **entityTypes** | **Array<&#39;story&#39; &#124; &#39;milestone&#39; &#124; &#39;epic&#39; &#124; &#39;iteration&#39; &#124; &#39;objective&#39;>** | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. | (optional) defaults to undefined


### Return type

**EpicSearchResults**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded  |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchIterations**
> IterationSearchResults searchIterations()

Search Iterations lets you search Iterations based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Iterations being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiSearchIterationsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiSearchIterationsRequest = {
    // See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
  query: "query_example",
    // The number of search results to include in a page. Minimum of 1 and maximum of 25. (optional)
  pageSize: 1,
    // The amount of detail included in each result item.    \"full\" will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \"slim\" omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \"full\". (optional)
  detail: "full",
    // The next page token. (optional)
  next: "next_example",
    // A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. (optional)
  entityTypes: [
    "story",
  ],
};

const data = await apiInstance.searchIterations(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) | defaults to undefined
 **pageSize** | [**number**] | The number of search results to include in a page. Minimum of 1 and maximum of 25. | (optional) defaults to undefined
 **detail** | [**&#39;full&#39; | &#39;slim&#39;**]**Array<&#39;full&#39; &#124; &#39;slim&#39;>** | The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;. | (optional) defaults to undefined
 **next** | [**string**] | The next page token. | (optional) defaults to undefined
 **entityTypes** | **Array<&#39;story&#39; &#124; &#39;milestone&#39; &#124; &#39;epic&#39; &#124; &#39;iteration&#39; &#124; &#39;objective&#39;>** | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. | (optional) defaults to undefined


### Return type

**IterationSearchResults**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded  |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchMilestones**
> ObjectiveSearchResults searchMilestones()

Search Milestones lets you search Milestones based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Milestones being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiSearchMilestonesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiSearchMilestonesRequest = {
    // See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
  query: "query_example",
    // The number of search results to include in a page. Minimum of 1 and maximum of 25. (optional)
  pageSize: 1,
    // The amount of detail included in each result item.    \"full\" will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \"slim\" omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \"full\". (optional)
  detail: "full",
    // The next page token. (optional)
  next: "next_example",
    // A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. (optional)
  entityTypes: [
    "story",
  ],
};

const data = await apiInstance.searchMilestones(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) | defaults to undefined
 **pageSize** | [**number**] | The number of search results to include in a page. Minimum of 1 and maximum of 25. | (optional) defaults to undefined
 **detail** | [**&#39;full&#39; | &#39;slim&#39;**]**Array<&#39;full&#39; &#124; &#39;slim&#39;>** | The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;. | (optional) defaults to undefined
 **next** | [**string**] | The next page token. | (optional) defaults to undefined
 **entityTypes** | **Array<&#39;story&#39; &#124; &#39;milestone&#39; &#124; &#39;epic&#39; &#124; &#39;iteration&#39; &#124; &#39;objective&#39;>** | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. | (optional) defaults to undefined


### Return type

**ObjectiveSearchResults**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded  |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchObjectives**
> ObjectiveSearchResults searchObjectives()

Search Objectives lets you search Objectives based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Objectives being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiSearchObjectivesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiSearchObjectivesRequest = {
    // See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
  query: "query_example",
    // The number of search results to include in a page. Minimum of 1 and maximum of 25. (optional)
  pageSize: 1,
    // The amount of detail included in each result item.    \"full\" will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \"slim\" omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \"full\". (optional)
  detail: "full",
    // The next page token. (optional)
  next: "next_example",
    // A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. (optional)
  entityTypes: [
    "story",
  ],
};

const data = await apiInstance.searchObjectives(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) | defaults to undefined
 **pageSize** | [**number**] | The number of search results to include in a page. Minimum of 1 and maximum of 25. | (optional) defaults to undefined
 **detail** | [**&#39;full&#39; | &#39;slim&#39;**]**Array<&#39;full&#39; &#124; &#39;slim&#39;>** | The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;. | (optional) defaults to undefined
 **next** | [**string**] | The next page token. | (optional) defaults to undefined
 **entityTypes** | **Array<&#39;story&#39; &#124; &#39;milestone&#39; &#124; &#39;epic&#39; &#124; &#39;iteration&#39; &#124; &#39;objective&#39;>** | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. | (optional) defaults to undefined


### Return type

**ObjectiveSearchResults**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded  |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchStories**
> StorySearchResults searchStories()

Search Stories lets you search Stories based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiSearchStoriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiSearchStoriesRequest = {
    // See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators)
  query: "query_example",
    // The number of search results to include in a page. Minimum of 1 and maximum of 25. (optional)
  pageSize: 1,
    // The amount of detail included in each result item.    \"full\" will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \"slim\" omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \"full\". (optional)
  detail: "full",
    // The next page token. (optional)
  next: "next_example",
    // A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. (optional)
  entityTypes: [
    "story",
  ],
};

const data = await apiInstance.searchStories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | See our help center article on [search operators](https://help.shortcut.com/hc/en-us/articles/360000046646-Search-Operators) | defaults to undefined
 **pageSize** | [**number**] | The number of search results to include in a page. Minimum of 1 and maximum of 25. | (optional) defaults to undefined
 **detail** | [**&#39;full&#39; | &#39;slim&#39;**]**Array<&#39;full&#39; &#124; &#39;slim&#39;>** | The amount of detail included in each result item.    \&quot;full\&quot; will include all descriptions and comments and more fields on    related items such as pull requests, branches and tasks.    \&quot;slim\&quot; omits larger fulltext fields such as descriptions and comments    and only references related items by id.    The default is \&quot;full\&quot;. | (optional) defaults to undefined
 **next** | [**string**] | The next page token. | (optional) defaults to undefined
 **entityTypes** | **Array<&#39;story&#39; &#124; &#39;milestone&#39; &#124; &#39;epic&#39; &#124; &#39;iteration&#39; &#124; &#39;objective&#39;>** | A collection of entity_types to search. Defaults to story and epic. Supports: epic, iteration, objective, story. | (optional) defaults to undefined


### Return type

**StorySearchResults**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | **Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded  |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchStoriesOld**
> Array<StorySlim> searchStoriesOld(searchStories)

Search Stories lets you search Stories based on desired parameters.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiSearchStoriesOldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiSearchStoriesOldRequest = {
  
  searchStories: {
    archived: true,
    ownerId: "ownerId_example",
    storyType: "feature",
    epicIds: [
      1,
    ],
    projectIds: [
      1,
    ],
    updatedAtEnd: new Date('1970-01-01T00:00:00.00Z'),
    completedAtEnd: new Date('1970-01-01T00:00:00.00Z'),
    workflowStateTypes: [
      "started",
    ],
    deadlineEnd: new Date('1970-01-01T00:00:00.00Z'),
    createdAtStart: new Date('1970-01-01T00:00:00.00Z'),
    epicId: 1,
    labelName: "labelName_example",
    requestedById: "requestedById_example",
    iterationId: 1,
    labelIds: [
      1,
    ],
    groupId: "groupId_example",
    workflowStateId: 1,
    iterationIds: [
      1,
    ],
    createdAtEnd: new Date('1970-01-01T00:00:00.00Z'),
    deadlineStart: new Date('1970-01-01T00:00:00.00Z'),
    groupIds: [
      "groupIds_example",
    ],
    ownerIds: [
      "ownerIds_example",
    ],
    externalId: "externalId_example",
    includesDescription: true,
    estimate: 1,
    projectId: 1,
    completedAtStart: new Date('1970-01-01T00:00:00.00Z'),
    updatedAtStart: new Date('1970-01-01T00:00:00.00Z'),
  },
};

const data = await apiInstance.searchStoriesOld(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchStories** | **SearchStories**|  |


### Return type

**Array<StorySlim>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **storyHistory**
> Array<History> storyHistory()


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiStoryHistoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiStoryHistoryRequest = {
    // The ID of the Story.
  storyPublicId: 1,
};

const data = await apiInstance.storyHistory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storyPublicId** | [**number**] | The ID of the Story. | defaults to undefined


### Return type

**Array<History>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **unlinkCommentThreadFromSlack**
> StoryComment unlinkCommentThreadFromSlack()

Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUnlinkCommentThreadFromSlackRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUnlinkCommentThreadFromSlackRequest = {
    // The ID of the Story to unlink.
  storyPublicId: 1,
    // The ID of the Comment to unlink.
  commentPublicId: 1,
};

const data = await apiInstance.unlinkCommentThreadFromSlack(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storyPublicId** | [**number**] | The ID of the Story to unlink. | defaults to undefined
 **commentPublicId** | [**number**] | The ID of the Comment to unlink. | defaults to undefined


### Return type

**StoryComment**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **unlinkProductboardFromEpic**
> void unlinkProductboardFromEpic()

This endpoint allows you to unlink a productboard epic.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUnlinkProductboardFromEpicRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUnlinkProductboardFromEpicRequest = {
    // The unique ID of the Epic.
  epicPublicId: 1,
};

const data = await apiInstance.unlinkProductboardFromEpic(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **epicPublicId** | [**number**] | The unique ID of the Epic. | defaults to undefined


### Return type

**void**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCategory**
> Category updateCategory(updateCategory)

Update Category allows you to replace a Category name with another name. If you try to name a Category something that already exists, you will receive a 422 response.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateCategoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateCategoryRequest = {
    // The unique ID of the Category you wish to update.
  categoryPublicId: 1,
  
  updateCategory: {
    name: "name_example",
    color: "#62ECB0",
    archived: true,
  },
};

const data = await apiInstance.updateCategory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCategory** | **UpdateCategory**|  |
 **categoryPublicId** | [**number**] | The unique ID of the Category you wish to update. | defaults to undefined


### Return type

**Category**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCustomField**
> CustomField updateCustomField(updateCustomField)

Update Custom Field can be used to update the definition of a Custom Field. The order of items in the \'values\' collection is interpreted to be their ascending sort order.To delete an existing enum value, simply omit it from the \'values\' collection. New enum values may be created inline by including an object in the \'values\' collection having a \'value\' entry with no \'id\' (eg. {\'value\': \'myNewValue\', \'color_key\': \'green\'}).

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateCustomFieldRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateCustomFieldRequest = {
    // The unique ID of the CustomField.
  customFieldPublicId: "custom-field-public-id_example",
  
  updateCustomField: {
    enabled: true,
    name: "name_example",
    values: [
      {
        id: "id_example",
        value: "value_example",
        colorKey: "colorKey_example",
        enabled: true,
      },
    ],
    iconSetIdentifier: "iconSetIdentifier_example",
    description: "description_example",
    beforeId: "beforeId_example",
    afterId: "afterId_example",
  },
};

const data = await apiInstance.updateCustomField(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCustomField** | **UpdateCustomField**|  |
 **customFieldPublicId** | [**string**] | The unique ID of the CustomField. | defaults to undefined


### Return type

**CustomField**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**409** |  |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateEntityTemplate**
> EntityTemplate updateEntityTemplate(updateEntityTemplate)

Update an entity template\'s name or its contents.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateEntityTemplateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateEntityTemplateRequest = {
    // The unique ID of the template to be updated.
  entityTemplatePublicId: "entity-template-public-id_example",
    // Request parameters for changing either a template\'s name or any of   the attributes it is designed to pre-populate.
  updateEntityTemplate: {
    name: "name_example",
    storyContents: {
      description: "description_example",
      labels: [
        {
          name: "name_example",
          description: "description_example",
          color: "#62ECB0",
          externalId: "externalId_example",
        },
      ],
      storyType: "storyType_example",
      customFields: [
        {
          fieldId: "fieldId_example",
          valueId: "valueId_example",
          value: "value_example",
        },
      ],
      fileIds: [
        1,
      ],
      name: "name_example",
      epicId: 1,
      externalLinks: [
        "externalLinks_example",
      ],
      iterationId: 1,
      tasks: [
        {
          description: "description_example",
          complete: true,
          ownerIds: [
            "ownerIds_example",
          ],
          externalId: "externalId_example",
        },
      ],
      groupId: "groupId_example",
      workflowStateId: 1,
      followerIds: [
        "followerIds_example",
      ],
      ownerIds: [
        "ownerIds_example",
      ],
      estimate: 1,
      projectId: 1,
      linkedFileIds: [
        1,
      ],
      deadline: new Date('1970-01-01T00:00:00.00Z'),
    },
  },
};

const data = await apiInstance.updateEntityTemplate(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateEntityTemplate** | **UpdateEntityTemplate**| Request parameters for changing either a template\&#39;s name or any of   the attributes it is designed to pre-populate. |
 **entityTemplatePublicId** | [**string**] | The unique ID of the template to be updated. | defaults to undefined


### Return type

**EntityTemplate**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateEpic**
> Epic updateEpic(updateEpic)

Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which can be found in the Shortcut UI.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateEpicRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateEpicRequest = {
    // The unique ID of the Epic.
  epicPublicId: 1,
  
  updateEpic: {
    description: "description_example",
    archived: true,
    labels: [
      {
        name: "name_example",
        description: "description_example",
        color: "#62ECB0",
        externalId: "externalId_example",
      },
    ],
    completedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
    objectiveIds: [
      1,
    ],
    name: "name_example",
    plannedStartDate: new Date('1970-01-01T00:00:00.00Z'),
    state: "in progress",
    milestoneId: 1,
    requestedById: "requestedById_example",
    epicStateId: 1,
    startedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
    groupId: "groupId_example",
    followerIds: [
      "followerIds_example",
    ],
    groupIds: [
      "groupIds_example",
    ],
    ownerIds: [
      "ownerIds_example",
    ],
    externalId: "externalId_example",
    beforeId: 1,
    afterId: 1,
    deadline: new Date('1970-01-01T00:00:00.00Z'),
  },
};

const data = await apiInstance.updateEpic(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateEpic** | **UpdateEpic**|  |
 **epicPublicId** | [**number**] | The unique ID of the Epic. | defaults to undefined


### Return type

**Epic**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateEpicComment**
> ThreadedComment updateEpicComment(updateComment)

This endpoint allows you to update a threaded Comment on an Epic.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateEpicCommentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateEpicCommentRequest = {
    // The ID of the associated Epic.
  epicPublicId: 1,
    // The ID of the Comment.
  commentPublicId: 1,
  
  updateComment: {
    text: "text_example",
  },
};

const data = await apiInstance.updateEpicComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateComment** | **UpdateComment**|  |
 **epicPublicId** | [**number**] | The ID of the associated Epic. | defaults to undefined
 **commentPublicId** | [**number**] | The ID of the Comment. | defaults to undefined


### Return type

**ThreadedComment**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateFile**
> UploadedFile updateFile(updateFile)

Update File updates the properties of an UploadedFile (but not its content).

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateFileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateFileRequest = {
    // The unique ID assigned to the file in Shortcut.
  filePublicId: 1,
  
  updateFile: {
    description: "description_example",
    createdAt: new Date('1970-01-01T00:00:00.00Z'),
    updatedAt: new Date('1970-01-01T00:00:00.00Z'),
    name: "name_example",
    uploaderId: "uploaderId_example",
    externalId: "externalId_example",
  },
};

const data = await apiInstance.updateFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateFile** | **UpdateFile**|  |
 **filePublicId** | [**number**] | The unique ID assigned to the file in Shortcut. | defaults to undefined


### Return type

**UploadedFile**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateGroup**
> Group updateGroup(updateGroup)


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateGroupRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateGroupRequest = {
    // The unique ID of the Group.
  groupPublicId: "group-public-id_example",
  
  updateGroup: {
    description: "description_example",
    archived: true,
    color: "#62ECB0",
    displayIconId: "displayIconId_example",
    mentionName: "mentionName_example",
    name: "name_example",
    colorKey: "blue",
    memberIds: [
      "memberIds_example",
    ],
    workflowIds: [
      1,
    ],
  },
};

const data = await apiInstance.updateGroup(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateGroup** | **UpdateGroup**|  |
 **groupPublicId** | [**string**] | The unique ID of the Group. | defaults to undefined


### Return type

**Group**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**403** |  |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateIteration**
> Iteration updateIteration(updateIteration)


### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateIterationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateIterationRequest = {
    // The unique ID of the Iteration.
  iterationPublicId: 1,
  
  updateIteration: {
    followerIds: [
      "followerIds_example",
    ],
    groupIds: [
      "groupIds_example",
    ],
    labels: [
      {
        name: "name_example",
        description: "description_example",
        color: "#62ECB0",
        externalId: "externalId_example",
      },
    ],
    description: "description_example",
    name: "name_example",
    startDate: "startDate_example",
    endDate: "endDate_example",
  },
};

const data = await apiInstance.updateIteration(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateIteration** | **UpdateIteration**|  |
 **iterationPublicId** | [**number**] | The unique ID of the Iteration. | defaults to undefined


### Return type

**Iteration**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateKeyResult**
> KeyResult updateKeyResult(updateKeyResult)

Update Key Result allows updating a Key Result\'s name or initial, observed, or target values.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateKeyResultRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateKeyResultRequest = {
    // The ID of the Key Result.
  keyResultPublicId: "key-result-public-id_example",
  
  updateKeyResult: {
    name: "name_example",
    initialObservedValue: {
      numericValue: "numericValue_example",
      booleanValue: true,
    },
    observedValue: {
      numericValue: "numericValue_example",
      booleanValue: true,
    },
    targetValue: {
      numericValue: "numericValue_example",
      booleanValue: true,
    },
  },
};

const data = await apiInstance.updateKeyResult(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateKeyResult** | **UpdateKeyResult**|  |
 **keyResultPublicId** | [**string**] | The ID of the Key Result. | defaults to undefined


### Return type

**KeyResult**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateLabel**
> Label updateLabel(updateLabel)

Update Label allows you to replace a Label name with another name. If you try to name a Label something that already exists, you will receive a 422 response.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateLabelRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateLabelRequest = {
    // The unique ID of the Label you wish to update.
  labelPublicId: 1,
  
  updateLabel: {
    name: "name_example",
    description: "description_example",
    color: "#62ECB0",
    archived: true,
  },
};

const data = await apiInstance.updateLabel(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateLabel** | **UpdateLabel**|  |
 **labelPublicId** | [**number**] | The unique ID of the Label you wish to update. | defaults to undefined


### Return type

**Label**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateLinkedFile**
> LinkedFile updateLinkedFile(updateLinkedFile)

Updated Linked File allows you to update properties of a previously attached Linked-File.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateLinkedFileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateLinkedFileRequest = {
    // The unique identifier of the linked file.
  linkedFilePublicId: 1,
  
  updateLinkedFile: {
    description: "description_example",
    storyId: 1,
    name: "name_example",
    thumbnailUrl: "https://UR,rZ",
    type: "google",
    size: 1,
    uploaderId: "uploaderId_example",
    url: "https://UR,rZ",
  },
};

const data = await apiInstance.updateLinkedFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateLinkedFile** | **UpdateLinkedFile**|  |
 **linkedFilePublicId** | [**number**] | The unique identifier of the linked file. | defaults to undefined


### Return type

**LinkedFile**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateMilestone**
> Milestone updateMilestone(updateMilestone)

(Deprecated: Use \'Update Objective\') Update Milestone can be used to update Milestone properties.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateMilestoneRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateMilestoneRequest = {
    // The ID of the Milestone.
  milestonePublicId: 1,
  
  updateMilestone: {
    description: "description_example",
    archived: true,
    completedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
    name: "name_example",
    state: "in progress",
    startedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
    categories: [
      {
        name: "name_example",
        color: "#62ECB0",
        externalId: "externalId_example",
      },
    ],
    beforeId: 1,
    afterId: 1,
  },
};

const data = await apiInstance.updateMilestone(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateMilestone** | **UpdateMilestone**|  |
 **milestonePublicId** | [**number**] | The ID of the Milestone. | defaults to undefined


### Return type

**Milestone**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateMultipleStories**
> Array<StorySlim> updateMultipleStories(updateStories)

Update Multiple Stories allows you to make changes to numerous stories at once.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateMultipleStoriesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateMultipleStoriesRequest = {
  
  updateStories: {
    archived: true,
    storyIds: [
      1,
    ],
    storyType: "feature",
    moveTo: "last",
    followerIdsAdd: [
      "followerIdsAdd_example",
    ],
    epicId: 1,
    externalLinks: [
      "externalLinks_example",
    ],
    followerIdsRemove: [
      "followerIdsRemove_example",
    ],
    requestedById: "requestedById_example",
    iterationId: 1,
    customFieldsRemove: [
      {
        fieldId: "fieldId_example",
        valueId: "valueId_example",
        value: "value_example",
      },
    ],
    labelsAdd: [
      {
        name: "name_example",
        description: "description_example",
        color: "#62ECB0",
        externalId: "externalId_example",
      },
    ],
    groupId: "groupId_example",
    workflowStateId: 1,
    beforeId: 1,
    estimate: 1,
    afterId: 1,
    ownerIdsRemove: [
      "ownerIdsRemove_example",
    ],
    customFieldsAdd: [
      {
        fieldId: "fieldId_example",
        valueId: "valueId_example",
        value: "value_example",
      },
    ],
    projectId: 1,
    labelsRemove: [
      {
        name: "name_example",
        description: "description_example",
        color: "#62ECB0",
        externalId: "externalId_example",
      },
    ],
    deadline: new Date('1970-01-01T00:00:00.00Z'),
    ownerIdsAdd: [
      "ownerIdsAdd_example",
    ],
  },
};

const data = await apiInstance.updateMultipleStories(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateStories** | **UpdateStories**|  |


### Return type

**Array<StorySlim>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateObjective**
> Objective updateObjective(updateObjective)

Update Objective can be used to update Objective properties.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateObjectiveRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateObjectiveRequest = {
    // The ID of the Objective.
  objectivePublicId: 1,
  
  updateObjective: {
    description: "description_example",
    archived: true,
    completedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
    name: "name_example",
    state: "in progress",
    startedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
    categories: [
      {
        name: "name_example",
        color: "#62ECB0",
        externalId: "externalId_example",
      },
    ],
    beforeId: 1,
    afterId: 1,
  },
};

const data = await apiInstance.updateObjective(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateObjective** | **UpdateObjective**|  |
 **objectivePublicId** | [**number**] | The ID of the Objective. | defaults to undefined


### Return type

**Objective**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateProject**
> Project updateProject(updateProject)

Update Project can be used to change properties of a Project.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateProjectRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateProjectRequest = {
    // The unique ID of the Project.
  projectPublicId: 1,
  
  updateProject: {
    description: "description_example",
    archived: true,
    daysToThermometer: 1,
    color: "#62ECB0",
    name: "name_example",
    followerIds: [
      "followerIds_example",
    ],
    showThermometer: true,
    teamId: 1,
    abbreviation: "abbreviation_example",
  },
};

const data = await apiInstance.updateProject(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProject** | **UpdateProject**|  |
 **projectPublicId** | [**number**] | The unique ID of the Project. | defaults to undefined


### Return type

**Project**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateStory**
> Story updateStory(updateStory)

Update Story can be used to update Story properties.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateStoryRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateStoryRequest = {
    // The unique identifier of this story.
  storyPublicId: 1,
  
  updateStory: {
    description: "description_example",
    archived: true,
    labels: [
      {
        name: "name_example",
        description: "description_example",
        color: "#62ECB0",
        externalId: "externalId_example",
      },
    ],
    pullRequestIds: [
      1,
    ],
    storyType: "feature",
    customFields: [
      {
        fieldId: "fieldId_example",
        valueId: "valueId_example",
        value: "value_example",
      },
    ],
    moveTo: "last",
    fileIds: [
      1,
    ],
    completedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
    name: "name_example",
    epicId: 1,
    externalLinks: [
      "externalLinks_example",
    ],
    branchIds: [
      1,
    ],
    commitIds: [
      1,
    ],
    requestedById: "requestedById_example",
    iterationId: 1,
    startedAtOverride: new Date('1970-01-01T00:00:00.00Z'),
    groupId: "groupId_example",
    workflowStateId: 1,
    followerIds: [
      "followerIds_example",
    ],
    ownerIds: [
      "ownerIds_example",
    ],
    beforeId: 1,
    estimate: 1,
    afterId: 1,
    projectId: 1,
    linkedFileIds: [
      1,
    ],
    deadline: new Date('1970-01-01T00:00:00.00Z'),
  },
};

const data = await apiInstance.updateStory(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateStory** | **UpdateStory**|  |
 **storyPublicId** | [**number**] | The unique identifier of this story. | defaults to undefined


### Return type

**Story**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateStoryComment**
> StoryComment updateStoryComment(updateStoryComment)

Update Comment replaces the text of the existing Comment.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateStoryCommentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateStoryCommentRequest = {
    // The ID of the Story that the Comment is in.
  storyPublicId: 1,
    // The ID of the Comment
  commentPublicId: 1,
  
  updateStoryComment: {
    text: "text_example",
  },
};

const data = await apiInstance.updateStoryComment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateStoryComment** | **UpdateStoryComment**|  |
 **storyPublicId** | [**number**] | The ID of the Story that the Comment is in. | defaults to undefined
 **commentPublicId** | [**number**] | The ID of the Comment | defaults to undefined


### Return type

**StoryComment**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateStoryLink**
> StoryLink updateStoryLink(updateStoryLink)

Updates the stories and/or the relationship for the given Story Link.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateStoryLinkRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateStoryLinkRequest = {
    // The unique ID of the Story Link.
  storyLinkPublicId: 1,
  
  updateStoryLink: {
    verb: "blocks",
    subjectId: 1,
    objectId: 1,
  },
};

const data = await apiInstance.updateStoryLink(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateStoryLink** | **UpdateStoryLink**|  |
 **storyLinkPublicId** | [**number**] | The unique ID of the Story Link. | defaults to undefined


### Return type

**StoryLink**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateTask**
> Task updateTask(updateTask)

Update Task can be used to update Task properties.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUpdateTaskRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUpdateTaskRequest = {
    // The unique identifier of the parent Story.
  storyPublicId: 1,
    // The unique identifier of the Task you wish to update.
  taskPublicId: 1,
  
  updateTask: {
    description: "description_example",
    ownerIds: [
      "ownerIds_example",
    ],
    complete: true,
    beforeId: 1,
    afterId: 1,
  },
};

const data = await apiInstance.updateTask(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTask** | **UpdateTask**|  |
 **storyPublicId** | [**number**] | The unique identifier of the parent Story. | defaults to undefined
 **taskPublicId** | [**number**] | The unique identifier of the Task you wish to update. | defaults to undefined


### Return type

**Task**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **uploadFiles**
> Array<UploadedFile> uploadFiles()

Upload Files uploads one or many files and optionally associates them with a story.    Use the multipart/form-data content-type to upload.    Each `file` key should contain a separate file.    Each UploadedFile\'s name comes from the Content-Disposition header \"filename\" directive for that field.

### Example


```typescript
import { createConfiguration, DefaultApi } from '';
import type { DefaultApiUploadFilesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new DefaultApi(configuration);

const request: DefaultApiUploadFilesRequest = {
    // A file upload. At least one is required.
  file0: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    // The story ID that these files will be associated with. (optional)
  storyId: 1,
    // Optional additional files. (optional)
  file1: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    // Optional additional files. (optional)
  file2: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
    // Optional additional files. (optional)
  file3: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.uploadFiles(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file0** | [**HttpFile**] | A file upload. At least one is required. | defaults to undefined
 **storyId** | [**number**] | The story ID that these files will be associated with. | (optional) defaults to undefined
 **file1** | [**HttpFile**] | Optional additional files. | (optional) defaults to undefined
 **file2** | [**HttpFile**] | Optional additional files. | (optional) defaults to undefined
 **file3** | [**HttpFile**] | Optional additional files. | (optional) defaults to undefined


### Return type

**Array<UploadedFile>**

### Authorization

[api_token](README.md#api_token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Resource |  -  |
**400** | Schema mismatch |  -  |
**404** | Resource does not exist |  -  |
**422** | Unprocessable |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


