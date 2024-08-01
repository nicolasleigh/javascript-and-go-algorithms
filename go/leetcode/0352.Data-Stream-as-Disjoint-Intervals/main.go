package main

import (
	"fmt"
)

type SummaryRanges struct {
	list []bool
}

// Constructor initializes the SummaryRanges object.
func Constructor() SummaryRanges {
	return SummaryRanges{
		list: make([]bool, 0),
	}
}

// AddNum adds a number to the data structure.
func (this *SummaryRanges) AddNum(num int) {
	// Extend the list to accommodate the new number
	if num >= len(this.list) {
		c := make([]bool, num+1)
		copy(c, this.list)
		this.list = c
	}
	this.list[num] = true
}

// GetIntervals returns a summary of the intervals in the list.
func (this *SummaryRanges) GetIntervals() [][]int {
	var res [][]int
	for i := 0; i < len(this.list); i++ {
		if this.list[i] {
			j := i
			for j < len(this.list) && this.list[j] {
				j++
			}
			res = append(res, []int{i, j - 1})
			i = j
		}
	}
	return res
}

func main() {
	sr := Constructor()
	sr.AddNum(1)
	sr.AddNum(3)
	sr.AddNum(7)
	sr.AddNum(2)
	sr.AddNum(6)
	fmt.Println(sr.GetIntervals()) // Output: [[1 3] [6 7]]
}
