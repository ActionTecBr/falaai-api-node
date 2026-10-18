
# WhatsappMeta


## Properties

Name | Type
------------ | -------------
`file` | string
`chatTxt` | string
`format` | string
`dateFormat` | string
`timezone` | string
`start` | string
`end` | string
`gapMinutes` | number
`minMessages` | number
`turns` | number
`systemLines` | number
`conversationsTotal` | number
`conversationsInWindow` | number
`monologuesDropped` | number
`conversationsSelected` | number
`voiceNote` | boolean
`expression` | boolean
`windows` | number

## Example

```typescript
import type { WhatsappMeta } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "file": null,
  "chatTxt": null,
  "format": null,
  "dateFormat": null,
  "timezone": null,
  "start": null,
  "end": null,
  "gapMinutes": null,
  "minMessages": null,
  "turns": null,
  "systemLines": null,
  "conversationsTotal": null,
  "conversationsInWindow": null,
  "monologuesDropped": null,
  "conversationsSelected": null,
  "voiceNote": null,
  "expression": null,
  "windows": null,
} satisfies WhatsappMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WhatsappMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


