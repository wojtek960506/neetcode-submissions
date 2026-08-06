class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {

        if (m === 0 || n === 0) return 0;

        const arr: number[][] = new Array(m).fill([]);

        for (let i = 0; i < m; i++) {
            if (i === 0) arr[i] = new Array(n).fill(1);
            else {
                arr[i] = new Array(n).fill(0);
                arr[i][0] = 1;
            }
        }

        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
            }
        }

        return arr[m - 1][n - 1];
    }
}
