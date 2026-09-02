import { parseQueryString } from "./parseQueryString.ts";
Deno.bench("parseQueryString", () => {
  parseQueryString("q=hello+world&tag=a&tag=b");
});
