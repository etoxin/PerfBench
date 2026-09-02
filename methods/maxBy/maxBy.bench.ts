import { maxBy } from "./maxBy.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("maxBy", () => {
  maxBy(values, (value) => value);
});
