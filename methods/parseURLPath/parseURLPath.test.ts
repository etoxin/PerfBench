import { assertEquals, assertThrows } from "@std/assert";
import { parseURLPath } from "./parseURLPath.ts";
Deno.test("extracts and decodes path segments", () => {
  assertEquals(parseURLPath("/users/Ada%20Lovelace/?tab=1"), [
    "users",
    "Ada Lovelace",
  ]);
  assertEquals(parseURLPath("https://example.test/a/b#x"), ["a", "b"]);
});
Deno.test("rejects malformed encoding", () => {
  assertThrows(() => parseURLPath("/a/%ZZ"), URIError);
});
