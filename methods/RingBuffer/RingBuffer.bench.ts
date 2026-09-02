import { RingBuffer } from "./RingBuffer.ts";
Deno.bench("RingBuffer", () => {
  const ring = new RingBuffer<number>(100);
  for (let i = 0; i < 1_000; i++) ring.push(i);
});
