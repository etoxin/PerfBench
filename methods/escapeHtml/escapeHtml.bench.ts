import { escapeHtml } from "./escapeHtml.ts";
const value = "the quick brown fox jumps over the lazy dog ".repeat(20);
Deno.bench("escapeHtml", () => {
  escapeHtml(value);
});
