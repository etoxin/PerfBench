/** A least-recently-used cache backed by Map insertion order. */
export class LRUCache<K, V> {
  readonly capacity: number;
  #items = new Map<K, V>();
  constructor(capacity: number) {
    if (!Number.isSafeInteger(capacity) || capacity <= 0) {
      throw new RangeError("capacity must be a positive integer");
    }
    this.capacity = capacity;
  }
  get size(): number {
    return this.#items.size;
  }
  has(key: K): boolean {
    return this.#items.has(key);
  }
  get(key: K): V | undefined {
    const value = this.#items.get(key);
    if (value !== undefined || this.#items.has(key)) {
      this.#items.delete(key);
      this.#items.set(key, value as V);
    }
    return value;
  }
  set(key: K, value: V): this {
    this.#items.delete(key);
    this.#items.set(key, value);
    if (this.#items.size > this.capacity) {
      this.#items.delete(this.#items.keys().next().value!);
    }
    return this;
  }
  delete(key: K): boolean {
    return this.#items.delete(key);
  }
  clear(): void {
    this.#items.clear();
  }
}
