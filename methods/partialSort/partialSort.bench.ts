import { partialSort } from "./partialSort.ts";
const values = Array.from({ length: 1_000 }, (_, index) => 999 - index);
const compare = (a: number, b: number) => a - b;
Deno.bench("partialSort", () => {
  partialSort(values, 100, compare);
});
