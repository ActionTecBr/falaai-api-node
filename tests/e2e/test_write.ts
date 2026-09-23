import { describe, it, expect } from "vitest";
import { createFalaAIClient } from "../../src/index";
import { BASE, KEY } from "./conftest";
import { logTest } from "./e2e_logger";

const client = createFalaAIClient({ apiKey: KEY, baseUrl: BASE });
const WNAME = "E2E Test Webhook";
const WURL = "https://e2e-falaai.invalid/hook";
const ANAME = "E2E Test Alert";
const AEMAIL = "e2e-test@falaai.invalid";
const EVENTS = ["credits.low", "payment.failed"] as const;

function isStr(v: unknown): boolean {
  return typeof v === "string" && (v as string).length > 0;
}
function isInt(v: unknown): boolean {
  return typeof v === "number" && Number.isInteger(v);
}
function isBool(v: unknown): boolean {
  return typeof v === "boolean";
}

function assertWebhook(w: any, wid: string, name: string, active: boolean) {
  expect(w.id).toBe(wid);
  expect(isStr(w.user_id)).toBe(true);
  expect(w.name).toBe(name);
  expect(w.url).toBe(WURL);
  expect(isStr(w.secret)).toBe(true);
  expect(Array.isArray(w.events)).toBe(true);
  expect(w.events.length).toBe(2);
  expect(w.active).toBe(active);
  expect(isBool(w.retry_enabled)).toBe(true);
  expect(isInt(w.failure_count)).toBe(true);
  expect(isStr(w.created_at)).toBe(true);
  expect(isStr(w.updated_at)).toBe(true);
}

function assertAlert(a: any, aid: string, name: string, active: boolean) {
  expect(a.id).toBe(aid);
  expect(isStr(a.user_id)).toBe(true);
  expect(a.name).toBe(name);
  expect(a.email).toBe(AEMAIL);
  expect(Array.isArray(a.events)).toBe(true);
  expect(a.events.length).toBe(2);
  expect(a.active).toBe(active);
  expect(isStr(a.created_at)).toBe(true);
  expect(isStr(a.updated_at)).toBe(true);
}

async function cleanupWebhooks() {
  const { data } = await client.GET("/v1/webhooks", { params: { query: { page: 1, limit: 100 } } });
  for (const w of data?.data ?? []) {
    if (w.url === WURL) await client.DELETE("/v1/webhooks/{webhook_id}", { params: { path: { webhook_id: w.id } } });
  }
}
async function cleanupAlerts() {
  const { data } = await client.GET("/v1/email-alerts", { params: { query: { page: 1, limit: 100 } } });
  for (const a of data?.data ?? []) {
    if (a.email === AEMAIL) await client.DELETE("/v1/email-alerts/{alert_id}", { params: { path: { alert_id: a.id } } });
  }
}

describe("escrita — CRUD (cria-e-limpa)", () => {
  it("webhooks CRUD", async () => {
    await cleanupWebhooks();
    const body = { name: WNAME, url: WURL, events: [...EVENTS] };
    const c = await client.POST("/v1/webhooks", { body });
    logTest("webhooks_create", "POST", "/v1/webhooks", body, c.data, `HTTP ${c.response.status}`, c.response.status);
    expect(c.response.status).toBe(200);
    const wid = c.data!.id;
    assertWebhook(c.data, wid, WNAME, true);

    const ub = { name: WNAME + " (updated)", active: false };
    const u = await client.PUT("/v1/webhooks/{webhook_id}", { params: { path: { webhook_id: wid } }, body: ub });
    logTest("webhooks_update", "PUT", `/v1/webhooks/${wid}`, ub, u.data, `HTTP ${u.response.status}`, u.response.status);
    expect(u.response.status).toBe(200);
    expect((u.data as any).message).toBe("updated");

    const r = await client.GET("/v1/webhooks", { params: { query: { page: 1, limit: 100 } } });
    const row = (r.data?.data ?? []).find((w) => w.id === wid);
    expect(row).toBeDefined();
    assertWebhook(row, wid, WNAME + " (updated)", false);

    const d = await client.DELETE("/v1/webhooks/{webhook_id}", { params: { path: { webhook_id: wid } } });
    logTest("webhooks_delete", "DELETE", `/v1/webhooks/${wid}`, null, d.data, `HTTP ${d.response.status}`, d.response.status);
    expect(d.response.status).toBe(200);
    expect((d.data as any).message).toBe("deleted");

    const r2 = await client.GET("/v1/webhooks", { params: { query: { page: 1, limit: 100 } } });
    expect((r2.data?.data ?? []).find((w) => w.id === wid)).toBeUndefined();
  });

  it("email-alerts CRUD", async () => {
    await cleanupAlerts();
    const body = { name: ANAME, email: AEMAIL, events: [...EVENTS] };
    const c = await client.POST("/v1/email-alerts", { body });
    logTest("email_alerts_create", "POST", "/v1/email-alerts", body, c.data, `HTTP ${c.response.status}`, c.response.status);
    expect(c.response.status).toBe(200);
    const aid = c.data!.id;
    assertAlert(c.data, aid, ANAME, true);

    const ub = { name: ANAME + " (updated)", active: false };
    const u = await client.PUT("/v1/email-alerts/{alert_id}", { params: { path: { alert_id: aid } }, body: ub });
    logTest("email_alerts_update", "PUT", `/v1/email-alerts/${aid}`, ub, u.data, `HTTP ${u.response.status}`, u.response.status);
    expect(u.response.status).toBe(200);
    expect((u.data as any).message).toBe("updated");

    const r = await client.GET("/v1/email-alerts", { params: { query: { page: 1, limit: 100 } } });
    const row = (r.data?.data ?? []).find((a) => a.id === aid);
    expect(row).toBeDefined();
    assertAlert(row, aid, ANAME + " (updated)", false);

    const d = await client.DELETE("/v1/email-alerts/{alert_id}", { params: { path: { alert_id: aid } } });
    logTest("email_alerts_delete", "DELETE", `/v1/email-alerts/${aid}`, null, d.data, `HTTP ${d.response.status}`, d.response.status);
    expect(d.response.status).toBe(200);
    expect((d.data as any).message).toBe("deleted");

    const r2 = await client.GET("/v1/email-alerts", { params: { query: { page: 1, limit: 100 } } });
    expect((r2.data?.data ?? []).find((a) => a.id === aid)).toBeUndefined();
  });
});