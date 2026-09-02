import { snakeToCamel } from "./snakeToCamel.ts";
Deno.bench("snakeToCamel", () => {
  snakeToCamel("this_is_a_long_snake_case_value");
});
