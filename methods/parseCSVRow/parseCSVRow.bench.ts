import { parseCSVRow } from "./parseCSVRow.ts";
Deno.bench("parseCSVRow", () => {
  parseCSVRow('a,"b,c",d');
});
