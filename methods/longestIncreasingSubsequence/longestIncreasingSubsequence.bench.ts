import { longestIncreasingSubsequence } from "./longestIncreasingSubsequence.ts";

const values = Array.from({ length: 1_000 }, (_, index) => index);

Deno.bench("longestIncreasingSubsequence", () => {
  longestIncreasingSubsequence(values);
});
