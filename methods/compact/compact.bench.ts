import { compact } from "./compact.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("compact", () => {
  compact(values, [0]);
});
