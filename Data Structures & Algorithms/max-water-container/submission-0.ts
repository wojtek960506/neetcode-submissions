class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {

        let maxAmount = 0;
        let beginIndex = 0;
        let endIndex = heights.length - 1;

        while (beginIndex !== endIndex) {
            let beginVal = heights[beginIndex];
            let endVal = heights[endIndex];

            const currentAmount = Math.min(beginVal, endVal) * (endIndex - beginIndex);
            if (currentAmount > maxAmount) maxAmount = currentAmount;

            if (beginVal > endVal) endIndex--;
            else beginIndex++;
        } 

        return maxAmount;
    }
}
