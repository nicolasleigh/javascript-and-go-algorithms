package main

import (
	"fmt"
	"path/filepath"
	"strings"
)

func simplifyPath1(path string) string {
	return filepath.Clean(path)
}

func simplifyPath(path string) string {
	arr := strings.Split(path, "/")
	fmt.Println(len(arr))
	fmt.Println(arr)
	stack := make([]string, 0)
	var res string
	for i := 0; i < len(arr); i++ {
		cur := arr[i]
		if cur == ".." {
			if len(stack) > 0 {
				stack = stack[:len(stack)-1]
			}
		} else if cur != "." && len(cur) > 0 {
			// Using "len(cur) > 0" to make sure no empty string appended to the stack
			stack = append(stack, arr[i])
		}
	}
	if len(stack) == 0 {
		return "/"
	}
	res = strings.Join(stack, "/")
	return "/" + res
}

func main() {
	// s1 := "/home//foo/"
	s2 := "/home/user/Documents/../Pictures"
	fmt.Println(simplifyPath(s2))
}
