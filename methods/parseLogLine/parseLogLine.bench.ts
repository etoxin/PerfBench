import { parseLogLine } from "./parseLogLine.ts";
Deno.bench("parseLogLine", () => {
  parseLogLine("[2024-01-02T03:04:05Z] INFO Started");
});
