import { movingAverage } from "./movingAverage.ts";
const values = Array.from({ length: 1_000 }, (_, index) => index);
Deno.bench("movingAverage", () => {
  movingAverage(values, 20);
});
