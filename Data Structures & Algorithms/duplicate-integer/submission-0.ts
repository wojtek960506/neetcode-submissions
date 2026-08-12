class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

        const set = new Set();
        for (let num of nums) {
            set.add(num);
        }

        return nums.length !== set.size;
    }
}
