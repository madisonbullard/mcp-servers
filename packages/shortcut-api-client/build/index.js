/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType || (ContentType = {}));
export class HttpClient {
    baseUrl = "https://api.app.shortcut.com";
    securityData = null;
    securityWorker;
    abortControllers = new Map();
    customFetch = (...fetchParams) => fetch(...fetchParams);
    baseApiParams = {
        credentials: "same-origin",
        headers: {},
        redirect: "follow",
        referrerPolicy: "no-referrer",
    };
    constructor(apiConfig = {}) {
        Object.assign(this, apiConfig);
    }
    setSecurityData = (data) => {
        this.securityData = data;
    };
    encodeQueryParam(key, value) {
        const encodedKey = encodeURIComponent(key);
        return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
    }
    addQueryParam(query, key) {
        return this.encodeQueryParam(key, query[key]);
    }
    addArrayQueryParam(query, key) {
        const value = query[key];
        return value.map((v) => this.encodeQueryParam(key, v)).join("&");
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
            .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
            .join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    contentFormatters = {
        [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
        [ContentType.Text]: (input) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
        [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            formData.append(key, property instanceof Blob
                ? property
                : typeof property === "object" && property !== null
                    ? JSON.stringify(property)
                    : `${property}`);
            return formData;
        }, new FormData()),
        [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
    };
    mergeRequestParams(params1, params2) {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }
    createAbortSignal = (cancelToken) => {
        if (this.abortControllers.has(cancelToken)) {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                return abortController.signal;
            }
            return void 0;
        }
        const abortController = new AbortController();
        this.abortControllers.set(cancelToken, abortController);
        return abortController.signal;
    };
    abortRequest = (cancelToken) => {
        const abortController = this.abortControllers.get(cancelToken);
        if (abortController) {
            abortController.abort();
            this.abortControllers.delete(cancelToken);
        }
    };
    request = async ({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }) => {
        const secureParams = ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
            this.securityWorker &&
            (await this.securityWorker(this.securityData))) ||
            {};
        const requestParams = this.mergeRequestParams(params, secureParams);
        const queryString = query && this.toQueryString(query);
        const payloadFormatter = this.contentFormatters[type || ContentType.Json];
        const responseFormat = format || requestParams.format;
        return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
            ...requestParams,
            headers: {
                ...(requestParams.headers || {}),
                ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
            },
            signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
            body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
        }).then(async (response) => {
            const r = response.clone();
            r.data = null;
            r.error = null;
            const data = !responseFormat
                ? r
                : await response[responseFormat]()
                    .then((data) => {
                    if (r.ok) {
                        r.data = data;
                    }
                    else {
                        r.error = data;
                    }
                    return r;
                })
                    .catch((e) => {
                    r.error = e;
                    return r;
                });
            if (cancelToken) {
                this.abortControllers.delete(cancelToken);
            }
            if (!response.ok)
                throw data;
            return data;
        });
    };
}
/**
 * @title Shortcut API
 * @version 3.0
 * @baseUrl https://api.app.shortcut.com
 *
 * Shortcut API
 */
export class Api extends HttpClient {
    api = {
        /**
         * @description List Categories returns a list of all Categories and their attributes.
         *
         * @name ListCategories
         * @summary List Categories
         * @request GET:/api/v3/categories
         * @secure
         */
        listCategories: (params = {}) => this.request({
            path: `/api/v3/categories`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Create Category allows you to create a new Category in Shortcut.
         *
         * @name CreateCategory
         * @summary Create Category
         * @request POST:/api/v3/categories
         * @secure
         */
        createCategory: (CreateCategory, params = {}) => this.request({
            path: `/api/v3/categories`,
            method: "POST",
            body: CreateCategory,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Category returns information about the selected Category.
         *
         * @name GetCategory
         * @summary Get Category
         * @request GET:/api/v3/categories/{category-public-id}
         * @secure
         */
        getCategory: (categoryPublicId, params = {}) => this.request({
            path: `/api/v3/categories/${categoryPublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Update Category allows you to replace a Category name with another name. If you try to name a Category something that already exists, you will receive a 422 response.
         *
         * @name UpdateCategory
         * @summary Update Category
         * @request PUT:/api/v3/categories/{category-public-id}
         * @secure
         */
        updateCategory: (categoryPublicId, UpdateCategory, params = {}) => this.request({
            path: `/api/v3/categories/${categoryPublicId}`,
            method: "PUT",
            body: UpdateCategory,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Delete Category can be used to delete any Category.
         *
         * @name DeleteCategory
         * @summary Delete Category
         * @request DELETE:/api/v3/categories/{category-public-id}
         * @secure
         */
        deleteCategory: (categoryPublicId, params = {}) => this.request({
            path: `/api/v3/categories/${categoryPublicId}`,
            method: "DELETE",
            secure: true,
            ...params,
        }),
        /**
         * @description List Category Milestones returns a list of all Milestones with the Category.
         *
         * @name ListCategoryMilestones
         * @summary List Category Milestones
         * @request GET:/api/v3/categories/{category-public-id}/milestones
         * @secure
         */
        listCategoryMilestones: (categoryPublicId, params = {}) => this.request({
            path: `/api/v3/categories/${categoryPublicId}/milestones`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Returns a list of all Objectives with the Category.
         *
         * @name ListCategoryObjectives
         * @summary List Category Objectives
         * @request GET:/api/v3/categories/{category-public-id}/objectives
         * @secure
         */
        listCategoryObjectives: (categoryPublicId, params = {}) => this.request({
            path: `/api/v3/categories/${categoryPublicId}/objectives`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ListCustomFields
         * @summary List Custom Fields
         * @request GET:/api/v3/custom-fields
         * @secure
         */
        listCustomFields: (params = {}) => this.request({
            path: `/api/v3/custom-fields`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetCustomField
         * @summary Get Custom Field
         * @request GET:/api/v3/custom-fields/{custom-field-public-id}
         * @secure
         */
        getCustomField: (customFieldPublicId, params = {}) => this.request({
            path: `/api/v3/custom-fields/${customFieldPublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Update Custom Field can be used to update the definition of a Custom Field. The order of items in the 'values' collection is interpreted to be their ascending sort order.To delete an existing enum value, simply omit it from the 'values' collection. New enum values may be created inline by including an object in the 'values' collection having a 'value' entry with no 'id' (eg. {'value': 'myNewValue', 'color_key': 'green'}).
         *
         * @name UpdateCustomField
         * @summary Update Custom Field
         * @request PUT:/api/v3/custom-fields/{custom-field-public-id}
         * @secure
         */
        updateCustomField: (customFieldPublicId, UpdateCustomField, params = {}) => this.request({
            path: `/api/v3/custom-fields/${customFieldPublicId}`,
            method: "PUT",
            body: UpdateCustomField,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name DeleteCustomField
         * @summary Delete Custom Field
         * @request DELETE:/api/v3/custom-fields/{custom-field-public-id}
         * @secure
         */
        deleteCustomField: (customFieldPublicId, params = {}) => this.request({
            path: `/api/v3/custom-fields/${customFieldPublicId}`,
            method: "DELETE",
            secure: true,
            ...params,
        }),
        /**
         * @description List all the entity templates for the Workspace.
         *
         * @name ListEntityTemplates
         * @summary List Entity Templates
         * @request GET:/api/v3/entity-templates
         * @secure
         */
        listEntityTemplates: (params = {}) => this.request({
            path: `/api/v3/entity-templates`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Create a new entity template for the Workspace.
         *
         * @name CreateEntityTemplate
         * @summary Create Entity Template
         * @request POST:/api/v3/entity-templates
         * @secure
         */
        createEntityTemplate: (CreateEntityTemplate, params = {}) => this.request({
            path: `/api/v3/entity-templates`,
            method: "POST",
            body: CreateEntityTemplate,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Disables the Story Template feature for the Workspace.
         *
         * @name DisableStoryTemplates
         * @summary Disable Story Templates
         * @request PUT:/api/v3/entity-templates/disable
         * @secure
         */
        disableStoryTemplates: (params = {}) => this.request({
            path: `/api/v3/entity-templates/disable`,
            method: "PUT",
            secure: true,
            ...params,
        }),
        /**
         * @description Enables the Story Template feature for the Workspace.
         *
         * @name EnableStoryTemplates
         * @summary Enable Story Templates
         * @request PUT:/api/v3/entity-templates/enable
         * @secure
         */
        enableStoryTemplates: (params = {}) => this.request({
            path: `/api/v3/entity-templates/enable`,
            method: "PUT",
            secure: true,
            ...params,
        }),
        /**
         * @description Get Entity Template returns information about a given entity template.
         *
         * @name GetEntityTemplate
         * @summary Get Entity Template
         * @request GET:/api/v3/entity-templates/{entity-template-public-id}
         * @secure
         */
        getEntityTemplate: (entityTemplatePublicId, params = {}) => this.request({
            path: `/api/v3/entity-templates/${entityTemplatePublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Update an entity template's name or its contents.
         *
         * @name UpdateEntityTemplate
         * @summary Update Entity Template
         * @request PUT:/api/v3/entity-templates/{entity-template-public-id}
         * @secure
         */
        updateEntityTemplate: (entityTemplatePublicId, UpdateEntityTemplate, params = {}) => this.request({
            path: `/api/v3/entity-templates/${entityTemplatePublicId}`,
            method: "PUT",
            body: UpdateEntityTemplate,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name DeleteEntityTemplate
         * @summary Delete Entity Template
         * @request DELETE:/api/v3/entity-templates/{entity-template-public-id}
         * @secure
         */
        deleteEntityTemplate: (entityTemplatePublicId, params = {}) => this.request({
            path: `/api/v3/entity-templates/${entityTemplatePublicId}`,
            method: "DELETE",
            secure: true,
            ...params,
        }),
        /**
         * @description Returns the Epic Workflow for the Workspace.
         *
         * @name GetEpicWorkflow
         * @summary Get Epic Workflow
         * @request GET:/api/v3/epic-workflow
         * @secure
         */
        getEpicWorkflow: (params = {}) => this.request({
            path: `/api/v3/epic-workflow`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description List Epics returns a list of all Epics and their attributes.
         *
         * @name ListEpics
         * @summary List Epics
         * @request GET:/api/v3/epics
         * @secure
         */
        listEpics: (query, params = {}) => this.request({
            path: `/api/v3/epics`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Create Epic allows you to create a new Epic in Shortcut.
         *
         * @name CreateEpic
         * @summary Create Epic
         * @request POST:/api/v3/epics
         * @secure
         */
        createEpic: (CreateEpic, params = {}) => this.request({
            path: `/api/v3/epics`,
            method: "POST",
            body: CreateEpic,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Epic returns information about the selected Epic.
         *
         * @name GetEpic
         * @summary Get Epic
         * @request GET:/api/v3/epics/{epic-public-id}
         * @secure
         */
        getEpic: (epicPublicId, params = {}) => this.request({
            path: `/api/v3/epics/${epicPublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Update Epic can be used to update numerous fields in the Epic. The only required parameter is Epic ID, which can be found in the Shortcut UI.
         *
         * @name UpdateEpic
         * @summary Update Epic
         * @request PUT:/api/v3/epics/{epic-public-id}
         * @secure
         */
        updateEpic: (epicPublicId, UpdateEpic, params = {}) => this.request({
            path: `/api/v3/epics/${epicPublicId}`,
            method: "PUT",
            body: UpdateEpic,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Delete Epic can be used to delete the Epic. The only required parameter is Epic ID.
         *
         * @name DeleteEpic
         * @summary Delete Epic
         * @request DELETE:/api/v3/epics/{epic-public-id}
         * @secure
         */
        deleteEpic: (epicPublicId, params = {}) => this.request({
            path: `/api/v3/epics/${epicPublicId}`,
            method: "DELETE",
            secure: true,
            ...params,
        }),
        /**
         * @description Get a list of all Comments on an Epic.
         *
         * @name ListEpicComments
         * @summary List Epic Comments
         * @request GET:/api/v3/epics/{epic-public-id}/comments
         * @secure
         */
        listEpicComments: (epicPublicId, params = {}) => this.request({
            path: `/api/v3/epics/${epicPublicId}/comments`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description This endpoint allows you to create a threaded Comment on an Epic.
         *
         * @name CreateEpicComment
         * @summary Create Epic Comment
         * @request POST:/api/v3/epics/{epic-public-id}/comments
         * @secure
         */
        createEpicComment: (epicPublicId, CreateEpicComment, params = {}) => this.request({
            path: `/api/v3/epics/${epicPublicId}/comments`,
            method: "POST",
            body: CreateEpicComment,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description This endpoint allows you to create a nested Comment reply to an existing Epic Comment.
         *
         * @name CreateEpicCommentComment
         * @summary Create Epic Comment Comment
         * @request POST:/api/v3/epics/{epic-public-id}/comments/{comment-public-id}
         * @secure
         */
        createEpicCommentComment: (epicPublicId, commentPublicId, CreateCommentComment, params = {}) => this.request({
            path: `/api/v3/epics/${epicPublicId}/comments/${commentPublicId}`,
            method: "POST",
            body: CreateCommentComment,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description This endpoint returns information about the selected Epic Comment.
         *
         * @name GetEpicComment
         * @summary Get Epic Comment
         * @request GET:/api/v3/epics/{epic-public-id}/comments/{comment-public-id}
         * @secure
         */
        getEpicComment: (epicPublicId, commentPublicId, params = {}) => this.request({
            path: `/api/v3/epics/${epicPublicId}/comments/${commentPublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description This endpoint allows you to update a threaded Comment on an Epic.
         *
         * @name UpdateEpicComment
         * @summary Update Epic Comment
         * @request PUT:/api/v3/epics/{epic-public-id}/comments/{comment-public-id}
         * @secure
         */
        updateEpicComment: (epicPublicId, commentPublicId, UpdateComment, params = {}) => this.request({
            path: `/api/v3/epics/${epicPublicId}/comments/${commentPublicId}`,
            method: "PUT",
            body: UpdateComment,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description This endpoint allows you to delete a Comment from an Epic.
         *
         * @name DeleteEpicComment
         * @summary Delete Epic Comment
         * @request DELETE:/api/v3/epics/{epic-public-id}/comments/{comment-public-id}
         * @secure
         */
        deleteEpicComment: (epicPublicId, commentPublicId, params = {}) => this.request({
            path: `/api/v3/epics/${epicPublicId}/comments/${commentPublicId}`,
            method: "DELETE",
            secure: true,
            ...params,
        }),
        /**
         * @description Get a list of all Stories in an Epic.
         *
         * @name ListEpicStories
         * @summary List Epic Stories
         * @request GET:/api/v3/epics/{epic-public-id}/stories
         * @secure
         */
        listEpicStories: (epicPublicId, query, params = {}) => this.request({
            path: `/api/v3/epics/${epicPublicId}/stories`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description This endpoint allows you to unlink a productboard epic.
         *
         * @name UnlinkProductboardFromEpic
         * @summary Unlink Productboard from Epic
         * @request POST:/api/v3/epics/{epic-public-id}/unlink-productboard
         * @secure
         */
        unlinkProductboardFromEpic: (epicPublicId, params = {}) => this.request({
            path: `/api/v3/epics/${epicPublicId}/unlink-productboard`,
            method: "POST",
            secure: true,
            ...params,
        }),
        /**
         * @description Get Stories which have a given External Link associated with them.
         *
         * @name GetExternalLinkStories
         * @summary Get External Link Stories
         * @request GET:/api/v3/external-link/stories
         * @secure
         */
        getExternalLinkStories: (query, params = {}) => this.request({
            path: `/api/v3/external-link/stories`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description List Files returns a list of all UploadedFiles in the workspace.
         *
         * @name ListFiles
         * @summary List Files
         * @request GET:/api/v3/files
         * @secure
         */
        listFiles: (params = {}) => this.request({
            path: `/api/v3/files`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Upload Files uploads one or many files and optionally associates them with a story. Use the multipart/form-data content-type to upload. Each `file` key should contain a separate file. Each UploadedFile's name comes from the Content-Disposition header "filename" directive for that field.
         *
         * @name UploadFiles
         * @summary Upload Files
         * @request POST:/api/v3/files
         * @secure
         */
        uploadFiles: (data, params = {}) => this.request({
            path: `/api/v3/files`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.FormData,
            format: "json",
            ...params,
        }),
        /**
         * @description Get File returns information about the selected UploadedFile.
         *
         * @name GetFile
         * @summary Get File
         * @request GET:/api/v3/files/{file-public-id}
         * @secure
         */
        getFile: (filePublicId, params = {}) => this.request({
            path: `/api/v3/files/${filePublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Update File updates the properties of an UploadedFile (but not its content).
         *
         * @name UpdateFile
         * @summary Update File
         * @request PUT:/api/v3/files/{file-public-id}
         * @secure
         */
        updateFile: (filePublicId, UpdateFile, params = {}) => this.request({
            path: `/api/v3/files/${filePublicId}`,
            method: "PUT",
            body: UpdateFile,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Delete File deletes a previously uploaded file.
         *
         * @name DeleteFile
         * @summary Delete File
         * @request DELETE:/api/v3/files/{file-public-id}
         * @secure
         */
        deleteFile: (filePublicId, params = {}) => this.request({
            path: `/api/v3/files/${filePublicId}`,
            method: "DELETE",
            secure: true,
            ...params,
        }),
        /**
         * @description A group in our API maps to a "Team" within the Shortcut Product. A Team is a collection of Users that can be associated to Stories, Epics, and Iterations within Shortcut.
         *
         * @name ListGroups
         * @summary List Groups
         * @request GET:/api/v3/groups
         * @secure
         */
        listGroups: (params = {}) => this.request({
            path: `/api/v3/groups`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name CreateGroup
         * @summary Create Group
         * @request POST:/api/v3/groups
         * @secure
         */
        createGroup: (CreateGroup, params = {}) => this.request({
            path: `/api/v3/groups`,
            method: "POST",
            body: CreateGroup,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name GetGroup
         * @summary Get Group
         * @request GET:/api/v3/groups/{group-public-id}
         * @secure
         */
        getGroup: (groupPublicId, params = {}) => this.request({
            path: `/api/v3/groups/${groupPublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name UpdateGroup
         * @summary Update Group
         * @request PUT:/api/v3/groups/{group-public-id}
         * @secure
         */
        updateGroup: (groupPublicId, UpdateGroup, params = {}) => this.request({
            path: `/api/v3/groups/${groupPublicId}`,
            method: "PUT",
            body: UpdateGroup,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description List the Stories assigned to the Group. (By default, limited to 1,000).
         *
         * @name ListGroupStories
         * @summary List Group Stories
         * @request GET:/api/v3/groups/{group-public-id}/stories
         * @secure
         */
        listGroupStories: (groupPublicId, query, params = {}) => this.request({
            path: `/api/v3/groups/${groupPublicId}/stories`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name ListIterations
         * @summary List Iterations
         * @request GET:/api/v3/iterations
         * @secure
         */
        listIterations: (params = {}) => this.request({
            path: `/api/v3/iterations`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name CreateIteration
         * @summary Create Iteration
         * @request POST:/api/v3/iterations
         * @secure
         */
        createIteration: (CreateIteration, params = {}) => this.request({
            path: `/api/v3/iterations`,
            method: "POST",
            body: CreateIteration,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Disables Iterations for the current workspace
         *
         * @name DisableIterations
         * @summary Disable Iterations
         * @request PUT:/api/v3/iterations/disable
         * @secure
         */
        disableIterations: (params = {}) => this.request({
            path: `/api/v3/iterations/disable`,
            method: "PUT",
            secure: true,
            ...params,
        }),
        /**
         * @description Enables Iterations for the current workspace
         *
         * @name EnableIterations
         * @summary Enable Iterations
         * @request PUT:/api/v3/iterations/enable
         * @secure
         */
        enableIterations: (params = {}) => this.request({
            path: `/api/v3/iterations/enable`,
            method: "PUT",
            secure: true,
            ...params,
        }),
        /**
         * No description
         *
         * @name GetIteration
         * @summary Get Iteration
         * @request GET:/api/v3/iterations/{iteration-public-id}
         * @secure
         */
        getIteration: (iterationPublicId, params = {}) => this.request({
            path: `/api/v3/iterations/${iterationPublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name UpdateIteration
         * @summary Update Iteration
         * @request PUT:/api/v3/iterations/{iteration-public-id}
         * @secure
         */
        updateIteration: (iterationPublicId, UpdateIteration, params = {}) => this.request({
            path: `/api/v3/iterations/${iterationPublicId}`,
            method: "PUT",
            body: UpdateIteration,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name DeleteIteration
         * @summary Delete Iteration
         * @request DELETE:/api/v3/iterations/{iteration-public-id}
         * @secure
         */
        deleteIteration: (iterationPublicId, params = {}) => this.request({
            path: `/api/v3/iterations/${iterationPublicId}`,
            method: "DELETE",
            secure: true,
            ...params,
        }),
        /**
         * @description Get a list of all Stories in an Iteration.
         *
         * @name ListIterationStories
         * @summary List Iteration Stories
         * @request GET:/api/v3/iterations/{iteration-public-id}/stories
         * @secure
         */
        listIterationStories: (iterationPublicId, query, params = {}) => this.request({
            path: `/api/v3/iterations/${iterationPublicId}/stories`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Key Result returns information about a chosen Key Result.
         *
         * @name GetKeyResult
         * @summary Get Key Result
         * @request GET:/api/v3/key-results/{key-result-public-id}
         * @secure
         */
        getKeyResult: (keyResultPublicId, params = {}) => this.request({
            path: `/api/v3/key-results/${keyResultPublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Update Key Result allows updating a Key Result's name or initial, observed, or target values.
         *
         * @name UpdateKeyResult
         * @summary Update Key Result
         * @request PUT:/api/v3/key-results/{key-result-public-id}
         * @secure
         */
        updateKeyResult: (keyResultPublicId, UpdateKeyResult, params = {}) => this.request({
            path: `/api/v3/key-results/${keyResultPublicId}`,
            method: "PUT",
            body: UpdateKeyResult,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description List Labels returns a list of all Labels and their attributes.
         *
         * @name ListLabels
         * @summary List Labels
         * @request GET:/api/v3/labels
         * @secure
         */
        listLabels: (query, params = {}) => this.request({
            path: `/api/v3/labels`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Create Label allows you to create a new Label in Shortcut.
         *
         * @name CreateLabel
         * @summary Create Label
         * @request POST:/api/v3/labels
         * @secure
         */
        createLabel: (CreateLabelParams, params = {}) => this.request({
            path: `/api/v3/labels`,
            method: "POST",
            body: CreateLabelParams,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Label returns information about the selected Label.
         *
         * @name GetLabel
         * @summary Get Label
         * @request GET:/api/v3/labels/{label-public-id}
         * @secure
         */
        getLabel: (labelPublicId, params = {}) => this.request({
            path: `/api/v3/labels/${labelPublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Update Label allows you to replace a Label name with another name. If you try to name a Label something that already exists, you will receive a 422 response.
         *
         * @name UpdateLabel
         * @summary Update Label
         * @request PUT:/api/v3/labels/{label-public-id}
         * @secure
         */
        updateLabel: (labelPublicId, UpdateLabel, params = {}) => this.request({
            path: `/api/v3/labels/${labelPublicId}`,
            method: "PUT",
            body: UpdateLabel,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Delete Label can be used to delete any Label.
         *
         * @name DeleteLabel
         * @summary Delete Label
         * @request DELETE:/api/v3/labels/{label-public-id}
         * @secure
         */
        deleteLabel: (labelPublicId, params = {}) => this.request({
            path: `/api/v3/labels/${labelPublicId}`,
            method: "DELETE",
            secure: true,
            ...params,
        }),
        /**
         * @description List all of the Epics with the Label.
         *
         * @name ListLabelEpics
         * @summary List Label Epics
         * @request GET:/api/v3/labels/{label-public-id}/epics
         * @secure
         */
        listLabelEpics: (labelPublicId, params = {}) => this.request({
            path: `/api/v3/labels/${labelPublicId}/epics`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description List all of the Stories with the Label.
         *
         * @name ListLabelStories
         * @summary List Label Stories
         * @request GET:/api/v3/labels/{label-public-id}/stories
         * @secure
         */
        listLabelStories: (labelPublicId, query, params = {}) => this.request({
            path: `/api/v3/labels/${labelPublicId}/stories`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description List Linked Files returns a list of all Linked-Files and their attributes.
         *
         * @name ListLinkedFiles
         * @summary List Linked Files
         * @request GET:/api/v3/linked-files
         * @secure
         */
        listLinkedFiles: (params = {}) => this.request({
            path: `/api/v3/linked-files`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Create Linked File allows you to create a new Linked File in Shortcut.
         *
         * @name CreateLinkedFile
         * @summary Create Linked File
         * @request POST:/api/v3/linked-files
         * @secure
         */
        createLinkedFile: (CreateLinkedFile, params = {}) => this.request({
            path: `/api/v3/linked-files`,
            method: "POST",
            body: CreateLinkedFile,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get File returns information about the selected Linked File.
         *
         * @name GetLinkedFile
         * @summary Get Linked File
         * @request GET:/api/v3/linked-files/{linked-file-public-id}
         * @secure
         */
        getLinkedFile: (linkedFilePublicId, params = {}) => this.request({
            path: `/api/v3/linked-files/${linkedFilePublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Updated Linked File allows you to update properties of a previously attached Linked-File.
         *
         * @name UpdateLinkedFile
         * @summary Update Linked File
         * @request PUT:/api/v3/linked-files/{linked-file-public-id}
         * @secure
         */
        updateLinkedFile: (linkedFilePublicId, UpdateLinkedFile, params = {}) => this.request({
            path: `/api/v3/linked-files/${linkedFilePublicId}`,
            method: "PUT",
            body: UpdateLinkedFile,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Delete Linked File can be used to delete any previously attached Linked-File.
         *
         * @name DeleteLinkedFile
         * @summary Delete Linked File
         * @request DELETE:/api/v3/linked-files/{linked-file-public-id}
         * @secure
         */
        deleteLinkedFile: (linkedFilePublicId, params = {}) => this.request({
            path: `/api/v3/linked-files/${linkedFilePublicId}`,
            method: "DELETE",
            secure: true,
            ...params,
        }),
        /**
         * @description Returns information about the authenticated member.
         *
         * @name GetCurrentMemberInfo
         * @summary Get Current Member Info
         * @request GET:/api/v3/member
         * @secure
         */
        getCurrentMemberInfo: (params = {}) => this.request({
            path: `/api/v3/member`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Returns information about members of the Workspace.
         *
         * @name ListMembers
         * @summary List Members
         * @request GET:/api/v3/members
         * @secure
         */
        listMembers: (query, params = {}) => this.request({
            path: `/api/v3/members`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Returns information about a Member.
         *
         * @name GetMember
         * @summary Get Member
         * @request GET:/api/v3/members/{member-public-id}
         * @secure
         */
        getMember: (memberPublicId, query, params = {}) => this.request({
            path: `/api/v3/members/${memberPublicId}`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description (Deprecated: Use 'List Objectives') List Milestones returns a list of all Milestones and their attributes.
         *
         * @name ListMilestones
         * @summary List Milestones
         * @request GET:/api/v3/milestones
         * @secure
         */
        listMilestones: (params = {}) => this.request({
            path: `/api/v3/milestones`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description (Deprecated: Use 'Create Objective') Create Milestone allows you to create a new Milestone in Shortcut.
         *
         * @name CreateMilestone
         * @summary Create Milestone
         * @request POST:/api/v3/milestones
         * @secure
         */
        createMilestone: (CreateMilestone, params = {}) => this.request({
            path: `/api/v3/milestones`,
            method: "POST",
            body: CreateMilestone,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description (Deprecated: Use 'Get Objective') Get Milestone returns information about a chosen Milestone.
         *
         * @name GetMilestone
         * @summary Get Milestone
         * @request GET:/api/v3/milestones/{milestone-public-id}
         * @secure
         */
        getMilestone: (milestonePublicId, params = {}) => this.request({
            path: `/api/v3/milestones/${milestonePublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description (Deprecated: Use 'Update Objective') Update Milestone can be used to update Milestone properties.
         *
         * @name UpdateMilestone
         * @summary Update Milestone
         * @request PUT:/api/v3/milestones/{milestone-public-id}
         * @secure
         */
        updateMilestone: (milestonePublicId, UpdateMilestone, params = {}) => this.request({
            path: `/api/v3/milestones/${milestonePublicId}`,
            method: "PUT",
            body: UpdateMilestone,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description (Deprecated: Use 'Delete Objective') Delete Milestone can be used to delete any Milestone.
         *
         * @name DeleteMilestone
         * @summary Delete Milestone
         * @request DELETE:/api/v3/milestones/{milestone-public-id}
         * @secure
         */
        deleteMilestone: (milestonePublicId, params = {}) => this.request({
            path: `/api/v3/milestones/${milestonePublicId}`,
            method: "DELETE",
            secure: true,
            ...params,
        }),
        /**
         * @description (Deprecated: Use 'List Objective Epics') List all of the Epics within the Milestone.
         *
         * @name ListMilestoneEpics
         * @summary List Milestone Epics
         * @request GET:/api/v3/milestones/{milestone-public-id}/epics
         * @secure
         */
        listMilestoneEpics: (milestonePublicId, params = {}) => this.request({
            path: `/api/v3/milestones/${milestonePublicId}/epics`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description List Objectives returns a list of all Objectives and their attributes.
         *
         * @name ListObjectives
         * @summary List Objectives
         * @request GET:/api/v3/objectives
         * @secure
         */
        listObjectives: (params = {}) => this.request({
            path: `/api/v3/objectives`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Create Objective allows you to create a new Objective in Shortcut.
         *
         * @name CreateObjective
         * @summary Create Objective
         * @request POST:/api/v3/objectives
         * @secure
         */
        createObjective: (CreateObjective, params = {}) => this.request({
            path: `/api/v3/objectives`,
            method: "POST",
            body: CreateObjective,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Objective returns information about a chosen Objective.
         *
         * @name GetObjective
         * @summary Get Objective
         * @request GET:/api/v3/objectives/{objective-public-id}
         * @secure
         */
        getObjective: (objectivePublicId, params = {}) => this.request({
            path: `/api/v3/objectives/${objectivePublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Update Objective can be used to update Objective properties.
         *
         * @name UpdateObjective
         * @summary Update Objective
         * @request PUT:/api/v3/objectives/{objective-public-id}
         * @secure
         */
        updateObjective: (objectivePublicId, UpdateObjective, params = {}) => this.request({
            path: `/api/v3/objectives/${objectivePublicId}`,
            method: "PUT",
            body: UpdateObjective,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Delete Objective can be used to delete any Objective.
         *
         * @name DeleteObjective
         * @summary Delete Objective
         * @request DELETE:/api/v3/objectives/{objective-public-id}
         * @secure
         */
        deleteObjective: (objectivePublicId, params = {}) => this.request({
            path: `/api/v3/objectives/${objectivePublicId}`,
            method: "DELETE",
            secure: true,
            ...params,
        }),
        /**
         * @description List all of the Epics within the Objective.
         *
         * @name ListObjectiveEpics
         * @summary List Objective Epics
         * @request GET:/api/v3/objectives/{objective-public-id}/epics
         * @secure
         */
        listObjectiveEpics: (objectivePublicId, params = {}) => this.request({
            path: `/api/v3/objectives/${objectivePublicId}/epics`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description List Projects returns a list of all Projects and their attributes.
         *
         * @name ListProjects
         * @summary List Projects
         * @request GET:/api/v3/projects
         * @secure
         */
        listProjects: (params = {}) => this.request({
            path: `/api/v3/projects`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Create Project is used to create a new Shortcut Project.
         *
         * @name CreateProject
         * @summary Create Project
         * @request POST:/api/v3/projects
         * @secure
         */
        createProject: (CreateProject, params = {}) => this.request({
            path: `/api/v3/projects`,
            method: "POST",
            body: CreateProject,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Project returns information about the selected Project.
         *
         * @name GetProject
         * @summary Get Project
         * @request GET:/api/v3/projects/{project-public-id}
         * @secure
         */
        getProject: (projectPublicId, params = {}) => this.request({
            path: `/api/v3/projects/${projectPublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Update Project can be used to change properties of a Project.
         *
         * @name UpdateProject
         * @summary Update Project
         * @request PUT:/api/v3/projects/{project-public-id}
         * @secure
         */
        updateProject: (projectPublicId, UpdateProject, params = {}) => this.request({
            path: `/api/v3/projects/${projectPublicId}`,
            method: "PUT",
            body: UpdateProject,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Delete Project can be used to delete a Project. Projects can only be deleted if all associated Stories are moved or deleted. In the case that the Project cannot be deleted, you will receive a 422 response.
         *
         * @name DeleteProject
         * @summary Delete Project
         * @request DELETE:/api/v3/projects/{project-public-id}
         * @secure
         */
        deleteProject: (projectPublicId, params = {}) => this.request({
            path: `/api/v3/projects/${projectPublicId}`,
            method: "DELETE",
            secure: true,
            ...params,
        }),
        /**
         * @description List Stories returns a list of all Stories in a selected Project and their attributes.
         *
         * @name ListStories
         * @summary List Stories
         * @request GET:/api/v3/projects/{project-public-id}/stories
         * @secure
         */
        listStories: (projectPublicId, query, params = {}) => this.request({
            path: `/api/v3/projects/${projectPublicId}/stories`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description List Repositories returns a list of all Repositories and their attributes.
         *
         * @name ListRepositories
         * @summary List Repositories
         * @request GET:/api/v3/repositories
         * @secure
         */
        listRepositories: (params = {}) => this.request({
            path: `/api/v3/repositories`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Repository returns information about the selected Repository.
         *
         * @name GetRepository
         * @summary Get Repository
         * @request GET:/api/v3/repositories/{repo-public-id}
         * @secure
         */
        getRepository: (repoPublicId, params = {}) => this.request({
            path: `/api/v3/repositories/${repoPublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Search lets you search Epics and Stories based on desired parameters. Since ordering of the results can change over time (due to search ranking decay, new Epics and Stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
         *
         * @name Search
         * @summary Search
         * @request GET:/api/v3/search
         * @secure
         */
        search: (query, params = {}) => this.request({
            path: `/api/v3/search`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Search Epics lets you search Epics based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new Epics being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
         *
         * @name SearchEpics
         * @summary Search Epics
         * @request GET:/api/v3/search/epics
         * @secure
         */
        searchEpics: (query, params = {}) => this.request({
            path: `/api/v3/search/epics`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Search Iterations lets you search Iterations based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Iterations being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
         *
         * @name SearchIterations
         * @summary Search Iterations
         * @request GET:/api/v3/search/iterations
         * @secure
         */
        searchIterations: (query, params = {}) => this.request({
            path: `/api/v3/search/iterations`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Search Milestones lets you search Milestones based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Milestones being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
         *
         * @name SearchMilestones
         * @summary Search Milestones
         * @request GET:/api/v3/search/milestones
         * @secure
         */
        searchMilestones: (query, params = {}) => this.request({
            path: `/api/v3/search/milestones`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Search Objectives lets you search Objectives based on desired parameters. Since ordering of results can change over time (due to search ranking decay, new Objectives being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
         *
         * @name SearchObjectives
         * @summary Search Objectives
         * @request GET:/api/v3/search/objectives
         * @secure
         */
        searchObjectives: (query, params = {}) => this.request({
            path: `/api/v3/search/objectives`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Search Stories lets you search Stories based on desired parameters. Since ordering of stories can change over time (due to search ranking decay, new stories being created), the `next` value from the previous response can be used as the path and query string for the next page to ensure stable ordering.
         *
         * @name SearchStories
         * @summary Search Stories
         * @request GET:/api/v3/search/stories
         * @secure
         */
        searchStories: (query, params = {}) => this.request({
            path: `/api/v3/search/stories`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Create Story is used to add a new story to your Shortcut Workspace. This endpoint requires that either **workflow_state_id** or **project_id** be provided, but will reject the request if both or neither are specified. The workflow_state_id has been marked as required and is the recommended field to specify because we are in the process of sunsetting Projects in Shortcut.
         *
         * @name CreateStory
         * @summary Create Story
         * @request POST:/api/v3/stories
         * @secure
         */
        createStory: (CreateStoryParams, params = {}) => this.request({
            path: `/api/v3/stories`,
            method: "POST",
            body: CreateStoryParams,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Create Multiple Stories allows you to create multiple stories in a single request using the same syntax as [Create Story](https://developer.shortcut.com/api/rest/v3#create-story).
         *
         * @name CreateMultipleStories
         * @summary Create Multiple Stories
         * @request POST:/api/v3/stories/bulk
         * @secure
         */
        createMultipleStories: (CreateStories, params = {}) => this.request({
            path: `/api/v3/stories/bulk`,
            method: "POST",
            body: CreateStories,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Update Multiple Stories allows you to make changes to numerous stories at once.
         *
         * @name UpdateMultipleStories
         * @summary Update Multiple Stories
         * @request PUT:/api/v3/stories/bulk
         * @secure
         */
        updateMultipleStories: (UpdateStories, params = {}) => this.request({
            path: `/api/v3/stories/bulk`,
            method: "PUT",
            body: UpdateStories,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Delete Multiple Stories allows you to delete multiple archived stories at once.
         *
         * @name DeleteMultipleStories
         * @summary Delete Multiple Stories
         * @request DELETE:/api/v3/stories/bulk
         * @secure
         */
        deleteMultipleStories: (DeleteStories, params = {}) => this.request({
            path: `/api/v3/stories/bulk`,
            method: "DELETE",
            body: DeleteStories,
            secure: true,
            type: ContentType.Json,
            ...params,
        }),
        /**
         * @description Create Story From Template is used to add a new story derived from a template to your Shortcut Workspace.
         *
         * @name CreateStoryFromTemplate
         * @summary Create Story From Template
         * @request POST:/api/v3/stories/from-template
         * @secure
         */
        createStoryFromTemplate: (CreateStoryFromTemplateParams, params = {}) => this.request({
            path: `/api/v3/stories/from-template`,
            method: "POST",
            body: CreateStoryFromTemplateParams,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Search Stories lets you search Stories based on desired parameters.
         *
         * @name SearchStoriesOld
         * @summary Search Stories (Old)
         * @request POST:/api/v3/stories/search
         * @secure
         */
        searchStoriesOld: (SearchStories, params = {}) => this.request({
            path: `/api/v3/stories/search`,
            method: "POST",
            body: SearchStories,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Story returns information about a chosen Story.
         *
         * @name GetStory
         * @summary Get Story
         * @request GET:/api/v3/stories/{story-public-id}
         * @secure
         */
        getStory: (storyPublicId, params = {}) => this.request({
            path: `/api/v3/stories/${storyPublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Update Story can be used to update Story properties.
         *
         * @name UpdateStory
         * @summary Update Story
         * @request PUT:/api/v3/stories/{story-public-id}
         * @secure
         */
        updateStory: (storyPublicId, UpdateStory, params = {}) => this.request({
            path: `/api/v3/stories/${storyPublicId}`,
            method: "PUT",
            body: UpdateStory,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Delete Story can be used to delete any Story.
         *
         * @name DeleteStory
         * @summary Delete Story
         * @request DELETE:/api/v3/stories/{story-public-id}
         * @secure
         */
        deleteStory: (storyPublicId, params = {}) => this.request({
            path: `/api/v3/stories/${storyPublicId}`,
            method: "DELETE",
            secure: true,
            ...params,
        }),
        /**
         * @description Lists Comments associated with a Story
         *
         * @name ListStoryComment
         * @summary List Story Comment
         * @request GET:/api/v3/stories/{story-public-id}/comments
         * @secure
         */
        listStoryComment: (storyPublicId, params = {}) => this.request({
            path: `/api/v3/stories/${storyPublicId}/comments`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Create Comment allows you to create a Comment on any Story.
         *
         * @name CreateStoryComment
         * @summary Create Story Comment
         * @request POST:/api/v3/stories/{story-public-id}/comments
         * @secure
         */
        createStoryComment: (storyPublicId, CreateStoryComment, params = {}) => this.request({
            path: `/api/v3/stories/${storyPublicId}/comments`,
            method: "POST",
            body: CreateStoryComment,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Comment is used to get Comment information.
         *
         * @name GetStoryComment
         * @summary Get Story Comment
         * @request GET:/api/v3/stories/{story-public-id}/comments/{comment-public-id}
         * @secure
         */
        getStoryComment: (storyPublicId, commentPublicId, params = {}) => this.request({
            path: `/api/v3/stories/${storyPublicId}/comments/${commentPublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Update Comment replaces the text of the existing Comment.
         *
         * @name UpdateStoryComment
         * @summary Update Story Comment
         * @request PUT:/api/v3/stories/{story-public-id}/comments/{comment-public-id}
         * @secure
         */
        updateStoryComment: (storyPublicId, commentPublicId, UpdateStoryComment, params = {}) => this.request({
            path: `/api/v3/stories/${storyPublicId}/comments/${commentPublicId}`,
            method: "PUT",
            body: UpdateStoryComment,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Delete a Comment from any story.
         *
         * @name DeleteStoryComment
         * @summary Delete Story Comment
         * @request DELETE:/api/v3/stories/{story-public-id}/comments/{comment-public-id}
         * @secure
         */
        deleteStoryComment: (storyPublicId, commentPublicId, params = {}) => this.request({
            path: `/api/v3/stories/${storyPublicId}/comments/${commentPublicId}`,
            method: "DELETE",
            secure: true,
            ...params,
        }),
        /**
         * @description Create a reaction to a story comment.
         *
         * @name CreateStoryReaction
         * @summary Create Story Reaction
         * @request POST:/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions
         * @secure
         */
        createStoryReaction: (storyPublicId, commentPublicId, CreateOrDeleteStoryReaction, params = {}) => this.request({
            path: `/api/v3/stories/${storyPublicId}/comments/${commentPublicId}/reactions`,
            method: "POST",
            body: CreateOrDeleteStoryReaction,
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Delete a reaction from any story comment.
         *
         * @name DeleteStoryReaction
         * @summary Delete Story Reaction
         * @request DELETE:/api/v3/stories/{story-public-id}/comments/{comment-public-id}/reactions
         * @secure
         */
        deleteStoryReaction: (storyPublicId, commentPublicId, CreateOrDeleteStoryReaction, params = {}) => this.request({
            path: `/api/v3/stories/${storyPublicId}/comments/${commentPublicId}/reactions`,
            method: "DELETE",
            body: CreateOrDeleteStoryReaction,
            secure: true,
            ...params,
        }),
        /**
         * @description Unlinks a Comment from its linked Slack thread (Comment replies and Slack replies will no longer be synced)
         *
         * @name UnlinkCommentThreadFromSlack
         * @summary Unlink Comment thread from Slack
         * @request POST:/api/v3/stories/{story-public-id}/comments/{comment-public-id}/unlink-from-slack
         * @secure
         */
        unlinkCommentThreadFromSlack: (storyPublicId, commentPublicId, params = {}) => this.request({
            path: `/api/v3/stories/${storyPublicId}/comments/${commentPublicId}/unlink-from-slack`,
            method: "POST",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @name StoryHistory
         * @summary Story History
         * @request GET:/api/v3/stories/{story-public-id}/history
         * @secure
         */
        storyHistory: (storyPublicId, params = {}) => this.request({
            path: `/api/v3/stories/${storyPublicId}/history`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Create Task is used to create a new task in a Story.
         *
         * @name CreateTask
         * @summary Create Task
         * @request POST:/api/v3/stories/{story-public-id}/tasks
         * @secure
         */
        createTask: (storyPublicId, CreateTask, params = {}) => this.request({
            path: `/api/v3/stories/${storyPublicId}/tasks`,
            method: "POST",
            body: CreateTask,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Returns information about a chosen Task.
         *
         * @name GetTask
         * @summary Get Task
         * @request GET:/api/v3/stories/{story-public-id}/tasks/{task-public-id}
         * @secure
         */
        getTask: (storyPublicId, taskPublicId, params = {}) => this.request({
            path: `/api/v3/stories/${storyPublicId}/tasks/${taskPublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Update Task can be used to update Task properties.
         *
         * @name UpdateTask
         * @summary Update Task
         * @request PUT:/api/v3/stories/{story-public-id}/tasks/{task-public-id}
         * @secure
         */
        updateTask: (storyPublicId, taskPublicId, UpdateTask, params = {}) => this.request({
            path: `/api/v3/stories/${storyPublicId}/tasks/${taskPublicId}`,
            method: "PUT",
            body: UpdateTask,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Delete Task can be used to delete any previously created Task on a Story.
         *
         * @name DeleteTask
         * @summary Delete Task
         * @request DELETE:/api/v3/stories/{story-public-id}/tasks/{task-public-id}
         * @secure
         */
        deleteTask: (storyPublicId, taskPublicId, params = {}) => this.request({
            path: `/api/v3/stories/${storyPublicId}/tasks/${taskPublicId}`,
            method: "DELETE",
            secure: true,
            ...params,
        }),
        /**
         * @description Story Links (called Story Relationships in the UI) allow you create semantic relationships between two stories. The parameters read like an active voice grammatical sentence:  subject -> verb -> object. The subject story acts on the object Story; the object story is the direct object of the sentence. The subject story "blocks", "duplicates", or "relates to" the object story.  Examples: - "story 5 blocks story 6” -- story 6 is now "blocked" until story 5 is moved to a Done workflow state. - "story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be archived). - "story 7 relates to story 3”
         *
         * @name CreateStoryLink
         * @summary Create Story Link
         * @request POST:/api/v3/story-links
         * @secure
         */
        createStoryLink: (CreateStoryLink, params = {}) => this.request({
            path: `/api/v3/story-links`,
            method: "POST",
            body: CreateStoryLink,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Returns the stories and their relationship for the given Story Link.
         *
         * @name GetStoryLink
         * @summary Get Story Link
         * @request GET:/api/v3/story-links/{story-link-public-id}
         * @secure
         */
        getStoryLink: (storyLinkPublicId, params = {}) => this.request({
            path: `/api/v3/story-links/${storyLinkPublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Updates the stories and/or the relationship for the given Story Link.
         *
         * @name UpdateStoryLink
         * @summary Update Story Link
         * @request PUT:/api/v3/story-links/{story-link-public-id}
         * @secure
         */
        updateStoryLink: (storyLinkPublicId, UpdateStoryLink, params = {}) => this.request({
            path: `/api/v3/story-links/${storyLinkPublicId}`,
            method: "PUT",
            body: UpdateStoryLink,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Removes the relationship between the stories for the given Story Link.
         *
         * @name DeleteStoryLink
         * @summary Delete Story Link
         * @request DELETE:/api/v3/story-links/{story-link-public-id}
         * @secure
         */
        deleteStoryLink: (storyLinkPublicId, params = {}) => this.request({
            path: `/api/v3/story-links/${storyLinkPublicId}`,
            method: "DELETE",
            secure: true,
            ...params,
        }),
        /**
         * @description Returns a list of all Workflows in the Workspace.
         *
         * @name ListWorkflows
         * @summary List Workflows
         * @request GET:/api/v3/workflows
         * @secure
         */
        listWorkflows: (params = {}) => this.request({
            path: `/api/v3/workflows`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Workflow returns information about a chosen Workflow.
         *
         * @name GetWorkflow
         * @summary Get Workflow
         * @request GET:/api/v3/workflows/{workflow-public-id}
         * @secure
         */
        getWorkflow: (workflowPublicId, params = {}) => this.request({
            path: `/api/v3/workflows/${workflowPublicId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
    };
}
