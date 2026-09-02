export interface Histogram {
  minimum: number;
  maximum: number;
  counts: number[];
}
/** Distributes finite values into equal-width bins over their observed range. */
export function histogram(values: readonly number[], bins: number): Histogram {
  if (!Number.isInteger(bins) || bins <= 0) {
    throw new RangeError("bins must be a positive integer");
  }
  if (!values.length) {
    return { minimum: 0, maximum: 0, counts: new Array(bins).fill(0) };
  }
  if (values.some((value) => !Number.isFinite(value))) {
    throw new TypeError("values must be finite");
  }
  const minimum = Math.min(...values), maximum = Math.max(...values);
  const counts = new Array<number>(bins).fill(0);
  if (minimum === maximum) counts[0] = values.length;
  else {for (const value of values) {
      const index = Math.min(
        bins - 1,
        Math.floor((value - minimum) / (maximum - minimum) * bins),
      );
      counts[index]++;
    }}
  return { minimum, maximum, counts };
}
