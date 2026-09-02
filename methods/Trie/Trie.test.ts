import { assert, assertFalse } from "@std/assert";
import { Trie } from "./Trie.ts";
Deno.test("stores prefixes and complete words", () => {
  const trie = new Trie().insert("car").insert("card");
  assert(trie.has("car"));
  assert(trie.startsWith("ca"));
  assertFalse(trie.has("ca"));
  assert(trie.delete("car"));
  assertFalse(trie.has("car"));
  assert(trie.has("card"));
});
