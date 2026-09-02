import { primeSieve } from "./primeSieve.ts";
Deno.bench("primeSieve", () => {
  primeSieve(10_000);
});
