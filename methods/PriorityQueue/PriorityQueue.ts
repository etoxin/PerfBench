interface Entry<T> {
  value: T;
  priority: number;
  sequence: number;
}
/** A stable min-priority queue. */
export class PriorityQueue<T> {
  #heap: Entry<T>[] = [];
  #sequence = 0;
  get size(): number {
    return this.#heap.length;
  }
  #before(a: Entry<T>, b: Entry<T>): boolean {
    return a.priority < b.priority ||
      (a.priority === b.priority && a.sequence < b.sequence);
  }
  enqueue(value: T, priority = 0): this {
    if (!Number.isFinite(priority)) {
      throw new TypeError("priority must be finite");
    }
    const entry = { value, priority, sequence: this.#sequence++ };
    this.#heap.push(entry);
    let child = this.#heap.length - 1;
    while (child) {
      const parent = (child - 1) >> 1;
      if (this.#before(this.#heap[parent], entry)) break;
      this.#heap[child] = this.#heap[parent];
      child = parent;
    }
    this.#heap[child] = entry;
    return this;
  }
  peek(): T | undefined {
    return this.#heap[0]?.value;
  }
  dequeue(): T | undefined {
    if (!this.#heap.length) return undefined;
    const first = this.#heap[0], last = this.#heap.pop()!;
    if (this.#heap.length) {
      let parent = 0;
      while (parent * 2 + 1 < this.#heap.length) {
        let child = parent * 2 + 1;
        if (
          child + 1 < this.#heap.length &&
          this.#before(this.#heap[child + 1], this.#heap[child])
        ) child++;
        if (this.#before(last, this.#heap[child])) break;
        this.#heap[parent] = this.#heap[child];
        parent = child;
      }
      this.#heap[parent] = last;
    }
    return first.value;
  }
}
