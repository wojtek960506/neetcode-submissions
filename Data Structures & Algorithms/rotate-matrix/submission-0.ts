class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix: number[][]): void {

        // first revert rows of the matrix
        const n = matrix.length;
        if (n === 0 || n === 1) return;

        const m = matrix[0].length;
        if (m !== n) return;



        for (let i = 0; i < Math.floor(n/2); i++) {
            const tmp = matrix[i];
            matrix[i] = matrix[n - 1 - i];
            matrix[n - 1 - i] = tmp;
        }

        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                const tmp = matrix[i][j];
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = tmp;
            }
        }
    }
}
