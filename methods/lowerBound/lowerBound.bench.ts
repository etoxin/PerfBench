import { lowerBound } from "./lowerBound.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("lowerBound", () => {
  lowerBound(values, 777, (a, b) => a - b);
});
