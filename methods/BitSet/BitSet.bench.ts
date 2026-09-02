import { BitSet } from "./BitSet.ts";
Deno.bench("BitSet", () => {
  const bits = new BitSet(1_000);
  for (let i = 0; i < 1_000; i++) bits.set(i);
});
