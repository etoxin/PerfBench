import { assertEquals } from "@std/assert";
import { parseQueryString } from "./parseQueryString.ts";
Deno.test("parses decoded and repeated query values", () => {
  assertEquals(
    parseQueryString("?q=hello+world&tag=a&tag=b"),
    new Map([["q", ["hello world"]], ["tag", ["a", "b"]]]),
  );
  assertEquals(parseQueryString(""), new Map());
});
