import { assertEquals } from "@std/assert";
import { convolve1D } from "./convolve1D.ts";
Deno.test("computes full convolution", () => {
  assertEquals(convolve1D([1, 2, 3], [1, 1]), [1, 3, 5, 3]);
  assertEquals(convolve1D([], [1]), []);
});
