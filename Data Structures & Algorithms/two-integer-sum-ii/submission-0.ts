class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {

        // key is the number needed to get target
        // value is the index 
        const neededMap = new Map<number, number>();
        
        for (let i = 0; i < numbers.length; i++) {
            const currVal = numbers[i];
            
            const secondIndex = neededMap.get(currVal);
            if (secondIndex !== undefined) return [secondIndex + 1, i + 1];

            neededMap.set(target - currVal, i);
        }
        
        return [];
    }
}

