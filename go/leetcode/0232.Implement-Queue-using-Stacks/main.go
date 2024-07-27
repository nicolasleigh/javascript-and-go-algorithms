package main

import "fmt"

// MyQueue represents a queue implemented using two stacks
type MyQueue struct {
	s1, s2 []int
	front  int
}

func Constructor() MyQueue {
	return MyQueue{}
}

// When calling push method, push value into s1
func (q *MyQueue) Push(x int) {
	if len(q.s1) == 0 {
		q.front = x
	}
	q.s1 = append(q.s1, x)
}

// When calling pop method, pop all values from s1 and push into s2
func (q *MyQueue) Pop() int {
	if len(q.s2) == 0 {
		for len(q.s1) != 0 {
			v := q.s1[len(q.s1)-1]
			q.s1 = q.s1[:len(q.s1)-1]
			q.s2 = append(q.s2, v)
		}
	}
	res := q.s2[len(q.s2)-1]
	q.s2 = q.s2[:len(q.s2)-1]
	return res
}

func (q *MyQueue) Peek() int {
	if len(q.s2) == 0 {
		return q.front
	}
	return q.s2[len(q.s2)-1]
}

// Empty returns whether the queue is empty
func (q *MyQueue) Empty() bool {
	return len(q.s1) == 0 && len(q.s2) == 0
}

func main() {
	queue := Constructor()
	queue.Push(1)
	queue.Push(2)
	queue.Push(3)
	queue.Push(4)
	fmt.Println(queue.Peek())  // Output: 1
	fmt.Println(queue.Pop())   // Output: 1
	fmt.Println(queue.Empty()) // Output: false
}
