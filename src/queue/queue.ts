function Queue() {
  const collection = []
  this.print = () => {
    console.log(collection)
  }

  this.enqueue = element => {
    collection.push(element)
  }
  this.dequeue = () => collection.shift()

  this.front = () => collection[0]

  this.size = () => collection.length

  this.isEmpty = () => (collection.length === 0)
}

const q = new Queue()

q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
q.print()
q.dequeue()
console.log(q.front())
q.print()
