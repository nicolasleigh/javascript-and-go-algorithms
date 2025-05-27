/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const edgeCount = new Map();
  let maxEdges = 0;

  for (let row of wall) {
    let position = 0;
    // Skip the last brick to avoid counting the wall's edge
    for (let i = 0; i < row.length - 1; i++) {
      position += row[i];
      edgeCount.set(position, (edgeCount.get(position) || 0) + 1);
      maxEdges = Math.max(maxEdges, edgeCount.get(position));
    }
  }

  return wall.length - maxEdges;
};
