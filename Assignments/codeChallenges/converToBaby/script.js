// Write your code here:
const convertToBaby = arr => {
  const babyArray = []
  for (let i = 0; i < arr.length; i++) {
    babyArray.push("baby " + arr[i])
  }
  return babyArray
}

// When you're ready to test your code, uncomment the below and run:

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"]

console.log(convertToBaby(animals))
