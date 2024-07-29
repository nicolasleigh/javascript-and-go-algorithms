package main

func computeArea(ax1 int, ay1 int, ax2 int, ay2 int, bx1 int, by1 int, bx2 int, by2 int) int {
	x1, y1, x2, y2 := max(ax1, bx1), max(ay1, by1), min(ax2, bx2), min(ay2, by2)
	return area(ax1, ay1, ax2, ay2) + area(bx1, by1, bx2, by2) - area(x1, y1, x2, y2)
}

func area(x1, y1, x2, y2 int) int {
	width, heigh := x2-x1, y2-y1
	if width <= 0 || heigh <= 0 {
		return 0
	}
	return width * heigh
}