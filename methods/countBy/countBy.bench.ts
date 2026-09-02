import { countBy } from "./countBy.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("countBy", () => {
  countBy(values, (value) => value % 100);
});
