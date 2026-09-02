/** A dynamically growing double-ended queue with amortized constant-time operations. */
export class Deque<T> {
  #values: (T | undefined)[] = new Array(8);
  #head = 0;
  #size = 0;
  get size(): number {
    return this.#size;
  }
  #resize(): void {
    const next = new Array<T | undefined>(this.#values.length * 2);
    for (let i = 0; i < this.#size; i++) {
      next[i] = this.#values[(this.#head + i) % this.#values.length];
    }
    this.#values = next;
    this.#head = 0;
  }
  pushBack(value: T): this {
    if (this.#size === this.#values.length) this.#resize();
    this.#values[(this.#head + this.#size++) % this.#values.length] = value;
    return this;
  }
  pushFront(value: T): this {
    if (this.#size === this.#values.length) this.#resize();
    this.#head = (this.#head - 1 + this.#values.length) % this.#values.length;
    this.#values[this.#head] = value;
    this.#size++;
    return this;
  }
  popFront(): T | undefined {
    if (!this.#size) return undefined;
    const value = this.#values[this.#head];
    this.#values[this.#head] = undefined;
    this.#head = (this.#head + 1) % this.#values.length;
    this.#size--;
    return value;
  }
  popBack(): T | undefined {
    if (!this.#size) return undefined;
    const index = (this.#head + --this.#size) % this.#values.length;
    const value = this.#values[index];
    this.#values[index] = undefined;
    return value;
  }
  peekFront(): T | undefined {
    return this.#size ? this.#values[this.#head] : undefined;
  }
  peekBack(): T | undefined {
    return this.#size
      ? this.#values[(this.#head + this.#size - 1) % this.#values.length]
      : undefined;
  }
  toArray(): T[] {
    return Array.from(
      { length: this.#size },
      (_, i) => this.#values[(this.#head + i) % this.#values.length] as T,
    );
  }
}
