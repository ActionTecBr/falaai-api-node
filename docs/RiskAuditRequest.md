
# RiskAuditRequest


## Properties

Name | Type
------------ | -------------
`model` | string
`text` | string
`dialog` | string
`audioEvents` | [Array&lt;DiagnosticAudioEvent&gt;](DiagnosticAudioEvent.md)
`durationSeconds` | number
`language` | string
`responseLanguage` | string
`callDirection` | string
`participants` | [Array&lt;Participant&gt;](Participant.md)
`responseFormat` | string
`clientReferenceId` | string

## Example

```typescript
import type { RiskAuditRequest } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "model": null,
  "text": null,
  "dialog": null,
  "audioEvents": null,
  "durationSeconds": null,
  "language": null,
  "responseLanguage": null,
  "callDirection": null,
  "participants": null,
  "responseFormat": null,
  "clientReferenceId": null,
} satisfies RiskAuditRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RiskAuditRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


