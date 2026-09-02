import { mean } from "./mean.ts";
const values = Array.from({ length: 1_000 }, (_, index) => index);
Deno.bench("mean", () => {
  mean(values);
});
