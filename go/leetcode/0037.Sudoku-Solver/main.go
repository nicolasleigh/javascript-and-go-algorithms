package main

import "fmt"

func solveSudoku(board [][]byte) [][]byte {
	backtrack(board)
	return board
}

func backtrack(board [][]byte) bool {
	for i := 0; i < len(board); i++ {
		for j := 0; j < len(board); j++ {
			if board[i][j] != '.' {
				continue
			}

			for val := byte('1'); val <= byte('9'); val++ {
				if !isValid(board, i, j, val) {
					continue
				}

				board[i][j] = val
				if backtrack(board) {
					return true
				}
				board[i][j] = '.'
			}
			return false
		}
	}
	return true
}

func isValid(board [][]byte, row, col int, val byte) bool {
	for i := 0; i < len(board); i++ {
		if board[row][i] == val {
			return false
		}
	}

	for i := 0; i < len(board); i++ {
		if board[i][col] == val {
			return false
		}
	}

	startRow := (row / 3) * 3
	startCol := (col / 3) * 3
	for i := startRow; i < startRow+3; i++ {
		for j := startCol; j < startCol+3; j++ {
			if board[i][j] == val {
				return false
			}
		}
	}

	return true
}



func main() {
	board := [][]byte{
		{'5', '3', '.', '.', '7', '.', '.', '.', '.'},
		{'6', '.', '.', '1', '9', '5', '.', '.', '.'},
		{'.', '9', '8', '.', '.', '.', '.', '6', '.'},
		{'8', '.', '.', '.', '6', '.', '.', '.', '3'},
		{'4', '.', '.', '8', '.', '3', '.', '.', '1'},
		{'7', '.', '.', '.', '2', '.', '.', '.', '6'},
		{'.', '6', '.', '.', '.', '.', '2', '8', '.'},
		{'.', '.', '.', '4', '1', '9', '.', '.', '5'},
		{'.', '.', '.', '.', '8', '.', '.', '7', '9'},
	}

	solved := solveSudoku(board)

	for _, row := range solved {
		fmt.Println(string(row))
	}
}
