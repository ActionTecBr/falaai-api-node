import { describe, it, expect } from "vitest";
import { createFalaAIClient } from "../../src/index";
import { BASE, KEY } from "./conftest";
import { logTest } from "./e2e_logger";

describe("erros", () => {
  it("401 chave invalida", async () => {
    const bad = createFalaAIClient({ apiKey: "fai_chave_invalida_000", baseUrl: BASE });
    const { data, response } = await bad.GET("/v1/usage/log", { params: { query: { page: 1, limit: 1 } } });
    logTest("errors_401", "GET", "/v1/usage/log", null, data, `HTTP ${response.status}`, response.status);
    expect(response.status).toBe(401);
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

  it("422 auditoria missing required", async () => {
    const body = { language: "pt-BR", dialog: "Speaker 1: ola" };
    const r = await fetch(`${BASE}/v1/analyze/auditoriaRisco`, { method: "POST", headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const j = await r.json();
    logTest("errors_422_aud", "POST", "/v1/analyze/auditoriaRisco", body, j, `HTTP ${r.status}`, r.status);
    expect(r.status).toBe(422);
  });

  it("422 auditoria extra forbidden", async () => {
    const body = { dialog: "Speaker 1: ola", language: "pt-BR", response_language: "pt-BR", duration_seconds: 10, threshold_multiplier: 1 };
    const r = await fetch(`${BASE}/v1/analyze/auditoriaRisco`, { method: "POST", headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const j = await r.json();
    logTest("errors_422_extra", "POST", "/v1/analyze/auditoriaRisco", body, j, `HTTP ${r.status}`, r.status);
    expect(r.status).toBe(422);
  });

  it("400 auditoria language invalido", async () => {
    const body = { dialog: "Speaker 1: ola", language: "xx", response_language: "pt-BR", duration_seconds: 10 };
    const r = await fetch(`${BASE}/v1/analyze/auditoriaRisco`, { method: "POST", headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const j = await r.json();
    logTest("errors_400_aud", "POST", "/v1/analyze/auditoriaRisco", body, j, `HTTP ${r.status}`, r.status);
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