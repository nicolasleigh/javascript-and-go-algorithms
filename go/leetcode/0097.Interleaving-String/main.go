// https://leetcode.com/problems/interleaving-string/solutions/3956393/99-78-2-approaches-dp-recursion/
package main

import "fmt"

func isInterleave(s1, s2, s3 string) bool {
	m, n, l := len(s1), len(s2), len(s3)
	if m+n != l {
		return false
	}

	// dp[i][j] represents whether the substring s3[:i+j] can be formed by interleaving s1[:i] and s2[:j].
	dp := make([][]bool, m+1)
	for i := range dp {
		dp[i] = make([]bool, n+1)
	}
	dp[0][0] = true

	for i := 1; i <= m; i++ {
		dp[i][0] = (dp[i-1][0] && s1[i-1] == s3[i-1])
	}
	for j := 1; j <= n; j++ {
		dp[0][j] = (dp[0][j-1] && s2[j-1] == s3[j-1])
	}

	for i := 1; i <= m; i++ {
		for j := 1; j <= n; j++ {
			dp[i][j] = (dp[i-1][j] && s1[i-1] == s3[i+j-1]) || (dp[i][j-1] && s2[j-1] == s3[i+j-1])
		}
	}

	return dp[m][n]
}

func main() {
	s1 := "aabcc"
	s2 := "dbbca"
	s3 := "aadbbcbcac"

	result := isInterleave(s1, s2, s3)
	fmt.Println(result) // should output true or false
}
