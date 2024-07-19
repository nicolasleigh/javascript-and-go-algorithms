package leetcode

import (
	"fmt"
	"slices"
	"testing"

	s "github.com/NicolasLeigh/algorithms/structures"
)

type parameter struct {
	first  []int
	second []int
}

func TestProblem2(t *testing.T) {

	tests := []struct {
		name string
		para parameter
		want []int
	}{

		{
			name: "case 1",
			para: parameter{[]int{}, []int{}},
			want: []int{},
		},

		{
			name: "case 2",
			para: parameter{[]int{1}, []int{1}},
			want: []int{2},
		},

		{
			name: "case 3",
			para: parameter{[]int{1, 2, 3, 4}, []int{1, 2, 3, 4}},
			want: []int{2, 4, 6, 8},
		},

		{
			name: "case 4",
			para: parameter{[]int{1, 2, 3, 4, 5}, []int{1, 2, 3, 4, 5}},
			want: []int{2, 4, 6, 8, 0, 1},
		},

		{
			name: "case 5",
			para: parameter{[]int{1}, []int{9, 9, 9, 9, 9}},
			want: []int{0, 0, 0, 0, 0, 1},
		},

		{
			name: "case 6",
			para: parameter{[]int{9, 9, 9, 9, 9}, []int{1}},
			want: []int{0, 0, 0, 0, 0, 1},
		},

		{
			name: "case 7",
			para: parameter{[]int{2, 4, 3}, []int{5, 6, 4}},
			want: []int{7, 0, 8},
		},

		{
			name: "case 8",
			para: parameter{[]int{1, 8, 3}, []int{7, 1}},
			want: []int{8, 9, 3},
		},
	}

	fmt.Printf("------------------------Leetcode Problem 2------------------------\n")
	for _, v := range tests {
		t.Run(v.name, func(t *testing.T) {
			res := s.ListToInts(addTwoNumbers(s.IntsToList(v.para.first), s.IntsToList(v.para.second)))
			if !slices.Equal(res, v.want) {
				t.Errorf("got %v; want %v", res, v.want)
			}
		})
	}
}
