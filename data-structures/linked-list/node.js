export class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

export class DoublyNode extends Node {
  constructor(value, next, prev) {
    super(value, next);
    this.prev = prev;
  }
}
