import { assertEquals } from "@std/assert";
import { serializeQueryString } from "./serializeQueryString.ts";
Deno.test("serializes repeated and encoded values", () => {
  assertEquals(
    serializeQueryString(
      new Map([["q", ["hello world"]], ["tag", ["a", "b"]]]),
    ),
    "q=hello+world&tag=a&tag=b",
  );
  assertEquals(serializeQueryString(new Map()), "");
});
