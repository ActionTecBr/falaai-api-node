
# TranscriptionResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`object` | string
`model` | string
`filename` | string
`processedAt` | string
`usage` | [TranscriptionUsage](TranscriptionUsage.md)
`language` | string
`languageConfidence` | number
`durationSeconds` | number
`text` | string
`dialog` | string
`audioEvents` | [Array&lt;AudioEvent&gt;](AudioEvent.md)
`eventTypes` | Array&lt;string&gt;
`wordCount` | number
`input` | [AudioInputMeta](AudioInputMeta.md)
`clientReferenceId` | string

## Example

```typescript
import type { TranscriptionResponse } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "object": null,
  "model": null,
  "filename": null,
  "processedAt": null,
  "usage": null,
  "language": null,
  "languageConfidence": null,
  "durationSeconds": null,
  "text": null,
  "dialog": null,
  "audioEvents": null,
  "eventTypes": null,
  "wordCount": null,
  "input": null,
  "clientReferenceId": null,
} satisfies TranscriptionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TranscriptionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


