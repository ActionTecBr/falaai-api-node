import { createClient } from "falaai-api";
import { readFileSync } from "node:fs";

const client = createClient({
  baseUrl: process.env.FALAAI_BASE_URL ?? "https://api01-falaai.action.tec.br",
  headers: { Authorization: `Bearer ${process.env.FALAAI_API_KEY}` },
});

// REQUIRED: file (.zip/.txt export), start, end, timezone, date_format + Authorization
// OPTIONAL: gap_minutes (default 720) | min_messages (default 2) | chars_per_minute (default 800) | client_reference_id
const form = new FormData();
form.append("file", new Blob([readFileSync("demo_whatsapp.zip")]), "demo_whatsapp.zip");
form.append("start", "2024-01-01T00:00:00");
form.append("end", "2024-12-31T23:59:59");
form.append("timezone", "-3");
form.append("date_format", "day_first");
form.append("gap_minutes", "720");
form.append("min_messages", "2");
form.append("chars_per_minute", "800");

const { data } = await client.POST("/v1/whatsapp/extractConversations", { body: form });
console.log(JSON.stringify(data, null, 2));
