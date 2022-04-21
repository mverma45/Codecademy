const words = ["unique", "uncanny", "pique", "oxymoron", "guise"]
/*
 .some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
*/

console.log(
  words.some(word => {
    return word.length < 6
  })
)

// filter method
const interestingWords = words.filter(newWord => {
  return newWord.length > 5
})

/*
.every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
*/

console.log(
  interestingWords.every(word => {
    return word.length > 5
  })
)
