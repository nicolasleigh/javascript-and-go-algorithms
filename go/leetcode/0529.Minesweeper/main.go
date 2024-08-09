package main

import (
	"fmt"
)

func updateBoard(board [][]byte, click []int) [][]byte {
	m, n := len(board), len(board[0])
	row, col := click[0], click[1]

	if board[row][col] == 'M' { // Mine
		board[row][col] = 'X'
	} else { // Empty
		// Get number of mines first
		count := 0
		for i := -1; i <= 1; i++ {
			for j := -1; j <= 1; j++ {
				if i == 0 && j == 0 {
					continue
				}
				r, c := row+i, col+j
				if r < 0 || r >= m || c < 0 || c >= n {
					continue
				}
				if board[r][c] == 'M' || board[r][c] == 'X' {
					count++
				}
			}
		}

		if count > 0 { // If it is not a 'B', stop further DFS
			board[row][col] = byte(count + '0')
		} else { // Continue DFS to adjacent cells
			board[row][col] = 'B'
			for i := -1; i <= 1; i++ {
				for j := -1; j <= 1; j++ {
					if i == 0 && j == 0 {
						continue
					}
					r, c := row+i, col+j
					if r < 0 || r >= m || c < 0 || c >= n {
						continue
					}
					if board[r][c] == 'E' {
						board = updateBoard(board, []int{r, c})
					}
				}
			}
		}
	}

	return board
}

func main() {
	board := [][]byte{
		{'E', 'E', 'E', 'E', 'E'},
		{'E', 'E', 'M', 'E', 'E'},
		{'E', 'E', 'E', 'E', 'E'},
		{'E', 'E', 'E', 'E', 'E'},
	}
	click := []int{3, 0}
	updatedBoard := updateBoard(board, click)
	for _, row := range updatedBoard {
		fmt.Println(row)
	}
}
