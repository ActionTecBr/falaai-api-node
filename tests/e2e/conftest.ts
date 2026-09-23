import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dir = dirname(fileURLToPath(import.meta.url));

function loadEnv(path: string): Record<string, string> {
  const out: Record<string, string> = {};
  try {
    for (const line of readFileSync(path, "utf-8").split(/\r?\n/)) {
      const t = line.trim();
      if (!t || t.startsWith("#") || !t.includes("=")) continue;
      const i = t.indexOf("=");
      out[t.slice(0, i).trim()] = t.slice(i + 1).trim();
    }
  } catch { /* sem .env.e2e */ }
  return out;
}

const env = loadEnv(resolve(__dir, "..", "..", "..", ".env.e2e"));

export const BASE = process.env.FALAAI_E2E_BASE || env.FALAAI_LOCAL_URL || "http://localhost:8002";
export const PROD = env.FALAAI_PROD_URL || "https://api01-falaai.action.tec.br";
export const KEY = env.FALAAI_TEST_KEY || "";
export const AUDIO = env.FALAAI_E2E_AUDIO || "";