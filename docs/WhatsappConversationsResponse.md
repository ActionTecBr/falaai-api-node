
# WhatsappConversationsResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`object` | string
`usage` | [WhatsappUsage](WhatsappUsage.md)
`conversations` | [Array&lt;WhatsappConversation&gt;](WhatsappConversation.md)
`clientReferenceId` | string
`meta` | [WhatsappMeta](WhatsappMeta.md)

## Example

```typescript
import type { WhatsappConversationsResponse } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "object": null,
  "usage": null,
  "conversations": null,
  "clientReferenceId": null,
  "meta": null,
} satisfies WhatsappConversationsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WhatsappConversationsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


