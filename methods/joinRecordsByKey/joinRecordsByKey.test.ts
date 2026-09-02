import { assertEquals } from "@std/assert";
import { joinRecordsByKey } from "./joinRecordsByKey.ts";
Deno.test("inner joins records and expands duplicate matches", () => {
  const left = [{ id: 1, name: "a" }, { id: 2, name: "b" }];
  const right = [{ owner: 1, value: "x" }, { owner: 1, value: "y" }, {
    owner: 3,
    value: "z",
  }];
  assertEquals(joinRecordsByKey(left, right, (x) => x.id, (x) => x.owner), [
    { left: left[0], right: right[0] },
    { left: left[0], right: right[1] },
  ]);
});
Deno.test("returns empty when no keys match", () =>
  assertEquals(joinRecordsByKey([1], [2], String, String), []));
