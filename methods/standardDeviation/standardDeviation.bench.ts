import { standardDeviation } from "./standardDeviation.ts";
const values = Array.from({ length: 1_000 }, (_, index) => index);
Deno.bench("standardDeviation", () => {
  standardDeviation(values);
});
