import { Compare, defaultCompare, defaultEquals } from '../../util.js';
import LinkedList from './linked-list.js';

export default class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  push(value) {
    if (this.isEmpty()) {
      super.push(value);
    } else {
      const index = this.getIndexToInsert(value);
      super.insert(value, index);
    }
  }

  insert(value) {
    if (this.isEmpty()) {
      return super.insert(value, 0);
    }
    const index = this.getIndexToInsert(value);
    return super.insert(value, index);
  }

  getIndexToInsert(value) {
    let current = this.head;
    let index = 0;
    for (let i = 0; i < this.size(); i++) {
      const comp = this.compareFn(value, current.element);
      if (comp === Compare.LESS_THAN) {
        return index;
      }
      current = current.next;
      index++;
    }
    return index;
  }
}
