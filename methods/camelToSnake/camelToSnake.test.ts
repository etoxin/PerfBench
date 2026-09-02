import { assertEquals } from "@std/assert";
import { camelToSnake } from "./camelToSnake.ts";
Deno.test("converts camel and Pascal case", () => {
  assertEquals(camelToSnake("camelCase"), "camel_case");
  assertEquals(camelToSnake("XMLHttpRequest"), "xml_http_request");
});
