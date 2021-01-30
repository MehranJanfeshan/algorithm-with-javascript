function sortArray(inputArray: number[]) {
  for (let j = 1; j <= inputArray.length - 1; j++) {
    const key = inputArray[j]
    let i = j - 1
    while (i >= 0 && inputArray[i] > key) {
      inputArray[i + 1] = inputArray[i]
      i = i - 1
    }
    inputArray[i + 1] = key
  }
  console.log('Here is your sorted array:', inputArray)

}

sortArray([5, 2, 4, 6, 1, 3])
