import { joinRecordsByKey } from "./joinRecordsByKey.ts";
const left = Array.from({ length: 1_000 }, (_, id) => ({ id }));
const right = Array.from({ length: 1_000 }, (_, id) => ({ id }));
Deno.bench("joinRecordsByKey", () => {
  joinRecordsByKey(left, right, (x) => x.id, (x) => x.id);
});
