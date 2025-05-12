// 707. Design Linked List
// https://leetcode.com/problems/design-linked-list/

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {number} index
 * @return {number}
 */

MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this.length) return null;
  let temp = this.head;
  for (let i = 0; i < index; i++) {
    temp = temp.next;
  }
  return temp;
};

MyLinkedList.prototype.get = function (index) {
  let node = this.getNode(index);
  if (node) {
    return node.val;
  }
  return -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.length++;
  return this;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);
  if (!this.tail) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
  return this;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index === 0) {
    return this.addAtHead(val);
  }
  if (index === this.length) {
    return this.addAtTail(val);
  }
  if (index < 0 || index > this.length) {
    return null;
  }
  const newNode = new Node(val);
  let before = this.getNode(index - 1);
  let temp = before.next;
  before.next = newNode;
  newNode.next = temp;
  this.length++;
  return this;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index === 0) {
    this.head = this.head.next;
    this.length--;
    return this;
  }
  if (index === this.length - 1) {
    let temp = this.getNode(this.length - 2);
    temp.next = null;
    this.tail = temp;
    this.length--;
    return this;
  }
  if (index < 0 || index >= this.length) {
    return null;
  }
  let before = this.getNode(index - 1);
  let temp = before.next;
  before.next = temp.next;
  temp.next = null;
  this.length--;
  return this;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
