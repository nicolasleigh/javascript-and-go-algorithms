import { defaultToString } from '../../util.js';
import { ValuePair } from './value-pair.js';

export default class Map {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == undefined ? undefined : valuePair.value;
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != undefined;
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }

  keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
  }

  keyValues() {
    return Object.values(this.table);
  }

  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return Object.keys(this.table).length;
  }

  clear() {
    this.table = {};
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }
}

let map = new Map();
console.log(map.set('Gandalf', 'abc@email.com'));
console.log(map.set('John', 'ddd@email.com'));
console.log(map.set('Tyrion', 'hhh@email.com'));
console.log(map.size());
console.log(map.hasKey('Gandalf'));
console.log(map.keys());
console.log(map.values());
console.log(map.keyValues());
console.log(map.keyValues()[1]);
console.log(map.keyValues()[1].toString());
console.log(map.get('Tyrion'));
console.log(map.remove('John'));
console.log(map.keys());
console.log(map.toString());
map.forEach((k, v) => {
  console.log(`forEach -> key: ${k}, value: ${v}`);
});
map.forEach((k, v) => {
  if (k === 'Tyrion') return false;
  console.log(`forEach2 -> key: ${k}, value: ${v}`);
});
