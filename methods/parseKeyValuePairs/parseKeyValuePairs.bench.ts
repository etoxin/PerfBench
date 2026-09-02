import { parseKeyValuePairs } from "./parseKeyValuePairs.ts";
Deno.bench("parseKeyValuePairs", () => {
  parseKeyValuePairs("a=1,b=2,c=3");
});
