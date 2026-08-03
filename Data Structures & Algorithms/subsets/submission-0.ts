class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */



    subsets(nums: number[]): number[][] {

        const subset = [];

        const result = [];

        const dfs = (
            i: number,
            nums: number[],
            subset: number[],
            result: number[][],    
        ) => {
            
            if (i >= nums.length) {
                result.push([...subset]);
                return;
            }

            subset.push(nums[i])
            dfs(i + 1, nums, subset, result);
            subset.pop()
            dfs(i + 1, nums, subset, result);
        }
        
        dfs(0, nums, subset, result)
        return result
    }
}
