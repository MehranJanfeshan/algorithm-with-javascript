function bfs(graph, root) {
  const nodesLen = {}

  graph.forEach((_, index) => {
    nodesLen[index] = Infinity
  })

  nodesLen[root] = 0

  const queue = [root]
  let current

  while (queue.length !== 0) {
    current = queue.shift()

    const curConnected = graph[current]
    const neighborIdx = []
    let idx = curConnected.indexOf(1)
    while (idx !== -1) {
      neighborIdx.push(idx)
      idx = curConnected.indexOf(1, idx + 1)
    }

    neighborIdx.forEach((neighbor) => {
      if (nodesLen[neighbor] == Infinity) {
        nodesLen[neighbor] = nodesLen[current] + 1
        queue.push(neighbor)
      }
    })
  }
  return nodesLen
}

const exBFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
]
console.log(bfs(exBFSGraph, 1))

// expected result
// { '0': 2, '1': 0, '2': 1, '3': 3, '4': Infinity }
