import { serializeQueryString } from "./serializeQueryString.ts";
Deno.bench("serializeQueryString", () => {
  serializeQueryString(new Map([["q", ["hello world"]], ["tag", ["a", "b"]]]));
});
