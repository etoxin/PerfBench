export type Run = readonly [character: string, count: number];
/** Encodes consecutive Unicode code points as character/count runs. */
export function runLengthEncode(value: string): Run[] {
  const runs: [string, number][] = [];
  for (const character of value) {
    const last = runs[runs.length - 1];
    if (last?.[0] === character) last[1]++;
    else runs.push([character, 1]);
  }
  return runs;
}
