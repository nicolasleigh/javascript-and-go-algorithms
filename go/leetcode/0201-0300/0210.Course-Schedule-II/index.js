/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

function findOrder(numCourses, prerequisites) {
  const indegree = new Array(numCourses).fill(0);
  const adj = Array.from({ length: numCourses }, () => []);
  const res = [];

  // Build adjacency list and indegree array
  for (const [course, prereq] of prerequisites) {
    adj[prereq].push(course);
    indegree[course]++;
  }

  // Initialize queue with nodes having indegree 0
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let visited = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    res.push(node);
    visited++;

    for (const neighbor of adj[node]) {
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  // If not all courses are visited, there is a cycle → return []
  return visited === numCourses ? res : [];
}
