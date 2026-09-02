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
  // TODO complete function
}
