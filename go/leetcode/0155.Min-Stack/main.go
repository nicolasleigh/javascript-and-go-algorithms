package main

import (
	"fmt"
)

type MinStack struct {
	s1 []int
	s2 []int // min stack
}

func Constructor() MinStack {
	return MinStack{}
}

func (this *MinStack) Push(x int) {
	this.s1 = append(this.s1, x)
	if len(this.s2) == 0 || x <= this.GetMin() {
		this.s2 = append(this.s2, x)
	}
}

func (this *MinStack) Pop() {
	if this.Top() == this.GetMin() {
		this.s2 = this.s2[:len(this.s2)-1]
	}
	this.s1 = this.s1[:len(this.s1)-1]
}

func (this *MinStack) Top() int {
	return this.s1[len(this.s1)-1]
}

func (this *MinStack) GetMin() int {
	return this.s2[len(this.s2)-1]
}

func main() {
	minStack := Constructor()
	minStack.Push(-2)
	minStack.Push(0)
	minStack.Push(-3)
	fmt.Println(minStack.GetMin()) // Returns -3
	minStack.Pop()
	fmt.Println(minStack.Top())    // Returns 0
	fmt.Println(minStack.GetMin()) // Returns -2
}
