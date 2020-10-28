//SINGLY LINKED LIST

class Node{
    constructor(value, next=null) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    addTail(value) {
        const newNode = new Node(value)

        //Empty List
        if(this.head === null){
            this.head = newNode
        } else {
            // start out by looking at the first node
            let current = this.head
            while(current && current.next !== null){
                current = current.next
            }
            current.next = newNode
            this.tail = newNode
        }
    }
    addHead(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
    }
    deleteTail() {
        let current = this.head
        let newTail = this.head
        if (current === null) {
            console.log("Linked list is Empty")
            return
        }
        if (newTail.next === null){
            console.log("Deleted Single Node: ", current)
            this.head = null
            this.tail = null
            return
        }
        while(current.next !== null){
            newTail = current
            current = current.next
        }
        console.log("Deleted Last Node: ", current)
        newTail.next = null
        this.tail = newTail
    }
    deleteHead() {
        let current = this.head
        if (current === null) {
            console.log("Linked list is Empty")
            return
        }
        if (current.next === null){
            console.log("Deleted Single Node: ", current)
            this.head = null
            this.tail = null
            return
        }
        this.head = current.next
        current.next = null
        console.log("Deleted Head Node: ", current)
    }
    delete(item) {
        let current = this.head
        let pointer = this.head
        if (!current) {
            console.log("Linked List is empty")
            return
        }
        //Single element in list
        if (!current.next && current.value === item) {
            this.head = null
            this.tail = null
            console.log("Item Deleted:", item)
            return
        }
        while(current){
            if (current.value === item){
                if (current === this.head) {
                    this.head = current.next
                } else if (current === this.tail){
                    this.tail = pointer
                    this.tail.next = null
                } else {
                    pointer.next = current.next
                }
                console.log("Item Deleted--------:", item)
                current = null
                pointer = null
                return
            }
            pointer = current
            current = current.next
        }
        console.log("Item not found")
    }
}

const myList = new LinkedList()
myList.addTail(20)
myList.addHead(30)
myList.addHead(22)
myList.addHead(12)
console.dir(myList, { depth: null })
console.log(('--------------------------'));
myList.delete(12)
console.log(('--------------------------'));
console.dir(myList, { depth: null })
