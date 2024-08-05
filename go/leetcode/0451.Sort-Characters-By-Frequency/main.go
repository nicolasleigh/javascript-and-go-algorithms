package main

import "strings"

func frequencySort(s string) string {
	n := len(s)
	var sb strings.Builder
	count := make([]int, 128)
	buckets := make([][]rune, n+1)

	for _, c := range s {
		count[c]++
	}

	for i := 0; i < 128; i++ {
		freq := count[i]
		if freq > 0 {
			if buckets[freq] == nil {
				buckets[freq] = []rune{}
			}
			buckets[freq] = append(buckets[freq], rune(i))
		}
	}

	for freq := n; freq > 0; freq-- {
		if buckets[freq] != nil {
			for _, c := range buckets[freq] {
				for i := 0; i < freq; i++ {
					sb.WriteRune(c)
				}
			}
		}
	}

	return sb.String()
}
