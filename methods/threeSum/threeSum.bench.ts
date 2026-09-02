import { threeSum } from "./threeSum.ts";

const values = Array.from({ length: 200 }, (_, index) => index - 100);

Deno.bench("threeSum", () => {
  threeSum(values);
});
