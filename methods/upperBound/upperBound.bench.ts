import { upperBound } from "./upperBound.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("upperBound", () => {
  upperBound(values, 777, (a, b) => a - b);
});
