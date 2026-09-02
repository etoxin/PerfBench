/** A fixed-size mutable bit set. */
export class BitSet {
  #words: Uint32Array;
  constructor(readonly size: number) {
    if (!Number.isSafeInteger(size) || size < 0) {
      throw new RangeError("size must be non-negative");
    }
    this.#words = new Uint32Array(Math.ceil(size / 32));
  }
  #check(index: number): void {
    if (!Number.isSafeInteger(index) || index < 0 || index >= this.size) {
      throw new RangeError("index out of range");
    }
  }
  has(index: number): boolean {
    this.#check(index);
    return (this.#words[index >>> 5] & (1 << (index & 31))) !== 0;
  }
  set(index: number, value = true): this {
    this.#check(index);
    const mask = 1 << (index & 31);
    if (value) this.#words[index >>> 5] |= mask;
    else this.#words[index >>> 5] &= ~mask;
    return this;
  }
  clear(index: number): this {
    return this.set(index, false);
  }
  toggle(index: number): this {
    this.#check(index);
    this.#words[index >>> 5] ^= 1 << (index & 31);
    return this;
  }
  get count(): number {
    let count = 0;
    for (let word of this.#words) {
      while (word) {
        word &= word - 1;
        count++;
      }
    }
    return count;
  }
}
