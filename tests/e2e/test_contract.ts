import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { createFalaAIClient } from "../../src/index";

const __dir = dirname(fileURLToPath(import.meta.url));
const API_ROOT = resolve(__dir, "..", "..", "..", "..");
const SPEC = resolve(API_ROOT, "openapi.json");
const SCHEMA = resolve(__dir, "..", "..", "src", "schema.d.ts");

const EXPECTED_OPS = [
  ["POST", "/v1/audio/transcriptions"],
  ["POST", "/v1/analyze/diagnostic"],
  ["POST", "/v1/analyze/auditoriaRisco"],
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
    const schema = readFileSync(SCHEMA, "utf-8");
    for (const [, path] of EXPECTED_OPS) {
      expect(schema.includes(`"${path}"`), path).toBe(true);
    }
    const client: any = createFalaAIClient({ apiKey: "x", baseUrl: "http://localhost" });
    for (const m of ["GET", "POST", "PUT", "DELETE", "HEAD"]) {
      expect(typeof client[m]).toBe("function");
    }
  });

  it("exemplos de uso existem (sincronia fonte unica)", () => {
    const ex = resolve(API_ROOT, "app", "static", "examples");
    for (const f of [
      "curl/transcribe.sh", "python/transcribe.py", "nodejs/transcribe.js",
      "curl/auditoria_risco.sh", "python/auditoria_risco.py", "nodejs/auditoria_risco.js",
      "curl/diagnostic.sh", "python/diagnostic.py", "nodejs/diagnostic.js",
    ]) {
      expect(existsSync(resolve(ex, f)), f).toBe(true);
    }
  });
});