import { parseSemver, type Semver } from "../parseSemver/parseSemver.ts";
function compareIdentifier(a: string, b: string): number {
  const an = /^\d+$/.test(a), bn = /^\d+$/.test(b);
  if (an && bn) return Number(a) - Number(b);
  if (an !== bn) return an ? -1 : 1;
  return a < b ? -1 : a > b ? 1 : 0;
}
/** Compares SemVer strings or parsed versions, ignoring build metadata. */
export function compareSemver(a: string | Semver, b: string | Semver): number {
  const left = typeof a === "string" ? parseSemver(a) : a;
  const right = typeof b === "string" ? parseSemver(b) : b;
  for (const key of ["major", "minor", "patch"] as const) {
    if (left[key] !== right[key]) return Math.sign(left[key] - right[key]);
  }
  if (!left.prerelease.length || !right.prerelease.length) {
    return left.prerelease.length === right.prerelease.length
      ? 0
      : left.prerelease.length
      ? -1
      : 1;
  }
  for (
    let index = 0;
    index < Math.max(left.prerelease.length, right.prerelease.length);
    index++
  ) {
    if (left.prerelease[index] === undefined) return -1;
    if (right.prerelease[index] === undefined) return 1;
    const order = compareIdentifier(
      left.prerelease[index],
      right.prerelease[index],
    );
    if (order) return Math.sign(order);
  }
  return 0;
}
