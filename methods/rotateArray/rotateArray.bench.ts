import { rotateArray } from "./rotateArray.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("rotateArray", () => {
  rotateArray(values, 137);
});
