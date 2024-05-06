import DoublyLinkedList from '../linked-list/doubly-linked-list.js';

export default class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList();
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items.removeAt(this.size() - 1);
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.tail.value;
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  size() {
    return this.items.size();
  }

  clear() {
    this.items.clear();
  }

  toString() {
    return this.items.toString();
  }
}
