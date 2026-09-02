import { assertEquals } from "@std/assert";
import { insertionSort } from "./insertionSort.ts";
Deno.test("stably sorts without mutation", () => {
  const a = { n: 2, id: "a" }, b = { n: 1, id: "b" }, c = { n: 2, id: "c" };
  assertEquals(insertionSort([a, b, c], (x, y) => x.n - y.n), [b, a, c]);
});
