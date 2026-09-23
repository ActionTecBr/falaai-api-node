import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { createFalaAIClient } from "../../src/index";
import { PROD, KEY, AUDIO } from "./conftest";
import { logTest } from "./e2e_logger";

const client = createFalaAIClient({ apiKey: KEY, baseUrl: PROD });

function isStr(v: unknown): boolean {
  return typeof v === "string" && (v as string).length > 0;
}
function isInt(v: unknown): boolean {
  return typeof v === "number" && Number.isInteger(v);
}
function isNum(v: unknown): boolean {
  return typeof v === "number" && Number.isFinite(v);
}

describe("cadeia IA (VPS, com custo)", () => {
  it("transcribe -> diagnostic -> auditoria (payload completo)", async () => {
    const form = new FormData();
    form.append("file", new Blob([readFileSync(AUDIO)], { type: "audio/mpeg" }), "analise_25s.mp3");
    form.append("model", "falaai-transcribe-1");
    form.append("language", "pt");
    form.append("client_reference_id", "e2e-call-2026-09-22-001");
    const t: any = await client.POST("/v1/audio/transcriptions", { body: form as any, bodySerializer: (b: any) => b });
    logTest("transcriptions", "POST", "/v1/audio/transcriptions", { file: "analise_25s.mp3", model: "falaai-transcribe-1", language: "pt", client_reference_id: "e2e-call-2026-09-22-001" }, t.data, `HTTP ${t.response.status}`, t.response.status);
    expect(t.response.status).toBe(200);
    const tr = t.data;
    expect(isStr(tr.id)).toBe(true);
    expect(tr.object).toBeTruthy();
    expect(isStr(tr.model)).toBe(true);
    expect(isStr(tr.filename)).toBe(true);
    expect(isStr(tr.processed_at)).toBe(true);
    expect(isNum(tr.usage.audio_seconds)).toBe(true);
    expect(tr.usage.audio_seconds).toBeGreaterThan(0);
    expect(isInt(tr.usage.credits_consumed)).toBe(true);
    expect(isInt(tr.usage.processing_ms)).toBe(true);
    expect(isStr(tr.language)).toBe(true);
    expect(isNum(tr.duration_seconds)).toBe(true);
    expect(tr.duration_seconds).toBeGreaterThan(0);
    expect(isStr(tr.text)).toBe(true);
    expect(isStr(tr.dialog)).toBe(true);
    expect(Array.isArray(tr.audio_events)).toBe(true);
    for (const e of tr.audio_events) {
      expect(isStr(e.event)).toBe(true);
      expect(isNum(e.start_s)).toBe(true);
      expect(isNum(e.end_s)).toBe(true);
      expect(isNum(e.duration_s)).toBe(true);
      expect(isStr(e.formatted_timestamp)).toBe(true);
    }
    expect(Array.isArray(tr.event_types)).toBe(true);
    expect(isInt(tr.word_count)).toBe(true);
    expect(tr.word_count).toBeGreaterThan(0);
    expect(isNum(tr.input.duration_s)).toBe(true);
    expect(isStr(tr.input.original_format)).toBe(true);
    expect(isStr(tr.input.codec)).toBe(true);
    expect(isInt(tr.input.sample_rate)).toBe(true);
    expect(isInt(tr.input.channels)).toBe(true);

    const audioEvents = (tr.audio_events ?? []).map((x: any) => ({ event: x.event, start_s: x.start_s, end_s: x.end_s, duration_s: x.duration_s, formatted_timestamp: x.formatted_timestamp }));

    const dbody = { model: "falaai-diagnostic-1", dialog: tr.dialog, language: "pt-BR", duration_seconds: tr.duration_seconds, text: tr.text, audio_events: audioEvents, client_reference_id: "e2e-diag-2026-09-22-001" };
    const d: any = await client.POST("/v1/analyze/diagnostic", { body: dbody });
    logTest("diagnostic", "POST", "/v1/analyze/diagnostic", dbody, d.data, `HTTP ${d.response.status}`, d.response.status);
    expect(d.response.status).toBe(200);
    const dp = d.data;
    expect(isStr(dp.id)).toBe(true);
    expect(isStr(dp.response_language)).toBe(true);
    expect(dp.object).toBe("analysis");
    expect(dp.analysis.dialogue_summary).not.toBeNull();
    expect(dp.analysis.contact_reason).not.toBeNull();
    expect(dp.analysis.identified_action).not.toBeNull();
    expect(dp.analysis.identified_label).not.toBeNull();
    expect(dp.analysis.sentiment).not.toBeNull();
    expect(isInt(dp.usage.characters)).toBe(true);
    expect(isInt(dp.usage.credits_consumed)).toBe(true);
    expect(isInt(dp.usage.processing_ms)).toBe(true);

    const abody = {
      model: "falaai-auditoria-risco-1", dialog: tr.dialog, language: "pt-BR", response_language: "pt-BR",
      duration_seconds: tr.duration_seconds, text: tr.text, audio_events: audioEvents,
      call_direction: "inbound",
      participants: [
        { interlocutor: "Speaker 1", name: "Mateus", role: "agent" },
        { interlocutor: "Speaker 2", name: "Cliente", role: "client" },
      ],
      response_format: "v2", client_reference_id: "e2e-aud-2026-09-22-001",
    };
    const a: any = await client.POST("/v1/analyze/auditoriaRisco", { body: abody });
    logTest("auditoriaRisco", "POST", "/v1/analyze/auditoriaRisco", abody, a.data, `HTTP ${a.response.status}`, a.response.status);
    expect(a.response.status).toBe(200);
    const pub = a.data.response;
    expect(isStr(pub.meta.id)).toBe(true);
    expect(isInt(pub.meta.usage.characters)).toBe(true);
    expect(isInt(pub.meta.usage.credits_consumed)).toBe(true);
    expect(isInt(pub.meta.usage.processing_ms)).toBe(true);
    for (const bloco of ["participants", "verdict", "scores", "detections", "analysis", "timeline",
                         "audio_event_model", "categories_summary", "indexer", "summary",
                         "acoes_i18n", "audit_decisions", "scoring_explanation"]) {
      expect(pub[bloco]).not.toBeNull();
      expect(pub[bloco]).toBeDefined();
    }
    expect(typeof pub.html_report).toBe("string");
  }, 300000);
});