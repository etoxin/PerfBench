import { chunk } from "./chunk.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("chunk", () => {
  chunk(values, 32);
});
