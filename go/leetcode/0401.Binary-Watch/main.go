package main

import (
	"fmt"
	"math/bits"
)

func readBinaryWatch(num int) []string {
	var times []string
	var h, m uint
	for h = 0; h < 12; h++ {
		for m = 0; m < 60; m++ {
			// if countBits(h*64+m) == num {
			// 	times = append(times, fmt.Sprintf("%d:%02d", h, m))
			// }
			if bits.OnesCount(h)+bits.OnesCount(m) == num {
				times = append(times, fmt.Sprintf("%d:%02d", h, m))
			}
		}
	}
	return times
}

func main() {
	num := 1 // Example usage
	fmt.Println(readBinaryWatch(num))
}
