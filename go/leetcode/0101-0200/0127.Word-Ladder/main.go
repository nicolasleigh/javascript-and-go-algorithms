package main

import (
	"fmt"
)

func ladderLength(beginWord string, endWord string, wordList []string) int {
	wordMap := make(map[string]bool)
	for _, word := range wordList {
		wordMap[word] = true
	}

	if !wordMap[endWord] {
		return 0
	}

	queue := []string{beginWord}
	visitedMap := make(map[string]int)
	visitedMap[beginWord] = 1

	for len(queue) > 0 {
		word := queue[0]
		queue = queue[1:]
		depth := visitedMap[word]

		if word == endWord {
			return depth
		}

		for i := 0; i < len(word); i++ {
			for char := 'a'; char <= 'z'; char++ {
				s := []rune(word)
				s[i] = char
				str := string(s)
				if wordMap[str] && visitedMap[str] == 0 {
					queue = append(queue, str)
					visitedMap[str] = depth + 1
				}
			}
		}
	}
	return 0
}

func main() {
	fmt.Println(ladderLength("hit", "log", []string{"hot", "dot", "dog", "lot", "log", "cog"}))
}
