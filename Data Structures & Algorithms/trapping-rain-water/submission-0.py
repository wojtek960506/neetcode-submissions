class Solution:
    def trap(self, heights: List[int]) -> int:
        # brute force solution O(n^2)

        totalAmount = 0

        for i in range(len(heights)):

            biggestLeft = 0
            biggestRight = 0

            for j in range(i):
                if heights[j] > biggestLeft:
                    biggestLeft = heights[j]

            for j in range(i + 1, len(heights)):
                if heights[j] > biggestRight:
                    biggestRight = heights[j]

            currVal = min(biggestLeft, biggestRight) - heights[i]
            if (currVal) > 0:
                totalAmount += currVal

        return totalAmount
 