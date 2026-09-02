export interface JoinedRecord<L, R> {
  left: L;
  right: R;
}
/** Performs an ordered inner join, producing all matches for duplicate keys. */
export function joinRecordsByKey<L, R, K>(
  left: readonly L[],
  right: readonly R[],
  leftKey: (record: L) => K,
  rightKey: (record: R) => K,
): JoinedRecord<L, R>[] {
  const rightIndex = new Map<K, R[]>();
  for (const record of right) {
    const key = rightKey(record), matches = rightIndex.get(key);
    if (matches) matches.push(record);
    else rightIndex.set(key, [record]);
  }
  const result: JoinedRecord<L, R>[] = [];
  for (const record of left) {
    for (const match of rightIndex.get(leftKey(record)) ?? []) {
      result.push({ left: record, right: match });
    }
  }
  return result;
}
