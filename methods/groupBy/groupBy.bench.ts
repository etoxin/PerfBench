import { groupBy } from "./groupBy.ts";

const values = Array.from({ length: 1_000 }, (_, index) => ({
  id: index,
  group: index % 10,
}));

Deno.bench("groupBy", () => {
  groupBy(values, (value) => value.group);
});
