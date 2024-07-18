package structures

func RemoveDuplicate(nums []int) []int {
	exist := make(map[int]bool)
	list := []int{}
	for _, v := range nums {
			if _, ok := exist[v]; !ok {
					exist[v] = true
					list = append(list, v)
			}
	}
	return list
}

