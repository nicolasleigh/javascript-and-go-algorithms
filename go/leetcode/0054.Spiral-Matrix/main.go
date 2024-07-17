package main

func spiralOrder(matrix [][]int) []int {
	m := len(matrix)
	if m == 0 {
		return nil
	}

	n := len(matrix[0])
	if n == 0 {
		return nil
	}

	// top、left、right、bottom 分别是剩余区域的上、左、右、下的下标
	top, left, bottom, right := 0, 0, m-1, n-1
	count, sum := 0, m*n
	res := []int{}

	// 外层循环每次遍历一圈
	for count < sum {
		i, j := top, left
		for j <= right && count < sum {
			res = append(res, matrix[i][j])
			count++
			j++
		}
		i, j = top+1, right
		for i <= bottom && count < sum {
			res = append(res, matrix[i][j])
			count++
			i++
		}
		i, j = bottom, right-1
		for j >= left && count < sum {
			res = append(res, matrix[i][j])
			count++
			j--
		}
		i, j = bottom-1, left
		for i > top && count < sum {
			res = append(res, matrix[i][j])
			count++
			i--
		}
		// 进入到下一层
		top, left, bottom, right = top+1, left+1, bottom-1, right-1
	}
	return res
}
