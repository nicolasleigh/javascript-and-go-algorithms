def insert(intervals, newInterval):
    # Step 1: Add the new interval
    intervals.append(newInterval)

    # Step 2: Sort intervals by start time
    intervals.sort(key=lambda x: x[0])

    # Step 3: Merge intervals
    res = []
    prev = intervals[0]

    for i in range(1, len(intervals)):
        cur = intervals[i]

        if cur[0] > prev[1]:
            # No overlap
            res.append(prev)
            prev = cur
        else:
            # Overlap, merge
            prev[1] = max(prev[1], cur[1])

    # Step 4: Add the last interval
    res.append(prev)

    return res
