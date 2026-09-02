import { radixSort } from "./radixSort.ts";
const values = Array.from({ length: 1_000 }, (_, index) => 999 - index);
Deno.bench("radixSort", () => {
  radixSort(values);
});
