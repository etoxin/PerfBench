import { assertEquals } from "@std/assert";
import { slugify } from "./slugify.ts";
Deno.test("creates normalized URL slugs", () => {
  assertEquals(slugify("  Héllo, World!  "), "hello-world");
  assertEquals(slugify("---"), "");
});
