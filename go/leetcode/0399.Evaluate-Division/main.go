package main

import (
	"fmt"
)

func calcEquation(equations [][]string, values []float64, queries [][]string) []float64 {
	graph := buildGraph(equations, values)
	result := make([]float64, len(queries))

	for i, query := range queries {
		start := query[0]
		end := query[1]
		visited := make(map[string]bool)
		result[i] = getPathWeight(start, end, visited, graph)
	}

	return result
}

func getPathWeight(start, end string, visited map[string]bool, graph map[string]map[string]float64) float64 {
	// if _, exists := graph[start]; !exists {
	// 	return -1.0
	// }
	if value, exists := graph[start][end]; exists {
		return value
	}

	visited[start] = true
	for neighbor, weight := range graph[start] {
		if !visited[neighbor] {
			productWeight := getPathWeight(neighbor, end, visited, graph)
			if productWeight != -1.0 {
				return weight * productWeight
			}
		}
	}

	return -1.0
}

func buildGraph(equations [][]string, values []float64) map[string]map[string]float64 {
	graph := make(map[string]map[string]float64)

	for i := 0; i < len(equations); i++ {
		u := equations[i][0]
		v := equations[i][1]
		if _, exists := graph[u]; !exists {
			graph[u] = make(map[string]float64)
		}
		if _, exists := graph[v]; !exists {
			graph[v] = make(map[string]float64)
		}
		graph[u][v] = values[i]
		graph[v][u] = 1 / values[i]
	}

	return graph
}

func main() {
	equations := [][]string{{"a", "b"}, {"b", "c"}}
	values := []float64{2.0, 3.0}
	queries := [][]string{{"a", "c"}, {"b", "a"}, {"a", "e"}, {"a", "a"}, {"x", "x"}}

	result := calcEquation(equations, values, queries)
	fmt.Println(result) // Output: [6.0 0.5 -1.0 1.0 -1.0]
}
