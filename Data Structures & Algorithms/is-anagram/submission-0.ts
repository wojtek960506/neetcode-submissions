class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // If lengths are different, they cannot be anagrams
    if (s.length !== t.length) {
        return false;
    }

    const charCount: { [key: string]: number } = {};

    // Count the frequency of each character in string s
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Subtract the frequency using string t
    for (const char of t) {
        if (!charCount[char]) {
            return false; // Character is missing or has a mismatched count
        }
        charCount[char]--;
    }

    return true;
    }
}
