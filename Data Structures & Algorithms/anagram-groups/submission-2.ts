class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const getFrequencyKey = (str: string): string => {
            const arr = new Array(26).fill(0);
            for (let i = 0; i < str.length; i++) {
                arr[str[i].charCodeAt(0) - 97] += 1;
            }
            return arr.join(".");
        }

        const map = new Map<string, string[]>();

        for (let i = 0; i < strs.length; i++) {
            const tmp = strs[i];
            const key = getFrequencyKey(tmp);

            console.log(key)

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
