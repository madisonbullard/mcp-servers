# .PagesApi

All URIs are relative to *https://api.notion.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PagesIdGet**](PagesApi.md#v1PagesIdGet) | **GET** /v1/pages/{id} | Retrieve a page
[**v1PagesIdPatch**](PagesApi.md#v1PagesIdPatch) | **PATCH** /v1/pages/{id} | Archive a page
[**v1PagesPageIdPropertiesPropertyIdGet**](PagesApi.md#v1PagesPageIdPropertiesPropertyIdGet) | **GET** /v1/pages/{page_id}/properties/{property_id} | Retrieve a page property item
[**v1PagesPost**](PagesApi.md#v1PagesPost) | **POST** /v1/pages/ | Create a page with content


# **v1PagesIdGet**
> any v1PagesIdGet()

Retrieves a Page object using the ID in the request path. This endpoint exposes page properties, not page content. 

### Example


```typescript
import { createConfiguration, PagesApi } from '';
import type { PagesApiV1PagesIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PagesApi(configuration);

const request: PagesApiV1PagesIdGetRequest = {
  
  id: "{{PAGE_ID}}",
  
  notionVersion: "{{NOTION_VERSION}}",
};

const data = await apiInstance.v1PagesIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **notionVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Date -  <br>  * Content-Type -  <br>  * Transfer-Encoding -  <br>  * Connection -  <br>  * Set-Cookie -  <br>  * X-DNS-Prefetch-Control -  <br>  * X-Frame-Options -  <br>  * Strict-Transport-Security -  <br>  * X-Download-Options -  <br>  * X-Content-Type-Options -  <br>  * X-XSS-Protection -  <br>  * Referrer-Policy -  <br>  * Content-Security-Policy -  <br>  * X-Content-Security-Policy -  <br>  * X-WebKit-CSP -  <br>  * ETag -  <br>  * Vary -  <br>  * CF-Cache-Status -  <br>  * Expect-CT -  <br>  * Server -  <br>  * CF-RAY -  <br>  * Content-Encoding -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1PagesIdPatch**
> any v1PagesIdPatch()


### Example


```typescript
import { createConfiguration, PagesApi } from '';
import type { PagesApiV1PagesIdPatchRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PagesApi(configuration);

const request: PagesApiV1PagesIdPatchRequest = {
  
  id: "{{PAGE_ID}}",
  
  notionVersion: "{{NOTION_VERSION}}",
  
  body: {},
};

const data = await apiInstance.v1PagesIdPatch(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **id** | [**string**] |  | defaults to undefined
 **notionVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Date -  <br>  * Content-Type -  <br>  * Transfer-Encoding -  <br>  * Connection -  <br>  * Set-Cookie -  <br>  * X-DNS-Prefetch-Control -  <br>  * X-Frame-Options -  <br>  * Strict-Transport-Security -  <br>  * X-Download-Options -  <br>  * X-Content-Type-Options -  <br>  * X-XSS-Protection -  <br>  * Referrer-Policy -  <br>  * Content-Security-Policy -  <br>  * X-Content-Security-Policy -  <br>  * X-WebKit-CSP -  <br>  * ETag -  <br>  * Vary -  <br>  * CF-Cache-Status -  <br>  * Expect-CT -  <br>  * Server -  <br>  * CF-RAY -  <br>  * Content-Encoding -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1PagesPageIdPropertiesPropertyIdGet**
> any v1PagesPageIdPropertiesPropertyIdGet()


### Example


```typescript
import { createConfiguration, PagesApi } from '';
import type { PagesApiV1PagesPageIdPropertiesPropertyIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PagesApi(configuration);

const request: PagesApiV1PagesPageIdPropertiesPropertyIdGetRequest = {
  
  pageId: "{{PAGE_ID}}",
  
  propertyId: "property_id_example",
  
  notionVersion: "{{NOTION_VERSION}}",
};

const data = await apiInstance.v1PagesPageIdPropertiesPropertyIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageId** | [**string**] |  | defaults to undefined
 **propertyId** | [**string**] |  | defaults to undefined
 **notionVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Date -  <br>  * Content-Type -  <br>  * Transfer-Encoding -  <br>  * Connection -  <br>  * Set-Cookie -  <br>  * X-DNS-Prefetch-Control -  <br>  * X-Frame-Options -  <br>  * Strict-Transport-Security -  <br>  * X-Download-Options -  <br>  * X-Content-Type-Options -  <br>  * X-XSS-Protection -  <br>  * Referrer-Policy -  <br>  * Content-Security-Policy -  <br>  * X-Content-Security-Policy -  <br>  * X-WebKit-CSP -  <br>  * ETag -  <br>  * Vary -  <br>  * CF-Cache-Status -  <br>  * Expect-CT -  <br>  * Server -  <br>  * CF-RAY -  <br>  * Content-Encoding -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1PagesPost**
> any v1PagesPost()


### Example


```typescript
import { createConfiguration, PagesApi } from '';
import type { PagesApiV1PagesPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PagesApi(configuration);

const request: PagesApiV1PagesPostRequest = {
  
  authorization: "Bearer secret_t1CdN9S8yicG5eWLUOfhcWaOscVnFXns",
  
  contentType: "application/json",
  
  notionVersion: "{{NOTION_VERSION}}",
  
  body: "{\n    \"parent\": {\n        \"database_id\": \"{{DATABASE_ID}}\"\n    },\n    \"properties\": {\n        \"Type\": {\n            \"select\": {\n                \"id\": \"f96d0d0a-5564-4a20-ab15-5f040d49759e\",\n                \"name\": \"Article\",\n                \"color\": \"default\"\n            }\n        },\n        \"Score /5\": {\n            \"select\": {\n                \"id\": \"5c944de7-3f4b-4567-b3a1-fa2c71c540b6\",\n                \"name\": \"⭐️⭐️⭐️⭐️⭐️\",\n                \"color\": \"default\"\n            }\n        },\n        \"Name\": {\n            \"title\": [\n                {\n                    \"text\": {\n                        \"content\": \"New Media Article\"\n                    }\n                }\n            ]\n        },\n        \"Status\": {\n            \"select\": {\n                \"id\": \"8c4a056e-6709-4dd1-ba58-d34d9480855a\",\n                \"name\": \"Ready to Start\",\n                \"color\": \"yellow\"\n            }\n        },\n        \"Publisher\": {\n            \"select\": {\n                \"id\": \"01f82d08-aa1f-4884-a4e0-3bc32f909ec4\",\n                \"name\": \"The Atlantic\",\n                \"color\": \"red\"\n            }\n        },\n        \"Publishing/Release Date\": {\n            \"date\": {\n                \"start\": \"2020-12-08T12:00:00Z\",\n                \"end\": null\n            }\n        },\n        \"Link\": {\n            \"url\": \"https://www.nytimes.com/2018/10/21/opinion/who-will-teach-silicon-valley-to-be-ethical.html\"\n        },\n        \"Summary\": {\n            \"rich_text\": [\n                {\n                    \"type\": \"text\",\n                    \"text\": {\n                        \"content\": \"Some think chief ethics officers could help technology companies navigate political and social questions.\",\n                        \"link\": null\n                    },\n                    \"annotations\": {\n                        \"bold\": false,\n                        \"italic\": false,\n                        \"strikethrough\": false,\n                        \"underline\": false,\n                        \"code\": false,\n                        \"color\": \"default\"\n                    },\n                    \"plain_text\": \"Some think chief ethics officers could help technology companies navigate political and social questions.\",\n                    \"href\": null\n                }\n            ]\n        },\n        \"Read\": {\n            \"checkbox\": false\n        }\n    },\n    \"children\": [\n        {\n            \"object\": \"block\",\n            \"type\": \"heading_2\",\n            \"heading_2\": {\n                \"rich_text\": [\n                    {\n                        \"type\": \"text\",\n                        \"text\": {\n                            \"content\": \"Lacinato kale\"\n                        }\n                    }\n                ]\n            }\n        },\n        {\n            \"object\": \"block\",\n            \"type\": \"paragraph\",\n            \"paragraph\": {\n                \"rich_text\": [\n                    {\n                        \"type\": \"text\",\n                        \"text\": {\n                            \"content\": \"Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.\",\n                            \"link\": {\n                                \"url\": \"https://en.wikipedia.org/wiki/Lacinato_kale\"\n                            }\n                        }\n                    }\n                ]\n            }\n        }\n    ]\n}",
};

const data = await apiInstance.v1PagesPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **contentType** | [**string**] |  | (optional) defaults to undefined
 **notionVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**any**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Date -  <br>  * Content-Type -  <br>  * Transfer-Encoding -  <br>  * Connection -  <br>  * Set-Cookie -  <br>  * X-DNS-Prefetch-Control -  <br>  * X-Frame-Options -  <br>  * Strict-Transport-Security -  <br>  * X-Download-Options -  <br>  * X-Content-Type-Options -  <br>  * X-XSS-Protection -  <br>  * Referrer-Policy -  <br>  * Content-Security-Policy -  <br>  * X-Content-Security-Policy -  <br>  * X-WebKit-CSP -  <br>  * ETag -  <br>  * Vary -  <br>  * Content-Encoding -  <br>  * CF-Cache-Status -  <br>  * Expect-CT -  <br>  * Server -  <br>  * CF-RAY -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


