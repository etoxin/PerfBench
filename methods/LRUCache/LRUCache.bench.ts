import { LRUCache } from "./LRUCache.ts";
Deno.bench("LRUCache", () => {
  const cache = new LRUCache<number, number>(100);
  for (let i = 0; i < 1_000; i++) cache.set(i, i).get(i);
});
