/** Returns unique value triples whose sum is zero. */
export function threeSum(
  values: readonly number[],
): [number, number, number][] {
  const sorted = values.slice().sort((a, b) => a - b);
  const result: [number, number, number][] = [];
  for (let index = 0; index < sorted.length - 2; index++) {
    if (index > 0 && sorted[index] === sorted[index - 1]) continue;
    let left = index + 1, right = sorted.length - 1;
    while (left < right) {
      const sum = sorted[index] + sorted[left] + sorted[right];
      if (sum < 0) left++;
      else if (sum > 0) right--;
      else {
        result.push([sorted[index], sorted[left], sorted[right]]);
        const leftValue = sorted[left], rightValue = sorted[right];
        while (left < right && sorted[left] === leftValue) left++;
        while (left < right && sorted[right] === rightValue) right--;
      }
    }
  }
  return result;
}
