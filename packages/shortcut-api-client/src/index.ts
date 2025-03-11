import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

export const endpoints = [
  {
    method: "get",
    path: "/api/v3/categories",
    alias: "listCategories",
    description: `List Categories returns a list of all Categories and their attributes.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/categories",
    alias: "createCategory",
    description: `Create Category allows you to create a new Category in Shortcut.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/categories/:categoryPublicId",
    alias: "getCategory",
    description: `Get Category returns information about the selected Category.`,
    requestFormat: "json",
    parameters: [
      {
        name: "categoryPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/categories/:categoryPublicId",
    alias: "updateCategory",
    description: `Update Category allows you to replace a Category name with another name. If you try to name a Category something that already exists, you will receive a 422 response.`,
    requestFormat: "json",
    parameters: [
      {
        name: "categoryPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/categories/:categoryPublicId",
    alias: "deleteCategory",
    description: `Delete Category can be used to delete any Category.`,
    requestFormat: "json",
    parameters: [
      {
        name: "categoryPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/categories/:categoryPublicId/milestones",
    alias: "listCategoryMilestones",
    description: `List Category Milestones returns a list of all Milestones with the Category.`,
    requestFormat: "json",
    parameters: [
      {
        name: "categoryPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/categories/:categoryPublicId/objectives",
    alias: "listCategoryObjectives",
    description: `Returns a list of all Objectives with the Category.`,
    requestFormat: "json",
    parameters: [
      {
        name: "categoryPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/custom-fields",
    alias: "listCustomFields",
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/custom-fields/:customFieldPublicId",
    alias: "getCustomField",
    requestFormat: "json",
    parameters: [
      {
        name: "customFieldPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/custom-fields/:customFieldPublicId",
    alias: "updateCustomField",
    description: `Update Custom Field can be used to update the definition of a Custom Field. The order of items in the &#x27;values&#x27; collection is interpreted to be their ascending sort order.To delete an existing enum value, simply omit it from the &#x27;values&#x27; collection. New enum values may be created inline by including an object in the &#x27;values&#x27; collection having a &#x27;value&#x27; entry with no &#x27;id&#x27; (eg. {&#x27;value&#x27;: &#x27;myNewValue&#x27;, &#x27;color_key&#x27;: &#x27;green&#x27;}).`,
    requestFormat: "json",
    parameters: [
      {
        name: "customFieldPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 409,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/custom-fields/:customFieldPublicId",
    alias: "deleteCustomField",
    requestFormat: "json",
    parameters: [
      {
        name: "customFieldPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/entity-templates",
    alias: "listEntityTemplates",
    description: `List all the entity templates for the Workspace.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/entity-templates",
    alias: "createEntityTemplate",
    description: `Create a new entity template for the Workspace.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/entity-templates/:entityTemplatePublicId",
    alias: "getEntityTemplate",
    description: `Get Entity Template returns information about a given entity template.`,
    requestFormat: "json",
    parameters: [
      {
        name: "entityTemplatePublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/entity-templates/:entityTemplatePublicId",
    alias: "updateEntityTemplate",
    description: `Update an entity template&#x27;s name or its contents.`,
    requestFormat: "json",
    parameters: [
      {
        name: "entityTemplatePublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/entity-templates/:entityTemplatePublicId",
    alias: "deleteEntityTemplate",
    requestFormat: "json",
    parameters: [
      {
        name: "entityTemplatePublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/entity-templates/disable",
    alias: "disableStoryTemplates",
    description: `Disables the Story Template feature for the Workspace.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/entity-templates/enable",
    alias: "enableStoryTemplates",
    description: `Enables the Story Template feature for the Workspace.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/epic-workflow",
    alias: "getEpicWorkflow",
    description: `Returns the Epic Workflow for the Workspace.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/epics",
    alias: "listEpics",
    description: `List Epics returns a list of all Epics and their attributes.`,
    requestFormat: "json",
    parameters: [
      {
        name: "includes_description",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/epics",
    alias: "createEpic",
    description: `Create Epic allows you to create a new Epic in Shortcut.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/epics/:epicPublicId",
    alias: "getEpic",
    description: `Get Epic returns information about the selected Epic.`,
    requestFormat: "json",
    parameters: [
      {
        name: "epicPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/epics/:epicPublicId",
    alias: "updateEpic",
    description: `Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which can be found in the Shortcut UI.`,
    requestFormat: "json",
    parameters: [
      {
        name: "epicPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/epics/:epicPublicId",
    alias: "deleteEpic",
    description: `Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "epicPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/epics/:epicPublicId/comments",
    alias: "listEpicComments",
    description: `Get a list of all Comments on an Epic.`,
    requestFormat: "json",
    parameters: [
      {
        name: "epicPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/epics/:epicPublicId/comments",
    alias: "createEpicComment",
    description: `This endpoint allows you to create a threaded Comment on an Epic.`,
    requestFormat: "json",
    parameters: [
      {
        name: "epicPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/epics/:epicPublicId/comments/:commentPublicId",
    alias: "createEpicCommentComment",
    description: `This endpoint allows you to create a nested Comment reply to an existing Epic Comment.`,
    requestFormat: "json",
    parameters: [
      {
        name: "epicPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "commentPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/epics/:epicPublicId/comments/:commentPublicId",
    alias: "getEpicComment",
    description: `This endpoint returns information about the selected Epic Comment.`,
    requestFormat: "json",
    parameters: [
      {
        name: "epicPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "commentPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/epics/:epicPublicId/comments/:commentPublicId",
    alias: "updateEpicComment",
    description: `This endpoint allows you to update a threaded Comment on an Epic.`,
    requestFormat: "json",
    parameters: [
      {
        name: "epicPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "commentPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/epics/:epicPublicId/comments/:commentPublicId",
    alias: "deleteEpicComment",
    description: `This endpoint allows you to delete a Comment from an Epic.`,
    requestFormat: "json",
    parameters: [
      {
        name: "epicPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "commentPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/epics/:epicPublicId/stories",
    alias: "listEpicStories",
    description: `Get a list of all Stories in an Epic.`,
    requestFormat: "json",
    parameters: [
      {
        name: "epicPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "includes_description",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/epics/:epicPublicId/unlink-productboard",
    alias: "unlinkProductboardFromEpic",
    description: `This endpoint allows you to unlink a productboard epic.`,
    requestFormat: "json",
    parameters: [
      {
        name: "epicPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/external-link/stories",
    alias: "getExternalLinkStories",
    description: `Get Stories which have a given External Link associated with them.`,
    requestFormat: "json",
    parameters: [
      {
        name: "external_link",
        type: "Query",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/files",
    alias: "listFiles",
    description: `List Files returns a list of all UploadedFiles in the workspace.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/files",
    alias: "uploadFiles",
    description: `Upload Files uploads one or many files and optionally associates them with a story.
   Use the multipart/form-data content-type to upload.
   Each &#x60;file&#x60; key should contain a separate file.
   Each UploadedFile&#x27;s name comes from the Content-Disposition header &quot;filename&quot; directive for that field.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/files/:filePublicId",
    alias: "getFile",
    description: `Get File returns information about the selected UploadedFile.`,
    requestFormat: "json",
    parameters: [
      {
        name: "filePublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/files/:filePublicId",
    alias: "updateFile",
    description: `Update File updates the properties of an UploadedFile (but not its content).`,
    requestFormat: "json",
    parameters: [
      {
        name: "filePublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/files/:filePublicId",
    alias: "deleteFile",
    description: `Delete File deletes a previously uploaded file.`,
    requestFormat: "json",
    parameters: [
      {
        name: "filePublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/groups",
    alias: "listGroups",
    description: `A group in our API maps to a &quot;Team&quot; within the Shortcut Product. A Team is a collection of Users that can be associated to Stories, Epics, and Iterations within Shortcut.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/groups",
    alias: "createGroup",
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 403,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/groups/:groupPublicId",
    alias: "getGroup",
    requestFormat: "json",
    parameters: [
      {
        name: "groupPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/groups/:groupPublicId",
    alias: "updateGroup",
    requestFormat: "json",
    parameters: [
      {
        name: "groupPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 403,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/groups/:groupPublicId/stories",
    alias: "listGroupStories",
    description: `List the Stories assigned to the Group. (By default, limited to 1,000).`,
    requestFormat: "json",
    parameters: [
      {
        name: "groupPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "limit",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "offset",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/integrations/webhook",
    alias: "createGenericIntegration",
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/integrations/webhook/:integrationPublicId",
    alias: "getGenericIntegration",
    requestFormat: "json",
    parameters: [
      {
        name: "integrationPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/integrations/webhook/:integrationPublicId",
    alias: "deleteGenericIntegration",
    requestFormat: "json",
    parameters: [
      {
        name: "integrationPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/iterations",
    alias: "listIterations",
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/iterations",
    alias: "createIteration",
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/iterations/:iterationPublicId",
    alias: "getIteration",
    requestFormat: "json",
    parameters: [
      {
        name: "iterationPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/iterations/:iterationPublicId",
    alias: "updateIteration",
    requestFormat: "json",
    parameters: [
      {
        name: "iterationPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/iterations/:iterationPublicId",
    alias: "deleteIteration",
    requestFormat: "json",
    parameters: [
      {
        name: "iterationPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/iterations/:iterationPublicId/stories",
    alias: "listIterationStories",
    description: `Get a list of all Stories in an Iteration.`,
    requestFormat: "json",
    parameters: [
      {
        name: "iterationPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "includes_description",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/iterations/disable",
    alias: "disableIterations",
    description: `Disables Iterations for the current workspace`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/iterations/enable",
    alias: "enableIterations",
    description: `Enables Iterations for the current workspace`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/key-results/:keyResultPublicId",
    alias: "getKeyResult",
    description: `Get Key Result returns information about a chosen Key Result.`,
    requestFormat: "json",
    parameters: [
      {
        name: "keyResultPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/key-results/:keyResultPublicId",
    alias: "updateKeyResult",
    description: `Update Key Result allows updating a Key Result&#x27;s name or initial, observed, or target values.`,
    requestFormat: "json",
    parameters: [
      {
        name: "keyResultPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/labels",
    alias: "listLabels",
    description: `List Labels returns a list of all Labels and their attributes.`,
    requestFormat: "json",
    parameters: [
      {
        name: "slim",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/labels",
    alias: "createLabel",
    description: `Create Label allows you to create a new Label in Shortcut.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/labels/:labelPublicId",
    alias: "getLabel",
    description: `Get Label returns information about the selected Label.`,
    requestFormat: "json",
    parameters: [
      {
        name: "labelPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/labels/:labelPublicId",
    alias: "updateLabel",
    description: `Update Label allows you to replace a Label name with another name. If you try to name a Label something that already exists, you will receive a 422 response.`,
    requestFormat: "json",
    parameters: [
      {
        name: "labelPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/labels/:labelPublicId",
    alias: "deleteLabel",
    description: `Delete Label can be used to delete any Label.`,
    requestFormat: "json",
    parameters: [
      {
        name: "labelPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/labels/:labelPublicId/epics",
    alias: "listLabelEpics",
    description: `List all of the Epics with the Label.`,
    requestFormat: "json",
    parameters: [
      {
        name: "labelPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/labels/:labelPublicId/stories",
    alias: "listLabelStories",
    description: `List all of the Stories with the Label.`,
    requestFormat: "json",
    parameters: [
      {
        name: "labelPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "includes_description",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/linked-files",
    alias: "listLinkedFiles",
    description: `List Linked Files returns a list of all Linked-Files and their attributes.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/linked-files",
    alias: "createLinkedFile",
    description: `Create Linked File allows you to create a new Linked File in Shortcut.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/linked-files/:linkedFilePublicId",
    alias: "getLinkedFile",
    description: `Get File returns information about the selected Linked File.`,
    requestFormat: "json",
    parameters: [
      {
        name: "linkedFilePublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/linked-files/:linkedFilePublicId",
    alias: "updateLinkedFile",
    description: `Updated Linked File allows you to update properties of a previously attached Linked-File.`,
    requestFormat: "json",
    parameters: [
      {
        name: "linkedFilePublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/linked-files/:linkedFilePublicId",
    alias: "deleteLinkedFile",
    description: `Delete Linked File can be used to delete any previously attached Linked-File.`,
    requestFormat: "json",
    parameters: [
      {
        name: "linkedFilePublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/member",
    alias: "getCurrentMemberInfo",
    description: `Returns information about the authenticated member.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/members",
    alias: "listMembers",
    description: `Returns information about members of the Workspace.`,
    requestFormat: "json",
    parameters: [
      {
        name: "org-public-id",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/members/:memberPublicId",
    alias: "getMember",
    description: `Returns information about a Member.`,
    requestFormat: "json",
    parameters: [
      {
        name: "memberPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "org-public-id",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/milestones",
    alias: "listMilestones",
    description: `(Deprecated: Use &#x27;List Objectives&#x27;) List Milestones returns a list of all Milestones and their attributes.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/milestones",
    alias: "createMilestone",
    description: `(Deprecated: Use &#x27;Create Objective&#x27;) Create Milestone allows you to create a new Milestone in Shortcut.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 403,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/milestones/:milestonePublicId",
    alias: "getMilestone",
    description: `(Deprecated: Use &#x27;Get Objective&#x27;) Get Milestone returns information about a chosen Milestone.`,
    requestFormat: "json",
    parameters: [
      {
        name: "milestonePublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/milestones/:milestonePublicId",
    alias: "updateMilestone",
    description: `(Deprecated: Use &#x27;Update Objective&#x27;) Update Milestone can be used to update Milestone properties.`,
    requestFormat: "json",
    parameters: [
      {
        name: "milestonePublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/milestones/:milestonePublicId",
    alias: "deleteMilestone",
    description: `(Deprecated: Use &#x27;Delete Objective&#x27;) Delete Milestone can be used to delete any Milestone.`,
    requestFormat: "json",
    parameters: [
      {
        name: "milestonePublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/milestones/:milestonePublicId/epics",
    alias: "listMilestoneEpics",
    description: `(Deprecated: Use &#x27;List Objective Epics&#x27;) List all of the Epics within the Milestone.`,
    requestFormat: "json",
    parameters: [
      {
        name: "milestonePublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/objectives",
    alias: "listObjectives",
    description: `List Objectives returns a list of all Objectives and their attributes.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/objectives",
    alias: "createObjective",
    description: `Create Objective allows you to create a new Objective in Shortcut.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 403,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/objectives/:objectivePublicId",
    alias: "getObjective",
    description: `Get Objective returns information about a chosen Objective.`,
    requestFormat: "json",
    parameters: [
      {
        name: "objectivePublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/objectives/:objectivePublicId",
    alias: "updateObjective",
    description: `Update Objective can be used to update Objective properties.`,
    requestFormat: "json",
    parameters: [
      {
        name: "objectivePublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/objectives/:objectivePublicId",
    alias: "deleteObjective",
    description: `Delete Objective can be used to delete any Objective.`,
    requestFormat: "json",
    parameters: [
      {
        name: "objectivePublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/objectives/:objectivePublicId/epics",
    alias: "listObjectiveEpics",
    description: `List all of the Epics within the Objective.`,
    requestFormat: "json",
    parameters: [
      {
        name: "objectivePublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/projects",
    alias: "listProjects",
    description: `List Projects returns a list of all Projects and their attributes.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/projects",
    alias: "createProject",
    description: `Create Project is used to create a new Shortcut Project.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/projects/:projectPublicId",
    alias: "getProject",
    description: `Get Project returns information about the selected Project.`,
    requestFormat: "json",
    parameters: [
      {
        name: "projectPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/projects/:projectPublicId",
    alias: "updateProject",
    description: `Update Project can be used to change properties of a Project.`,
    requestFormat: "json",
    parameters: [
      {
        name: "projectPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/projects/:projectPublicId",
    alias: "deleteProject",
    description: `Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.`,
    requestFormat: "json",
    parameters: [
      {
        name: "projectPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/projects/:projectPublicId/stories",
    alias: "listStories",
    description: `List Stories returns a list of all Stories in a selected Project and their attributes.`,
    requestFormat: "json",
    parameters: [
      {
        name: "projectPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "includes_description",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/repositories",
    alias: "listRepositories",
    description: `List Repositories returns a list of all Repositories and their attributes.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/repositories/:repoPublicId",
    alias: "getRepository",
    description: `Get Repository returns information about the selected Repository.`,
    requestFormat: "json",
    parameters: [
      {
        name: "repoPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/search",
    alias: "search",
    description: `Search lets you search Epics and Stories based on desired parameters. Since ordering of the results can change over time (due to search ranking decay, new Epics and Stories being created), the &#x60;next&#x60; value from the previous response can be used as the path and query string for the next page to ensure stable ordering.`,
    requestFormat: "json",
    parameters: [
      {
        name: "query",
        type: "Query",
        schema: z.unknown(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "detail",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "next",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "entity_types",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `**Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded `,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/search/epics",
    alias: "searchEpics",
    description: `Search Epics lets you search Epics based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new Epics being created), the &#x60;next&#x60; value from the previous response can be used as the path and query string for the next page to ensure stable ordering.`,
    requestFormat: "json",
    parameters: [
      {
        name: "query",
        type: "Query",
        schema: z.unknown(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "detail",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "next",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "entity_types",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `**Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded `,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/search/iterations",
    alias: "searchIterations",
    description: `Search Iterations lets you search Iterations based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Iterations being created), the &#x60;next&#x60; value from the previous response can be used as the path and query string for the next page to ensure stable ordering.`,
    requestFormat: "json",
    parameters: [
      {
        name: "query",
        type: "Query",
        schema: z.unknown(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "detail",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "next",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "entity_types",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `**Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded `,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/search/milestones",
    alias: "searchMilestones",
    description: `Search Milestones lets you search Milestones based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Milestones being created), the &#x60;next&#x60; value from the previous response can be used as the path and query string for the next page to ensure stable ordering.`,
    requestFormat: "json",
    parameters: [
      {
        name: "query",
        type: "Query",
        schema: z.unknown(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "detail",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "next",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "entity_types",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `**Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded `,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/search/objectives",
    alias: "searchObjectives",
    description: `Search Objectives lets you search Objectives based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Objectives being created), the &#x60;next&#x60; value from the previous response can be used as the path and query string for the next page to ensure stable ordering.`,
    requestFormat: "json",
    parameters: [
      {
        name: "query",
        type: "Query",
        schema: z.unknown(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "detail",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "next",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "entity_types",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `**Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded `,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/search/stories",
    alias: "searchStories",
    description: `Search Stories lets you search Stories based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new stories being created), the &#x60;next&#x60; value from the previous response can be used as the path and query string for the next page to ensure stable ordering.`,
    requestFormat: "json",
    parameters: [
      {
        name: "query",
        type: "Query",
        schema: z.unknown(),
      },
      {
        name: "page_size",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "detail",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "next",
        type: "Query",
        schema: z.unknown().optional(),
      },
      {
        name: "entity_types",
        type: "Query",
        schema: z.unknown().optional(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `**Either:** (1) Schema mismatch **or** (2) Maximum of 1000 search results exceeded `,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/stories",
    alias: "createStory",
    description: `Create Story is used to add a new story to your Shortcut Workspace.
    This endpoint requires that either **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are specified. The workflow_state_id has been marked as required and is the recommended field to specify because we are in the process of sunsetting Projects in Shortcut.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/stories/:storyPublicId",
    alias: "getStory",
    description: `Get Story returns information about a chosen Story.`,
    requestFormat: "json",
    parameters: [
      {
        name: "storyPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/stories/:storyPublicId",
    alias: "updateStory",
    description: `Update Story can be used to update Story properties.`,
    requestFormat: "json",
    parameters: [
      {
        name: "storyPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/stories/:storyPublicId",
    alias: "deleteStory",
    description: `Delete Story can be used to delete any Story.`,
    requestFormat: "json",
    parameters: [
      {
        name: "storyPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/stories/:storyPublicId/comments",
    alias: "listStoryComment",
    description: `Lists Comments associated with a Story`,
    requestFormat: "json",
    parameters: [
      {
        name: "storyPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/stories/:storyPublicId/comments",
    alias: "createStoryComment",
    description: `Create Comment allows you to create a Comment on any Story.`,
    requestFormat: "json",
    parameters: [
      {
        name: "storyPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/stories/:storyPublicId/comments/:commentPublicId",
    alias: "getStoryComment",
    description: `Get Comment is used to get Comment information.`,
    requestFormat: "json",
    parameters: [
      {
        name: "storyPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "commentPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/stories/:storyPublicId/comments/:commentPublicId",
    alias: "updateStoryComment",
    description: `Update Comment replaces the text of the existing Comment.`,
    requestFormat: "json",
    parameters: [
      {
        name: "storyPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "commentPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/stories/:storyPublicId/comments/:commentPublicId",
    alias: "deleteStoryComment",
    description: `Delete a Comment from any story.`,
    requestFormat: "json",
    parameters: [
      {
        name: "storyPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "commentPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/stories/:storyPublicId/comments/:commentPublicId/reactions",
    alias: "createStoryReaction",
    description: `Create a reaction to a story comment.`,
    requestFormat: "json",
    parameters: [
      {
        name: "storyPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "commentPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/stories/:storyPublicId/comments/:commentPublicId/reactions",
    alias: "deleteStoryReaction",
    description: `Delete a reaction from any story comment.`,
    requestFormat: "json",
    parameters: [
      {
        name: "storyPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "commentPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/stories/:storyPublicId/comments/:commentPublicId/unlink-from-slack",
    alias: "unlinkCommentThreadFromSlack",
    description: `Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)`,
    requestFormat: "json",
    parameters: [
      {
        name: "storyPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "commentPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/stories/:storyPublicId/history",
    alias: "storyHistory",
    requestFormat: "json",
    parameters: [
      {
        name: "storyPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/stories/:storyPublicId/tasks",
    alias: "createTask",
    description: `Create Task is used to create a new task in a Story.`,
    requestFormat: "json",
    parameters: [
      {
        name: "storyPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/stories/:storyPublicId/tasks/:taskPublicId",
    alias: "getTask",
    description: `Returns information about a chosen Task.`,
    requestFormat: "json",
    parameters: [
      {
        name: "storyPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "taskPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/stories/:storyPublicId/tasks/:taskPublicId",
    alias: "updateTask",
    description: `Update Task can be used to update Task properties.`,
    requestFormat: "json",
    parameters: [
      {
        name: "storyPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "taskPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/stories/:storyPublicId/tasks/:taskPublicId",
    alias: "deleteTask",
    description: `Delete Task can be used to delete any previously created Task on a Story.`,
    requestFormat: "json",
    parameters: [
      {
        name: "storyPublicId",
        type: "Path",
        schema: z.unknown(),
      },
      {
        name: "taskPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/stories/bulk",
    alias: "createMultipleStories",
    description: `Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as [Create Story](https://developer.shortcut.com/api/rest/v3#create-story).`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/stories/bulk",
    alias: "updateMultipleStories",
    description: `Update Multiple Stories allows you to make changes to numerous stories at once.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/stories/bulk",
    alias: "deleteMultipleStories",
    description: `Delete Multiple Stories allows you to delete multiple archived stories at once.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/stories/from-template",
    alias: "createStoryFromTemplate",
    description: `Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/stories/search",
    alias: "searchStoriesOld",
    description: `Search Stories lets you search Stories based on desired parameters.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "post",
    path: "/api/v3/story-links",
    alias: "createStoryLink",
    description: `Story Links (called Story Relationships in the UI) allow you create semantic relationships between two stories. The parameters read like an active voice grammatical sentence:  subject -&gt; verb -&gt; object.

The subject story acts on the object Story; the object story is the direct object of the sentence.

The subject story &quot;blocks&quot;, &quot;duplicates&quot;, or &quot;relates to&quot; the object story.  Examples:
- &quot;story 5 blocks story 6” -- story 6 is now &quot;blocked&quot; until story 5 is moved to a Done workflow state.
- &quot;story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be archived).
- &quot;story 7 relates to story 3”`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/story-links/:storyLinkPublicId",
    alias: "getStoryLink",
    description: `Returns the stories and their relationship for the given Story Link.`,
    requestFormat: "json",
    parameters: [
      {
        name: "storyLinkPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "put",
    path: "/api/v3/story-links/:storyLinkPublicId",
    alias: "updateStoryLink",
    description: `Updates the stories and/or the relationship for the given Story Link.`,
    requestFormat: "json",
    parameters: [
      {
        name: "storyLinkPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "delete",
    path: "/api/v3/story-links/:storyLinkPublicId",
    alias: "deleteStoryLink",
    description: `Removes the relationship between the stories for the given Story Link.`,
    requestFormat: "json",
    parameters: [
      {
        name: "storyLinkPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/workflows",
    alias: "listWorkflows",
    description: `Returns a list of all Workflows in the Workspace.`,
    requestFormat: "json",
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
  {
    method: "get",
    path: "/api/v3/workflows/:workflowPublicId",
    alias: "getWorkflow",
    description: `Get Workflow returns information about a chosen Workflow.`,
    requestFormat: "json",
    parameters: [
      {
        name: "workflowPublicId",
        type: "Path",
        schema: z.unknown(),
      },
    ],
    response: z.void(),
    errors: [
      {
        status: 400,
        description: `Schema mismatch`,
        schema: z.void(),
      },
      {
        status: 404,
        description: `Resource does not exist`,
        schema: z.void(),
      },
      {
        status: 422,
        description: `Unprocessable`,
        schema: z.void(),
      },
    ],
  },
] as const

const apiEndpoints = makeApi(endpoints as unknown as Parameters<typeof makeApi>[0])

export const api = new Zodios("https://api.app.shortcut.com", apiEndpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, apiEndpoints, options);
}
