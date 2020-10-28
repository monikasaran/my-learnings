class MinHeap {
    constructor() {
        this.items = []
    }

    heapify(arr) {
        for(let i=0; i<arr.length; i++){
            this.push(arr[i])
            /**
            Find top 3rd max element
            if(this.items.length && this.items.length == 3 && arr[i] > this.items[0] ) {
                console.log('pop', this.items[0])
                this.pop()
            }
            if(this.items.length != 3)
                this.push(arr[i])
             */
        }
    }

    push(item) {
        let i = this.items.length
        this.items.push(item)
        while( i>0 && this.items[Math.floor((i+1)/2 - 1)] > this.items[i]) {
            let pos = Math.floor((i+1)/2 - 1)
            let t = this.items[i]
            this.items[i] = this.items[pos]
            this.items[pos] = t;
            i = pos
        }
    }

    pop() {
        if (this.items.length <= 1) return this.items.pop();
        const root = this.items[0];
        this.items[0] = this.items.pop();
        let i = 0;
        while (true) {
            let lowest = this.items[(i + 1) * 2] < this.items[(i + 1) * 2 - 1]
                            ? (i + 1) * 2 
                            : (i + 1) * 2 - 1;
            if (this.items[i] > this.items[lowest]) {
                let t = this.items[i];
                this.items[i] = this.items[lowest];
                this.items[lowest] = t;
                i = lowest
            } else break;
        }
        return root;
    }

    delete(item) {
        let i = this.items.indexOf(item);
        // heapify
        this.items[i] = this.items.pop()
        while (true) {
            let lowest = this.items[(i + 1) * 2] < this.items[(i + 1) * 2 - 1]
                ? (i + 1) * 2 : (i + 1) * 2 - 1
            if (this.items[i] > this.items[lowest]) {
                let t = this.items[i]
                this.items[i] = this.items[lowest]
                this.items[lowest] = t
                i = lowest
            } else break;
        }
    }
}

const heap = new MinHeap()
heap.heapify([11, 23, 12, 9, 30, 50, 2])
console.log(heap)