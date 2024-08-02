package main

func reverseVowels(s string) string {
	b := []byte(s)
	l, r := 0, len(b)-1
	for l < r {
		if !isVowel(b[l]) {
			l++
			continue
		}
		if !isVowel(b[r]) {
			r--
			continue
		}
		b[l], b[r] = b[r], b[l]
		l++
		r--
	}
	return string(b)
}

func isVowel(s byte) bool {
	return s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u' ||
		s == 'A' || s == 'E' || s == 'I' || s == 'O' || s == 'U'
}
