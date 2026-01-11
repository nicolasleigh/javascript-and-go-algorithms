/**
 * @param {string} path
 * @return {string}
 */

// 71. Simplify Path
var simplifyPath = function (path) {
  const parts = path.split("/");
  const stack = [];

  for (let i = 0; i < parts.length; i++) {
    const cur = parts[i];
    if (cur === "..") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else if (cur !== "." && cur.length > 0) {
      // Skip empty strings and "."
      stack.push(cur);
    }
  }

  return "/" + stack.join("/");
};
