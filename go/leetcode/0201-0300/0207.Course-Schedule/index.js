/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// Topological Sort https://www.youtube.com/watch?v=EUDwWbvtB_Q
// [[1,0],[1,2],[2,3],[2,4],[2,5],[3,1],[4,5]] - false
function canFinish(numCourses, prerequisites) {
  const indegree = new Array(numCourses).fill(0);
  const adj = Array.from({ length: numCourses }, () => []);

  // Build the adjacency list and indegree array
  for (const [course, prereq] of prerequisites) {
    adj[prereq].push(course);
    indegree[course]++;
  }

  // Initialize queue with courses that have no prerequisites
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let visited = 0;

  // Process the queue
  while (queue.length > 0) {
    const node = queue.shift();
    visited++;

    for (const neighbor of adj[node]) {
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return visited === numCourses;
}
