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

// Add Type alias below:

type Coord = [number, number, string, number, number, string]

let codecademyCoordinates: Coord = [40, 43.2, "N", 73, 59.8, "W"]
let bermudaTCoordinates: Coord = [25, 0, "N", 71, 0, "W"]

// Math Operations
// Function Types
function add(a, b) {
  return a + b
}
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
