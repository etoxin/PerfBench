import { convolve1D } from "./convolve1D.ts";
const values = Array.from({ length: 1_000 }, (_, index) => index);
Deno.bench("convolve1D", () => {
  convolve1D(values, [0.25, 0.5, 0.25]);
});
