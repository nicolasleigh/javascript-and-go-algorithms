package main

func numTrees(n int) int {
	dp := make([]int, n+1)
	dp[0], dp[1] = 1, 1
	// dp[n]: the number of unique BST for a sequence of length n
	// F(5, 10): the number of unique BST, where the number 5 is the root of BST, and the sequence ranges from 1 to 10
	// F(5, 10) = dp[4]*dp[5]
	// dp[10] = F(1,10)     + F(2,10)     + F(3,10)     + ... + F(10,10)
	//        = dp[0]*dp[9] + dp[1]*dp[8] + dp[2]*dp[7] + ... + dp[9]*dp[0]
	for i := 2; i <= n; i++ {
		for j := 1; j <= i; j++ {
			dp[i] += dp[j-1] * dp[i-j]
		}
	}
	return dp[n]
}
