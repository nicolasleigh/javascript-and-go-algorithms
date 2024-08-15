package leetcode

import (
	"slices"
	"testing"
)

type parameter struct {
	nums   []int
	target int
}

func TestProblem1(t *testing.T) {

	tests := []struct {
		name string
		para parameter
		want []int
	}{
		{
			name: "case 1",
			para: parameter{[]int{3, 2, 4}, 6},
			want: []int{1, 2},
		},

		{
			name: "case 2",
			para: parameter{[]int{3, 2, 4}, 5},
			want: []int{0, 1},
		},

		{
			name: "case 3",
			para: parameter{[]int{0, 8, 7, 3, 3, 4, 2}, 11},
			want: []int{1, 3},
		},

		{
			name: "case 4",
			para: parameter{[]int{0, 1}, 1},
			want: []int{0, 1},
		},

		{
			name: "case 5",
			para: parameter{[]int{0, 3}, 5},
			want: []int{},
		},
	}

	for _, v := range tests {
		t.Run(v.name, func(t *testing.T) {
			res := twoSum(v.para.nums, v.para.target)
			if !slices.Equal(res, v.want) {
				t.Errorf("got %v; want %v", res, v.want)
			}
		})
	}
}
