import { assertEquals, assertThrows } from "@std/assert";
import { parseSemver } from "./parseSemver.ts";
Deno.test("parses semantic versions", () => {
  assertEquals(parseSemver("1.2.3-alpha.1+build.5"), {
    major: 1,
    minor: 2,
    patch: 3,
    prerelease: ["alpha", "1"],
    build: ["build", "5"],
  });
});
Deno.test("rejects invalid versions", () => {
  assertThrows(() => parseSemver("01.2.3"), SyntaxError);
  assertThrows(() => parseSemver("1.0.0-01"), SyntaxError);
});
