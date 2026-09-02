import { assertEquals, assertThrows } from "@std/assert";
import { matrixMultiply } from "./matrixMultiply.ts";
Deno.test("multiplies matrices", () =>
  assertEquals(matrixMultiply([[1, 2], [3, 4]], [[5, 6], [7, 8]]), [[19, 22], [
    43,
    50,
  ]]));
Deno.test("validates dimensions", () => {
  assertThrows(() => matrixMultiply([[1]], [[1, 2], [3, 4]]), RangeError);
});
