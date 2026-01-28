"""
Explanation:

Edge Case: If the nums array has only one element (len(nums) == 1), we return 0 because no jumps are needed.

Variables:

steps: Keeps track of the number of jumps (or steps).

canReach: Represents the farthest index we can reach so far at any given point in the loop.

needChoose: This is the position up to which we need to decide where to jump next.

Main Loop:

We loop through each index i in the nums array.

canReach = max(canReach, i + nums[i]): We calculate the farthest position we can reach from the current position i. We take the maximum of the current canReach and the position i + nums[i] (the furthest index reachable from i).

Checking if we can reach the end: If canReach is greater than or equal to the last index (len(nums) - 1), we can reach the end, so we return the number of steps taken so far, plus one more step to reach the end.

When it's time to choose the next jump: If i == needChoose, it means that we've reached the farthest index that we could from the previous jump, and now we need to make a decision about the next jump. We update needChoose to canReach and increase the number of steps by 1.

Return:

After iterating through the array, we return the total number of steps required.
"""

def jump(nums):
    if len(nums) == 1:
        return 0

    steps = 0
    canReach = 0
    needChoose = 0

    for i in range(len(nums)):
        canReach = max(canReach, i + nums[i])

        if canReach >= len(nums) - 1:
            return steps + 1

        if i == needChoose:
            needChoose = canReach
            steps += 1

    return steps
