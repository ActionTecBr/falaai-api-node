
# RiskAuditSummaryV2


## Properties

Name | Type
------------ | -------------
`totalTurns` | number
`totalCalibrated` | number
`active` | number
`tolerated` | number
`blocked` | number
`audioEventsUsed` | number
`audioEventsAggravated` | number
`macAudioApplied` | any
`mvadApplied` | any
`totalParticipants` | number
`totalAgents` | number
`totalClients` | number
`totalBots` | number
`totalUnknown` | number
`clientRiskAlertsCount` | number
`clientBehaviorAlertsCount` | number

## Example

```typescript
import type { RiskAuditSummaryV2 } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "totalTurns": null,
  "totalCalibrated": null,
  "active": null,
  "tolerated": null,
  "blocked": null,
  "audioEventsUsed": null,
  "audioEventsAggravated": null,
  "macAudioApplied": null,
  "mvadApplied": null,
  "totalParticipants": null,
  "totalAgents": null,
  "totalClients": null,
  "totalBots": null,
  "totalUnknown": null,
  "clientRiskAlertsCount": null,
  "clientBehaviorAlertsCount": null,
} satisfies RiskAuditSummaryV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RiskAuditSummaryV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


