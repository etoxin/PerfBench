import { gcd } from "./gcd.ts";
Deno.bench("gcd", () => {
  gcd(123456, 7890);
});
