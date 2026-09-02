import { unescapeHtml } from "./unescapeHtml.ts";
Deno.bench("unescapeHtml", () => {
  unescapeHtml("&lt;p&gt;hello &amp; goodbye&lt;/p&gt;");
});
