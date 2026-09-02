import { findMissingInteger } from "./findMissingInteger.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("findMissingInteger", () => {
  findMissingInteger(values);
});
