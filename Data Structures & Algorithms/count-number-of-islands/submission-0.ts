class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        if (!grid || grid.length === 0) return 0;

        let islandsNum = 0;

        let cols = grid.length;
        let rows = grid[0].length;

        const directions = [
            [0, 1],
            [0, -1],
            [-1, 0],
            [1, 0],
        ]

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {

                if (grid[i][j] === '1') {
                    islandsNum += 1;
                    
                    const stack = [[i,j]];

                    while(stack.length > 0) {        
                        const [tmpI, tmpJ] = stack.pop()

                        if (
                            tmpI >= 0 && tmpI < cols &&
                            tmpJ >= 0 && tmpJ < rows &&
                            grid[tmpI][tmpJ] === '1'
                        ) {
                            grid[tmpI][tmpJ] = '0'
                            for (const [d1, d2] of directions) {
                                stack.push([tmpI + d1, tmpJ + d2])
                            }
                        }
                    }
                }
            }
        }

        return islandsNum;


    }
}
