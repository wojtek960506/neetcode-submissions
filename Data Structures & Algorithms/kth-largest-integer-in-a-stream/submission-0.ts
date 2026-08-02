class KthLargest {
    maxLength: number;
    heap: number[];
    length: number;

    constructor(k: number, nums: number[]) {

        this.maxLength = k;
        this.heap = [];

        for (let num of nums) this.add(num);
    
        console.log(this.heap)
    }

    parent(i: number): number {
        return Math.trunc((i - 1) / 2);
    } 

    leftChild(i: number): number {
        return 2 * i + 1;
    }

    rightChild(i: number): number {
        return 2 * i + 2;
    }

    insert(val: number) {
        this.heap.push(val);
        // after inserting we should move element to the right position
        this.heapifyUp(this.heap.length - 1);
    }

    extractMin(): number | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();

        const minVal = this.heap[0];
        this.heap[0] = this.heap.pop(); // move last element to the root
        this.heapifyDown(0)
        return minVal;
    }

    peek(): number | undefined {
        // return smalest element without removing it
        return this.heap.length > 0 ? this.heap[0] : undefined
    }

    heapifyUp(index: number) {
        // Used after inserting a new element at the end of the array.
        // Compare the element with its parent; if it's smaller, swap them and repeat
        // until it reaches the root or finds a smaller parent
        while (index > 0) {
            const parentIdx = this.parent(index)
            if (this.heap[index] < this.heap[parentIdx]) {
                const tmp = this.heap[index];
                this.heap[index] = this.heap[parentIdx];
                this.heap[parentIdx] = tmp;
                index = parentIdx;
            } else {
                break;
            }
        }
    }

    heapifyDown(index: number) {
        // Used after extracting the minimum (the root). Replace the root with
        // the last element in the array, then compare it with its children.
        // Swap with the smaller child until the min-heap property is restored.

        let small = index;
        const left = this.leftChild(index);
        const right = this.rightChild(index);

        if (left < this.heap.length && this.heap[left] < this.heap[small]) {
            small = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[small]) {
            small = right
        }

        if (small !== index) {
            // move node down if it is smaller then any of its children
            const tmp = this.heap[index];
            this.heap[index] = this.heap[small];
            this.heap[small] = tmp;

            // run recursively on updated heap to check whether structure
            // is still not good
            this.heapifyDown(small);
        }
    }



    // actual code to implement for this task

    // /**
    //  * @param {number} k
    //  * @param {number[]} nums
    //  */
    // constructor(k: number, nums: number[]) {

    //     // we need to create min heap from nums and make sure it will contain
    //     // maximum k elements

    // }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {

        this.insert(val);

        if (this.heap.length > this.maxLength) this.extractMin();

        return this.peek();
    }
}
