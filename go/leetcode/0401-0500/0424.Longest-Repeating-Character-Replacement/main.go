package main

// Sliding window
func characterReplacement(s string, k int) int {
	res, l, count, freq := 0, 0, 0, make([]int, 26)
	for r, char := range s {
		freq[char-'A']++
		count = max(count, freq[char-'A'])
		for r-l+1-count > k {
			freq[s[l]-'A']--
			l++
		}
		res = max(res, r-l+1)
	}
	return res
}
