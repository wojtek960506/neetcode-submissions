class DynamicArray {
    arr: (number)[];
    firstEmptyIndex: number;
    numOfElements: number;
    
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.arr = Array.from({ length: capacity });
        this.firstEmptyIndex = 0;
        this.numOfElements = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        if (this.arr[i] === undefined) this.numOfElements += 1;
        this.arr[i] = n;
        if (this.firstEmptyIndex <= i) this.firstEmptyIndex = i + 1;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.getSize() === this.getCapacity()) this.resize();
        this.arr[this.firstEmptyIndex] = n;
        this.firstEmptyIndex += 1;
        this.numOfElements += 1;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        const elem = this.arr[this.firstEmptyIndex - 1];
        this.arr[this.firstEmptyIndex - 1] = undefined;
        this.firstEmptyIndex -= 1;
        this.numOfElements -= 1;
        return elem;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        const tmp = this.arr.map(t => t);
        this.arr = Array.from({ length: tmp.length * 2 });
        for (let i = 0; i < tmp.length; i++) {
            this.arr[i] = tmp[i];
        }
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.numOfElements;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.arr.length;
    }
}
