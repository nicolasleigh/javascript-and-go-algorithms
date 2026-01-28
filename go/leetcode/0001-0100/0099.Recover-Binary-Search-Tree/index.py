# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def recoverTree(root: TreeNode):
    first = second = prev = None

    def inorder(node: TreeNode):
        nonlocal first, second, prev

        if not node:
            return

        # Traverse left subtree
        inorder(node.left)

        # Detect swapped nodes
        if prev and prev.val >= node.val:
            if not first:
                first = prev
            second = node
        prev = node

        # Traverse right subtree
        inorder(node.right)

    inorder(root)

    # Swap the values of the two nodes
    if first and second:
        first.val, second.val = second.val, first.val
