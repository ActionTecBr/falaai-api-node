import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/e2e/test_*.ts"],
    fileParallelism: false,
    testTimeout: 300000,
  },
});