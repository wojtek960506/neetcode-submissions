class Solution:
    def trap(self, heights: List[int]) -> int:
        # optimal solution O(n) with additional usage of memory

        lenH = len(heights)
        
        biggestLeft = 0
        biggestRight = 0
        biggestLeftArr = [0] * lenH
        biggestRightArr = [0] * lenH
        

        for i in range(lenH):
            biggestLeftArr[i] = biggestLeft
            hFromLeft = heights[i]
            if hFromLeft > biggestLeft:
                biggestLeft = hFromLeft

            biggestRightArr[lenH - 1 - i] = biggestRight
            hFromRight = heights[lenH - 1 - i]
            if hFromRight > biggestRight:
                biggestRight = hFromRight

        totalAmount = 0

        for i in range(lenH):
            currVal = min(biggestLeftArr[i], biggestRightArr[i]) - heights[i]
            if currVal > 0:
                totalAmount += currVal

        return totalAmount
