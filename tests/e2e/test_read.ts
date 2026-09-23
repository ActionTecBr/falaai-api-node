import { describe, it, expect } from "vitest";
import { createFalaAIClient } from "../../src/index";
import { BASE, KEY } from "./conftest";
import { logTest } from "./e2e_logger";

const client = createFalaAIClient({ apiKey: KEY, baseUrl: BASE });

function isStr(v: unknown): boolean {
  return typeof v === "string" && (v as string).length > 0;
}
function isInt(v: unknown): boolean {
  return typeof v === "number" && Number.isInteger(v);
}
function isBool(v: unknown): boolean {
  return typeof v === "boolean";
}

describe("leitura (sem custo)", () => {
  it("GET /v1/health", async () => {
    const { data, response } = await client.GET("/v1/health");
    logTest("health_get", "GET", "/v1/health", null, data, `HTTP ${response.status}`, response.status);
    expect(response.status).toBe(200);
    expect(data?.status).toBe("ok");
    expect(isStr(data?.version)).toBe(true);
    expect(isInt(data?.uptime_seconds)).toBe(true);
    expect((data?.uptime_seconds ?? -1) >= 0).toBe(true);
    expect(isBool(data?.database)).toBe(true);
    expect(isStr(data?.phase)).toBe(true);
    expect(isStr(data?.launch_date)).toBe(true);
  });

  it("HEAD /v1/health", async () => {
    const { response } = await client.HEAD("/v1/health");
    logTest("health_head", "HEAD", "/v1/health", null, { status: response.status }, `HTTP ${response.status}`, response.status);
    expect(response.status).toBe(200);
  });

  it("GET /api/version", async () => {
    const { data, response } = await client.GET("/api/version");
    logTest("version", "GET", "/api/version", null, data, `HTTP ${response.status}`, response.status);
    expect(response.status).toBe(200);
    expect(data?.service).toBe("FalaAI API");
    expect(isStr(data?.version)).toBe(true);
    expect(isStr(data?.deployDate)).toBe(true);
  });

  it("GET /v1/usage/log", async () => {
    const { data, response } = await client.GET("/v1/usage/log", { params: { query: { page: 1, limit: 5 } } });
    logTest("usage_log", "GET", "/v1/usage/log", { page: 1, limit: 5 }, data, `HTTP ${response.status}`, response.status);
    expect(response.status).toBe(200);
    expect(data?.page).toBe(1);
    expect(data?.limit).toBe(5);
    expect(Array.isArray(data?.data)).toBe(true);
    for (const it of data?.data ?? []) {
      expect(isStr(it.id)).toBe(true);
      expect(isStr(it.endpoint)).toBe(true);
      expect(isInt(it.credits_cost)).toBe(true);
      expect(isStr(it.status)).toBe(true);
      expect(isInt(it.errors_count)).toBe(true);
      expect(isStr(it.created_at)).toBe(true);
    }
  });

  it("GET /v1/usage/by-key", async () => {
    const { data, response } = await client.GET("/v1/usage/by-key");
    logTest("usage_by_key", "GET", "/v1/usage/by-key", null, data, `HTTP ${response.status}`, response.status);
    expect(response.status).toBe(200);
    expect(Array.isArray(data)).toBe(true);
    for (const it of data ?? []) {
      expect(isStr(it.key_id)).toBe(true);
      expect(typeof it.key_name).toBe("string");
      expect(isInt(it.total_credits)).toBe(true);
      expect(isInt(it.request_count)).toBe(true);
    }
  });

  it("GET /v1/webhooks", async () => {
    const { data, response } = await client.GET("/v1/webhooks", { params: { query: { page: 1, limit: 5 } } });
    logTest("webhooks_list", "GET", "/v1/webhooks", { page: 1, limit: 5 }, data, `HTTP ${response.status}`, response.status);
    expect(response.status).toBe(200);
    expect(data?.page).toBe(1);
    expect(data?.limit).toBe(5);
    expect(Array.isArray(data?.data)).toBe(true);
    for (const w of data?.data ?? []) {
      expect(isStr(w.id)).toBe(true);
      expect(isStr(w.user_id)).toBe(true);
      expect(typeof w.name).toBe("string");
      expect(isStr(w.url)).toBe(true);
      expect(typeof w.secret).toBe("string");
      expect(Array.isArray(w.events)).toBe(true);
      expect(isBool(w.active)).toBe(true);
      expect(isBool(w.retry_enabled)).toBe(true);
      expect(isInt(w.failure_count)).toBe(true);
      expect(isStr(w.created_at)).toBe(true);
      expect(isStr(w.updated_at)).toBe(true);
    }
  });

  it("GET /v1/email-alerts", async () => {
    const { data, response } = await client.GET("/v1/email-alerts", { params: { query: { page: 1, limit: 5 } } });
    logTest("email_alerts_list", "GET", "/v1/email-alerts", { page: 1, limit: 5 }, data, `HTTP ${response.status}`, response.status);
    expect(response.status).toBe(200);
    expect(data?.page).toBe(1);
    expect(data?.limit).toBe(5);
    expect(Array.isArray(data?.data)).toBe(true);
    for (const a of data?.data ?? []) {
      expect(isStr(a.id)).toBe(true);
      expect(isStr(a.user_id)).toBe(true);
      expect(typeof a.name).toBe("string");
      expect(isStr(a.email)).toBe(true);
      expect(Array.isArray(a.events)).toBe(true);
      expect(isBool(a.active)).toBe(true);
      expect(isStr(a.created_at)).toBe(true);
      expect(isStr(a.updated_at)).toBe(true);
    }
  });
});