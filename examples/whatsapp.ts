import { Configuration, WhatsappApi } from "falaai-api";
import { readFileSync } from "node:fs";

const config = new Configuration({
  basePath: process.env.FALAAI_BASE_URL ?? "https://api01-falaai.action.tec.br",
  accessToken: process.env.FALAAI_API_KEY ?? "",
});
const whatsappApi = new WhatsappApi(config);

// REQUIRED: file (.zip/.txt export), start, end, timezone, date_format + Authorization
// OPTIONAL: gap_minutes (default 720) | min_messages (default 2) | client_reference_id
const whatsapp = await whatsappApi.extractConversationsV1WhatsappExtractConversationsPost({
  file: new Blob([readFileSync("demo_whatsapp.zip")]),
  start: "2024-01-01 00:00",
  end: "2024-12-31 23:59",
  timezone: "-3",
  dateFormat: "day_first",
  gapMinutes: 720,
  minMessages: 2,
  voiceNote: true,
  expression: true,
});
console.log(JSON.stringify(whatsapp, null, 2));
