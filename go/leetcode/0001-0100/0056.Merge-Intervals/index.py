def merge(intervals):
    # Sort intervals by start time
    intervals.sort(key=lambda x: x[0])

    prev = intervals[0]
    res = []

    for i in range(1, len(intervals)):
        cur = intervals[i]

        if cur[0] > prev[1]:
            # No overlap
            res.append(prev)
            prev = cur
        else:
            # Overlap, merge intervals
            prev[1] = max(prev[1], cur[1])

    # Append the last interval
    res.append(prev)
    return res
