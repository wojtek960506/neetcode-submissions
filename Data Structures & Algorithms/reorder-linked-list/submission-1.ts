/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {

        // just for the prevSlowPointer to work corectly
        if (head === null || head.next === null) return;

        let slowPointer = head;
        let fastPointer = head.next;
        
        while (fastPointer !== null && fastPointer.next !== null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }


        let secondCurr = slowPointer.next;
        slowPointer.next = null;
        let secondPrev = null;

        while (secondCurr !== null) {
            const tmp = secondCurr.next;
            secondCurr.next = secondPrev;

            secondPrev = secondCurr;
            secondCurr = tmp;
        }

        let secondPointer = secondPrev;
        let firstPointer = head;

        while (secondPointer !== null) {

            let tmp1 = firstPointer.next;
            let tmp2 = secondPointer.next;

            firstPointer.next = secondPointer;
            secondPointer.next = tmp1;

            firstPointer = tmp1;
            secondPointer = tmp2;
        }
    }
}
