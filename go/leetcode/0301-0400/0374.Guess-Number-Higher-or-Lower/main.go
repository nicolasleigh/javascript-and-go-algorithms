package main

import "sort"

/**
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * func guess(num int) int;
 */

func guess(num int) int

func guessNumber1(n int) int {
	left, right, mid := 1, n, 0
	for left <= right {
		mid = left + (right-left)/2
		if guess(mid) == 1 {
			left = mid + 1
		} else if guess(mid) == -1 {
			right = mid - 1
		} else {
			break
		}
	}
	return mid
}

func guessNumber(n int) int {
	return sort.Search(n, func(x int) bool { return guess(x) <= 0 })
}
