import { assertEquals } from "@std/assert";
import { compareSemver } from "./compareSemver.ts";
Deno.test("compares semantic version precedence", () => {
  assertEquals(compareSemver("1.0.0-alpha", "1.0.0"), -1);
  assertEquals(compareSemver("2.0.0", "1.9.9"), 1);
  assertEquals(compareSemver("1.0.0+one", "1.0.0+two"), 0);
});
