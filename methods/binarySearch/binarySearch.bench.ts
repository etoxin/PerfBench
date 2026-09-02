import { binarySearch } from "./binarySearch.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("binarySearch", () => {
  binarySearch(values, 777, (a, b) => a - b);
});
