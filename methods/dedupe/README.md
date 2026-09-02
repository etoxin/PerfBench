# Dedupe

Removes duplicate values while preserving the order of their first occurrence.

```ts
import { dedupe } from "./dedupe.ts";

dedupe([1, 2, 1, 3, 2]); // [1, 2, 3]
```
