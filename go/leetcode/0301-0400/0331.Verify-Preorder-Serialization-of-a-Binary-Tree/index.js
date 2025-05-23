/**
 * @param {string} preorder
 * @return {boolean}
 */

function isValidSerialization(preorder) {
  const nodes = preorder.split(",");
  let slots = 1; // one slot for the root

  for (let node of nodes) {
    if (slots === 0) return false; // no slot to place the current node

    if (node === "#") {
      slots -= 1; // null node uses up one slot
    } else {
      slots -= 1; // non-null node uses one slot...
      slots += 2; // ...and creates two new child slots
    }
  }

  return slots === 0; // all slots should be used up
}

// Similar to Problem 297: Serialize and Deserialize Binary Tree, but here we do not really need to reconstruct our tree, and using stack is enough.
// The trick is to add elements one by one and when we see num, #, #, we replace it with #. If we get just one # in the end, return True, else: False. Let us look at the example 9,3,4,#,#,1,#,#,2,#,6,#,#. Let us go through steps:
// We add elements until we have 9, 3, 4, #, #. It means now that 4 is leaf, so let us remove it: we have 9, 3, #.
// Add elements, so we have 9, 3, #, 1, #, #. We have leaf 1, remove it: 9, 3, #, #. Now, we have 3 as leaf as well: remove it: 9, #.
// Add elements 9, #, 2, #, 6, #, # -> 9, #, 2, #, # -> 9, #, # -> #.
function isValidSerialization(preorder) {
  const stack = [];
  const elements = preorder.split(",");

  for (let elem of elements) {
    stack.push(elem);

    // Check if the top 3 elements match the pattern: non-# followed by two #
    while (
      stack.length >= 3 &&
      stack[stack.length - 1] === "#" &&
      stack[stack.length - 2] === "#" &&
      stack[stack.length - 3] !== "#"
    ) {
      // Remove the two '#' and their parent node
      stack.pop();
      stack.pop();
      stack.pop();
      // Push a single '#' to represent the collapsed subtree
      stack.push("#");
    }
  }

  // Valid serialization must reduce to a single '#'
  return stack.length === 1 && stack[0] === "#";
}
