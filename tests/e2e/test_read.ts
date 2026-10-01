import { describe, it, expect } from "vitest";
import { HealthApi, VersionApi, UsageApi, WebhooksApi, EmailAlertsApi } from "../../src/index";
import { BASE, KEY, makeConfig } from "./conftest";
import { logTest } from "./e2e_logger";

const cfg = makeConfig(BASE, KEY);
const healthApi = new HealthApi(cfg);
const versionApi = new VersionApi(cfg);
const usageApi = new UsageApi(cfg);
const webhooksApi = new WebhooksApi(cfg);
const emailAlertsApi = new EmailAlertsApi(cfg);

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
    const data = await healthApi.healthCheck();
    logTest("health_get", "GET", "/v1/health", null, data, "HTTP 200", 200);
    expect(data.status).toBe("ok");
    expect(isStr(data.version)).toBe(true);
    expect(isInt(data.uptimeSeconds)).toBe(true);
    expect((data.uptimeSeconds ?? -1) >= 0).toBe(true);
    expect(isBool(data.database)).toBe(true);
    expect(isStr(data.phase)).toBe(true);
    expect(isStr(data.launchDate)).toBe(true);
  });

  it("HEAD /v1/health", async () => {
    const raw = await healthApi.healthCheckHeadRaw();
    logTest("health_head", "HEAD", "/v1/health", null, { status: raw.raw.status }, `HTTP ${raw.raw.status}`, raw.raw.status);
    expect(raw.raw.status).toBe(200);
  });

  it("GET /api/version", async () => {
    const data = await versionApi.getVersionApiVersionGet();
    logTest("version", "GET", "/api/version", null, data, "HTTP 200", 200);
    expect(data.service).toBe("FalaAI API");
    expect(isStr(data.version)).toBe(true);
    expect(isStr(data.deployDate)).toBe(true);
  });

  it("GET /v1/usage/log", async () => {
    const data = await usageApi.getUsageLogV1UsageLogGet({ page: 1, limit: 5 });
    logTest("usage_log", "GET", "/v1/usage/log", { page: 1, limit: 5 }, data, "HTTP 200", 200);
    expect(data.page).toBe(1);
    expect(data.limit).toBe(5);
    expect(Array.isArray(data.data)).toBe(true);
    for (const it of data.data ?? []) {
      expect(isStr(it.id)).toBe(true);
      expect(isStr(it.endpoint)).toBe(true);
      expect(isInt(it.creditsCost)).toBe(true);
      expect(isStr(it.status)).toBe(true);
      expect(isInt(it.errorsCount)).toBe(true);
      expect(isStr(it.createdAt)).toBe(true);
    }
  });

  it("GET /v1/usage/by-key", async () => {
    const data = await usageApi.getUsageByKeyV1UsageByKeyGet();
    logTest("usage_by_key", "GET", "/v1/usage/by-key", null, data, "HTTP 200", 200);
    expect(Array.isArray(data)).toBe(true);
    for (const it of data ?? []) {
      expect(isStr(it.keyId)).toBe(true);
      expect(typeof it.keyName).toBe("string");
      expect(isInt(it.totalCredits)).toBe(true);
      expect(isInt(it.requestCount)).toBe(true);
    }
  });

  it("GET /v1/webhooks", async () => {
    const data = await webhooksApi.listWebhooksV1WebhooksGet({ page: 1, limit: 5 });
    logTest("webhooks_list", "GET", "/v1/webhooks", { page: 1, limit: 5 }, data, "HTTP 200", 200);
    expect(data.page).toBe(1);
    expect(data.limit).toBe(5);
    expect(Array.isArray(data.data)).toBe(true);
    for (const w of data.data ?? []) {
      expect(isStr(w.id)).toBe(true);
      expect(isStr(w.userId)).toBe(true);
      expect(typeof w.name).toBe("string");
      expect(isStr(w.url)).toBe(true);
      expect(typeof w.secret).toBe("string");
      expect(Array.isArray(w.events)).toBe(true);
      expect(isBool(w.active)).toBe(true);
      expect(isBool(w.retryEnabled)).toBe(true);
      expect(isInt(w.failureCount)).toBe(true);
      expect(isStr(w.createdAt)).toBe(true);
      expect(isStr(w.updatedAt)).toBe(true);
    }
  });

  it("GET /v1/email-alerts", async () => {
    const data = await emailAlertsApi.listEmailAlertsV1EmailAlertsGet({ page: 1, limit: 5 });
    logTest("email_alerts_list", "GET", "/v1/email-alerts", { page: 1, limit: 5 }, data, "HTTP 200", 200);
    expect(data.page).toBe(1);
    expect(data.limit).toBe(5);
    expect(Array.isArray(data.data)).toBe(true);
    for (const a of data.data ?? []) {
      expect(isStr(a.id)).toBe(true);
      expect(isStr(a.userId)).toBe(true);
      expect(typeof a.name).toBe("string");
      expect(isStr(a.email)).toBe(true);
      expect(Array.isArray(a.events)).toBe(true);
      expect(isBool(a.active)).toBe(true);
      expect(isStr(a.createdAt)).toBe(true);
      expect(isStr(a.updatedAt)).toBe(true);
    }
  });
});