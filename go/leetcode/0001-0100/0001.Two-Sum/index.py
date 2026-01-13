def twoSum(nums, target):
    map = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in map:
            return [map[diff], i]
        map[num] = i