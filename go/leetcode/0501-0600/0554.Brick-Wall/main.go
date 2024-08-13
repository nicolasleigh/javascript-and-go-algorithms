package main

import "fmt"

func leastBricks(wall [][]int) int {
	edgeFrequency := make(map[int]int) // Map to store the number of common edges among the rows
	maxFrequency := 0                  // Variable to store the frequency of the most occurring edge

	for _, row := range wall { // Iterating through each row
		edgePosition := 0 // Variable to store different edge positions

		for i := 0; i < len(row)-1; i++ { // Iterating through each brick inside a row
			currentBrickLength := row[i]       // Length of the current brick
			edgePosition += currentBrickLength // Next edge position = Previous edge position + Current brick's length
			edgeFrequency[edgePosition]++ // Incrementing the frequency of just calculated edge position
			maxFrequency = max(maxFrequency, edgeFrequency[edgePosition]) // Updating the max frequency
		}
	}

	return len(wall) - maxFrequency // Returning (Number of bricks crossed by line) i.e., (Number of rows in wall - Frequency of most occurring edge)
}

func main() {
	wall := [][]int{
		{1, 2, 2, 1},
		{3, 1, 2},
		{1, 3, 2},
		{2, 4},
		{3, 1, 1, 1},
	}

	fmt.Println(leastBricks(wall)) // Example usage
}

// https://leetcode.com/problems/brick-wall/solutions/888577/intuitive-explanation-in-c-java-python-w-pictures-w-comments/