import type { Run } from "../runLengthEncode/runLengthEncode.ts";
/** Decodes character/count runs. */
export function runLengthDecode(runs: readonly Run[]): string {
  let result = "";
  for (const [character, count] of runs) {
    if (!Number.isSafeInteger(count) || count < 0) {
      throw new RangeError("counts must be non-negative integers");
    }
    result += character.repeat(count);
  }
  return result;
}
