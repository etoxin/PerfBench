import { integerPower } from "./integerPower.ts";
Deno.bench("integerPower", () => {
  integerPower(1.0001, 10_000);
});
