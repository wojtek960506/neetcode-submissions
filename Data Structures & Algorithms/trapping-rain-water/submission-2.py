class Solution:
    def trap(self, heights: List[int]) -> int:
        
        
        # optimal solution with 2 pointers
        left, right = 0, len(heights) - 1
        max_left, max_right = 0, 0
        total_amount = 0

        while left < right:
            if heights[left] > heights[right]:
                # now we care about right side
                if heights[right] >= max_right:
                    max_right = heights[right]
                else:
                    total_amount += max_right - heights[right]

                right -= 1
            
            else:
                # now we care about left side
                if heights[left] >= max_left:
                    max_left = heights[left]
                else:
                    total_amount += max_left - heights[left]

                left += 1

            
        return total_amount
