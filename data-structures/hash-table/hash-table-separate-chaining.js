import { defaultToString } from '../../util.js';
import LinkedList from '../linked-list/linked-list.js';
import { ValuePair } from '../map/value-pair.js';

export default class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  djb2HashCode(key) {
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
      hash = hash * 33 + tableKey.charCodeAt(i); // hash = hash << 5 + hash + tableKey.charCodeAt(i);
    }
    return hash % 1013; // To avoid the hash code being too large.
  }

  hashCode(key) {
    return this.djb2HashCode(key);
    // return this.loseloseHashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new LinkedList(); // Maybe need to use a custom equalsFn to compare two ValuePair objects. But with the default equalsFn, it still works.
      }
      this.table[position].push(new ValuePair(key, value));
      return true;
    }
    return false;
  }

  get(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current != null) {
        if (current.value.key === key) {
          return current.value.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }

  remove(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current != null) {
        if (current.value.key === key) {
          linkedList.remove(current.value); // current.value is a ValuePair object.
          if (linkedList.isEmpty()) {
            delete this.table[position];
          }
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    let count = 0;
    Object.values(this.table).forEach((linkedList) => {
      count += linkedList.size();
    });
    return count;
  }

  clear() {
    this.table = {};
  }

  getTable() {
    return this.table;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const keys = Object.keys(this.table);
    let objString = `{${keys[0]} => ${this.table[keys[0]]}}`; // Don't have to use toString() method, because it will be called automatically, same as below.
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},{${keys[i]} => ${this.table[keys[i]]}}`;
    }
    return objString;
  }
}

let hashTable = new HashTableSeparateChaining();
hashTable.put('Jonathan', 'aaa@e.com');
hashTable.put('Jamie', 'bbb@e.com');
hashTable.put('Sue', 'ccc@e.com');
hashTable.put('Amanda', 'ddd@e.com');
hashTable.put('Tim', 'eee@e.com');
hashTable.put('Diana', 'fff@e.com');
hashTable.put('Maggie', 'ggg@e.com');
hashTable.put('Steve', 'hhh@e.com');
console.log(hashTable.size());
console.log(hashTable.toString());
console.log(hashTable.get('Sue'));
hashTable.remove('Jonathan');
hashTable.remove('Tim');
console.log(hashTable.toString());

// How to Compare 2 Objects in JavaScript
// https://www.samanthaming.com/tidbits/33-how-to-compare-2-objects/

// Djb2 Hash Function and Lose Lose Hash Function
// https://gist.github.com/amakukha/e7a8fcf0c1ad0d1b76a26349c0d6ef24
// http://www.cse.yorku.ca/~oz/hash.html
