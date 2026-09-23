import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dir = dirname(fileURLToPath(import.meta.url));
const LOG_DIR = resolve(__dir, "logs");

function stamp(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}

export function logTest(
  name: string, method: string, path: string,
  payload: unknown, response: unknown, result: string, statusCode?: number,
): string {
  const safe = name.toUpperCase().replace(/[^A-Z0-9]+/g, "_");
  const dir = resolve(LOG_DIR, safe);
  mkdirSync(dir, { recursive: true });
  const ts = stamp();
  const file = resolve(dir, `${safe}_${ts}.log`);
  const lines = [
    "=".repeat(70),
    `TESTE: ${method} ${path}`,
    `DATA: ${new Date().toISOString()}`,
    "=".repeat(70), "",
    "--- PAYLOAD (enviado) ---",
    payload != null ? JSON.stringify(payload, null, 2) : "(sem payload)",
    "", "--- RESPOSTA (saida do SDK) ---",
    statusCode != null ? `HTTP: ${statusCode}` : "",
    response != null ? JSON.stringify(response, null, 2) : "(sem resposta)",
    "", "--- RESULTADO ---", result, "",
  ];
  writeFileSync(file, lines.join("\n"), "utf-8");
  return file;
}