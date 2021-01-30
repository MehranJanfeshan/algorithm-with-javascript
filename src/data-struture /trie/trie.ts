const myTrieNode = function () {
  this.keys = new Map()
  this.end = false
  this.setEnd = () => {
    this.end = true
  }
  this.isEnd = () => {
    return this.end
  }
}

const Trie = function () {
  this.root = new myTrieNode()

  this.add = (input, node = this.root) => {
    if (input.length === 0) {
      node.setEnd()
      return
    }
    if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new myTrieNode())
    }
    return this.add(input.substr(1), node.keys.get(input[0]))
  }

  this.isWord = (word) => {
    let currentNode = this.root

    while (word.length > 0) {
      if (!currentNode.keys.has(word[0])) {
        return false
      }
      currentNode = currentNode.keys.get(word[0])
      word = word.substr(1)
    }
    return currentNode.isEnd()
  }


  this.print = () => {
    const words = []

    const search = (node, string) => {
      if (node.keys.size > 0) {
        for (const letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter))
        }
        if (node.isEnd()) {
          words.push(string)
        }
      } else {
        string.length > 0 ? words.push(string) : undefined
      }
    }
    search(this.root, String())
    return words.length > 0 ? words : undefined
  }

}

const myTrie = new Trie()
myTrie.add('ball')
myTrie.add('bat')
myTrie.add('doll')
myTrie.add('dork')
myTrie.add('do')
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie.isWord('doll'))
console.log(myTrie.isWord('do'))
console.log(myTrie.isWord('dorf'))
console.log(myTrie.print())
