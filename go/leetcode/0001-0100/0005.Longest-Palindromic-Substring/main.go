package main

import "fmt"

/*
Example 1:
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

Example 3:
Input: s = "a"
Output: "a"

Example 4:
Input: s = "ac"
Output: "a"
*/

// 中心扩散法，时间复杂度 O(n^2)，空间复杂度 O(1)
// 判断回文有一个核心问题是找到“轴心”。如果长度是偶数，那么轴心是中心虚拟的，如果长度是奇数，那么轴心正好是正中心的那个字母。
// 中心扩散法的思想是枚举每个轴心的位置。然后做两次假设，假设最长回文串是偶数，那么以虚拟中心往 2 边扩散；假设最长回文串是奇数，那么以正中心的字符往 2 边扩散。
// 扩散的过程就是对称判断两边字符是否相等的过程。这个方法时间复杂度和动态规划是一样的，但是空间复杂度降低了。时间复杂度 O(n^2)，空间复杂度 O(1)。
func longestPalindrome(s string) string {
	res := ""
	for i := 0; i < len(s); i++ {
		// If the length of the palindrome is odd
		res = maxPalindrome(s, i, i, res)
		// If the length of the palindrome is even
		res = maxPalindrome(s, i, i+1, res)
	}
	return res
}

func maxPalindrome(s string, i, j int, res string) string {
	sub := ""
	for i >= 0 && j < len(s) && s[i] == s[j] {
		sub = s[i : j+1]
		i--
		j++
	}
	if len(res) < len(sub) {
		return sub
	}
	return res
}

func main() {
	res := longestPalindrome("babad")
	fmt.Println(res)
}
