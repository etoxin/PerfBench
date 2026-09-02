/** A generic binary min-heap. */
export class MinHeap<T> {
  #items: T[] = [];
  constructor(
    readonly compare: (a: T, b: T) => number,
    values: readonly T[] = [],
  ) {
    for (const value of values) this.push(value);
  }
  get size(): number {
    return this.#items.length;
  }
  peek(): T | undefined {
    return this.#items[0];
  }
  push(value: T): this {
    this.#items.push(value);
    let child = this.#items.length - 1;
    while (child) {
      const parent = (child - 1) >> 1;
      if (this.compare(this.#items[parent], value) <= 0) break;
      this.#items[child] = this.#items[parent];
      child = parent;
    }
    this.#items[child] = value;
    return this;
  }
  pop(): T | undefined {
    if (!this.#items.length) return undefined;
    const first = this.#items[0], last = this.#items.pop()!;
    if (this.#items.length) {
      let parent = 0;
      while (parent * 2 + 1 < this.#items.length) {
        let child = parent * 2 + 1;
        if (
          child + 1 < this.#items.length &&
          this.compare(this.#items[child + 1], this.#items[child]) < 0
        ) child++;
        if (this.compare(last, this.#items[child]) <= 0) break;
        this.#items[parent] = this.#items[child];
        parent = child;
      }
      this.#items[parent] = last;
    }
    return first;
  }
}
