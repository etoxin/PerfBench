import { sum } from "./sum.ts";
const values = Array.from({ length: 1_000 }, (_, index) => index);
Deno.bench("sum", () => {
  sum(values);
});
