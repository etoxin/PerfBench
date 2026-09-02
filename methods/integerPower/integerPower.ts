/** Raises a number to an integer power by exponentiation by squaring. */
export function integerPower(base: number, exponent: number): number {
  if (!Number.isSafeInteger(exponent)) {
    throw new TypeError("exponent must be a safe integer");
  }
  if (exponent < 0) return 1 / integerPower(base, -exponent);
  let result = 1;
  while (exponent) {
    if (exponent % 2 === 1) result *= base;
    base *= base;
    exponent = Math.floor(exponent / 2);
  }
  return result;
}
