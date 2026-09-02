import { runLengthDecode } from "./runLengthDecode.ts";
Deno.bench("runLengthDecode", () => {
  runLengthDecode([["a", 100], ["b", 100]]);
});
