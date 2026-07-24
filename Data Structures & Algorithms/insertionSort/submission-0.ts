/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     key: number;
//     value: string;
    
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key: number, value: string) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs: Pair[]): Pair[][] {

        const steps: Pair[][] = [];

        for (let i = 0; i < pairs.length ; i++) {

            

            for (let j = i; j > 0; j--) {

                const tmpMain = pairs[j];
                const tmpSecond = pairs[j - 1];


                if (tmpMain.key < tmpSecond.key) {
                    
                    
                    pairs[j] = tmpSecond;
                    pairs[j - 1] = tmpMain;
                } else {
                    j = 0;
                }
            }

            steps.push(pairs.map(a => a));
        }

        return steps;
    }
}
