# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def generateTrees(n):
    if n == 0:
        return []
    return buildTree(1, n)


def buildTree(start, end):
    trees = []

    # Base case: empty subtree
    if start > end:
        return [None]

    # Try every number as root
    for i in range(start, end + 1):
        left_subtrees = buildTree(start, i - 1)
        right_subtrees = buildTree(i + 1, end)

        # Combine left and right subtrees
        for left in left_subtrees:
            for right in right_subtrees:
                root = TreeNode(i)
                root.left = left
                root.right = right
                trees.append(root)

    return trees
