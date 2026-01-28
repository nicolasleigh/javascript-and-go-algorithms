def searchMatrix(matrix, target):
    if not matrix or not matrix[0]:
        return False

    rows, cols = len(matrix), len(matrix[0])
    low, high = 0, rows * cols - 1

    while low <= high:
        mid = low + (high - low) // 2
        row = mid // cols
        col = mid % cols
        val = matrix[row][col]

        if val == target:
            return True
        elif val < target:
            low = mid + 1
        else:
            high = mid - 1

    return False

# solution 2
def searchMatrix(matrix, target):
    if not matrix or not matrix[0]:
        return False

    flat = []
    for row in matrix:
        flat.extend(row)

    low, high = 0, len(flat) - 1
    while low <= high:
        mid = low + (high - low) // 2
        if flat[mid] == target:
            return True
        elif flat[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return False
