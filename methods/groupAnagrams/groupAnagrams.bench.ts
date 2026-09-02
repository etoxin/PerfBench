import { groupAnagrams } from "./groupAnagrams.ts";
Deno.bench("groupAnagrams", () => {
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
});
