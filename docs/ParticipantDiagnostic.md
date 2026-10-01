
# ParticipantDiagnostic


## Properties

Name | Type
------------ | -------------
`interlocutor` | string
`role` | string
`name` | string
`confidence` | string
`evidence` | string

## Example

```typescript
import type { ParticipantDiagnostic } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "interlocutor": null,
  "role": null,
  "name": null,
  "confidence": null,
  "evidence": null,
} satisfies ParticipantDiagnostic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ParticipantDiagnostic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


