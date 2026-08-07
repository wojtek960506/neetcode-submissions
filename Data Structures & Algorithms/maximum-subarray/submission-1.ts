class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {

        let maxVal = nums[0];
        let curVal = nums[0];

        for (let i = 1; i < nums.length; i++) {
            curVal = Math.max(nums[i], nums[i] + curVal);
            maxVal = Math.max(curVal, maxVal);
        }

        return maxVal;
    }
}
