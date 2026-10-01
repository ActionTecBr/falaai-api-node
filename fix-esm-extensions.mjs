#!/usr/bin/env node
/**
 * fix-esm-extensions.mjs - pos-build: adiciona a extensao .js nos imports/exports
 * RELATIVOS do dist/ (ESM do Node exige extensao; o openapi-generator gera sem).
 * Roda apos o `tsc` (script "build"). Idempotente (nao duplica .js).
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const DIST = join(dirname(fileURLToPath(import.meta.url)), "dist");

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith(".js")) fix(p);
  }
}

function fix(file) {
  const src = readFileSync(file, "utf8");
  const out = src.replace(/(from\s+["'])(\.\.?\/[^"']+?)(["'])/g, (m, a, spec, c) => {
    if (/\.(js|json|mjs|cjs)$/.test(spec)) return m;
    return a + spec + ".js" + c;
  });
  if (out !== src) writeFileSync(file, out, "utf8");
}

walk(DIST);
console.log("fix-esm-extensions: OK (" + DIST + ")");