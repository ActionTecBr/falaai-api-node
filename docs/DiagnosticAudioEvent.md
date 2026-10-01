
# DiagnosticAudioEvent


## Properties

Name | Type
------------ | -------------
`event` | string
`startS` | number
`endS` | number
`durationS` | number
`formattedTimestamp` | string

## Example

```typescript
import type { DiagnosticAudioEvent } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "event": null,
  "startS": null,
  "endS": null,
  "durationS": null,
  "formattedTimestamp": null,
} satisfies DiagnosticAudioEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiagnosticAudioEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


