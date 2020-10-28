class Node {
    constructor(value, left=null, right=null) {
        this.value = value
        this.left = left
        this.right = right
    }
}

class BST {
    constructor() {
        this.root = null
    }

    add(value) {
        const current = this.root
        const newNode = new Node(value)
        if(current == null) {
            this.root = newNode
            return
        } else {
            const searchTree = function(current) {
                if(value < current.value) {
                    if(current.left === null){
                        current.left = newNode
                        return
                    } else {
                        return searchTree(current.left)
                    }
                } else if (value > current.value){
                    if(current.right === null){
                        current.right = newNode
                        return
                    } else {
                        return searchTree(current.right)
                    }
                }
                return
            }
            return searchTree(current)
        }
    }
}

let bst = new BST()
bst.add(21)
bst.add(6)
bst.add(46)
bst.add(26)

console.dir(bst, {depth: null})