import { assertEquals } from "@std/assert";
import { Deque } from "./Deque.ts";
Deno.test("supports both ends and growth", () => {
  const deque = new Deque<number>();
  for (let i = 0; i < 10; i++) deque.pushBack(i);
  deque.pushFront(-1);
  assertEquals(deque.popFront(), -1);
  assertEquals(deque.popBack(), 9);
  assertEquals(deque.size, 9);
  assertEquals(deque.peekFront(), 0);
});
