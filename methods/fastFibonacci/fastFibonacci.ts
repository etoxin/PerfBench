/** Returns the nth Fibonacci number using fast doubling. */
export function fastFibonacci(index: number): bigint {
  if (!Number.isSafeInteger(index) || index < 0) {
    throw new RangeError("index must be a non-negative safe integer");
  }
  const calculate = (n: number): [bigint, bigint] => {
    if (n === 0) return [0n, 1n];
    const [a, b] = calculate(Math.floor(n / 2));
    const c = a * (2n * b - a), d = a * a + b * b;
    return n % 2 === 0 ? [c, d] : [d, c + d];
  };
  return calculate(index)[0];
}
