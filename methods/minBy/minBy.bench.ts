import { minBy } from "./minBy.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("minBy", () => {
  minBy(values, (value) => value);
});
