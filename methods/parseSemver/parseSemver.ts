export interface Semver {
  major: number;
  minor: number;
  patch: number;
  prerelease: string[];
  build: string[];
}

/** Parses a strict Semantic Version 2.0.0 string. */
export function parseSemver(value: string): Semver {
  // TODO complete function
}
