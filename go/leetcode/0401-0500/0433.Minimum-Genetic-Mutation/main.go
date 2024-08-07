package main

import "fmt"

func minMutation(start string, end string, bank []string) int {
	if start == end {
		return 0
	}

	//convert bank array to set
	bankSet := make(map[string]struct{})
	for _, v := range bank {
		bankSet[v] = struct{}{}
	}

	//visited map that stores all sequences visited
	visited := make(map[string]struct{})

	//bfs queue
	queue := []string{start}
	level := 0
	visited[start] = struct{}{}
	for len(queue) > 0 {
		length := len(queue)
		for _, v := range queue {
			if v == end {
				return level
			}
			//get all possible mutations by modifying each character of the sequence
			for i := range v {
				mutations := getNextMutation(v, i, bankSet, visited)
				queue = append(queue, mutations...)
			}
		}
		level++
		queue = queue[length:]
	}
	return -1
}

// return all possible "valid" mutations
func getNextMutation(mut string, pos int, bankSet, visited map[string]struct{}) []string {
	charSet := []rune{'A', 'C', 'G', 'T'}
	mutations := []string{}
	for _, char := range charSet {
		//generate a new sequence by replacing the character at "pos" with each character in charSet
		seq := mut[:pos] + string(char) + mut[pos+1:]
		//check if the new sequence exist in bank, and has not been visited already
		if isInSet(seq, bankSet) && !isInSet(seq, visited) {
			mutations = append(mutations, seq)
			visited[seq] = struct{}{} //update visited map
		}
	}
	return mutations
}

func isInSet(seq string, m map[string]struct{}) bool {
	_, ok := m[seq]
	return ok
}

func main() {
	start := "AACCGGTT"
	end := "AACCGGTA"
	bank := []string{"AACCGGTA"}
	result := minMutation(start, end, bank)
	fmt.Println(result) // Output: 1
}
