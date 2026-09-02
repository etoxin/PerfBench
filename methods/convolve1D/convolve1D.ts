/** Returns the full discrete convolution of two sequences. */
export function convolve1D(
  signal: readonly number[],
  kernel: readonly number[],
): number[] {
  if (!signal.length || !kernel.length) return [];
  const output = new Array<number>(signal.length + kernel.length - 1).fill(0);
  for (let i = 0; i < signal.length; i++) {
    for (let j = 0; j < kernel.length; j++) {
      output[i + j] += signal[i] * kernel[j];
    }
  }
  return output;
}
