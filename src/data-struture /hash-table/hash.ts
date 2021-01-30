const hash = (string, max) => {
  let hash = 0
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i)
  }
  return hash % max
}

function HashTable() {
  const storage = []

  const storageLimit = 4
  this.print = () => {
    console.log(storage)
  }

  this.add = (key, value) => {
    const index = hash(key, storageLimit)
    if (storage[index] === undefined) {
      storage[index] = [[key, value]]
      return
    }
    storage[index].forEach((item) => {
      if (item[0] === key) {
        item[1] = value
        return
      }
      storage[index].push([key, value])
    })
  }

  this.remove = (key) => {
    const hashKey = hash(key, storageLimit)
    if (storage[hashKey].length === 1 && storage[hashKey][0][0] === key) {
      delete storage[hashKey]
      return
    }
    storage[hashKey].forEach((item, index) => {
      if (item[0] === key) {
        delete storage[hashKey][index]
      }
    })
  }


  this.lookup = (key) => {
    const index = hash(key, storageLimit)

    if (storage[index] === undefined) {
      return undefined
    }
    return storage[index].map((item) => {
      if (item[0] === key) {
        return item
      }
    }).filter(item => !!item).shift()
  }
}


const ht = new HashTable()
ht.add('beau', 'person')
ht.add('beau', 'person2')
ht.add('fido', 'dog')
ht.add('rex', 'dinosour')
ht.add('tux', 'penguin')
console.log(ht.lookup('tux'))
ht.remove('tux')
ht.print()
