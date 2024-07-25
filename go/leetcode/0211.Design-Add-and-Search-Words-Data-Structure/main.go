package main

import "fmt"

// WordDictionary defines the structure for a trie-based dictionary
type WordDictionary struct {
	children    [26]*WordDictionary
	isEndOfWord bool
}

// Constructor initializes your data structure here.
func Constructor() WordDictionary {
	return WordDictionary{}
}

// AddWord adds a word into the data structure.
func (wd *WordDictionary) AddWord(word string) {
	cur := wd
	for _, c := range word {
		i := c - 'a'
		if cur.children[i] == nil {
			cur.children[i] = &WordDictionary{}
		}
		cur = cur.children[i]
	}
	cur.isEndOfWord = true
}

// Search returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
func (wd *WordDictionary) Search(word string) bool {
	cur := wd
	for i, c := range word {
		if c == '.' {
			for _, ch := range cur.children {
				if ch != nil && ch.Search(word[i+1:]) {
					return true
				}
			}
			return false
		}
		idx := c - 'a'
		if cur.children[idx] == nil {
			return false
		}
		cur = cur.children[idx]
	}
	return cur != nil && cur.isEndOfWord
}

func main() {
	wordDictionary := Constructor()
	wordDictionary.AddWord("bad")
	wordDictionary.AddWord("dad")
	wordDictionary.AddWord("mad")
	fmt.Println(wordDictionary.Search("pad")) // Output: false
	fmt.Println(wordDictionary.Search("bad")) // Output: true
	fmt.Println(wordDictionary.Search(".ad")) // Output: true
	fmt.Println(wordDictionary.Search("b..")) // Output: true
}
