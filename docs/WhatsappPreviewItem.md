
# WhatsappPreviewItem


## Properties

Name | Type
------------ | -------------
`conversationId` | string
`firstAt` | string
`lastAt` | string
`durationMinutes` | number
`messages` | number
`characters` | number
`media` | [WhatsappPreviewItemMedia](WhatsappPreviewItemMedia.md)
`credits` | [WhatsappPreviewItemCredits](WhatsappPreviewItemCredits.md)

## Example

```typescript
import type { WhatsappPreviewItem } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "conversationId": null,
  "firstAt": null,
  "lastAt": null,
  "durationMinutes": null,
  "messages": null,
  "characters": null,
  "media": null,
  "credits": null,
} satisfies WhatsappPreviewItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WhatsappPreviewItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


