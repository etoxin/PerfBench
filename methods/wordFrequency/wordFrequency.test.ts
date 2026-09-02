import { assertEquals } from "@std/assert";
import { wordFrequency } from "./wordFrequency.ts";
Deno.test("counts normalized words", () => {
  assertEquals(
    wordFrequency("Hello, hello world!"),
    new Map([["hello", 2], ["world", 1]]),
  );
  assertEquals(wordFrequency(""), new Map());
});
