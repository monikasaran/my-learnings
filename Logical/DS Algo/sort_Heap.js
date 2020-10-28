var arr = [65, 22, 1, 89, 54, 11, 34]
class Heap{
    constructor(items) {
        this.items = items
        this.len = items.length
    }

    heapify(i) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let max = i

        if (left < this.len && this.items[left] > this.items[max]) {
            max = left
        }

        if (right < this.len && this.items[right] > this.items[max]) {
            max = right
        }

        if (max != i) {
            this.swap(i, max)
            this.heapify(max)
        }
    }

    swap(index_A, index_B) {
        let temp = this.items[index_A]
        this.items[index_A] = this.items[index_B]
        this.items[index_B] = temp
    }

    heapSort() {
        for (let i = Math.floor(this.len / 2); i >= 0; --i) {
            this.heapify(i)
        }
        console.log(this.items)

        for (let i = this.len - 1; i > 0; i--) {
            this.swap(0, i)
            --this.len
            this.heapify(0)
        }
        this.len = this.items.length
        console.log(this.items)
    }
}

var myHeap = new Heap([3, 0, 2, 5, -1, 4, 1])
myHeap.heapSort(arr)

