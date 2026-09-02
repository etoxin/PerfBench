import { assertEquals } from "@std/assert";
import { stableSort } from "./stableSort.ts";
Deno.test("retains order for equal values", () => {
  const values = [{ n: 2, id: "a" }, { n: 1, id: "b" }, { n: 2, id: "c" }];
  assertEquals(stableSort(values, (a, b) => a.n - b.n), [
    values[1],
    values[0],
    values[2],
  ]);
});
