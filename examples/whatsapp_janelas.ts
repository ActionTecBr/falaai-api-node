import { Configuration, WhatsappApi } from "falaai-api";
import { readFileSync } from "node:fs";

const config = new Configuration({
  basePath: process.env.FALAAI_BASE_URL ?? "https://api01-falaai.action.tec.br",
  accessToken: process.env.FALAAI_API_KEY ?? "",
});
const whatsappApi = new WhatsappApi(config);

// EXTRACAO real (debita creditos) por VARIAS janelas - selecao = UNIAO das sobreposicoes (dedup).
// windows NAO combina com start/end (400 invalid_windows); a 2a janela e um exemplo.
// REQUIRED: file (.zip/.txt export), windows, timezone, date_format + Authorization
// OPTIONAL: gap_minutes (default 720) | min_messages (default 2) | client_reference_id
const whatsapp = await whatsappApi.extractConversationsV1WhatsappExtractConversationsPost({
  file: new Blob([readFileSync("demo_whatsapp.zip")]),
  windows: '[{"start":"2024-01-01 00:00","end":"2024-12-31 23:59"},{"start":"06/03/2024 09:00","end":"06/03/2024 12:00"}]',
  timezone: "-3",
  dateFormat: "day_first",
  gapMinutes: 720,
  minMessages: 2,
  voiceNote: true,
  expression: true,
});
console.log(JSON.stringify(whatsapp, null, 2));
