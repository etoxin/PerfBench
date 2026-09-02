import { twoSum } from "./twoSum.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("twoSum", () => {
  twoSum(values, 1500);
});
