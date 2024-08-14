package main

func canPlaceFlowers(flowerbed []int, n int) bool {
	size := len(flowerbed)
	for i := 0; i < size && n > 0; i += 2 {
		if flowerbed[i] == 0 {
			if i+1 == size || flowerbed[i+1] == 0 {
				n--
			} else {
				i++
			}
		}
	}
	return n == 0
}
