import { dedupe } from "./dedupe.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index % 500);

Deno.bench("dedupe", () => {
  dedupe(values);
});
