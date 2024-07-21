package main

import (
	"fmt"
)

func solve(board [][]byte) {
	if len(board) == 0 {
		return
	}

	row := len(board)
	col := len(board[0])
	visited := make([][]bool, row)
	for i := range visited {
		visited[i] = make([]bool, col)
	}

	for j := 0; j < col; j++ {
		if board[0][j] == 'O' {
			dfs(0, j, false, row, col, board, visited)
		}
		if board[row-1][j] == 'O' {
			dfs(row-1, j, false, row, col, board, visited)
		}
	}

	for i := 0; i < row; i++ {
		if board[i][0] == 'O' {
			dfs(i, 0, false, row, col, board, visited)
		}
		if board[i][col-1] == 'O' {
			dfs(i, col-1, false, row, col, board, visited)
		}
	}

	for i := 1; i < row-1; i++ {
		for j := 1; j < col-1; j++ {
			if board[i][j] == 'O' {
				dfs(i, j, true, row, col, board, visited)
			}
		}
	}
}

func dfs(i, j int, needChange bool, row, col int, board [][]byte, visited [][]bool) {
	if i < 0 || i >= row || j < 0 || j >= col || board[i][j] == 'X' || visited[i][j] {
		return
	}
	if needChange {
		board[i][j] = 'X'
	}
	visited[i][j] = true

	dfs(i-1, j, needChange, row, col, board, visited)
	dfs(i+1, j, needChange, row, col, board, visited)
	dfs(i, j-1, needChange, row, col, board, visited)
	dfs(i, j+1, needChange, row, col, board, visited)
}

func main() {
	board := [][]byte{
		{'X', 'X', 'X', 'X'},
		{'X', 'O', 'O', 'X'},
		{'X', 'X', 'O', 'X'},
		{'X', 'O', 'X', 'X'},
		{'X', 'O', 'X', 'X'},
	}
	solve(board)
	for _, row := range board {
		fmt.Println(string(row))
	}
}
