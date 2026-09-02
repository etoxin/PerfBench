import { runLengthEncode } from "./runLengthEncode.ts";
const value = "the quick brown fox jumps over the lazy dog ".repeat(20);
Deno.bench("runLengthEncode", () => {
  runLengthEncode(value);
});
