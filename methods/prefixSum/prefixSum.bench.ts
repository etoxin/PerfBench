import { prefixSum } from "./prefixSum.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("prefixSum", () => {
  prefixSum(values);
});
