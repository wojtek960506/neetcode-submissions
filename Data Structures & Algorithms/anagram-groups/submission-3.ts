class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const getFrequencyKey = (str: string): string => {
            const arr = new Array(26).fill(0);
            for (let i = 0; i < str.length; i++) {
                arr[str.charCodeAt(i) - 97] += 1;
            }
            return arr.join(".");
        }

        const map = new Map<string, string[]>();

        for (let tmp of strs) {
            const key = getFrequencyKey(tmp);

            const arr = map.get(key)
            if (arr) {
                arr.push(tmp)    
            } else {
                map.set(key, [tmp]);
            }
        }

        return Array.from(map.values());
    }
}
