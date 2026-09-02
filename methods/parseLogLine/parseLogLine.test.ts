import { assertEquals, assertThrows } from "@std/assert";
import { parseLogLine } from "./parseLogLine.ts";
Deno.test("parses a bracketed log line", () => {
  assertEquals(parseLogLine("[2024-01-02T03:04:05Z] info Started"), {
    timestamp: new Date("2024-01-02T03:04:05Z"),
    level: "INFO",
    message: "Started",
  });
});
Deno.test("rejects malformed lines", () => {
  assertThrows(() => parseLogLine("hello"), SyntaxError);
});
