// Topological Sort https://www.youtube.com/watch?v=EUDwWbvtB_Q

package main

import "fmt"

// canFinish function determines if all courses can be finished given the prerequisites
func canFinish(numCourses int, prerequisites [][]int) bool {
	indegree := make([]int, numCourses)
	adj := make([][]int, numCourses)

	for _, prereq := range prerequisites {
		adj[prereq[1]] = append(adj[prereq[1]], prereq[0])
		indegree[prereq[0]]++
	}

	queue := []int{}
	for i := 0; i < numCourses; i++ {
		if indegree[i] == 0 {
			queue = append(queue, i)
		}
	}

	visited := 0
	for len(queue) > 0 {
		node := queue[0]
		queue = queue[1:]
		visited++
		for _, neighbor := range adj[node] {
			indegree[neighbor]--
			if indegree[neighbor] == 0 {
				queue = append(queue, neighbor)
			}
		}
	}

	return numCourses == visited
}

func main() {
	numCourses := 2
	prerequisites := [][]int{{1, 0}}
	fmt.Println("Can finish all courses:", canFinish(numCourses, prerequisites)) // Output: true

	numCourses = 2
	prerequisites = [][]int{{1, 0}, {0, 1}}
	fmt.Println("Can finish all courses:", canFinish(numCourses, prerequisites)) // Output: false
}
