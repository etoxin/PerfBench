export interface Semver {
  major: number;
  minor: number;
  patch: number;
  prerelease: string[];
  build: string[];
}
const PATTERN =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9A-Za-z-][0-9A-Za-z-]*)(?:\.(?:0|[1-9A-Za-z-][0-9A-Za-z-]*))*))?(?:\+([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$/;
/** Parses a strict Semantic Version 2.0.0 string. */
export function parseSemver(value: string): Semver {
  const match = PATTERN.exec(value);
  if (!match) throw new SyntaxError("invalid semantic version");
  const prerelease = match[4]?.split(".") ?? [];
  if (
    prerelease.some((item) =>
      /^\d+$/.test(item) && item.length > 1 && item[0] === "0"
    )
  ) {
    throw new SyntaxError(
      "numeric prerelease identifiers cannot contain leading zeroes",
    );
  }
  return {
    major: +match[1],
    minor: +match[2],
    patch: +match[3],
    prerelease,
    build: match[5]?.split(".") ?? [],
  };
}
