# WhatsappApi

All URIs are relative to *https://api01-falaai.action.tec.br*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**extractConversationsV1WhatsappExtractConversationsPost**](WhatsappApi.md#extractconversationsv1whatsappextractconversationspost) | **POST** /v1/whatsapp/extractConversations | Extract and segment WhatsApp conversations from an export |



## extractConversationsV1WhatsappExtractConversationsPost

> ResponseExtractConversationsV1WhatsappExtractconversationsPost extractConversationsV1WhatsappExtractConversationsPost(file, timezone, dateFormat, start, end, windows, gapMinutes, minMessages, voiceNote, expression, dryRun, clientReferenceId)

Extract and segment WhatsApp conversations from an export

Extracts and segments the conversations of a WhatsApp export (.zip or .txt containing chat.txt in UTF-8 with at least one turn) and, unless it is a preview, resolves each selected conversation with AI by transcribing voice/audio/video notes and describing visual expressions, returning the segmented conversations with speakers, dialogs, counts and usage. Use dry_run&#x3D;true for a PREVIEW: it validates the file, segments the conversations, counts media and ESTIMATES the credits WITHOUT calling the AI and WITHOUT charging (credits_charged&#x3D;0), returning object whatsapp_preview with credits_total, the params actually used, the windows, per-conversation items and warnings. The window is given either as a single start/end pair or as windows, a JSON string holding a non-empty list of sub-objects each with start and end; windows must not be combined with start/end, and a windows selection is the deduplicated chronological union of the overlaps, which bypasses the noise filter and keeps conversations that are monologues or below min_messages, while for a single window sending only one of start/end is rejected and empty/all-zeros values select the real period of the export, both being allowed to be omitted in dry_run while outside dry_run both absent is rejected. timezone and date_format are required, where date_format must be day_first, month_first or year_first. gap_minutes is optional (default 720) and splits conversations on idle gaps, min_messages is optional (default 2) and is the minimum messages kept per conversation outside the explicit windows selection, voice_note is optional (default true) and turns voice/audio/video media into text, expression is optional (default true) and describes visual expressions (figurinha, GIF, emoji), and client_reference_id is optional, echoed verbatim, charset A-Za-z0-9 space _/:.- up to 60 chars. Billing outside the preview is 0.15 credit per conversation plus 0.15 per figurinha, 0.18 per GIF and 0.1 per emoji (only with expression&#x3D;true) plus 0.19 per second of voice/audio/video (only with voice_note&#x3D;true), rounded to 2 decimals with no rounding up, and the preview credits_total is the same exact sum with 2 decimals; files are limited to 1GB and the endpoint is stateless (export and media processed in memory, temporary files removed, nothing persisted), returning object conversations with id (wc-), usage and the conversations (conversation_id, first_at, last_at, duration_seconds, speakers, dialog, message_count, characters) plus meta.

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
    timezone: timezone_example,
    // string
    dateFormat: dateFormat_example,
    // string | Inicio da janela. Obrigatorio fora do dry_run; no dry_run ausente = primeiro turno do export. (optional)
    start: start_example,
    // string | Fim da janela. Obrigatorio fora do dry_run; no dry_run ausente = ultimo turno do export. (optional)
    end: end_example,
    // string | Selecao explicita por varias janelas: JSON [{\\\"start\\\":\\\"...\\\",\\\"end\\\":\\\"...\\\"}]. Nao combinar com \\\'start\\\'/\\\'end\\\'. (optional)
    windows: windows_example,
    // number (optional)
    gapMinutes: 8.14,
    // number (optional)
    minMessages: 56,
    // boolean | Transcrever mensagens de voz/video gravadas na hora? (optional)
    voiceNote: true,
    // boolean | Descrever expressoes visuais (figurinha/GIF/imagem)? (optional)
    expression: true,
    // boolean | So analisa o arquivo: valida, segmenta e ESTIMA os creditos SEM chamar a IA e SEM debitar (credits_charged=0). (optional)
    dryRun: true,
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
| **timezone** | `string` |  | [Defaults to `undefined`] |
| **dateFormat** | `string` |  | [Defaults to `undefined`] |
| **start** | `string` | Inicio da janela. Obrigatorio fora do dry_run; no dry_run ausente &#x3D; primeiro turno do export. | [Optional] [Defaults to `undefined`] |
| **end** | `string` | Fim da janela. Obrigatorio fora do dry_run; no dry_run ausente &#x3D; ultimo turno do export. | [Optional] [Defaults to `undefined`] |
| **windows** | `string` | Selecao explicita por varias janelas: JSON [{\\\&quot;start\\\&quot;:\\\&quot;...\\\&quot;,\\\&quot;end\\\&quot;:\\\&quot;...\\\&quot;}]. Nao combinar com \\\&#39;start\\\&#39;/\\\&#39;end\\\&#39;. | [Optional] [Defaults to `undefined`] |
| **gapMinutes** | `number` |  | [Optional] [Defaults to `720`] |
| **minMessages** | `number` |  | [Optional] [Defaults to `2`] |
| **voiceNote** | `boolean` | Transcrever mensagens de voz/video gravadas na hora? | [Optional] [Defaults to `true`] |
| **expression** | `boolean` | Descrever expressoes visuais (figurinha/GIF/imagem)? | [Optional] [Defaults to `true`] |
| **dryRun** | `boolean` | So analisa o arquivo: valida, segmenta e ESTIMA os creditos SEM chamar a IA e SEM debitar (credits_charged&#x3D;0). | [Optional] [Defaults to `false`] |
| **clientReferenceId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ResponseExtractConversationsV1WhatsappExtractconversationsPost**](ResponseExtractConversationsV1WhatsappExtractconversationsPost.md)

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

