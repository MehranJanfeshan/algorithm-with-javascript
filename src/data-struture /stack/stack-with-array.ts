function main() {
  let letters = []
  let word = 'racecar'
  let reword = ''


// put letters of word into stack
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i])
  }

// pop off the stack in reverse order
  for (let i = 0; i < word.length; i++) {
    reword += letters.pop()
  }

  if (reword === word) {
    console.log(`${ word } is a palindrome`)
  } else {
    console.log(`${ word } is not a palindrome`)
  }
}


main()
