import { matrixMultiply } from "./matrixMultiply.ts";
const matrix = Array.from(
  { length: 20 },
  (_, row) => Array.from({ length: 20 }, (_, column) => row + column),
);
Deno.bench("matrixMultiply", () => {
  matrixMultiply(matrix, matrix);
});
