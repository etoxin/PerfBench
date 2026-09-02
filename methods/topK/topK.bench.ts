import { topK } from "./topK.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("topK", () => {
  topK(values, 10);
});
