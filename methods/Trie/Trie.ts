class Node {
  children = new Map<string, Node>();
  terminal = false;
}
/** A Unicode code-point prefix trie. */
export class Trie {
  #root = new Node();
  insert(word: string): this {
    let node = this.#root;
    for (const character of word) {
      let child = node.children.get(character);
      if (!child) {
        child = new Node();
        node.children.set(character, child);
      }
      node = child;
    }
    node.terminal = true;
    return this;
  }
  #find(value: string): Node | undefined {
    let node = this.#root;
    for (const character of value) {
      const child = node.children.get(character);
      if (!child) return undefined;
      node = child;
    }
    return node;
  }
  has(word: string): boolean {
    return this.#find(word)?.terminal ?? false;
  }
  startsWith(prefix: string): boolean {
    return this.#find(prefix) !== undefined;
  }
  delete(word: string): boolean {
    if (!this.has(word)) return false;
    const remove = (node: Node, chars: string[], i: number): boolean => {
      if (i === chars.length) node.terminal = false;
      else {
        const child = node.children.get(chars[i])!;
        if (remove(child, chars, i + 1)) node.children.delete(chars[i]);
      }
      return !node.terminal && node.children.size === 0;
    };
    remove(this.#root, [...word], 0);
    return true;
  }
}
