import { camelToSnake } from "./camelToSnake.ts";
Deno.bench("camelToSnake", () => {
  camelToSnake("thisIsALongCamelCaseValue");
});
