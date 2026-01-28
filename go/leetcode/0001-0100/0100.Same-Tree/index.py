# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def isSameTree(p: TreeNode, q: TreeNode) -> bool:
    # Both trees are empty, they are the same
    if not p and not q:
        return True
    # One tree is empty, the other is not
    elif not p or not q:
        return False
    # Both trees are non-empty, compare the values and recursively check subtrees
    elif p.val == q.val:
        return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)
    # Values do not match
    else:
        return False
