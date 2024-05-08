export class Node {
  constructor(key) {
    this.key = key;
    this.left = undefined;
    this.right = undefined;
  }
  toString() {
    return `${this.key}`;
  }
}

export const Colors = {
  RED: 0,
  BLACK: 1,
};

export class RedBlackNode extends Node {
  constructor(key) {
    super(key);
    this.color = Colors.RED;
    this.parent = null;
  }

  // isRed() {
  //   return this.color === Colors.RED;
  // }

  // flipColor() {
  //   if (this.color === Colors.RED) {
  //     this.color = Colors.BLACK;
  //   } else {
  //     this.color = Colors.RED;
  //   }
  // }
}
