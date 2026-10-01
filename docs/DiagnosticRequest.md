
# DiagnosticRequest


## Properties

Name | Type
------------ | -------------
`model` | string
`text` | string
`dialog` | string
`audioEvents` | [Array&lt;DiagnosticAudioEvent&gt;](DiagnosticAudioEvent.md)
`language` | string
`responseLanguage` | string
`durationSeconds` | number
`clientReferenceId` | string
`callDirection` | string
`participants` | [Array&lt;DiagnosticParticipant&gt;](DiagnosticParticipant.md)

## Example

```typescript
import type { DiagnosticRequest } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "model": null,
  "text": null,
  "dialog": null,
  "audioEvents": null,
  "language": null,
  "responseLanguage": null,
  "durationSeconds": null,
  "clientReferenceId": null,
  "callDirection": null,
  "participants": null,
} satisfies DiagnosticRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiagnosticRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


