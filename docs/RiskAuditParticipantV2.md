
# RiskAuditParticipantV2


## Properties

Name | Type
------------ | -------------
`interlocutor` | string
`name` | string
`role` | string
`confidence` | string
`source` | string
`evidence` | string

## Example

```typescript
import type { RiskAuditParticipantV2 } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "interlocutor": null,
  "name": null,
  "role": null,
  "confidence": null,
  "source": null,
  "evidence": null,
} satisfies RiskAuditParticipantV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RiskAuditParticipantV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


