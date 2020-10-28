/* Binary Search Tree */

class Node {
    constructor(value, left = null, right = null) {
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
        if (current === null) {
            this.root = newNode
            return
        } else {
            const searchTree = function (current) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode
                        return
                    } else {
                        return searchTree(current.left)
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode
                        return
                    } else {
                        return searchTree(current.right)
                    }
                } else {
                    return null
                }
            }
            return searchTree(current)
        }
    }

    findMin() {
        let current = this.root
        while (current.left !== null) {
            current = current.left
        }
        return current.value
    }

    findMax() {
        let current = this.root
        while (current.right !== null) {
            current = current.right
        }
        return current.value
    }

    find(value) {
        let current = this.root
        while (current.value !== value) {
            if (value < current.value) {
                current = current.left
            } else {
                current = current.right
            }
            if (current === null) {
                return null
            }
        }
        return current
    }

    isPresent(value) {
        let current = this.root
        while (current) {
            if (value === current.value) {
                return true
            }
            if (value < current.value) {
                current = current.left
            } else {
                current = current.right
            }
        }
        return false
    }

    remove(value) {
        const removeNode = function (current, value) {
            if (current == null) {
                return null
            }
            if (value == current.value) {
                // current has no children 
                if (current.left == null && current.right == null) {
                    return null
                }
                // current has no left child 
                if (current.left == null) {
                    return current.right
                }
                // current has no right child 
                if (current.right == null) {
                    return current.left
                }
                // current has two children 
                let tempNode = current.right
                while (tempNode.left !== null) {
                    tempNode = tempNode.left
                }
                current.value = tempNode.value
                current.right = removeNode(current.right, tempNode.value)
                return current
            } else if (value < current.value) {
                current.left = removeNode(current.left, value)
                return current
            } else {
                current.right = removeNode(current.right, value)
                return current
            }
        }
        this.root = removeNode(this.root, value)
    }

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }

    findMinHeight(current = this.root) {
        if (current == null) {
            return -1
        }
        let left = this.findMinHeight(current.left)
        let right = this.findMinHeight(current.right)
        if (left < right) {
            return left + 1
        } else {
            return right + 1
        }
    }

    findMaxHeight(current = this.root) {
        if (current == null) {
            return -1
        }
        let left = this.findMaxHeight(current.left)
        let right = this.findMaxHeight(current.right)
        if (left > right) {
            return left + 1
        } else {
            return right + 1
        }
    }

    inOrder() {
        if (this.root == null) {
            return null
        } else {
            var result = new Array()

            function traverseInOrder(current) {
                current.left && traverseInOrder(current.left)
                result.push(current.value)
                current.right && traverseInOrder(current.right)
            }
            traverseInOrder(this.root)
            return result
        }
    }

    preOrder() {
        if (this.root == null) {
            return null
        } else {
            var result = new Array()

            function traversePreOrder(current) {
                result.push(current.value)
                current.left && traversePreOrder(current.left)
                current.right && traversePreOrder(current.right)
            }
            traversePreOrder(this.root)
            return result
        }
    }

    postOrder() {
        if (this.root == null) {
            return null
        } else {
            var result = new Array()

            function traversePostOrder(current) {
                current.left && traversePostOrder(current.left)
                current.right && traversePostOrder(current.right)
                result.push(current.value)
            }
            traversePostOrder(this.root)
            return result
        }
    }

    levelOrder() {
        if (this.root === null) {
            return null
        }
        let result = []
        let Q = []
        Q.push(this.root)
        while (Q.length > 0) {
            let current = Q.shift()
            result.push(current.value)
            if (current.left != null) {
                Q.push(current.left)
            }
            if (current.right != null) {
                Q.push(current.right)
            }
        }
        return result
    }
}



const bst = new BST()
bst.add(22)
bst.add(18)
bst.add(23)
bst.add(16)
bst.add(20)
bst.add(15)
bst.add(17)
bst.add(19)
bst.add(20)
bst.add(21)

console.log('Inorder: ', bst.inOrder())
console.log('Post order: ', bst.postOrder())
console.log('Pre Order: ', bst.preOrder());


// console.log(bst.findMinHeight())
// console.log(bst.findMaxHeight())
// console.log(bst.isBalanced())
// bst.add(10)
// console.log(bst.findMinHeight())
// console.log(bst.findMaxHeight())
// console.log(bst.isBalanced())
// console.log('inOrder: ' + bst.inOrder())
// console.log('preOrder: ' + bst.preOrder())
// console.log('postOrder: ' + bst.postOrder())

// console.log('levelOrder: ' + bst.levelOrder())