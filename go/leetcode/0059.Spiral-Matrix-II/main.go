package main

import "fmt"

// Please note the difference between the problem 0054 and the problem 0059
func generateMatrix(n int) [][]int {
	// top、left、right、bottom 分别是剩余区域的上、左、右、下的下标
	top, left, bottom, right := 0, 0, n-1, n-1
	count, sum := 1, n*n

	// Create a 2D slice
	res := make([][]int, n)
	for i := range res {
		res[i] = make([]int, n)
	}

	// 外层循环每次遍历一圈
	// Add condition "top <= bottom" to avoid the infinite loop when n = 2
	for count <= sum && top <= bottom {
		i, j := top, left
		// Change condition "count < sum" to "count <= sum"
		for j <= right && count <= sum {
			res[i][j] = count
			count++
			j++
		}
		i, j = top+1, right
		// same as above
		for i <= bottom && count <= sum {
			res[i][j] = count
			count++
			i++
		}
		i, j = bottom, right-1
		// same as above
		for j >= left && count <= sum {
			res[i][j] = count
			count++
			j--
		}
		i, j = bottom-1, left
		// same as above
		for i > top && count <= sum {
			res[i][j] = count
			count++
			i--
		}
		// 进入到下一层
		top, left, bottom, right = top+1, left+1, bottom-1, right-1
	}
	return res
}

func main() {
	fmt.Println(generateMatrix(2))
}
