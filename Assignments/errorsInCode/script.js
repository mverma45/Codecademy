function capitalizeASingleWord(word) {
  // console.log(word)
  if (word.match(" ")) {
    // console.log(word)
    return null
  }

  let firstLetter = word.charAt(0)
  const restOfWord = word.slice(1)

  firstLetter = firstLetter.toUpperCase()

  return firstLetter + restOfWord
}

// Should return "Hey"
console.log(
  "capitalizeASingleWord('hey') returns: " + capitalizeASingleWord("hey")
)

// Should return null
console.log(
  "capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord("hey ho")
)

// Link to String.repeat() documentation:
//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function doubleString(string) {
  // this will repeat the string two times
  return string.repeat(2)
}
// Should return 'echoecho'
console.log("echo".repeat(2))

//using stackoverflow.com/

// Returns whether or not the provided string contains a substring of "cake" in it.
function containsCake(string) {
  return string.includes("cake")
}
// Should return true
console.log(
  "containsCake('I think cake is my soul mate.') returns: " +
    containsCake("I think cake is my soul mate.")
)

// Should return false
console.log(
  "containsCake('Pie is certainly the coolest dessert.') returns: " +
    containsCake("Pie is certainly the coolest dessert.")
)

//errorsInCode

function isStringPerfectLength(string, minLength, maxLength) {
  const stringLength = string.length

  if (stringLength < minLength) {
    return false
  } else if (stringLength > maxLength) {
    return false
  } else {
    return true
  }
}

// Should return true
console.log(
  "isStringPerfectLength('Dog', 2, 4) returns: " +
    isStringPerfectLength("Dog", 2, 4)
)

// Should return false
console.log(
  "isStringPerfectLength('Mouse', 2, 4) returns: " +
    isStringPerfectLength("Mouse", 2, 4)
)

// Should return false
console.log(
  "isStringPerfectLength('Cat', 4, 9) returns: " +
    isStringPerfectLength("Cat", 4, 9)
)
