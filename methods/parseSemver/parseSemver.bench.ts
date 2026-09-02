import { parseSemver } from "./parseSemver.ts";
Deno.bench("parseSemver", () => {
  parseSemver("1.2.3-alpha.1+build.5");
});
