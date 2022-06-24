let petOnSale = "chinchilla"
let ordersArray = [
  ["rat", 2],
  ["chinchilla", 1],
  ["hamster", 2],
  ["chinchilla", 50],
]

// Write your code below:
enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula,
}

const petOnSaleTS: Pet = Pet.Chinchilla

const ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50],
]

let petOnSale = "chinchilla"
let ordersArray = [
  ["rat", 2],
  ["chinchilla", 1],
  ["hamster", 2],
  ["chinchilla", 50],
]

// Write your code below:

enum Pet {
  Hamster = "HAMSTER",
  Rat = "RAT",
  Chinchilla = "CHINCHILLA",
  Tarantula = "TARANTULA",
}

const petOnSaleTS: Pet = Pet.Chinchilla

const ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50],
]

ordersArrayTS.push(["HAMSTER", 1])

//in the enum Pet statement, you cannot use 'HAMSTER' as the enum value. You must use Pet.Hamster instead.

function sayHappyBirthdayWithObject(personObject: {
  name: string
  age: number
  giftWish: string
  success: boolean
}) {
  let output = ""
  output += "Happy Birthday " + personObject.name + "! "
  output += "You are now " + personObject.age + " years old! "
  output +=
    "Your birthday wish was to receive " +
    personObject.giftWish +
    ". And guess what? You will "
  if (!personObject.success) {
    output += "not "
  }
  output += "receive it! \n"
  console.log(output)
}

let birthdayBabies: {
  name: string
  age: number
  giftWish: string
  success: boolean
}[] = [
  { name: "Liam", age: 0, giftWish: "karate skills", success: false },
  { name: "Olivia", age: 0, giftWish: "a bright future", success: true },
  { name: "Ava", age: 0, giftWish: "$0.25", success: true },
]

birthdayBabies.forEach(sayHappyBirthdayWithObject)

// Add Type alias below:

type Coord = [number, number, string, number, number, string]

let codecademyCoordinates: Coord = [40, 43.2, "N", 73, 59.8, "W"]
let bermudaTCoordinates: Coord = [25, 0, "N", 71, 0, "W"]
