def rotate(matrix):
    length = len(matrix)

    # Diagonal flip (transpose the matrix)
    for i in range(length):
        for j in range(i + 1, length):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

    # Vertical axis flip (reverse each row)
    for i in range(length):
        matrix[i].reverse()
