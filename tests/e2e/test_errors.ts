import { describe, it, expect } from "vitest";
import { UsageApi } from "../../src/index";
import { BASE, KEY, makeConfig } from "./conftest";
import { logTest } from "./e2e_logger";

describe("erros", () => {
  it("401 chave invalida", async () => {
    const bad = new UsageApi(makeConfig(BASE, "fai_chave_invalida_000"));
    let status = 0;
    try {
      await bad.getUsageLogV1UsageLogGet({ page: 1, limit: 1 });
    } catch (e: any) {
      status = e?.response?.status ?? 0;
    }
    logTest("errors_401", "GET", "/v1/usage/log", null, { status }, `HTTP ${status}`, status);
    expect(status).toBe(401);
  });

  it("422 diagnostic missing required", async () => {
    const body = { language: "pt-BR", dialog: "Speaker 1: ola" };
    const r = await fetch(`${BASE}/v1/analyze/diagnostic`, {
      method: "POST",
      headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const j = await r.json();
    logTest("errors_422_diag", "POST", "/v1/analyze/diagnostic", body, j, `HTTP ${r.status}`, r.status);
    expect(r.status).toBe(422);
  });

  it("422 riskAudit missing required", async () => {
    const body = { language: "pt-BR", dialog: "Speaker 1: ola" };
    const r = await fetch(`${BASE}/v1/analyze/riskAudit`, { method: "POST", headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const j = await r.json();
    logTest("errors_422_aud", "POST", "/v1/analyze/riskAudit", body, j, `HTTP ${r.status}`, r.status);
    expect(r.status).toBe(422);
  });

  it("422 riskAudit extra forbidden", async () => {
    const body = { dialog: "Speaker 1: ola", language: "pt-BR", response_language: "pt-BR", duration_seconds: 10, threshold_multiplier: 1 };
    const r = await fetch(`${BASE}/v1/analyze/riskAudit`, { method: "POST", headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const j = await r.json();
    logTest("errors_422_extra", "POST", "/v1/analyze/riskAudit", body, j, `HTTP ${r.status}`, r.status);
    expect(r.status).toBe(422);
  });

  it("400 riskAudit language invalido", async () => {
    const body = { dialog: "Speaker 1: ola", language: "xx", response_language: "pt-BR", duration_seconds: 10 };
    const r = await fetch(`${BASE}/v1/analyze/riskAudit`, { method: "POST", headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const j = await r.json();
    logTest("errors_400_aud", "POST", "/v1/analyze/riskAudit", body, j, `HTTP ${r.status}`, r.status);
    expect(r.status).toBe(400);
  });

  it("400 diagnostic language invalido", async () => {
    const body = { dialog: "Speaker 1: ola", language: "xx", duration_seconds: 10 };
    const r = await fetch(`${BASE}/v1/analyze/diagnostic`, { method: "POST", headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const j = await r.json();
    logTest("errors_400_diag", "POST", "/v1/analyze/diagnostic", body, j, `HTTP ${r.status}`, r.status);
    expect(r.status).toBe(400);
  });
});