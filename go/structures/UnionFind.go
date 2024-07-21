package structures

type UnionFind struct {
	parent []int
	size   []int
	count  int
}

// func NewUnionFind(numOfElements int) *UnionFind {
// 	// makeSet
// 	parent := make([]int, numOfElements)
// 	size := make([]int, numOfElements)
// 	for i := 0; i < numOfElements; i++ {
// 		parent[i] = i
// 		size[i] = 1
// 	}
// 	return &UnionFind{
// 		parent: parent,
// 		size:   size,
// 		count:  numOfElements,
// 	}
// }

func (uf *UnionFind) Init(numOfElements int) {
	// makeSet
	parent := make([]int, numOfElements)
	size := make([]int, numOfElements)
	for i := 0; i < numOfElements; i++ {
		parent[i] = i
		size[i] = 1
	}
	uf.parent = parent
	uf.size = size
	uf.count = numOfElements
}

// Time: O(logn) | Space: O(1)
func (uf *UnionFind) Find(node int) int {
	for node != uf.parent[node] {
		// path compression
		uf.parent[node] = uf.parent[uf.parent[node]]
		node = uf.parent[node]
	}
	return node
}

// Time: O(1) | Space: O(1)
func (uf *UnionFind) Union(node1, node2 int) {
	root1 := uf.Find(node1)
	root2 := uf.Find(node2)

	// already in the same set
	if root1 == root2 {
		return
	}

	if uf.size[root1] > uf.size[root2] {
		uf.parent[root2] = root1
		uf.size[root1] += 1
	} else {
		uf.parent[root1] = root2
		uf.size[root2] += 1
	}

	uf.count -= 1
}