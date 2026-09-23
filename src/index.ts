import createClient, { type Middleware } from "openapi-fetch";
import type { paths } from "./schema";

export type * from "./schema";

const DEFAULT_BASE_URL = "https://api01-falaai.action.tec.br";

export interface FalaAIClientOptions {
  apiKey: string;
  baseUrl?: string;
}

export function createFalaAIClient(options: FalaAIClientOptions) {
  if (!options || !options.apiKey) throw new Error("apiKey e obrigatorio");
  const client = createClient<paths>({ baseUrl: options.baseUrl ?? DEFAULT_BASE_URL });
  const auth: Middleware = {
    onRequest({ request }) {
      request.headers.set("Authorization", `Bearer ${options.apiKey}`);
      return request;
    },
  };
  client.use(auth);
  return client;
}

export type FalaAIClient = ReturnType<typeof createFalaAIClient>;