import { mergeIntervals } from "./mergeIntervals.ts";
const intervals = Array.from({ length: 1_000 }, (_, i) => [i, i + 2] as const);
Deno.bench("mergeIntervals", () => {
  mergeIntervals(intervals);
});
