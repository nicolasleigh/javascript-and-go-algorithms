def multiply(num1, num2):
    # If either number is "0", the result is "0"
    if num1 == "0" or num2 == "0":
        return "0"

    # Initialize the result array with zeros
    result = [0] * (len(num1) + len(num2))

    # Reverse iterate through num1 and num2
    for i in range(len(num1) - 1, -1, -1):
        for j in range(len(num2) - 1, -1, -1):
            # Multiply the digits
            mul = (ord(num1[i]) - ord('0')) * (ord(num2[j]) - ord('0'))
            p1 = i + j
            p2 = i + j + 1

            # Add the current multiplication result to the corresponding position
            sum_val = mul + result[p2]

            # Store the digit at the p2 position
            result[p2] = sum_val % 10
            # Add the carry to the p1 position
            result[p1] += sum_val // 10

    # Remove leading zeros
    while result[0] == 0:
        result.pop(0)

    # Convert the result array to a string and return
    return ''.join(map(str, result))
