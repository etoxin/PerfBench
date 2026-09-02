import { indexBy } from "./indexBy.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("indexBy", () => {
  indexBy(values, (value) => value);
});
