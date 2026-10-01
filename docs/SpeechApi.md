# SpeechApi

All URIs are relative to *https://api01-falaai.action.tec.br*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTranscriptionV1AudioTranscriptionsPost**](SpeechApi.md#createtranscriptionv1audiotranscriptionspost) | **POST** /v1/audio/transcriptions | Transcribe audio to text |



## createTranscriptionV1AudioTranscriptionsPost

> TranscriptionResponse createTranscriptionV1AudioTranscriptionsPost(file, model, language, clientReferenceId)

Transcribe audio to text

### Example

```ts
import {
  Configuration,
  SpeechApi,
} from 'falaai-api';
import type { CreateTranscriptionV1AudioTranscriptionsPostRequest } from 'falaai-api';

async function example() {
  console.log("🚀 Testing falaai-api SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: ApiKeyAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SpeechApi(config);

  const body = {
    // Blob
    file: BINARY_DATA_HERE,
    // string (optional)
    model: model_example,
    // string (optional)
    language: language_example,
    // string | Optional client-supplied ID echoed verbatim in the response. Use to correlate/sync with your system. Accepted charset: [A-Za-z0-9._:-]. Not idempotency. (optional)
    clientReferenceId: clientReferenceId_example,
  } satisfies CreateTranscriptionV1AudioTranscriptionsPostRequest;

  try {
    const data = await api.createTranscriptionV1AudioTranscriptionsPost(body);
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
| **model** | `string` |  | [Optional] [Defaults to `&#39;falaai-transcribe-1&#39;`] |
| **language** | `string` |  | [Optional] [Defaults to `&#39;pt&#39;`] |
| **clientReferenceId** | `string` | Optional client-supplied ID echoed verbatim in the response. Use to correlate/sync with your system. Accepted charset: [A-Za-z0-9._:-]. Not idempotency. | [Optional] [Defaults to `undefined`] |

### Return type

[**TranscriptionResponse**](TranscriptionResponse.md)

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

