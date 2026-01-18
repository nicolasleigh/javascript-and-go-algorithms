"""
Key Points:
Uses a stack to track expected closing brackets.
When an opening bracket is found, its corresponding closing bracket is pushed onto the stack.
When a closing bracket appears, it must match the top of the stack.
The extra not stack check prevents popping from an empty stack.
Time complexity: O(n)
Space complexity: O(n)
"""

# 20. Valid Parentheses
def isValid(s: str) -> bool:
    stack = []

    for ch in s:
        if ch == '(':
            stack.append(')')
        elif ch == '[':
            stack.append(']')
        elif ch == '{':
            stack.append('}')
        else:
            # The extra not stack check prevents popping from an empty stack.
            if not stack or stack.pop() != ch:
                return False

    return len(stack) == 0
