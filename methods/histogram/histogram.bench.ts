import { histogram } from "./histogram.ts";
const values = Array.from({ length: 1_000 }, (_, index) => index);
Deno.bench("histogram", () => {
  histogram(values, 20);
});
