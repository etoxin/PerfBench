import { assertEquals } from "@std/assert";
import { snakeToCamel } from "./snakeToCamel.ts";
Deno.test("converts snake case", () => {
  assertEquals(snakeToCamel("hello_world"), "helloWorld");
  assertEquals(snakeToCamel("XML_HTTP_REQUEST"), "xmlHttpRequest");
});
