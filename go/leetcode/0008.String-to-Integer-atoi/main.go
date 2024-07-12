package main

import "fmt"

func myAtoi(s string) int {
	maxInt, signAllowed, whitespaceAllowed, sign, digits := int64(1<<31), true, true, 1, []int{}
	for _, c := range s {
		if c == ' ' && whitespaceAllowed {
			continue
		}
		if signAllowed {
			if c == '+' {
				signAllowed = false
				whitespaceAllowed = false
				continue
			} else if c == '-' {
				sign = -1
				signAllowed = false
				whitespaceAllowed = false
				continue
			}
		}
		if c < '0' || c > '9' {
			break
		}
		whitespaceAllowed, signAllowed = false, false
		digits = append(digits, int(c-48))
	}
	var place, num int64
	place, num = 1, 0
	lastLeading0Index := -1
	for i, d := range digits {
		if d == 0 {
			lastLeading0Index = i
		} else {
			break
		}
	}
	if lastLeading0Index > -1 {
		digits = digits[lastLeading0Index+1:]
	}
	var rtnMax int64
	if sign > 0 {
		rtnMax = maxInt - 1
	} else {
		rtnMax = maxInt
	}
	digitsCount := len(digits)
	for i := digitsCount - 1; i >= 0; i-- {
		num += int64(digits[i]) * place
		place *= 10
		if digitsCount > 10 || num > rtnMax {
			return int(int64(sign) * rtnMax)
		}
	}
	num *= int64(sign)
	return int(num)
}

func main(){
	// int32 -- (-2,147,483,648 to +2,147,483,647) -- (-2^31 to 2^31-1)
	// int64 -- (-9,223,372,036,854,775,808 to +9,223,372,036,854,775,807) -- (-2^63 to 2^63-1)
 s :=	"10000000000522545459"
	fmt.Println(myAtoi(s))
}