/** A string Bloom filter with configurable expected capacity and false-positive rate. */
export class BloomFilter {
  #bits: Uint8Array;
  readonly bitCount: number;
  readonly hashCount: number;
  constructor(capacity: number, falsePositiveRate = 0.01) {
    if (!Number.isSafeInteger(capacity) || capacity <= 0) {
      throw new RangeError("capacity must be positive");
    }
    if (!(falsePositiveRate > 0 && falsePositiveRate < 1)) {
      throw new RangeError("falsePositiveRate must be between 0 and 1");
    }
    this.bitCount = Math.max(
      8,
      Math.ceil(-capacity * Math.log(falsePositiveRate) / Math.LN2 ** 2),
    );
    this.hashCount = Math.max(
      1,
      Math.round(this.bitCount / capacity * Math.LN2),
    );
    this.#bits = new Uint8Array(Math.ceil(this.bitCount / 8));
  }
  #hashes(value: string): number[] {
    let a = 2166136261, b = 5381;
    for (let i = 0; i < value.length; i++) {
      a = Math.imul(a ^ value.charCodeAt(i), 16777619);
      b = Math.imul(b, 33) ^ value.charCodeAt(i);
    }
    return Array.from(
      { length: this.hashCount },
      (_, i) => ((a >>> 0) + i * (b >>> 0) + i * i) % this.bitCount,
    );
  }
  add(value: string): this {
    for (const bit of this.#hashes(value)) {
      this.#bits[bit >>> 3] |= 1 << (bit & 7);
    }
    return this;
  }
  has(value: string): boolean {
    return this.#hashes(value).every((bit) =>
      (this.#bits[bit >>> 3] & (1 << (bit & 7))) !== 0
    );
  }
}
