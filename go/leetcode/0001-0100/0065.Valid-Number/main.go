package main

func isNumber(s string) bool {
	numFlag, dotFlag, eFlag := false, false, false
	for i := 0; i < len(s); i++ {
		if '0' <= s[i] && s[i] <= '9' {
			numFlag = true
		} else if s[i] == '.' && !dotFlag && !eFlag {
			// If '.' appear after 'e' or 'E', then it can't be a number
			dotFlag = true
		} else if (s[i] == 'e' || s[i] == 'E') && !eFlag && numFlag {
			eFlag = true
			numFlag = false // Recheck integer after 'e' or 'E', because 2e isn't a number
		} else if (s[i] == '+' || s[i] == '-') && (i == 0 || s[i-1] == 'e' || s[i-1] == 'E') {
			// '+' or '-' can appear right after the 'e' or 'E'
			continue
		} else {
			// If it doesn't fulfil the above condition check, then it can't be a number
			return false
		}
	}

	return numFlag
}
