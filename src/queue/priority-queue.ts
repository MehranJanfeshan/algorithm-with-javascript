function PriorityQueue() {
  const collection = []
  this.printCollections = () => {
    console.log(collection)
  }
  this.enqueue = enqueue

  function enqueue(element) {
    if (this.isEmpty()) {
      collection.push(element)
    } else {
      let added = false
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element)
          added = true
          break
        }
      }
      if (!added) {
        collection.push(element)
      }
    }
  }

  this.dequeue = () => {
    const value = collection.shift()
    return value[0]
  }
  this.front = () => collection[0]

  this.size = () => collection.length
  this.isEmpty = function () {
    return (collection.length === 0)
  }
}


const pQueue = new PriorityQueue()

pQueue.enqueue(['Name 5', 5])
pQueue.enqueue(['Name 9', 9])
pQueue.enqueue(['Name 3', 3])
pQueue.enqueue(['Name 1', 1])
pQueue.printCollections()
