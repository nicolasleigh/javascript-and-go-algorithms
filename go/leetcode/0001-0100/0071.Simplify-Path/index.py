def simplifyPath(path: str) -> str:
    parts = path.split("/")
    stack = []

    for cur in parts:
        if cur == "..":
            if stack:
                stack.pop()
        elif cur != "." and cur:
            # skip empty strings and "."
            stack.append(cur)

    return "/" + "/".join(stack)
