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

        const queueP = [];
        const queueQ = [];

        queueP.push(p);
        queueQ.push(q);

        while (queueP.length > 0 || queueQ.length > 0) {
            const currP = queueP.shift();
            const currQ = queueQ.shift();

            // both values are null so it is fine
            if (!currP && !currQ) continue;

            // if only one of them is null then wrong
            if (!currP || !currQ) return false;

            // if neither of them is null but value is different then also wrong
            if (currP.val !== currQ.val) return false;

            queueP.push(currP.left);
            queueP.push(currP.right);

            queueQ.push(currQ.left);
            queueQ.push(currQ.right);
        }

        return true;
    }
}
