//SINGLY LINKED LIST

class Node{
    constructor(value, next=null, previous=null) {
        this.value = value
        this.next = next
        this.previous = previous

    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    addHead(value) {
        const newNode = new Node(value, this.head, null)
        if (!this.head){
            this.tail = newNode
        } else {
            this.head.previous = newNode
        }
        this.head = newNode
    }
    addTail(value) {
        const newNode = new Node(value, null, this.tail)
        if (!this.tail){
            this.head = newNode
        } else {
            this.tail.next = newNode
        }
        this.tail = newNode
    }
    deleteTail() {
        if(!this.tail){
            console.log("Linked List is empty")
            return
        }
        let current = this.tail
        this.tail = current.previous
        this.tail.next = null
        current = undefined
    }
    deleteHead() {
        if(!this.head) {
            console.log("Linked List is empty")
            return
        }
        let current = this.head
        this.head = current.next
        this.head.previous = null
        current = undefined
    }
    delete(item) {
        let current = this.head
        if (!current) {
            console.log("Linked List is empty")
            return
        }
        if (!current.next && current.value === item) {
            this.head = null
            this.tail = null
            console.log("Item Found")
            return
        }
        while(current){
            if (current.value === item){
                if (current == this.head) {
                    this.head = current.next
                    this.head.previous = null
                } else if(current === this.tail) {
                    this.tail = current.previous
                    this.tail.next = null
                } else {
                    let previous = current.previous
                    let next = current.next
                    previous.next = next
                    next.previous = previous
                }
                console.log("Item Found")
                current = undefined
                return
            }
            current = current.next
        }
        console.log("Item not found")
    }
}

const myList = new DoubleLinkedList()
myList.addTail(20)
myList.addTail(30)
myList.addTail(22)
myList.addTail(72)
myList.addTail(53)
myList.addTail(27)
myList.addTail(9)
// myList.deleteHead()
myList.delete(30)
console.dir(myList.head, { depth: null })