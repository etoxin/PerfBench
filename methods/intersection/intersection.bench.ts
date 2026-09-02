import { intersection } from "./intersection.ts";

const a = Array.from({ length: 1_000 }, (_, index) => index);
const b = Array.from({ length: 500 }, (_, index) => index * 2);

Deno.bench("intersection", () => {
  intersection(a, b);
});
