// 332. Reconstruct Itinerary
// https://leetcode.com/problems/reconstruct-itinerary/description/

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const graph = {};

  for (const [src, dst] of tickets) {
    if (!graph[src]) graph[src] = [];
    graph[src].push(dst);
  }

  for (const key in graph) {
    graph[key].sort().reverse();
  }

  const itinerary = [];

  function dfs(airport) {
    while (graph[airport] && graph[airport].length > 0) {
      let temp = graph[airport].pop();
      dfs(temp);
    }
    itinerary.push(airport);
  }

  dfs('JFK');

  return itinerary.reverse();
};
