import { Configuration, SpeechApi } from "falaai-api";
import { readFileSync } from "node:fs";

const config = new Configuration({
  basePath: process.env.FALAAI_BASE_URL ?? "https://api01-falaai.action.tec.br",
  accessToken: process.env.FALAAI_API_KEY ?? "",
});
const speechApi = new SpeechApi(config);

const model = "falaai-transcribe-1";
const language = "pt";
const clientReferenceId = "call_202609271408";

const file = new Blob([readFileSync("demo_callcenter.mp3")], { type: "audio/mpeg" });

// REQUIRED: file (audio) + Authorization (fai_ key)
// OPTIONAL (server defaults): model -> falaai-transcribe-1 | language -> pt | client_reference_id -> (empty)
const transcription = await speechApi.createTranscriptionV1AudioTranscriptionsPost({
  file,
  model,
  language,
  clientReferenceId,
});
console.log(JSON.stringify(transcription, null, 2));
