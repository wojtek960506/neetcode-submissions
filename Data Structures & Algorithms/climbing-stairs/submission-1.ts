class Solution {
    /**
     * @param {number} n
     * @return {number}
     */

    climbStairs(n: number): number {

        if (n === 1) return 1;
        if (n === 2) return 2;

        const map = new Map<number, number>();
        map.set(1, 1);
        map.set(2, 2);

        for (let i = 3; i <= n; i++) {
            map.set(i, map.get(i - 1) + map.get(i - 2));
        }

        return map.get(n);
    }
}
