package main

import "container/heap"

type Element struct {
	Val int // Value of the element
	Row int // Row index of the element
	Col int // Column index of the element
}

// Define a min-heap
type MinHeap []*Element

func (h MinHeap) Len() int {
	return len(h)
}
func (h MinHeap) Less(i, j int) bool {
	return h[i].Val < h[j].Val
}
func (h MinHeap) Swap(i, j int) {
	h[i], h[j] = h[j], h[i]
}
func (h *MinHeap) Push(x interface{}) {
	*h = append(*h, x.(*Element))
}
func (h *MinHeap) Pop() interface{} {
	old := *h
	n := len(old)
	*h = old[:n-1]
	return old[n-1]
}

func kthSmallest(matrix [][]int, k int) int {
	minHeap := &MinHeap{}

	// Push the elements of the first row into the min-heap
	for col := 0; col < len(matrix[0]); col++ {
		heap.Push(minHeap, &Element{Val: matrix[0][col], Row: 0, Col: col})
	}

	// Pop k-1 elements from the min-heap
	for i := 0; i < k-1; i++ {
		// Pop the smallest element from the min-heap
		elem := heap.Pop(minHeap).(*Element)
		// If the popped element is not from the last row, push the element from the next column in the same row
		if elem.Row < len(matrix)-1 {
			heap.Push(minHeap, &Element{Val: matrix[elem.Row+1][elem.Col], Row: elem.Row + 1, Col: elem.Col})
		}
	}

	// The top element of the min-heap is the kth smallest element
	return heap.Pop(minHeap).(*Element).Val
}
