"""
Explanation:

The generateParenthesis function initializes an empty list res to store the valid combinations of parentheses.

The backtrack function is defined inside generateParenthesis to perform the recursive generation of parentheses.

It accepts three arguments: left (remaining left parentheses), right (remaining right parentheses), and current_str (current string of parentheses).

The base case is when both left and right are zero, meaning we have a valid combination, and it is added to res.

The function recursively adds left or right parentheses as long as the conditions are met (i.e., left > 0 and right > 0 with left < right for valid sequences).
"""
# 22. Generate Parentheses
def generateParenthesis(n):
    res = []
    
    def backtrack(left, right, current_str):
        if left == 0 and right == 0:
            res.append(current_str)
            return
        
        if left > 0:
            backtrack(left - 1, right, current_str + "(")
        
        if right > 0 and left < right:
            backtrack(left, right - 1, current_str + ")")
    
    backtrack(n, n, "")
    return res
