# FalaAI API - Node.js / TypeScript SDK

[![version](https://img.shields.io/badge/version-1.21.47-blue)](https://www.npmjs.com/package/falaai-api)
[![license](https://img.shields.io/badge/license-MIT-green)](https://github.com/ActionTecBr/falaai-api-node/blob/main/LICENSE)
[![build](https://github.com/ActionTecBr/falaai-api-node/actions/workflows/ci.yml/badge.svg)](https://github.com/ActionTecBr/falaai-api-node/actions/workflows/ci.yml)

Official Node.js / TypeScript SDK for the **FalaAI API**.

## What is FalaAI API?

FalaAI API turns conversations into auditable business intelligence, in three steps:

1. **Transcribe** - audio (calls, voice notes, meetings) to text, with speaker separation.
2. **Diagnose** - summary, reason, recommended action, topic and sentiment per conversation.
3. **Audit compliance** - risk score and violations against **COPC CX** and **ISO 18295-1**.

It works with phone calls, WhatsApp, Telegram, chat, email, PDF and images.
Three REST endpoints, one API key, no setup.

## Who it's for

| Role | What they get |
| --- | --- |
| **Contact Center / Quality** | Audit 100% of conversations instead of a sample |
| **Compliance / Legal** | Forensic, auditable evidence for audits and disputes |
| **CX / Operations** | Risk score, sentiment and reason for every conversation |
| **Developers** | One typed SDK, three REST endpoints, one API key |
| **Data / BI** | Clean, typed JSON ready for your database or BI tool |

## Install

```bash
npm install falaai-api
```

## Quick start

```typescript
import { readFileSync } from "node:fs";
import { createFalaAIClient } from "falaai-api";

const client = createFalaAIClient({ apiKey: "fai_xxxxxx" });

const form = new FormData();
form.append("file", new Blob([readFileSync("call.mp3")], { type: "audio/mpeg" }), "call.mp3");
form.append("model", "falaai-transcribe-1");
form.append("language", "pt");

const { data } = await client.POST("/v1/audio/transcriptions", {
  body: form as any,
  bodySerializer: (b: any) => b,
});

console.log(data.text);
```

## Use cases

- Call and voice-note **transcription** with speaker separation
- **Contact center quality assurance (QA)** automation
- **Compliance auditing** against **COPC CX** and **ISO 18295-1**
- **Risk detection** - churn risk, legal threats, escalation
- **WhatsApp, Telegram and chat** conversation analysis
- **CRM and help desk** enrichment
- **LGPD**-aware handling of customer conversations

## Where it fits

Common Node.js stacks in contact center, CRM and help desk - if you build on any of these, the SDK drops in:

Evolution API - WAHA - Typebot - Take Blip - Zendesk - Rocket.Chat - HubSpot - Twilio - Telegraf

> Product names are trademarks of their respective owners, listed as common stacks in this ecosystem. No partnership is implied.

## Endpoints

| Method | Path | Description |
| --- | --- | --- |
| `POST` | `/v1/audio/transcriptions` | Audio to text, with speaker separation |
| `POST` | `/v1/analyze/diagnostic` | Conversation analysis - summary, reason, action, topic, sentiment |
| `POST` | `/v1/analyze/auditoriaRisco` | Compliance audit - risk score and violations |

All endpoints require `Authorization: Bearer fai_xxxxxx`.
Full reference: <https://api01-falaai.action.tec.br/docs>

## Links

- **Product:** <https://falaai.action.tec.br/api>
- **API reference:** <https://api01-falaai.action.tec.br/docs>
- **Get an API key:** <https://falaai.action.tec.br/api/auth>
- **Package (npm):** <https://www.npmjs.com/package/falaai-api>
- **Source:** <https://github.com/ActionTecBr/falaai-api-node>

## License

MIT (c) 2026 Action Tec Br - see [LICENSE](LICENSE).
