function mySet() {
  const collection = []

  this.has = function (element) {
    return (collection.indexOf(element) !== -1)
  }

  this.values = function () {
    return collection
  }

  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element)
      return true
    }
    return false
  }

  this.remove = function (element) {
    if (this.has(element)) {
      const index = collection.indexOf(element)
      collection.splice(index, 1)
      return true
    }
    return false
  }

  this.size = function () {
    return collection.length
  }

  this.union = function (otherSet) {
    const unionSet = new mySet()
    const firstSet = this.values()
    const secondSet = otherSet.values()
    firstSet.forEach(function (e) {
      unionSet.add(e)
    })
    secondSet.forEach(function (e) {
      unionSet.add(e)
    })
    return unionSet
  }

  this.intersection = function (otherSet) {
    const intersectionSet = new mySet()
    const firstSet = this.values()
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e)
      }
    })
    return intersectionSet
  }

  this.difference = function (otherSet) {
    const difference = new mySet()
    const firstSet = this.values()
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        difference.add(e)
      }
    })
    return difference
  }

  this.subset = function (otherSet) {
    const firstSet = this.values()
    return firstSet.every(function (e) {
      return otherSet.has(e)
    })
  }
}

const setA = new mySet()
const setB = new mySet()
setA.add('K')
setB.add('b')
setB.add('c')
setB.add('d')
setB.add('a')
setB.add('b')

console.log(setA.subset(setB))
console.log(setA.difference(setB).values())




