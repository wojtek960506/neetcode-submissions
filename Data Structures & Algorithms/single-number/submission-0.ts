class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums: number[]): number {
        
        let res = 0;

        for (let num of nums) {
            res = res ^ num;
        }

        return res;
    }
}
