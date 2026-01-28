def lengthOfLastWord(s):
    s = s.strip()  # Remove leading and trailing spaces
    words = s.split(" ")  # Split by space
    lastWord = words[-1]  # Get the last word
    return len(lastWord)  # Return the length of the last word
