import { assertEquals } from "@std/assert";
import { sortByKey } from "./sortByKey.ts";
Deno.test("stably sorts records by key", () => {
  const values = [{ n: 2, id: "a" }, { n: 1, id: "b" }, { n: 2, id: "c" }];
  assertEquals(sortByKey(values, (x) => x.n, (a, b) => a - b), [
    values[1],
    values[0],
    values[2],
  ]);
});
