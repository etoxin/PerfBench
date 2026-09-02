import { uniqueBy } from "./uniqueBy.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("uniqueBy", () => {
  uniqueBy(values, (value) => value % 500);
});
