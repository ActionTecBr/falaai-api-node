# SpeechApi

All URIs are relative to *https://api01-falaai.action.tec.br*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTranscriptionV1AudioTranscriptionsPost**](SpeechApi.md#createtranscriptionv1audiotranscriptionspost) | **POST** /v1/audio/transcriptions | Transcribe audio to text |



## createTranscriptionV1AudioTranscriptionsPost

> TranscriptionResponse createTranscriptionV1AudioTranscriptionsPost(file, model, language, clientReferenceId)

Transcribe audio to text

Transcribes one uploaded audio file into text with speaker diarization and timestamped audio events (laughs, sighs, pauses), returning the full transcript, a turn-by-turn dialog with speaker labels and start/end timestamps, the detected events and the word count. Use it when a recording must become text for analysis, review or storage of the transcript. The required file field takes a single audio upload limited to 1GB and 3 hours, with accepted MIME types audio/mpeg, audio/mp3, audio/mp4, audio/m4a, audio/wav, audio/wave, audio/x-wav, audio/flac, audio/x-flac, audio/ogg, audio/opus, video/ogg, audio/webm, video/webm, audio/aac and audio/x-aac. model is optional and defaults to falaai-transcribe-1, the only supported value; language is an optional two-letter code (pt, en, es, fr, de, it, ja, ko, nl, pl, ru, tr, zh, vi, id, th, ar, hi, cs, da, el, fi, he, hu, ms, no, ro, sk, sv, ta, uk) that forces the audio language and is auto-detected when omitted; client_reference_id is optional, charset A-Za-z0-9 space _/:.- up to 60 chars, echoed verbatim (not idempotency). Billing is 1 credit per second of processed audio with a minimum of 10 credits per request, rounded to 2 decimals; usage reports credits_consumed and processing_ms. Stateless: the audio is processed in memory and never persisted (LGPD). Returns id (tr-), language, language_confidence, duration_seconds, text, dialog, audio_events, event_types, word_count and input metadata (duration, format, codec, sample rate, channels).

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
    // string | Optional client-supplied ID echoed verbatim in the response. Use to correlate/sync with your system. Accepted charset: [A-Za-z0-9 _/:.-], max 60 chars. Not idempotency. (optional)
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
| **language** | `string` |  | [Optional] [Defaults to `undefined`] |
| **clientReferenceId** | `string` | Optional client-supplied ID echoed verbatim in the response. Use to correlate/sync with your system. Accepted charset: [A-Za-z0-9 _/:.-], max 60 chars. Not idempotency. | [Optional] [Defaults to `undefined`] |

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

