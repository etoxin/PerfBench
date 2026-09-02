import { UnionFind } from "./UnionFind.ts";
Deno.bench("UnionFind", () => {
  const sets = new UnionFind(1_000);
  for (let i = 1; i < 1_000; i++) sets.union(0, i);
});
