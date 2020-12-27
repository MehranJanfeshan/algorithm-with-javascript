function LinkedList() {
  let length = 0
  let head = null

  function nodeFactory(element) {
    this.element = element
    this.next = null
  }

  this.size = function () {
    return length
  }
  this.head = function () {
    return head
  }

  this.add = element => {
    const node = new nodeFactory(element)
    if (head === null) {
      head = node
    } else {
      let currentNode = head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    length++
  }

  this.remove = (element) => {
    let currentNode = head
    let previousNode
    if (currentNode.element === element) {
      head = currentNode.next
      length--
      return
    }
    while (currentNode.element !== element) {
      previousNode = currentNode
      currentNode = currentNode.next
    }
    previousNode.next = currentNode.next
    length--
  }

  this.isEmpty = () => length === 0

  this.indexOf = (element) => {
    let currentNode = head
    let index = -1
    while (currentNode != null) {
      index++
      if (currentNode.element === element) {
        return index
      }
      currentNode = currentNode.next
    }
    return index
  }

  this.elementAt = (index) => {
    let currentNode = head
    let count = 0
    while (count < index) {
      count++
      currentNode = currentNode.next
    }
    return currentNode.element
  }

  this.addAt = (index, element) => {
    const node = new nodeFactory(element)
    let currentNode = head
    let currentIndex = 0
    let previousNode

    if (index > length) {
      return false
    }

    if (index === 0) {
      node.next = currentNode
      head = node
      length++
      return true
    }
    while (index > currentIndex) {
      currentIndex++
      previousNode = currentNode
      currentNode = currentNode.next
    }
    previousNode.next = currentNode
    node.next = currentNode
    length++
    return true
  }


  this.removeAt = (index) => {
    let currentNode = head
    let currentIndex = 0
    let previousNode

    if (index === 0) {
      head = currentNode.next
      length--
      return
    }

    while (index != currentIndex) {
      currentIndex++
      previousNode = currentNode
      currentNode = currentNode.next
    }
    previousNode.next = currentNode.next
    length--
  }
}

const conga = new LinkedList()
conga.add('Kitten')
conga.add('Puppy')
conga.add('Dog')
conga.add('Cat')
conga.add('Fish')
console.log(conga.size())
console.log(conga.removeAt(3))
console.log(conga.elementAt(3))
console.log(conga.indexOf('Puppy'))
console.log(conga.size())

