import { nearestValue } from "./nearestValue.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("nearestValue", () => {
  nearestValue(values, 777.5);
});
