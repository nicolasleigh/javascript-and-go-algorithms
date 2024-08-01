package main

import (
	"container/heap"
)

type Item struct {
	x, y, sum int
}

type MinHeap []Item

func (m MinHeap) Swap(i, j int) {
	m[i], m[j] = m[j], m[i]
}

func (m MinHeap) Len() int {
	return len(m)
}

func (m MinHeap) Less(i, j int) bool {
	return m[i].sum < m[j].sum
}

func (m *MinHeap) Push(x any) {
	*m = append(*m, x.(Item))
}

func (m *MinHeap) Pop() any {
	old := *m
	n := len(old)
	*m = old[:n-1]
	return old[n-1]
}

func kSmallestPairs(nums1 []int, nums2 []int, k int) [][]int {
	m := MinHeap{}
	for i := 0; i < len(nums1); i++ {
		item := Item{i, 0, nums1[i] + nums2[0]}
		heap.Push(&m, item)
	}

	res := [][]int{}

	for k > 0 && len(m) > 0 {
		min := heap.Pop(&m).(Item)
		i, j := min.x, min.y
		res = append(res, []int{nums1[i], nums2[j]})

		if j+1 < len(nums2) {
			item := Item{i, j + 1, nums1[i] + nums2[j+1]}
			heap.Push(&m, item)
		}
		k--
	}
	return res
}
