import { variance } from "./variance.ts";
const values = Array.from({ length: 1_000 }, (_, index) => index);
Deno.bench("variance", () => {
  variance(values);
});
