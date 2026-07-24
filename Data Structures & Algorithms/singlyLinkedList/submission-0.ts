type Elem = {
    val: number;
    next: Elem | undefined;
}

class LinkedList {
    head: Elem | undefined;
    tail: Elem | undefined;


    constructor() {
        this.head = undefined;
        this.tail = undefined;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index < 0) return -1;

        let curr = this.head;

        for (let i = 0; i < index ; i++) {
            if (!curr) return -1;
            curr = curr.next;
        }
        if (!curr) return -1;
        return curr.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        if (this.head === undefined) {
            const elem: Elem = { val, next: undefined }
            this.head = elem;
            this.tail = elem;
        } else {
            const tmp = this.head;
            const elem = { val, next: tmp };
            this.head = elem;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        if (this.head === undefined) {
            const elem: Elem = { val, next: undefined }
            this.head = elem;
            this.tail = elem;
        } else {
            const tmp = this.tail;
            const elem = { val, next: undefined };
            tmp.next = elem;
            this.tail = elem;
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if (!this.head) return false;
        if (index === 0) {
            // I am wondering whether we should explicitly remove element from memory
            // or will it be handled by garbage collector
            // let currHead = this.head;
            let tmp = this.head.next;
            this.head = tmp;
            return true;
        }

        let prev = this.head;
        let curr = this.head.next;

        for (let i = 1 ; i < index; i++) {
            if (!curr) return false;
            prev = curr;
            curr = curr.next;
        }
        if (!curr) return false;

        prev.next = curr.next;
        if (!prev.next) this.tail = prev;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const arr: number[] = [];
        let tmp = this.head;
        while (tmp) {
            arr.push(tmp.val);
            tmp = tmp.next;
        }
        return arr;
    }
}
