package main

import (
	"fmt"
	"strconv"
)

// Solution 1
func getHint1(secret string, guess string) string {
	bulls, cows := 0, 0
	numbers := make([]int, 10)
	for i := 0; i < len(secret); i++ {
		s := int(secret[i] - '0')
		g := int(guess[i] - '0')
		if s == g {
			bulls++
		} else {
			// If the character in the secret string has numbers[i] less than 0 means this character appears in the guess string
			if numbers[s] < 0 {
				cows++
			}
			if numbers[g] > 0 {
				cows++
			}
			// numbers[i] greater than 0 means it appears in the secret string
			// numbers[i] less than 0 means it appears in the guess string
			numbers[s]++
			numbers[g]--
		}
	}
	return strconv.Itoa(bulls) + "A" + strconv.Itoa(cows) + "B"
}

// Solution 2
// Using two maps to store the frequency of characters
func getHint(secret string, guess string) string {
	bulls, cows := 0, 0
	map1 := make(map[int]int, 10)
	map2 := make(map[int]int, 10)
	for i := 0; i < len(secret); i++ {
		s := int(secret[i] - '0')
		g := int(guess[i] - '0')
		if s == g {
			bulls++
		} else {
			map1[s]++
			map2[g]++
		}
	}
	for k1, v1 := range map1 {
		if v2, ok := map2[k1]; ok {
			cows += min(v1, v2)
		}
	}
	return strconv.Itoa(bulls) + "A" + strconv.Itoa(cows) + "B"
}

func main() {
	secret := "1807"
	guess := "7810"
	fmt.Println(getHint(secret, guess)) // Output: "1A3B"

	secret = "1123"
	guess = "0111"
	fmt.Println(getHint(secret, guess)) // Output: "1A1B"

	secret = "1122"
	guess = "2211"
	fmt.Println(getHint(secret, guess)) // Output:
}
