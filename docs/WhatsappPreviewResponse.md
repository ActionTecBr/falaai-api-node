
# WhatsappPreviewResponse


## Properties

Name | Type
------------ | -------------
`object` | string
`dryRun` | boolean
`creditsCharged` | number
`creditsTotal` | number
`params` | [WhatsappPreviewParams](WhatsappPreviewParams.md)
`windows` | [Array&lt;WhatsappPreviewWindow&gt;](WhatsappPreviewWindow.md)
`items` | [Array&lt;WhatsappPreviewItem&gt;](WhatsappPreviewItem.md)
`warnings` | Array&lt;string&gt;

## Example

```typescript
import type { WhatsappPreviewResponse } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "object": null,
  "dryRun": null,
  "creditsCharged": null,
  "creditsTotal": null,
  "params": null,
  "windows": null,
  "items": null,
  "warnings": null,
} satisfies WhatsappPreviewResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WhatsappPreviewResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


