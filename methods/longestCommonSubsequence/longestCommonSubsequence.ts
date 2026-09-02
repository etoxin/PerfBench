/** Returns one longest common subsequence by Unicode code point. */
export function longestCommonSubsequence(a: string, b: string): string {
  const left = [...a], right = [...b];
  const table = Array.from(
    { length: left.length + 1 },
    () => new Array<number>(right.length + 1).fill(0),
  );
  for (let i = 1; i <= left.length; i++) {
    for (let j = 1; j <= right.length; j++) {
      table[i][j] = left[i - 1] === right[j - 1]
        ? table[i - 1][j - 1] + 1
        : Math.max(table[i - 1][j], table[i][j - 1]);
    }
  }
  const result: string[] = [];
  let i = left.length, j = right.length;
  while (i && j) {
    if (left[i - 1] === right[j - 1]) {
      result.push(left[--i]);
      j--;
    } else if (table[i - 1][j] >= table[i][j - 1]) i--;
    else j--;
  }
  return result.reverse().join("");
}
