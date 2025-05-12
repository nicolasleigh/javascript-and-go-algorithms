// 841. Keys and Rooms
// https://leetcode.com/problems/keys-and-rooms/description/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let visited = new Array(rooms.length).fill(false);

  function dfs(key) {
    if (visited[key]) return;
    visited[key] = true;
    for (let k of rooms[key]) {
      dfs(k);
    }
  }

  dfs(0);
  return visited.every((item) => item === true);
};
