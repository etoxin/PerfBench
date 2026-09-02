import { BloomFilter } from "./BloomFilter.ts";
Deno.bench("BloomFilter", () => {
  const filter = new BloomFilter(1_000);
  for (let i = 0; i < 1_000; i++) filter.add(`value${i}`);
  filter.has("value500");
});
