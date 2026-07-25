class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */

    // // solution with hash map Time - O(n), Space - O(n)
    // twoSum(numbers: number[], target: number): number[] {

    //     // key is the number needed to get target
    //     // value is the index 
    //     const neededMap = new Map<number, number>();
        
    //     for (let i = 0; i < numbers.length; i++) {
    //         const currVal = numbers[i];

    //         const secondIndex = neededMap.get(currVal);
    //         if (secondIndex !== undefined) return [secondIndex + 1, i + 1];

    //         neededMap.set(target - currVal, i);
    //     }
        
    //     return [];
    // }

    // solution with two pointers Time - O(n) Space - O(n)
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

