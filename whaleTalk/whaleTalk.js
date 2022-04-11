const input = "turpentine and turtles"
const vowels = ["a", "e", "i", "o", "u"]
const resultArray = []

for (let i = 0; i < input.length; i++) {
  if (input[i] === "e") {
    resultArray.push(input[i])
  }
  if (input[i] === "u") {
    resultArray.push(input[i])
  }
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i])
    }
  }
}
// console.log(resultArray)
const resultString = resultArray.join("").toUpperCase()
console.log(resultString)

let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for."

// Write your code below

let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!")
  },
}

alienShip.retreat()

alienShip.takeOff()
