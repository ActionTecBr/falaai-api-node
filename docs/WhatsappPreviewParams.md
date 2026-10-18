
# WhatsappPreviewParams


## Properties

Name | Type
------------ | -------------
`start` | string
`end` | string
`timezone` | string
`dateFormat` | string
`gapMinutes` | number
`minMessages` | number
`voiceNote` | boolean
`expression` | boolean

## Example

```typescript
import type { WhatsappPreviewParams } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "start": null,
  "end": null,
  "timezone": null,
  "dateFormat": null,
  "gapMinutes": null,
  "minMessages": null,
  "voiceNote": null,
  "expression": null,
} satisfies WhatsappPreviewParams

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WhatsappPreviewParams
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


