
# RiskAuditDetectionItemV2


## Properties

Name | Type
------------ | -------------
`turn` | number
`interlocutor` | string
`role` | string
`timestampFormatted` | string
`termText` | string
`categoryLabel` | string
`subcategoryLabel` | string
`criticality` | string
`status` | string
`reason` | string
`finalScore` | number
`violatedFrameworks` | Array&lt;any&gt;

## Example

```typescript
import type { RiskAuditDetectionItemV2 } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "turn": null,
  "interlocutor": null,
  "role": null,
  "timestampFormatted": null,
  "termText": null,
  "categoryLabel": null,
  "subcategoryLabel": null,
  "criticality": null,
  "status": null,
  "reason": null,
  "finalScore": null,
  "violatedFrameworks": null,
} satisfies RiskAuditDetectionItemV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RiskAuditDetectionItemV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


