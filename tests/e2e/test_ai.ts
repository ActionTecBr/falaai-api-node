import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { SpeechApi, AnalysisApi, type DiagnosticRequest, type RiskAuditRequest } from "../../src/index";
import { PROD, KEY, AUDIO, makeConfig } from "./conftest";
import { logTest } from "./e2e_logger";

const cfg = makeConfig(PROD, KEY);
const speechApi = new SpeechApi(cfg);
const analysisApi = new AnalysisApi(cfg);

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
  it("transcribe -> diagnostic -> riskAudit (payload completo)", async () => {
    const file = new Blob([readFileSync(AUDIO)], { type: "audio/mpeg" });
    const tr = await speechApi.createTranscriptionV1AudioTranscriptionsPost({
      file,
      model: "falaai-transcribe-1",
      language: "pt",
      clientReferenceId: "e2e-call-2026-09-22-001",
    });
    logTest("transcriptions", "POST", "/v1/audio/transcriptions", { file: "analise_25s.mp3", model: "falaai-transcribe-1", language: "pt", client_reference_id: "e2e-call-2026-09-22-001" }, tr, "HTTP 200", 200);
    expect(isStr(tr.id)).toBe(true);
    expect(tr.object).toBeTruthy();
    expect(isStr(tr.model)).toBe(true);
    expect(isStr(tr.filename)).toBe(true);
    expect(isStr(tr.processedAt)).toBe(true);
    expect(isNum(tr.usage.audioSeconds)).toBe(true);
    expect(tr.usage.audioSeconds).toBeGreaterThan(0);
    expect(isInt(tr.usage.creditsConsumed)).toBe(true);
    expect(isInt(tr.usage.processingMs)).toBe(true);
    expect(isStr(tr.language)).toBe(true);
    expect(isNum(tr.durationSeconds)).toBe(true);
    expect(tr.durationSeconds).toBeGreaterThan(0);
    expect(isStr(tr.text)).toBe(true);
    expect(isStr(tr.dialog)).toBe(true);
    expect(Array.isArray(tr.audioEvents)).toBe(true);
    for (const e of tr.audioEvents) {
      expect(isStr(e.event)).toBe(true);
      expect(isNum(e.startS)).toBe(true);
      expect(isNum(e.endS)).toBe(true);
      expect(isNum(e.durationS)).toBe(true);
      expect(isStr(e.formattedTimestamp)).toBe(true);
    }
    expect(Array.isArray(tr.eventTypes)).toBe(true);
    expect(isInt(tr.wordCount)).toBe(true);
    expect(tr.wordCount).toBeGreaterThan(0);
    expect(isNum(tr.input.durationS)).toBe(true);
    expect(isStr(tr.input.originalFormat)).toBe(true);
    expect(isStr(tr.input.codec)).toBe(true);
    expect(isInt(tr.input.sampleRate)).toBe(true);
    expect(isInt(tr.input.channels)).toBe(true);

    const audioEvents = (tr.audioEvents ?? []).map((x) => ({ event: x.event, startS: x.startS, endS: x.endS, durationS: x.durationS, formattedTimestamp: x.formattedTimestamp }));

    const dbody: DiagnosticRequest = { model: "falaai-diagnostic-1", dialog: tr.dialog, language: "pt-BR", durationSeconds: tr.durationSeconds, text: tr.text, audioEvents, clientReferenceId: "e2e-diag-2026-09-22-001" };
    const dp = await analysisApi.createDiagnosticV1AnalyzeDiagnosticPost({ diagnosticRequest: dbody });
    logTest("diagnostic", "POST", "/v1/analyze/diagnostic", dbody, dp, "HTTP 200", 200);
    expect(isStr(dp.id)).toBe(true);
    expect(isStr(dp.responseLanguage)).toBe(true);
    expect(dp.object).toBe("analysis");
    expect(dp.analysis.dialogueSummary).not.toBeNull();
    expect(dp.analysis.contactReason).not.toBeNull();
    expect(dp.analysis.identifiedAction).not.toBeNull();
    expect(dp.analysis.identifiedLabel).not.toBeNull();
    expect(dp.analysis.sentiment).not.toBeNull();
    expect(isInt(dp.usage.characters)).toBe(true);
    expect(isInt(dp.usage.creditsConsumed)).toBe(true);
    expect(isInt(dp.usage.processingMs)).toBe(true);

    const abody: RiskAuditRequest = {
      model: "falaai-risk-audit-1", dialog: tr.dialog, language: "pt-BR", responseLanguage: "pt-BR",
      durationSeconds: tr.durationSeconds, text: tr.text, audioEvents,
      callDirection: "inbound",
      participants: [
        { interlocutor: "Speaker 1", name: "Mateus", role: "agent" },
        { interlocutor: "Speaker 2", name: "Cliente", role: "client" },
      ],
      responseFormat: "v2", clientReferenceId: "e2e-aud-2026-09-22-001",
    };
    const a = await analysisApi.createRiskAuditV1AnalyzeRiskAuditPost({ riskAuditRequest: abody });
    logTest("riskAudit", "POST", "/v1/analyze/riskAudit", abody, a, "HTTP 200", 200);
    const pub = a.response;
    expect(isStr(pub.meta.id)).toBe(true);
    expect(isInt(pub.meta.usage.characters)).toBe(true);
    expect(isInt(pub.meta.usage.creditsConsumed)).toBe(true);
    expect(isInt(pub.meta.usage.processingMs)).toBe(true);
    for (const bloco of ["participants", "verdict", "scores", "detections", "analysis", "timeline",
                         "audioEventModel", "categoriesSummary", "indexer", "summary",
                         "actionsI18n", "auditDecisions", "scoringExplanation"]) {
      expect((pub as any)[bloco]).not.toBeNull();
      expect((pub as any)[bloco]).toBeDefined();
    }
    expect(typeof pub.htmlReport).toBe("string");
  }, 300000);
});