// Left child i * 2
// Right child i * 2 + 1
// Parent i/2

const MinHeap = function () {

  // Heap always starts from index 1
  const heap = [null]

  this.insert = (num) => {
    heap.push(num)
    if (heap.length > 2) {
      let idx = heap.length - 1
      let parent = Math.floor(idx / 2)
      while (heap[idx] < heap[parent]) {
        if (idx >= 1) {
          [heap[parent], heap[idx]] = [heap[idx], heap[parent]]
          if (parent > 1) {
            idx = parent
            parent = Math.floor(idx / 2)
            continue
          }
          break
        }
      }
    }
  }

  this.print = () => {
    console.log(heap)
  }

  this.remove = function () {
    const smallest = heap[1]

    if (heap.length == 2) {
      heap.splice(1, 1)
    }

    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1]
      heap.splice(heap.length - 1)
      if (heap.length == 3) {
        if (heap[1] > heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]]
        }

        return smallest
      }

      let i = 1
      let left = 2 * i
      let right = 2 * i + 1
      while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
        if (heap[left] < heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]]
          i = 2 * i
        }
        [heap[i], heap[right]] = [heap[right], heap[i]]
        i = 2 * i + 1
        left = 2 * i
        right = 2 * i + 1
        if (heap[left] == undefined || heap[right] == undefined) {
          break
        }

      }

    }
    return smallest
  }

  this.sort = function () {
    const result = []
    while (heap.length > 1) {
      result.push(this.remove())
    }
    return result
  }

}


const heap = new MinHeap()
heap.insert(8)
heap.insert(2)
heap.insert(9)
heap.insert(0)
heap.insert(16)
heap.insert(20)
heap.print()
console.log(heap.sort())


