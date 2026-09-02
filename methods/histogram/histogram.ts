export interface Histogram {
  minimum: number;
  maximum: number;
  counts: number[];
}

/** Distributes finite values into equal-width bins over their observed range. */
export function histogram(values: readonly number[], bins: number): Histogram {
  // TODO complete function
}
