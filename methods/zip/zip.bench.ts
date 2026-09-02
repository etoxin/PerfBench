import { zip } from "./zip.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("zip", () => {
  zip(values, values, values);
});
