class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {

        let slow = nums[0];
        let fast = nums[nums[0]];

        while (fast !== slow) {
            slow = nums[slow];
            fast = nums[nums[fast]]
        }

        let firstSlow = nums[0];
        let secondSlow = nums[slow];

        while (firstSlow !== secondSlow) {
            firstSlow = nums[firstSlow];
            secondSlow = nums[secondSlow];
        }

        return firstSlow;
    }
}
