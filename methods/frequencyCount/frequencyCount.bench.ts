import { frequencyCount } from "./frequencyCount.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index % 100);

Deno.bench("frequencyCount", () => {
  frequencyCount(values);
});
