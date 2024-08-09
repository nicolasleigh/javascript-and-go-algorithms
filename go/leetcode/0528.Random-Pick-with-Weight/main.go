package main

import (
	"fmt"
	"math/rand"
)

/*
Use prefix sum array to get idx.
w[] = {2,5,3,4} => prefixSum[] = {2,7,10,14}
then get random val rand.Intn(14) + 1, idx is in range [1,14]

idx in [1,2] return 0
idx in [3,7] return 1
idx in [8,10] return 2
idx in [11,14] return 3
*/

type Solution struct {
	prefixSum []int
}

func Constructor(w []int) Solution {
	prefixSum := make([]int, len(w))
	prefixSum[0] = w[0]
	for i := 1; i < len(w); i++ {
		prefixSum[i] = prefixSum[i-1] + w[i]
	}
	return Solution{prefixSum}
}

func (s *Solution) PickIndex() int {
	size := len(s.prefixSum)
	idx := rand.Intn(s.prefixSum[size-1]) + 1
	left, right := 0, size-1
	for left < right {
		mid := left + (right-left)/2
		if s.prefixSum[mid] == idx {
			return mid
		} else if s.prefixSum[mid] < idx {
			// When s.prefixSum[mid] < idx, the target index cannot be mid
			left = mid + 1
		} else {
			// When s.prefixSum[mid] > idx, the target index can be mid
			right = mid
		}
	}
	return left
}

func main() {
	w := []int{1, 3}
	sol := Constructor(w)
	for i := 0; i < 10; i++ {
		fmt.Println(sol.PickIndex())
	}
}
