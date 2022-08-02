var petOnSale = "chinchilla"
var ordersArray = [
  ["rat", 2],
  ["chinchilla", 1],
  ["hamster", 2],
  ["chinchilla", 50],
]
// Write your code below:
var Pet
;(function (Pet) {
  Pet[(Pet["Hamster"] = 0)] = "Hamster"
  Pet[(Pet["Rat"] = 1)] = "Rat"
  Pet[(Pet["Chinchilla"] = 2)] = "Chinchilla"
  Pet[(Pet["Tarantula"] = 3)] = "Tarantula"
})(Pet || (Pet = {}))
var petOnSaleTS = Pet.Chinchilla
var ordersArrayTS = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50],
]
var petOnSale = "chinchilla"
var ordersArray = [
  ["rat", 2],
  ["chinchilla", 1],
  ["hamster", 2],
  ["chinchilla", 50],
]
// Write your code below:
;(function (Pet) {
  Pet["Hamster"] = "HAMSTER"
  Pet["Rat"] = "RAT"
  Pet["Chinchilla"] = "CHINCHILLA"
  Pet["Tarantula"] = "TARANTULA"
})(Pet || (Pet = {}))
var petOnSaleTS = Pet.Chinchilla
var ordersArrayTS = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50],
]
ordersArrayTS.push(["HAMSTER", 1])
//in the enum Pet statement, you cannot use 'HAMSTER' as the enum value. You must use Pet.Hamster instead.
function sayHappyBirthdayWithObject(personObject) {
  var output = ""
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
var birthdayBabies = [
  { name: "Liam", age: 0, giftWish: "karate skills", success: false },
  { name: "Olivia", age: 0, giftWish: "a bright future", success: true },
  { name: "Ava", age: 0, giftWish: "$0.25", success: true },
]
birthdayBabies.forEach(sayHappyBirthdayWithObject)
var codecademyCoordinates = [40, 43.2, "N", 73, 59.8, "W"]
var bermudaTCoordinates = [25, 0, "N", 71, 0, "W"]
function subtract(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function divide(a, b) {
  return a / b
}
function wrongAdd(a, b) {
  return a + b + ""
}

// Add your function type below:
type OperatorFunction = (a: number, b: number) => number
// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback: OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name, "!")
  let value25 = operationCallback(2, 5)
  console.log(
    "When we",
    operationCallback.name,
    "2 and 5, we get",
    value25,
    "."
  )
  console.log(
    "When we",
    operationCallback.name,
    value25,
    "and 7, we get",
    operationCallback(value25, 7),
    "."
  )
  console.log("Now fill out this worksheet.")
}

// Call your functions below:
mathTutor(multiply)
mathTutor(wrongAdd)

//Generic Types

type Human = { name: string, job: string }
type Dog = { name: string, tailWagSpeed: number }

type Family<T> = {
  parents: [T, T],
  mate: T,
  children: T[],
}
//Do not change the code above this line.

//Provide type annotations for the variables below:
let theFamily: Family<number> = {
  parents: [3, 4],
  mate: 9,
  children: [5, 30, 121],
}

let someFamily: Family<boolean> = {
  parents: [true, true],
  mate: false,
  children: [false, false, true, true],
}

let aFamily: Family<Human> = {
  parents: [
    { name: "Mom", job: "software engineer" },
    { name: "Dad", job: "coding engineer" },
  ],
  mate: { name: "Matesky", job: "engineering coder" },
  children: [{ name: "Babesky", job: "none" }],
}

let anotherFamily: Family<Dog> = {
  parents: [
    { name: "Momo", tailWagSpeed: 3 },
    { name: "Dado", tailWagSpeed: 100 },
  ],
  mate: { name: "Cheems", tailWagSpeed: 7 },
  children: [
    { name: "Puppin", tailWagSpeed: 0.001 },
    { name: "Puppenaut", tailWagSpeed: 0.0001 },
    { name: "Puppenator", tailWagSpeed: 0.01 },
  ],
}

// Generic Functions

function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value)
}

let stringArray: string[]
let numberArray: number[]
let personArray: { name: string, age: number }[]
let coordinateArray: [number, number][]

// Write your code below:
stringArray = getFilledArray < string > ("hi", 6)
numberArray = getFilledArray < number > (9, 6)
personArray =
  getFilledArray <
  { name: string, age: number } >
  ({ name: "J. Dean", age: 24 }, 6)
coordinateArray = getFilledArray < [number, number] > ([3, 4], 6)
