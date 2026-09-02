import { slidingWindowMax } from "./slidingWindowMax.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("slidingWindowMax", () => {
  slidingWindowMax(values, 20);
});
