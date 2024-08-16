package leetcode

/*
Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
// Sliding window
func lengthOfLongestSubstring(s string) int {
	if len(s) == 0 {
		return 0
	}
	bitSet := make([]bool, 128) // ascii length, that is 2^7=128
	res, l, r := 0, 0, 0
	for l < len(s) {
		// If bitSet is true, represents this character already in the window, so we need move l multiple times until this character is not in the window
		if bitSet[s[r]] {
			bitSet[s[l]] = false
			l++
		} else {
			bitSet[s[r]] = true
			r++
		}
		res = max(res, r-l) // Don't have to use r-l+1, because r is already incremented inside the if-else block

		// Avoid index out of range error
		if r >= len(s) {
			break
		}
	}
	return res
}
