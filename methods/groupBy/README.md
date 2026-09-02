# Group By

Groups values by a computed key and returns a `Map`. Group order follows the
first occurrence of each key, and values retain their input order.

```ts
import { groupBy } from "./groupBy.ts";

groupBy([1, 2, 3, 4], (value) => value % 2);
// Map { 1 => [1, 3], 0 => [2, 4] }
```
