package main

// Solution is based on hashmap and double linked list. ListNode represent each node of such list.
type listNode struct {
	Prev *listNode
	Next *listNode
	Val  int
	Key  int
}

/*
LRUCache contains:
> m - map, which stores key to nodes of list;
> head - fake head of linked list;
> tail - fake tail of linked list;
> cap - capacity;
> len - actual amount of stored elements.
*/
type LRUCache struct {
	m    map[int]*listNode
	head *listNode
	tail *listNode
	cap  int
	len  int
}

func Constructor(capacity int) LRUCache {
	fakeTail := &listNode{Val: -1, Prev: nil, Next: nil}
	fakeHead := &listNode{Val: -1, Prev: nil, Next: fakeTail}
	fakeTail.Prev = fakeHead
	return LRUCache{
		cap:  capacity,
		len:  0,
		m:    make(map[int]*listNode, capacity),
		head: fakeHead,
		tail: fakeTail,
	}
}

// First node represents the recently used node
func (c *LRUCache) Get(key int) int {
	v, ok := c.m[key]
	if !ok {
		return -1
	}

	if c.head.Next == v {
		return v.Val
	}

	// When getting a node, if it's not the first node, swap it with the first node.
	c.swapFirst(v)

	return v.Val
}

// Swap two doubly linked list node
func (c *LRUCache) swapFirst(v *listNode) {
	first := c.head.Next
	next := v.Next
	prev := v.Prev

	c.head.Next = v
	v.Prev = c.head
	prev.Next = next
	next.Prev = prev
	first.Prev = v
	v.Next = first
}

func (c *LRUCache) Put(key int, value int) {
	// If putting a key-value pair that already exists in the hashmap, we need to change the key and value of the first node.
	if c.Get(key) != -1 {
		c.head.Next.Val = value
		c.head.Next.Key = key
		return
	}

	cur := &listNode{}
	// Delete the last node
	if c.len >= c.cap {
		c.len--
		cur = c.tail.Prev
		cur.Prev.Next = c.tail
		c.tail.Prev = cur.Prev
		delete(c.m, cur.Key)
	}

	c.len++
	// Insert the new node, and make the new node the first node.
	next := c.head.Next
	cur.Val = value
	cur.Key = key
	cur.Next = next
	cur.Prev = c.head
	c.head.Next = cur
	next.Prev = cur
	c.m[key] = cur
}
