/** Returns every prime number less than or equal to limit. */
export function primeSieve(limit: number): number[] {
  if (!Number.isSafeInteger(limit)) {
    throw new TypeError("limit must be a safe integer");
  }
  if (limit < 2) return [];
  const prime = new Uint8Array(limit + 1);
  prime.fill(1, 2);
  for (let value = 2; value * value <= limit; value++) {
    if (prime[value]) {
      for (
        let composite = value * value;
        composite <= limit;
        composite += value
      ) prime[composite] = 0;
    }
  }
  const result: number[] = [];
  for (let value = 2; value <= limit; value++) {
    if (prime[value]) result.push(value);
  }
  return result;
}
