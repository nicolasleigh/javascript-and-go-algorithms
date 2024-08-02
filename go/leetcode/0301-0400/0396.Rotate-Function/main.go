/*
Let the array elements be: [a b c d e].

Length of array represented by N = 5
Sum of elements of array represented by SUM = a + b + c + d + e

Now, as per the question :

F(0) = (0 * a) + (1 * b) + (2 * c) + (3 * d) + (4 * e) = 0 + b + 2c + 3d + 4e
F(1) = (1 * a) + (2 * b) + (3 * c) + (4 * d) + (0 * e) = a + 2b + 3c + 4d + 0
F(2) = (2 * a) + (3 * b) + (4 * c) + (0 * d) + (1 * e) = 2a + 3b + 4c + 0 + e

Now subtracting 2 equations,

F(1) - F(0) = a + b + c + d - 4e = a + b + c + d + e - 5e
Therefore, F(1) = F(0) + a + b + c + d + e - 5e = F(0) + SUM - N*e

F(2) - F(1) = a + b + c + e - 4d = a + b + c + d + e - 5d
Therefore, F(2) = F(1) + a + b + c + d + e - 5d = F(1) + SUM - N*d
F(K) = F(K-1) + SUM - N * (array[N - K])
*/
package main

import (
	"fmt"
)

func maxRotateFunction(nums []int) int {
	n, sum, F0 := len(nums), 0, 0

	// Calculate sum of elements and F0
	for i := 0; i < n; i++ {
		sum += nums[i]
		F0 += i * nums[i]
	}

	dp := make([]int, n)
	dp[0] = F0
	maxV := dp[0]

	// Calculate maximum Fk using the recurrence relation
	for i := 1; i < n; i++ {
		dp[i] = dp[i-1] + sum - n*nums[n-i]
		maxV = max(maxV, dp[i])
	}

	return maxV
}

func main() {
	A := []int{4, 3, 2, 6}
	result := maxRotateFunction(A)
	fmt.Println(result) // Output: 26
}
