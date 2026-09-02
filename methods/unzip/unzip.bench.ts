import { unzip } from "./unzip.ts";

const rows = Array.from(
  { length: 1_000 },
  (_, index) => [index, index + 1, index + 2],
);

Deno.bench("unzip", () => {
  unzip(rows);
});
