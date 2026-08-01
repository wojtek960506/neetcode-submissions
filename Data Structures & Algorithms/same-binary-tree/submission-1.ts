/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        if (p === null && q === null) return true;

        const queue = [p, q];
        let head = 0;

        while (head < queue.length) {
            const currP = queue[head++];
            const currQ = queue[head++];

            // both values are null so it is fine
            if (!currP && !currQ) continue;

            // if only one of them is null or their values are different then wrong
            if (!currP || !currQ || currP.val !== currQ.val) return false;

            queue.push(currP.left);
            queue.push(currQ.left);

            queue.push(currP.right);
            queue.push(currQ.right);
        }

        return true;
    }
}
