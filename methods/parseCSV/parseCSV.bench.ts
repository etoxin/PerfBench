import { parseCSV } from "./parseCSV.ts";
Deno.bench("parseCSV", () => {
  parseCSV('a,b\n1,"x,y"\n');
});
