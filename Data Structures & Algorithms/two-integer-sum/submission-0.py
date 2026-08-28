class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
         m = dict()

         for i in range(0,len(nums)):
            if nums[i] in m:
                return [m.get(nums[i]), i]

            m[target - nums[i]] = i



