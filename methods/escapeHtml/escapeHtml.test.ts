import { assertEquals } from "@std/assert";
import { escapeHtml } from "./escapeHtml.ts";
Deno.test("escapes HTML-sensitive characters once", () => {
  assertEquals(
    escapeHtml('<a x="1">&\'</a>'),
    "&lt;a x=&quot;1&quot;&gt;&amp;&#39;&lt;/a&gt;",
  );
});
