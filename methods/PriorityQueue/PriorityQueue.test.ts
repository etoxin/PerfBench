import { assertEquals } from "@std/assert";
import { PriorityQueue } from "./PriorityQueue.ts";
Deno.test("dequeues by priority and insertion order", () => {
  const queue = new PriorityQueue<string>();
  queue.enqueue("later", 2).enqueue("first", 1).enqueue("second", 1);
  assertEquals([queue.dequeue(), queue.dequeue(), queue.dequeue()], [
    "first",
    "second",
    "later",
  ]);
});
