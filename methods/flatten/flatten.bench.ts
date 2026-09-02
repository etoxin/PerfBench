import { flatten } from "./flatten.ts";

const values = [1, [2, [3, 4]], 5];

Deno.bench("flatten", () => {
  flatten(values);
});
