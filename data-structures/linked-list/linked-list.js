import { defaultEquals } from '../../util.js';
import { Node } from './node.js';

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.equalsFn = equalsFn;
    this.count = 0;
    this.head = undefined;
  }

  push(value) {
    let current;
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      // loop to the end of the list
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.count++;
  }

  getNodeAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  insert(value, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(value);

      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        const previous = this.getNodeAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }

      this.count++;
      return true;
    }

    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;

      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getNodeAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }

      this.count--;
      return current.value;
    }

    return undefined;
  }

  remove(value) {
    const index = this.indexOf(value);
    return this.removeAt(index);
  }

  // indexOf(value) {
  //   let current = this.head;
  //   for (let i = 0; i < this.size() && current != null; i++) {
  //     if (this.equalsFn(value, current.value)) {
  //       return i;
  //     }
  //     current = current.next;
  //   }
  //   return -1;
  // }

  indexOf(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (this.equalsFn(value, current.value)) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  clear() {
    this.head = undefined;
    this.count = 0;
  }

  toString() {
    if (!this.head) {
      return '';
    }

    let objString = `${this.head.value}`;
    let current = this.head.next;

    while (current) {
      objString = `${objString},${current.value}`;
      current = current.next;
    }

    return objString;
  }
}
