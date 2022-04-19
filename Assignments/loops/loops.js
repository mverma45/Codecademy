// Write your code below for loop
let bobsFollowers = ["John", "Steven", "Karl", "Tim"]
let tinasFollowers = ["Tim", "Karl", "Tom"]
let mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}

//while loop
const cards = ["diamond", "spade", "heart", "club"]

// Write your code below
while (currentCard != "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)]
  console.log(currentCard)
}

// Write your code below do/while
let cupsAdded = 0
let cupsOfSugarNeeded = 4

do {
  cupsAdded++
  console.log(cupsAdded + " cup was added")
} while (cupsAdded < cupsOfSugarNeeded)

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"]

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i])
  if (rapperArray[i] === "Notorious B.I.G") {
    break
  }
}
console.log("And if you don't know, now you know.")
