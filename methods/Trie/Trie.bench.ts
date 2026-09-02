import { Trie } from "./Trie.ts";
Deno.bench("Trie", () => {
  const trie = new Trie();
  for (let i = 0; i < 1_000; i++) trie.insert(`word${i}`);
  trie.has("word500");
});
