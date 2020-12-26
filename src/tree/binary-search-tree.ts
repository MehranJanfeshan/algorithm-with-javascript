class myNode {
  data: any
  left: any
  right: any

  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BST {
  root: any

  constructor() {
    this.root = null
  }

  add(data) {
    if (this.root === null) {
      this.root = new myNode(data)
      return
    }
    const searchNode = (node) => {
      if (data < node.data) {
        if (node.left != null) {
          searchNode(node.left)
          return
        }
        node.left = new myNode(data)
        return
      }
      if (data > node.data) {
        if (node.right != null) {
          searchNode(node.right)
          return
        }
        node.right = new myNode(data)
        return
      }
      return null
    }
    searchNode(this.root)
  }

  findMin() {
    let current = this.root
    while (current.left !== null) {
      current = current.left
    }
    return current.data
  }

  findMax() {
    let current = this.root
    while (current.right !== null) {
      current = current.right
    }
    return current.data
  }

  find(data) {
    let current = this.root
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left
      }
      if (data > current.data) {
        current = current.right
      }
      if (current === null) {
        return null
      }
    }
    return current.data
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null
        }
        // node has no left child
        if (node.left == null) {
          return node.right
        }
        // node has no right child
        if (node.right == null) {
          return node.left
        }
        // node has two children
        let tempNode = node.right
        while (tempNode.left !== null) {
          tempNode = tempNode.left
        }
        node.data = tempNode.data
        node.right = removeNode(node.right, tempNode.data)
        return node
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      }
      node.right = removeNode(node.right, data)
      return node
    }
    this.root = removeNode(this.root, data)
  }

  isPresent(data) {
    let current = this.root
    while (current) {
      if (data === current.data) {
        return true
      } else {
        current = current.right
      }
    }
    return false
  }

  findMinHeight(node = this.root) {
    if (node == null) {
      return -1
    }

    const left = this.findMinHeight(node.left)
    const right = this.findMinHeight(node.right)
    return Math.min(left, right) + 1
  }

  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1
    }

    const left = this.findMaxHeight(node.left)
    const right = this.findMaxHeight(node.right)
    return Math.max(left, right) + 1
  }

  inOrder() {
    if (this.root == null) {
      return null
    }
    const result = []
    const traverseInOrder = (node) => {
      node.left && traverseInOrder(node.left)
      result.push(node.data)
      node.right && traverseInOrder(node.right)
    }
    traverseInOrder(this.root)
    return result
  }
}


const bst = new BST()

bst.add(9)
bst.add(4)
bst.add(17)
bst.add(3)
bst.add(6)
bst.add(22)
bst.add(5)
bst.add(7)
bst.add(20)
bst.add(10)


console.log(bst.findMinHeight())
console.log(bst.findMaxHeight())
console.log(bst.inOrder())

