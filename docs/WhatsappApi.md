# WhatsappApi

All URIs are relative to *https://api01-falaai.action.tec.br*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**extractConversationsV1WhatsappExtractConversationsPost**](WhatsappApi.md#extractconversationsv1whatsappextractconversationspost) | **POST** /v1/whatsapp/extractConversations | Extract and segment WhatsApp conversations from an export |



## extractConversationsV1WhatsappExtractConversationsPost

> WhatsappConversationsResponse extractConversationsV1WhatsappExtractConversationsPost(file, start, end, timezone, dateFormat, gapMinutes, minMessages, charsPerMinute, clientReferenceId)

Extract and segment WhatsApp conversations from an export

### Example

```ts
import {
  Configuration,
  WhatsappApi,
} from 'falaai-api';
import type { ExtractConversationsV1WhatsappExtractConversationsPostRequest } from 'falaai-api';

async function example() {
  console.log("🚀 Testing falaai-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKeyAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WhatsappApi(config);

  const body = {
    // Blob
    file: BINARY_DATA_HERE,
    // string
    start: start_example,
    // string
    end: end_example,
    // string
    timezone: timezone_example,
    // string
    dateFormat: dateFormat_example,
    // number (optional)
    gapMinutes: 8.14,
    // number (optional)
    minMessages: 56,
    // number (optional)
    charsPerMinute: 8.14,
    // string (optional)
    clientReferenceId: clientReferenceId_example,
  } satisfies ExtractConversationsV1WhatsappExtractConversationsPostRequest;

  try {
    const data = await api.extractConversationsV1WhatsappExtractConversationsPost(body);
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
| **file** | `Blob` |  | [Defaults to `undefined`] |
| **start** | `string` |  | [Defaults to `undefined`] |
| **end** | `string` |  | [Defaults to `undefined`] |
| **timezone** | `string` |  | [Defaults to `undefined`] |
| **dateFormat** | `string` |  | [Defaults to `undefined`] |
| **gapMinutes** | `number` |  | [Optional] [Defaults to `720`] |
| **minMessages** | `number` |  | [Optional] [Defaults to `2`] |
| **charsPerMinute** | `number` |  | [Optional] [Defaults to `800`] |
| **clientReferenceId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**WhatsappConversationsResponse**](WhatsappConversationsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

