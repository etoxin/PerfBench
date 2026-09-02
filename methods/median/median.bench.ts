import { median } from "./median.ts";
const values = Array.from({ length: 1_000 }, (_, index) => index);
Deno.bench("median", () => {
  median(values);
});
