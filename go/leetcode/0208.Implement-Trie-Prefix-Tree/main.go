// Trie Data Structure https://www.youtube.com/watch?v=-urNrIAQnNo

package main

import "fmt"

// Trie represents the Trie data structure
type Trie struct {
	children map[rune]*Trie
	isWord   bool
}

// Constructor creates a new Trie
func Constructor() Trie {
	return Trie{children: make(map[rune]*Trie)}
}

// Insert inserts a word into the Trie
func (t *Trie) Insert(word string) {
	for _, c := range word {
		if t.children[c] == nil {
			t.children[c] = &Trie{children: make(map[rune]*Trie)}
		}
		t = t.children[c]
	}
	t.isWord = true
}

// Search searches for a word in the Trie
func (t *Trie) Search(word string) bool {
	for _, c := range word {
		if t.children[c] == nil {
			return false
		}
		t = t.children[c]
	}
	return t.isWord
}

// StartsWith checks if there is any word in the Trie that starts with the given prefix
func (t *Trie) StartsWith(prefix string) bool {
	for _, c := range prefix {
		if t.children[c] == nil {
			return false
		}
		t = t.children[c]
	}
	return true
}

func main() {
	trie := Constructor()
	trie.Insert("apple")
	fmt.Println(trie.Search("apple"))   // Output: true
	fmt.Println(trie.Search("app"))     // Output: false
	fmt.Println(trie.StartsWith("app")) // Output: true
	trie.Insert("app")
	fmt.Println(trie.Search("app")) // Output: true
}
