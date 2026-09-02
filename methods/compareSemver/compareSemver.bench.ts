import { compareSemver } from "./compareSemver.ts";
Deno.bench("compareSemver", () => {
  compareSemver("1.2.3-alpha.1", "1.2.3");
});
