package leetcode

import (
	"fmt"
	"testing"
)

func TestProblem3(t *testing.T) {

	tests := []struct {
		name string
		para string
		want int
	}{

		{
			name: "case 1",
			para: "abcabcbb",
			want: 3,
		},

		{
			name: "case 2",
			para: "bbbbb",
			want: 1,
		},

		{
			name: "case 3",
			para: "pwwkew",
			want: 3,
		},

		{
			name: "case 4",
			para: "",
			want: 0,
		},
	}

	fmt.Printf("------------------------Leetcode Problem 3------------------------\n")
	for _, v := range tests {
		t.Run(v.name, func(t *testing.T) {
			res := lengthOfLongestSubstring(v.para)
			if res != v.want {
				t.Errorf("got %v; want %v", res, v.want)
			}
		})
	}
}
