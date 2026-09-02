/** A fixed-capacity ring that overwrites the oldest value when full. */
export class RingBuffer<T> {
  #values: (T | undefined)[];
  #start = 0;
  #size = 0;
  constructor(readonly capacity: number) {
    if (!Number.isSafeInteger(capacity) || capacity <= 0) {
      throw new RangeError("capacity must be a positive integer");
    }
    this.#values = new Array(capacity);
  }
  get size(): number {
    return this.#size;
  }
  push(value: T): T | undefined {
    let removed: T | undefined;
    if (this.#size < this.capacity) {
      this.#values[(this.#start + this.#size++) % this.capacity] = value;
    } else {
      removed = this.#values[this.#start];
      this.#values[this.#start] = value;
      this.#start = (this.#start + 1) % this.capacity;
    }
    return removed;
  }
  shift(): T | undefined {
    if (!this.#size) return undefined;
    const value = this.#values[this.#start];
    this.#values[this.#start] = undefined;
    this.#start = (this.#start + 1) % this.capacity;
    this.#size--;
    return value;
  }
  toArray(): T[] {
    return Array.from(
      { length: this.#size },
      (_, i) => this.#values[(this.#start + i) % this.capacity] as T,
    );
  }
}
