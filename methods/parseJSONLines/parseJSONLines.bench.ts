import { parseJSONLines } from "./parseJSONLines.ts";
Deno.bench("parseJSONLines", () => {
  parseJSONLines('{"a":1}\n{"b":2}\n');
});
