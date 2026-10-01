# UsageApi

All URIs are relative to *https://api01-falaai.action.tec.br*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getUsageByKeyV1UsageByKeyGet**](UsageApi.md#getusagebykeyv1usagebykeyget) | **GET** /v1/usage/by-key | Get Usage By Key |
| [**getUsageLogV1UsageLogGet**](UsageApi.md#getusagelogv1usagelogget) | **GET** /v1/usage/log | Get Usage Log |



## getUsageByKeyV1UsageByKeyGet

> Array&lt;UsageByKeyItem&gt; getUsageByKeyV1UsageByKeyGet(keyId)

Get Usage By Key

### Example

```ts
import {
  Configuration,
  UsageApi,
} from 'falaai-api';
import type { GetUsageByKeyV1UsageByKeyGetRequest } from 'falaai-api';

async function example() {
  console.log("🚀 Testing falaai-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKeyAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsageApi(config);

  const body = {
    // string (optional)
    keyId: keyId_example,
  } satisfies GetUsageByKeyV1UsageByKeyGetRequest;

  try {
    const data = await api.getUsageByKeyV1UsageByKeyGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **keyId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;UsageByKeyItem&gt;**](UsageByKeyItem.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsageLogV1UsageLogGet

> UsageLogResponse getUsageLogV1UsageLogGet(page, limit, apiKeyId)

Get Usage Log

### Example

```ts
import {
  Configuration,
  UsageApi,
} from 'falaai-api';
import type { GetUsageLogV1UsageLogGetRequest } from 'falaai-api';

async function example() {
  console.log("🚀 Testing falaai-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKeyAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UsageApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
    // string (optional)
    apiKeyId: apiKeyId_example,
  } satisfies GetUsageLogV1UsageLogGetRequest;

  try {
    const data = await api.getUsageLogV1UsageLogGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **limit** | `number` |  | [Optional] [Defaults to `20`] |
| **apiKeyId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**UsageLogResponse**](UsageLogResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

