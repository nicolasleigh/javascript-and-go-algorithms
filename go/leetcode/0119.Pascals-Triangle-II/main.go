package main

func getRow(rowIndex int) []int {
    triangle := generate(rowIndex+1)
		return triangle[rowIndex]
}

// Same as 0118
func generate(numRows int) [][]int {
	result := [][]int{}
	for i := 0; i < numRows; i++ {
		row := []int{}
		for j := 0; j < i+1; j++ {
			if j == 0 || j == i {
				row = append(row, 1)
			} else if i > 1 {
				row = append(row, result[i-1][j-1]+result[i-1][j])
			}
		}
		result = append(result, row)
	}
	return result
}
