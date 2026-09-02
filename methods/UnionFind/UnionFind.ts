/** Disjoint-set union with path compression and union by size. */
export class UnionFind {
  #parent: Int32Array;
  #sizes: Int32Array;
  #count: number;
  constructor(readonly size: number) {
    if (!Number.isSafeInteger(size) || size < 0) {
      throw new RangeError("size must be non-negative");
    }
    this.#parent = Int32Array.from({ length: size }, (_, i) => i);
    this.#sizes = new Int32Array(size).fill(1);
    this.#count = size;
  }
  get components(): number {
    return this.#count;
  }
  #check(value: number): void {
    if (!Number.isSafeInteger(value) || value < 0 || value >= this.size) {
      throw new RangeError("index out of range");
    }
  }
  find(value: number): number {
    this.#check(value);
    let root = value;
    while (root !== this.#parent[root]) root = this.#parent[root];
    while (value !== root) {
      const next = this.#parent[value];
      this.#parent[value] = root;
      value = next;
    }
    return root;
  }
  union(a: number, b: number): boolean {
    let left = this.find(a), right = this.find(b);
    if (left === right) return false;
    if (this.#sizes[left] < this.#sizes[right]) [left, right] = [right, left];
    this.#parent[right] = left;
    this.#sizes[left] += this.#sizes[right];
    this.#count--;
    return true;
  }
  connected(a: number, b: number): boolean {
    return this.find(a) === this.find(b);
  }
}
