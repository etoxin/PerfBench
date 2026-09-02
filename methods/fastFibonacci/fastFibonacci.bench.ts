import { fastFibonacci } from "./fastFibonacci.ts";
Deno.bench("fastFibonacci", () => {
  fastFibonacci(1_000);
});
