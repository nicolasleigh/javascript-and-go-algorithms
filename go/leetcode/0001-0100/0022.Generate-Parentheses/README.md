# [22. Generate Parentheses (Medium)](https://leetcode.com/problems/generate-parentheses/)

<p>
Given <i>n</i> pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
</p>

<p>
For example, given <i>n</i> = 3, a solution set is:
</p>
<pre>[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
</pre>

**Companies**:  
[Amazon](https://leetcode.com/company/amazon), [Microsoft](https://leetcode.com/company/microsoft), [Google](https://leetcode.com/company/google), [Uber](https://leetcode.com/company/uber), [Facebook](https://leetcode.com/company/facebook), [Adobe](https://leetcode.com/company/adobe), [Apple](https://leetcode.com/company/apple), [Yandex](https://leetcode.com/company/yandex)

**Related Topics**:  
[String](https://leetcode.com/tag/string/), [Backtracking](https://leetcode.com/tag/backtracking/)

---

```
Initial call: backtrack(2, 2, "")
|
├── "(" → backtrack(1, 2, "(")
│   |
│   ├── "(" → backtrack(0, 2, "((")
│   │   |
│   │   └── ")" → backtrack(0, 1, "(()")
│   │       |
│   │       └── ")" → backtrack(0, 0, "(())") ✅
│   |
│   └── ")" → backtrack(1, 1, "()")
│       |
│       └── ")" → backtrack(1, 0, "())") ❌ (invalid, skipped)
│       └── "(" ❌ (not allowed, `left > right`)
|
└── ")" ❌ (invalid at root, left must be placed first)
```
