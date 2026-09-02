import { dotProduct } from "./dotProduct.ts";
const values = Array.from({ length: 1_000 }, (_, index) => index);
Deno.bench("dotProduct", () => {
  dotProduct(values, values);
});
