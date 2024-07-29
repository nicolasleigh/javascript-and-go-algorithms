package main

import (
	"fmt"
)

type Trie struct {
	next [26]*Trie
	word string
}

func findWords(board [][]byte, words []string) []string {
	trie := buildTrie(words)
	// Cannot use "var res []string", like test case 2, it may append duplicate result.
	// Custom set data structure, instead of using boolean, using empty struct{} to save memory.
	res := make(map[string]struct{})
	for i := 0; i < len(board); i++ {
		for j := 0; j < len(board[0]); j++ {
			dfs(board, trie, res, i, j)
		}
	}
	var result []string
	for k := range res {
		result = append(result, k)
	}

	return result
}

func dfs(board [][]byte, node *Trie, res map[string]struct{}, i, j int) {
	if i < 0 || i >= len(board) || j < 0 || j >= len(board[0]) || board[i][j] == '#' || node.next[board[i][j]-'a'] == nil {
		return
	}
	cur := node.next[board[i][j]-'a']
	if cur.word != "" {
		res[cur.word] = struct{}{}
	}

	c := board[i][j]
	board[i][j] = '#'
	dfs(board, cur, res, i-1, j)
	dfs(board, cur, res, i+1, j)
	dfs(board, cur, res, i, j-1)
	dfs(board, cur, res, i, j+1)
	board[i][j] = c
}

func buildTrie(words []string) *Trie {
	root := &Trie{}
	for _, word := range words {
		p := root
		for i := 0; i < len(word); i++ {
			idx := word[i] - 'a'
			if p.next[idx] == nil {
				p.next[idx] = &Trie{}
			}
			p = p.next[idx]
		}
		p.word = word
	}
	return root
}

func main() {
	board1 := [][]byte{
		{'o', 'a', 'a', 'n'},
		{'e', 't', 'a', 'e'},
		{'i', 'h', 'k', 'r'},
		{'i', 'f', 'l', 'v'},
	}
	words1 := []string{"oath", "pea", "eat", "rain"}

	board2 := [][]byte{
		{'o', 'a', 'b', 'n'},
		{'o', 't', 'a', 'e'},
		{'a', 'h', 'k', 'r'},
		{'a', 'f', 'l', 'v'},
	}
	words2 := []string{"oa", "oaa"}

	result1 := findWords(board1, words1)
	result2 := findWords(board2, words2)
	fmt.Println(result1) // Output: [oath eat]
	fmt.Println(result2) // Output: [oa oaa]
}
