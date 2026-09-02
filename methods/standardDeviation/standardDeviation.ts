import { variance } from "../variance/variance.ts";
/** Returns the population or sample standard deviation. */
export function standardDeviation(
  values: readonly number[],
  sample = false,
): number {
  return Math.sqrt(variance(values, sample));
}
