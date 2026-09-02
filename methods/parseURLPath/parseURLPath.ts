/** Returns decoded, non-empty path segments from a path or absolute URL. */
export function parseURLPath(value: string): string[] {
  const pathname = /^[A-Za-z][A-Za-z\d+.-]*:\/\//.test(value)
    ? new URL(value).pathname
    : value.split(/[?#]/, 1)[0];
  return pathname.split("/").filter(Boolean).map((segment) => {
    try {
      return decodeURIComponent(segment);
    } catch (cause) {
      throw new URIError(`invalid encoded path segment: ${segment}`, { cause });
    }
  });
}
