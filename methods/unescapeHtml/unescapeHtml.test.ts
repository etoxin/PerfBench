import { assertEquals } from "@std/assert";
import { unescapeHtml } from "./unescapeHtml.ts";
Deno.test("decodes common HTML entities", () => {
  assertEquals(
    unescapeHtml("&lt;b&gt;Tom &amp; Jerry&#39;s&lt;/b&gt;"),
    "<b>Tom & Jerry's</b>",
  );
});
