class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:

        left = 0
        right = 0
        max_len = 0
        current_result = set()

        while right < len(s):

            if s[right] in current_result:
                current_result.remove(s[left])
                left += 1

            else:
                current_result.add(s[right])
                right += 1

            max_len = max(len(current_result), max_len)

        return max_len        