class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {

        let outerStart = 0;
        let outerEnd = matrix.length - 1;
        let targetArrayIndex = -1;
        const cols = matrix[0].length;

        while (outerStart <= outerEnd) {
            const outerMid = Math.floor((outerStart + outerEnd) / 2);
            
            const firstVal = matrix[outerMid][0];
            const lastVal = matrix[outerMid][cols - 1];

            if (firstVal <= target && lastVal >= target) {
                targetArrayIndex = outerMid;
                break;
            } else if (firstVal > target) {
                outerEnd = outerMid - 1;
            } else {
                outerStart = outerMid + 1;
            }
        }

        if (targetArrayIndex == -1) return false;

        const targetArray = matrix[targetArrayIndex];

        let innerStart = 0;
        let innerEnd = targetArray.length - 1;
        
        while (innerStart <= innerEnd) {

            const innerMid = Math.floor((innerStart + innerEnd) / 2);
            const midVal = targetArray[innerMid];

            if (midVal === target) {
                return true;
            } else if (midVal > target) {
                innerEnd = innerMid - 1;
            } else {
                innerStart = innerMid + 1;
            }
        }

        return false;    
    }
}