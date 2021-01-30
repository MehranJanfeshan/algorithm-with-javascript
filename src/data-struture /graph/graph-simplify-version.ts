function BFS(graph: number[][], root: number) {
  const nodeLen = {}
  graph.forEach((_, index) => {
    nodeLen[index] = Infinity
  })

  nodeLen[root] = 0

  const queue = [root]

  while (queue.length > 0) {
    const current = queue.shift()

    const neighborNodes = graph[current].map((node, index) => {
      if (node === 1) {
        return index
      }
      return -1
    }).filter((item) => item !== -1)

    neighborNodes.forEach((node) => {
      if (nodeLen[node] === Infinity) {
        nodeLen[node] = nodeLen[current] + 1
        queue.push(node)
      }
    })
  }

  return nodeLen
}


const exBFSGraph2 = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
]
console.log(BFS(exBFSGraph2, 1))

// expected result
// { '0': 2, '1': 0, '2': 1, '3': 3, '4': Infinity }
