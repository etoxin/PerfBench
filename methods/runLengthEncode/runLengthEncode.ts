export type Run = readonly [character: string, count: number];

/** Encodes consecutive Unicode code points as character/count runs. */
export function runLengthEncode(value: string): Run[] {
  // TODO complete function
}
