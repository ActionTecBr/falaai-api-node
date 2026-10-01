
# RiskAuditParticipantsV2


## Properties

Name | Type
------------ | -------------
`identified` | [Array&lt;RiskAuditParticipantV2&gt;](RiskAuditParticipantV2.md)
`callDirection` | string
`roleInferenceReliable` | boolean
`identificationStatus` | string
`unidentifiedItemsCount` | number

## Example

```typescript
import type { RiskAuditParticipantsV2 } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "identified": null,
  "callDirection": null,
  "roleInferenceReliable": null,
  "identificationStatus": null,
  "unidentifiedItemsCount": null,
} satisfies RiskAuditParticipantsV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RiskAuditParticipantsV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


