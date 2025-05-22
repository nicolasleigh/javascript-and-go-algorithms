/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */

function computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const overlapX1 = Math.max(ax1, bx1);
  const overlapY1 = Math.max(ay1, by1);
  const overlapX2 = Math.min(ax2, bx2);
  const overlapY2 = Math.min(ay2, by2);

  return area(ax1, ay1, ax2, ay2) + area(bx1, by1, bx2, by2) - area(overlapX1, overlapY1, overlapX2, overlapY2);
}

function area(x1, y1, x2, y2) {
  const width = x2 - x1;
  const height = y2 - y1;
  if (width <= 0 || height <= 0) return 0;
  return width * height;
}
