import { defaultEquals } from '../../util.js';
import LinkedList from './linked-list.js';
import { DoublyNode } from './node.js';

export default class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  push(element) {
    const node = new DoublyNode(element);

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

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
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
        const previous = this.getElementAt(index - 1);
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
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
        current.next.prev = previous; // NEW
      }

      this.count--;
      return current.element;
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
    if (this.tail == null) {
      return '';
    }

    let objString = `${this.tail.element}`;
    let previous = this.tail.prev;

    while (previous) {
      objString = `${objString},${previous.element}`;
      previous = previous.prev;
    }

    return objString;
  }

  // getElementAt(index)

  // remove(element)

  // indexOf(element)

  // isEmpty()

  // size()

  // getHead()

  // toString()
}
