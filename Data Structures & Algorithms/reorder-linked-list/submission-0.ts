/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// class Solution {
//     /**
//      * @param {ListNode} head
//      * @return {void}
//      */
//     reorderList(head: ListNode | null): void {

//         // just for the prevSlowPointer to work corectly
//         if (head === null) return;
//         if (head.next === null) return;
//         if (head.next.next === null) return;

//         let slowPointer = head;
//         let fastPointer = head;
//         let mainPointer = head;

//         let prevSlowPointer = null;

//         let i = 0;
//         while (fastPointer !== null && fastPointer.next !== null) {
//             if (i > 0) prevSlowPointer = slowPointer;
//             i += 1;
            
//             slowPointer = slowPointer.next;
//             fastPointer = fastPointer.next.next;
//         }

//         // it is to make sure that the
        
//         prevSlowPointer.next = null;

//         console.log('slowPointer', slowPointer);
//         console.log('fastPointer', fastPointer);

//         let secondCurr = slowPointer;
//         let secondPrev = null;

//         while (secondCurr !== null) {
//             const tmp = secondCurr.next;

//             secondCurr.next = secondPrev;

//             secondPrev = secondCurr;
//             secondCurr = tmp;
//         }

//         console.log('after reorder')
//         console.log('mainPointer', mainPointer);
//         console.log('secondPrev', secondPrev);

//         let secondPointer = secondPrev;
//         let firstPointer = head;


//         while (secondPointer !== null) {

//             let tmp1 = firstPointer.next;
//             let tmp2 = secondPointer.next;

//             firstPointer.next = secondPointer;
//             secondPointer.next = tmp1;

//             firstPointer = tmp1;
//             secondPointer = tmp2;
//         }
//         // now we need to take from one and the other




//         // if (head === null) return null

//         // let curr = { ...head };

//         // // prev is initially null because before head we do not have any element but
//         // // as we have singly linked list head is not pointing to the prev
//         // let prev = null;

//         // let next = curr.next;

//         // while (next) {

            
//         //     const tmpPrev = prev;
//         //     const tmpCurr = curr;
//         //     const tmpNext = next;

//         //     const tmpNextNext = next.next;

//         //     console.log('tmpPrev', tmpPrev);
//         //     console.log('tmpCurr', tmpCurr);
//         //     console.log('tmpNext', tmpNext);
//         //     console.log('tmpNextNext', tmpNextNext);
            
//         //     curr.next = prev;
//         //     next.next = curr;


//         //     prev = tmpCurr;
//         //     curr = tmpNext;
//         //     next = tmpNextNext;
            
//         //     console.log('prev', prev);
//         //     console.log('curr', curr);
//         //     console.log('next', next);

//         //     console.log('aaaaaaaaaaaaaaaaaaaa');
//         //     console.log('aaaaaaaaaaaaaaaaaaaa');
//         //     console.log('aaaaaaaaaaaaaaaaaaaa');
//         // }


//         // // we set head to be the current node. for sure it will not be null as we stop while loop when next is null
//         // head = { ...curr };

//         // console.log('head in the end', head)
//     }
// }

class Solution {
    reorderList(head: ListNode | null): void {
        if (head === null || head.next === null) return;

        let slowPointer = head;
        let fastPointer = head;

        // Find the middle
        while (fastPointer !== null && fastPointer.next !== null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }

        // secondCurr starts after slowPointer
        let secondCurr = slowPointer.next;
        // Split the list cleanly at the middle node
        slowPointer.next = null;

        let secondPrev = null;

        // Reverse second half
        while (secondCurr !== null) {
            const tmp = secondCurr.next;
            secondCurr.next = secondPrev;
            secondPrev = secondCurr;
            secondCurr = tmp;
        }

        // Interleave first and second half
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
