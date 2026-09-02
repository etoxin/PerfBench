import { rangeSum } from "./rangeSum.ts";
Deno.bench("rangeSum", () => {
  rangeSum(1, 1_000_000);
});
