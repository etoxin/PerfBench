/** Transposes rectangular rows into columns. */
export function unzip<T>(rows: readonly (readonly T[])[]): T[][] {
  if (rows.length === 0) return [];
  const width = Math.min(...rows.map((row) => row.length));
  return Array.from(
    { length: width },
    (_, column) => rows.map((row) => row[column]),
  );
}
