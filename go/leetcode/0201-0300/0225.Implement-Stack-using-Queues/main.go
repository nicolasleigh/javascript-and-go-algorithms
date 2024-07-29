package main

import "fmt"

// MyStack represents a stack implemented using two queues
type MyStack struct {
	que1 []int
	que2 []int
}

// Constructor initializes and returns a new instance of MyStack
func Constructor() MyStack {
	return MyStack{}
}

// Push pushes an element onto the stack
func (s *MyStack) Push(x int) {
	s.que2 = append(s.que2, x)

	for len(s.que1) > 0 {
		s.que2 = append(s.que2, s.que1[0])
		s.que1 = s.que1[1:]
	}

	// Swap que1 and que2
	s.que1, s.que2 = s.que2, s.que1
}

// Pop removes the element on top of the stack and returns it
func (s *MyStack) Pop() int {
	result := s.que1[0]
	s.que1 = s.que1[1:]
	return result
}

// Top gets the top element of the stack
func (s *MyStack) Top() int {
	return s.que1[0]
}

// Empty returns whether the stack is empty
func (s *MyStack) Empty() bool {
	return len(s.que1) == 0
}

func main() {
	stack := Constructor()
	stack.Push(1)
	stack.Push(2)
	stack.Push(3)
	stack.Push(4)
	fmt.Println(stack.Top())   // Output: 4
	fmt.Println(stack.Pop())   // Output: 4
	fmt.Println(stack.Empty()) // Output: false
}
