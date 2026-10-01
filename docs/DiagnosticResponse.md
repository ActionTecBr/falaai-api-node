
# DiagnosticResponse


## Properties

Name | Type
------------ | -------------
`id` | string
`responseLanguage` | string
`object` | string
`analysis` | [DiagnosticAnalysisMap](DiagnosticAnalysisMap.md)
`usage` | [DiagnosticUsage](DiagnosticUsage.md)
`clientReferenceId` | string

## Example

```typescript
import type { DiagnosticResponse } from 'falaai-api'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "responseLanguage": null,
  "object": null,
  "analysis": null,
  "usage": null,
  "clientReferenceId": null,
} satisfies DiagnosticResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiagnosticResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


