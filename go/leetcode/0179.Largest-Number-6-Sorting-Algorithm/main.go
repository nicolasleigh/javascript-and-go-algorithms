package main

import (
	"fmt"
	"sort"
	"strconv"
	"strings"
)

// Helper function to compare two numbers
func compare(n1, n2 int) bool {
	return strconv.Itoa(n1)+strconv.Itoa(n2) > strconv.Itoa(n2)+strconv.Itoa(n1)
}

// Built-in function sorting
func largestNumber1(nums []int) string {
	sort.Slice(nums, func(i, j int) bool {
		return compare(nums[i], nums[j])
	})

	// See the stringify function bellow
	if nums[0] == 0 {
		return "0"
	}
	var sb strings.Builder
	for _, num := range nums {
		sb.WriteString(strconv.Itoa(num))
	}
	return sb.String()
}

// Bubble sort
func largestNumber2(nums []int) string {
	for i := len(nums); i > 0; i-- {
		for j := 0; j < i-1; j++ {
			if !compare(nums[j], nums[j+1]) {
				nums[j], nums[j+1] = nums[j+1], nums[j]
			}
		}
	}
	return stringify(nums)
}

// Selection sort
func largestNumber3(nums []int) string {
	for i := len(nums); i > 0; i-- {
		tmp := 0
		for j := 0; j < i; j++ {
			if !compare(nums[j], nums[tmp]) {
				tmp = j
			}
		}
		nums[tmp], nums[i-1] = nums[i-1], nums[tmp]
	}
	return stringify(nums)
}

// Insertion sort
func largestNumber4(nums []int) string {
	for i := 0; i < len(nums); i++ {
		pos, cur := i, nums[i]
		for pos > 0 && !compare(nums[pos-1], cur) {
			nums[pos] = nums[pos-1]
			pos--
		}
		nums[pos] = cur
	}
	return stringify(nums)
}

// Merge sort
func largestNumber5(nums []int) string {
	nums = mergeSort(nums)
	return stringify(nums)
}

func mergeSort(nums []int) []int {
	if len(nums) <= 1 {
		return nums
	}
	mid := len(nums) / 2
	left := mergeSort(nums[:mid])
	right := mergeSort(nums[mid:])
	return merge(left, right)
}

func merge(left, right []int) []int {
	res := []int{}
	i, j := 0, 0
	for i < len(left) && j < len(right) {
		if !compare(left[i], right[j]) {
			res = append(res, right[j])
			j++
		} else {
			res = append(res, left[i])
			i++
		}
	}
	res = append(res, left[i:]...)
	res = append(res, right[j:]...)
	return res
}

// Quick sort
func largestNumber(nums []int) string {
	quickSort(nums, 0, len(nums)-1)
	return stringify(nums)
}

func quickSort(nums []int, left, right int) {
	if left >= right {
		return
	}
	pivot := partition(nums, left, right)
	quickSort(nums, left, pivot-1)
	quickSort(nums, pivot+1, right)
}

func partition(nums []int, left, right int) int {
	pivot := nums[right]
	low := left
	for i := left; i < right; i++ {
		if compare(nums[i], pivot) {
			nums[i], nums[low] = nums[low], nums[i]
			low++
		}
	}
	nums[low], nums[right] = nums[right], nums[low]
	return low
}

// Helper function to convert a slice of ints to a string
func stringify(nums []int) string {
	if nums[0] == 0 {
		return "0"
	}
	var sb strings.Builder
	for _, num := range nums {
		sb.WriteString(strconv.Itoa(num))
	}
	return sb.String()
}

func main() {
	nums := []int{3, 30, 34, 5, 9}
	// nums := []int{0,0,0,0,0,0}
	fmt.Println(largestNumber1(nums)) // Example using built-in function sorting
	fmt.Println(largestNumber2(nums)) // Example using bubble sort
	fmt.Println(largestNumber3(nums)) // Example using selection sort
	fmt.Println(largestNumber4(nums)) // Example using insertion sort
	fmt.Println(largestNumber5(nums)) // Example using merge sort
	fmt.Println(largestNumber(nums))  // Example using quick sort
}
