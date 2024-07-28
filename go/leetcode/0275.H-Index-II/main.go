// https://leetcode.com/problems/h-index-ii/solutions/71063/standard-binary-search/

package main

/*
The origin solution: Sort the array descending order, give each a index start from 1.
From right to left, find the last number >= its index, the result is its index.
....c: 25, 8, 5, 3, 3
index: 1, 2, 3, 4, 5
number 5, H-index 3.

After understand this origin solution, we can go to the binary search one.
First, the different is the order changed, in this problem, the array sorted in ascending.
We need somehow transfer it to original problem.

For example, we have those number, and their index starts with 0
......c: 3, 3, 5, 8, 25
index: 0, 1, 2, 3, 4

We can covert it using n the length of the array. We subtract n with the index, we get:
........c: 3, 3, 5, 8, 25
index0: 0, 1, 2, 3, 4
index1: 5, 4, 3, 2, 1

We can see we almost have the original form now except the order. It is easy, in the original problem we try to find the last one >= its index, now we find the first one >= its index.

So now we just using binary search to find the number, a thing here we need to mind is the index0 here we are using, but we need to convert it to index1.
*/

func hIndex(citations []int) int {
	n := len(citations)
	low, high := 0, n-1
	for low <= high {
		m := low + (high-low)/2
		if citations[m] < n-m {
			low = m + 1
		} else {
			high = m - 1
		}
	}
	return n - low
}
