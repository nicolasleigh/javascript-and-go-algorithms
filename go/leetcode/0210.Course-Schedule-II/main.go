package main

import "fmt"

func findOrder(numCourses int, prerequisites [][]int) []int {
	indegree := make([]int, numCourses)
	adj := make([][]int, numCourses)
	res := []int{}

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
		res = append(res, node)
		for _, neighbor := range adj[node] {
			indegree[neighbor]--
			if indegree[neighbor] == 0 {
				queue = append(queue, neighbor)
			}
		}
	}

	if visited != numCourses {
		return []int{}
	}

	return res
}

func main() {
	numCourses := 2
	prerequisites := [][]int{{1, 0}}
	fmt.Println(findOrder(numCourses, prerequisites)) // Output: [0 1]

	numCourses = 2
	prerequisites = [][]int{{1, 0}, {0, 1}}
	fmt.Println(findOrder(numCourses, prerequisites)) // Output: []

	numCourses = 3
	prerequisites = [][]int{{1, 0}, {1, 2}, {0, 1}}
	fmt.Println(findOrder(numCourses, prerequisites)) // Output: []
}
