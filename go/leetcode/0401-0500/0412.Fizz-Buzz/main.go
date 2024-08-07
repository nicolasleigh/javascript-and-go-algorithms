package main

import "strconv"

func fizzBuzz(n int) []string {
	var res []string
	for v := range n + 1 {
		if v == 0 {
			continue
		}
		switch {
		case v%3 == 0 && v%5 == 0:
			res = append(res, "FizzBuzz")
		case v%3 == 0:
			res = append(res, "Fizz")
		case v%5 == 0:
			res = append(res, "Buzz")
		default:
			res = append(res, strconv.Itoa(v))
		}
	}
	return res
}
