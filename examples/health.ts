import { Configuration, HealthApi } from "falaai-api";

const config = new Configuration({
  basePath: process.env.FALAAI_BASE_URL ?? "https://api01-falaai.action.tec.br",
});
const healthApi = new HealthApi(config);

const health = await healthApi.healthCheck();

const head = await healthApi.healthCheckHeadRaw();
console.log(JSON.stringify(health, null, 2));
