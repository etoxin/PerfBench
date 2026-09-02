import { quickSelect } from "./quickSelect.ts";

const values = Array.from({ length: 1_000 }, (_, index) => 999 - index);

Deno.bench("quickSelect", () => {
  quickSelect(values, 500, (a, b) => a - b);
});
