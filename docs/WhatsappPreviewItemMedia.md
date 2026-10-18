
# WhatsappPreviewItemMedia


## Properties

Name | Type
------------ | -------------
`figurinha` | number
`gif` | number
`emoji` | number
`ptt` | number
`pttSeconds` | number
`anexos` | number
`byType` | { [key: string]: number; }

## Example

```typescript
import type { WhatsappPreviewItemMedia } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "figurinha": null,
  "gif": null,
  "emoji": null,
  "ptt": null,
  "pttSeconds": null,
  "anexos": null,
  "byType": null,
} satisfies WhatsappPreviewItemMedia

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WhatsappPreviewItemMedia
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


