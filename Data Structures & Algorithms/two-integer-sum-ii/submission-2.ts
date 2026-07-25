class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    // solution with two pointers Time - O(n) Space - O(1)
    twoSum(numbers: number[], target: number): number[] {
        
        let firstPointer = 0;
        let secondPointer = numbers.length - 1;

        while (firstPointer !== secondPointer) {
            const sum = numbers[firstPointer] + numbers[secondPointer];

            if (sum === target) {
                return [firstPointer + 1, secondPointer + 1]
            } else if (sum > target) {
                secondPointer -= 1;
            } else {
                firstPointer += 1;
            }
        }

        return [];
    }
}

