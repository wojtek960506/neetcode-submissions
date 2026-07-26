class Solution:
    def maxArea(self, heights: List[int]) -> int:

        maxAmount = 0
        beginIndex = 0
        endIndex = len(heights) - 1

        beginVal = heights[beginIndex]
        endVal = heights[endIndex]

        while (beginIndex != endIndex):
            
            currAmount = min(beginVal, endVal) * (endIndex - beginIndex)
            if (currAmount > maxAmount):
                maxAmount = currAmount

            if (beginVal > endVal):
                endIndex -= 1
                endVal = heights[endIndex]
            else:
                beginIndex += 1
                beginVal = heights[beginIndex]
        
        return maxAmount


        