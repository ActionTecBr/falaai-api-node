
# RiskAuditTimelineV2


## Properties

Name | Type
------------ | -------------
`turnsSentiment` | Array&lt;{ [key: string]: any; }&gt;
`audioEvents` | Array&lt;{ [key: string]: any; }&gt;
`audioGroupsFound` | Array&lt;{ [key: string]: any; }&gt;

## Example

```typescript
import type { RiskAuditTimelineV2 } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "turnsSentiment": null,
  "audioEvents": null,
  "audioGroupsFound": null,
} satisfies RiskAuditTimelineV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RiskAuditTimelineV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


