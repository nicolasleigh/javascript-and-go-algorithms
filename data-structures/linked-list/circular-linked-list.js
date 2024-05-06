import { defaultEquals } from '../../util.js';
import LinkedList from './linked-list.js';
import { Node } from './node.js';

export default class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  push(value) {
    let current;
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      /* Infinite loop */
      // current = this.head;
      // while (current.next) {
      //   current = current.next;
      // }
      // current.next = node;

      // NEW
      current = this.getElementAt(this.size() - 1);
      current.next = node;
    }
    // set node.next to head - to have circular list
    node.next = this.head; // NEW
    this.count++;
  }

  insert(value, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(value);
      let current = this.head;
      if (index === 0) {
        if (!this.head) {
          this.head = node;
          node.next = this.head;
        } else {
          node.next = this.head;
          current = this.getElementAt(this.size() - 1); // get last node
          this.head = node;
          current.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
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
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.size() - 1); // get last node
          this.head = this.head.next;
          current.next = this.head;
          current = removed;
        }
      } else {
        // no need to update last node for circular list
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  toString() {
    if (this.head == null) {
      return '';
    }

    let objString = `${this.head.element}`;
    let current = this.head.next;

    // Using for loop to avoid infinite loop
    for (let i = 1; i < this.size(); i++) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }

    return objString;
  }
}
