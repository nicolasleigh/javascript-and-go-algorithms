def restoreIpAddresses(s: str):
    res = []
    comb = []

    def isValidIpSegment(seg: str) -> bool:
        # empty, out of range, or leading zero
        if not seg:
            return False
        if seg[0] == '0' and len(seg) > 1:
            return False
        num = int(seg)
        return 0 <= num <= 255

    def backtrack(start: int):
        # valid IP: exactly 4 segments and fully consumed string
        if len(comb) == 4 and start == len(s):
            res.append(".".join(comb))
            return

        # invalid state
        if len(comb) == 4 or start == len(s):
            return

        # try segments of length 1 to 3
        for end in range(start, min(len(s), start + 3)):
            seg = s[start:end + 1]
            if isValidIpSegment(seg):
                comb.append(seg)
                backtrack(end + 1)
                comb.pop()

    backtrack(0)
    return res
