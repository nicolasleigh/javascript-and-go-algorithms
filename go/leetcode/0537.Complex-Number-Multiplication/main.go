package main

import (
	"strconv"
	"strings"
)

func complexNumberMultiply(num1 string, num2 string) string {
	realA, imagA := parse(num1)
	realB, imagB := parse(num2)
	real := realA*realB - imagA*imagB
	imag := realA*imagB + realB*imagA
	return strconv.Itoa(real) + "+" + strconv.Itoa(imag) + "i"
}

func parse(s string) (int, int) {
	ss := strings.Split(s, "+")
	real, _ := strconv.Atoi(ss[0])
	tmp := ss[1]
	imag, _ := strconv.Atoi(tmp[:len(tmp)-1])
	return real, imag
}
