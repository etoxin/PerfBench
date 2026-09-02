import { partition } from "./partition.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("partition", () => {
  partition(values, (value) => value % 2 === 0);
});
