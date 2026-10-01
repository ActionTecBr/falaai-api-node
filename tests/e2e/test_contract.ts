import { describe, it, expect } from "vitest";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { HealthApi, AnalysisApi, SpeechApi, UsageApi, VersionApi, WebhooksApi, EmailAlertsApi } from "../../src/index";

const __dir = dirname(fileURLToPath(import.meta.url));
const API_ROOT = resolve(__dir, "..", "..", "..", "..");
const SPEC = resolve(API_ROOT, "openapi.json");
const APIS_DIR = resolve(__dir, "..", "..", "src", "apis");

const EXPECTED_OPS = [
  ["POST", "/v1/audio/transcriptions"],
  ["POST", "/v1/analyze/diagnostic"],
  ["POST", "/v1/analyze/riskAudit"],
  ["GET", "/v1/usage/log"],
  ["GET", "/v1/usage/by-key"],
  ["GET", "/v1/webhooks"],
  ["POST", "/v1/webhooks"],
  ["PUT", "/v1/webhooks/{webhook_id}"],
  ["DELETE", "/v1/webhooks/{webhook_id}"],
  ["GET", "/v1/email-alerts"],
  ["POST", "/v1/email-alerts"],
  ["PUT", "/v1/email-alerts/{alert_id}"],
  ["DELETE", "/v1/email-alerts/{alert_id}"],
  ["GET", "/api/version"],
  ["GET", "/v1/health"],
  ["HEAD", "/v1/health"],
];

describe("contrato / cobertura", () => {
  it("openapi tem exatamente as operacoes esperadas", () => {
    const spec = JSON.parse(readFileSync(SPEC, "utf-8"));
    const ops: string[] = [];
    for (const [path, methods] of Object.entries<any>(spec.paths)) {
      for (const m of Object.keys(methods)) {
        if (["get", "post", "put", "delete", "patch", "head"].includes(m)) ops.push(`${m.toUpperCase()} ${path}`);
      }
    }
    expect(ops.sort()).toEqual(EXPECTED_OPS.map(([m, p]) => `${m} ${p}`).sort());
  });

  it("SDK cobre 100% das operacoes", () => {
    const files = readdirSync(APIS_DIR).filter((f) => f.endsWith(".ts") && f !== "index.ts");
    const text = files.map((f) => readFileSync(resolve(APIS_DIR, f), "utf-8")).join("\n");
    for (const [, path] of EXPECTED_OPS) {
      expect(text.includes(`\`${path}\``), path).toBe(true);
    }
    for (const Api of [HealthApi, AnalysisApi, SpeechApi, UsageApi, VersionApi, WebhooksApi, EmailAlertsApi]) {
      expect(typeof Api).toBe("function");
    }
  });

  it("exemplos de uso existem (sincronia fonte unica)", () => {
    const ex = resolve(API_ROOT, "sdks", "node", "examples");
    for (const f of ["transcribe.ts", "diagnose.ts", "audit.ts", "health.ts"]) {
      expect(existsSync(resolve(ex, f)), f).toBe(true);
    }
  });
});