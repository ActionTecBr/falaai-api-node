import { describe, it, expect } from "vitest";
import { WebhooksApi, EmailAlertsApi, type WebhookEvent, type EmailEvent } from "../../src/index";
import { BASE, KEY, makeConfig } from "./conftest";
import { logTest } from "./e2e_logger";

const cfg = makeConfig(BASE, KEY);
const webhooksApi = new WebhooksApi(cfg);
const emailAlertsApi = new EmailAlertsApi(cfg);
const WNAME = "E2E Test Webhook";
const WURL = "https://e2e-falaai.invalid/hook";
const ANAME = "E2E Test Alert";
const AEMAIL = "e2e-test@falaai.invalid";
const EVENTS: WebhookEvent[] = ["credits.low", "payment.failed"];
const AEVENTS: EmailEvent[] = ["credits.low", "payment.failed"];

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
  expect(isStr(w.userId)).toBe(true);
  expect(w.name).toBe(name);
  expect(w.url).toBe(WURL);
  expect(isStr(w.secret)).toBe(true);
  expect(Array.isArray(w.events)).toBe(true);
  expect(w.events.length).toBe(2);
  expect(w.active).toBe(active);
  expect(isBool(w.retryEnabled)).toBe(true);
  expect(isInt(w.failureCount)).toBe(true);
  expect(isStr(w.createdAt)).toBe(true);
  expect(isStr(w.updatedAt)).toBe(true);
}

function assertAlert(a: any, aid: string, name: string, active: boolean) {
  expect(a.id).toBe(aid);
  expect(isStr(a.userId)).toBe(true);
  expect(a.name).toBe(name);
  expect(a.email).toBe(AEMAIL);
  expect(Array.isArray(a.events)).toBe(true);
  expect(a.events.length).toBe(2);
  expect(a.active).toBe(active);
  expect(isStr(a.createdAt)).toBe(true);
  expect(isStr(a.updatedAt)).toBe(true);
}

async function cleanupWebhooks() {
  const data = await webhooksApi.listWebhooksV1WebhooksGet({ page: 1, limit: 100 });
  for (const w of data.data ?? []) {
    if (w.url === WURL) await webhooksApi.deleteWebhookV1WebhooksWebhookIdDelete({ webhookId: w.id });
  }
}
async function cleanupAlerts() {
  const data = await emailAlertsApi.listEmailAlertsV1EmailAlertsGet({ page: 1, limit: 100 });
  for (const a of data.data ?? []) {
    if (a.email === AEMAIL) await emailAlertsApi.deleteEmailAlertV1EmailAlertsAlertIdDelete({ alertId: a.id });
  }
}

describe("escrita — CRUD (cria-e-limpa)", () => {
  it("webhooks CRUD", async () => {
    await cleanupWebhooks();
    const body = { name: WNAME, url: WURL, events: EVENTS };
    const c = await webhooksApi.createWebhookV1WebhooksPost({ createWebhookRequest: body });
    logTest("webhooks_create", "POST", "/v1/webhooks", body, c, "HTTP 200", 200);
    const wid = c.id;
    assertWebhook(c, wid, WNAME, true);

    const ub = { name: WNAME + " (updated)", active: false };
    const u = await webhooksApi.updateWebhookV1WebhooksWebhookIdPut({ webhookId: wid, updateWebhookRequest: ub });
    logTest("webhooks_update", "PUT", `/v1/webhooks/${wid}`, ub, u, "HTTP 200", 200);
    expect(u.message).toBe("updated");

    const r = await webhooksApi.listWebhooksV1WebhooksGet({ page: 1, limit: 100 });
    const row = (r.data ?? []).find((w) => w.id === wid);
    expect(row).toBeDefined();
    assertWebhook(row, wid, WNAME + " (updated)", false);

    const d = await webhooksApi.deleteWebhookV1WebhooksWebhookIdDelete({ webhookId: wid });
    logTest("webhooks_delete", "DELETE", `/v1/webhooks/${wid}`, null, d, "HTTP 200", 200);
    expect(d.message).toBe("deleted");

    const r2 = await webhooksApi.listWebhooksV1WebhooksGet({ page: 1, limit: 100 });
    expect((r2.data ?? []).find((w) => w.id === wid)).toBeUndefined();
  });

  it("email-alerts CRUD", async () => {
    await cleanupAlerts();
    const body = { name: ANAME, email: AEMAIL, events: AEVENTS };
    const c = await emailAlertsApi.createEmailAlertV1EmailAlertsPost({ createEmailAlertRequest: body });
    logTest("email_alerts_create", "POST", "/v1/email-alerts", body, c, "HTTP 200", 200);
    const aid = c.id;
    assertAlert(c, aid, ANAME, true);

    const ub = { name: ANAME + " (updated)", active: false };
    const u = await emailAlertsApi.updateEmailAlertV1EmailAlertsAlertIdPut({ alertId: aid, updateEmailAlertRequest: ub });
    logTest("email_alerts_update", "PUT", `/v1/email-alerts/${aid}`, ub, u, "HTTP 200", 200);
    expect(u.message).toBe("updated");

    const r = await emailAlertsApi.listEmailAlertsV1EmailAlertsGet({ page: 1, limit: 100 });
    const row = (r.data ?? []).find((a) => a.id === aid);
    expect(row).toBeDefined();
    assertAlert(row, aid, ANAME + " (updated)", false);

    const d = await emailAlertsApi.deleteEmailAlertV1EmailAlertsAlertIdDelete({ alertId: aid });
    logTest("email_alerts_delete", "DELETE", `/v1/email-alerts/${aid}`, null, d, "HTTP 200", 200);
    expect(d.message).toBe("deleted");

    const r2 = await emailAlertsApi.listEmailAlertsV1EmailAlertsGet({ page: 1, limit: 100 });
    expect((r2.data ?? []).find((a) => a.id === aid)).toBeUndefined();
  });
});