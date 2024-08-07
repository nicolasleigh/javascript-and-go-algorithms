package main

import (
	"fmt"
	"strings"
)

// originalDigits reconstructs the original digits from the given scrambled string.
func originalDigits(s string) string {
	count := make([]int, 10)
	for _, c := range s {
		switch c {
		case 'z':
			count[0]++
		case 'w':
			count[2]++
		case 'x':
			count[6]++
		case 's':
			count[7]++ // 7 - 6
		case 'g':
			count[8]++
		case 'u':
			count[4]++
		case 'f':
			count[5]++ // 5 - 4
		case 'h':
			count[3]++ // 3 - 8
		case 'i':
			count[9]++ // 9 - 8 - 5 - 6
		case 'o':
			count[1]++ // 1 - 0 - 2 - 4
		}
	}
	count[7] -= count[6]
	count[5] -= count[4]
	count[3] -= count[8]
	count[9] -= count[8] + count[5] + count[6]
	count[1] -= count[0] + count[2] + count[4]

	var sb strings.Builder
	for i := 0; i <= 9; i++ {
		for j := 0; j < count[i]; j++ {
			sb.WriteString(fmt.Sprintf("%d", i))
		}
	}

	return sb.String()
}

func main() {
	s := "owoztneoer"
	result := originalDigits(s)
	fmt.Println(result) // Output: "012"
}
