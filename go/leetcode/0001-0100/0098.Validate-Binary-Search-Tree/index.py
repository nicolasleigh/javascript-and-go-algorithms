# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def isValidBST(root: TreeNode) -> bool:
    temp_arr = []

    def inorder(root: TreeNode):
        if root:
            inorder(root.left)
            temp_arr.append(root.val)
            inorder(root.right)

    inorder(root)

    for i in range(len(temp_arr) - 1):
        if temp_arr[i] >= temp_arr[i + 1]:
            return False

    return True
