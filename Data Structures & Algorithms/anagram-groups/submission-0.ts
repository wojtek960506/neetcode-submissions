class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        
        const anagrams: string[][] = [];

        const checkAnagrams = (first: string, second: string) => {
            const firstSorted = first.split("").sort().join("");
            const secondSorted = second.split("").sort().join("");
            return firstSorted === secondSorted;
        }
        
        for (let i = 0; i < strs.length; i++) {
            let j = 0;
            const tmp = strs[i];

            for (; j < anagrams.length; j++) {
                
                if (checkAnagrams(tmp, anagrams[j][0])) {
                    anagrams[j].push(tmp);
                    j = anagrams.length + 2;
                }
            }

            if (j === anagrams.length) anagrams.push([tmp]);
        }

        return anagrams;
    }
}
