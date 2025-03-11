# .SearchApi

All URIs are relative to *https://api.notion.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1SearchPost**](SearchApi.md#v1SearchPost) | **POST** /v1/search | Search


# **v1SearchPost**
> any v1SearchPost()


### Example


```typescript
import { createConfiguration, SearchApi } from '';
import type { SearchApiV1SearchPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SearchApi(configuration);

const request: SearchApiV1SearchPostRequest = {
  
  contentType: "application/json",
  
  notionVersion: "{{NOTION_VERSION}}",
  
  body: "{\n    \"query\": \"Media Article\",\n    \"sort\": {\n        \"direction\": \"ascending\",\n        \"timestamp\": \"last_edited_time\"\n    }\n}",
};

const data = await apiInstance.v1SearchPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**|  |
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


