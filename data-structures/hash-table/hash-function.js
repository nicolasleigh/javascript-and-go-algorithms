import { defaultToString } from '../../util.js';

export function loseloseHashCode(key) {
  if (typeof key === 'number') {
    return key;
  }
  const tableKey = defaultToString(key);
  let hash = 0;
  for (let i = 0; i < tableKey.length; i++) {
    hash += tableKey.charCodeAt(i);
  }
  return hash % 37;
}

export function djb2HashCode(key) {
  const tableKey = defaultToString(key);
  let hash = 5381;
  for (let i = 0; i < tableKey.length; i++) {
    hash = hash * 33 + tableKey.charCodeAt(i); // hash = hash << 5 + hash + tableKey.charCodeAt(i);
  }
  return hash % 1013; // To avoid the hash code being too large.
}
