# 67. Add Binary
def addBinary(a: str, b: str) -> str:
    i = len(a) - 1
    j = len(b) - 1
    carry = 0
    result = []

    while i >= 0 or j >= 0 or carry > 0:
        bitA = int(a[i]) if i >= 0 else 0
        bitB = int(b[j]) if j >= 0 else 0

        total = bitA + bitB + carry
        result.append(str(total % 2))
        carry = total // 2

        i -= 1
        j -= 1

    # Reverse because we built the result from LSB to MSB
    return "".join(reversed(result))
