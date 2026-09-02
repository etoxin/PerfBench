import { parseURLPath } from "./parseURLPath.ts";
Deno.bench("parseURLPath", () => {
  parseURLPath("/users/Ada%20Lovelace/settings");
});
