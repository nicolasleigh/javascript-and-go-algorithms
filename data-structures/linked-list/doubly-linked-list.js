import { defaultEquals } from '../../util.js';
import LinkedList from './linked-list.js';
import { DoublyNode } from './node.js';

export default class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  push(value) {
    const node = new DoublyNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node; // NEW
    } else {
      // attach to the tail node // NEW
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.count++;
  }

  insert(value, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(value);
      let current = this.head; // NEW

      if (index === 0) {
        // NEW
        if (!this.head) {
          this.head = node;
          this.tail = node; // NEW
        } else {
          node.next = this.head;
          this.head.prev = node; // NEW
          this.head = node;
        }
      } else if (index === this.count) {
        // NEW
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      } else {
        const previous = this.getNodeAt(index - 1);
        current = previous.next; // NEW
        node.next = current;
        previous.next = node;
        current.prev = node; // NEW
        node.prev = previous; // NEW
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

        // NEW
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) {
        // NEW
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        const previous = this.getNodeAt(index - 1);
        current = previous.next;
        previous.next = current.next;
        current.next.prev = previous; // NEW
      }

      this.count--;
      return current.value;
    }

    return undefined;
  }

  getTail() {
    return this.tail;
  }

  clear() {
    super.clear();
    this.tail = undefined;
  }

  inverseToString() {
    if (!this.tail) {
      return '';
    }

    let objString = `${this.tail.value}`;
    let previous = this.tail.prev;

    while (previous) {
      objString = `${objString},${previous.value}`;
      previous = previous.prev;
    }

    return objString;
  }

  // getNodeAt(index)

  // remove(value)

  // indexOf(value)

  // isEmpty()

  // size()

  // getHead()

  // toString()
}
