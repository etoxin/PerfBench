import { Deque } from "./Deque.ts";
Deno.bench("Deque", () => {
  const deque = new Deque<number>();
  for (let i = 0; i < 1_000; i++) deque.pushBack(i);
  while (deque.size) deque.popFront();
});
