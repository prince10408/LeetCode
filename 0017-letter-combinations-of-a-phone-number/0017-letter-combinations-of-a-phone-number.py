class Solution(object):
    def letterCombinations(self, digits):
        result = []
        if not digits:
            return result
        mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
        combination = [""] * len(digits)
        self.backtrack(result, mapping, combination, digits, 0)
        return result

    def backtrack(self, result, mapping, combination, digits, index):
        if index == len(digits):
            result.append("".join(combination))
        else:
            letters = mapping[int(digits[index])]
            for letter in letters:
                combination[index] = letter
                self.backtrack(result, mapping, combination, digits, index + 1)
        