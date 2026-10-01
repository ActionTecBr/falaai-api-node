# VersionApi

All URIs are relative to *https://api01-falaai.action.tec.br*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getVersionApiVersionGet**](VersionApi.md#getversionapiversionget) | **GET** /api/version | Get Version |



## getVersionApiVersionGet

> VersionResponse getVersionApiVersionGet()

Get Version

### Example

```ts
import {
  Configuration,
  VersionApi,
} from 'falaai-api';
import type { GetVersionApiVersionGetRequest } from 'falaai-api';

async function example() {
  console.log("🚀 Testing falaai-api SDK...");
  const api = new VersionApi();

  try {
    const data = await api.getVersionApiVersionGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**VersionResponse**](VersionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

