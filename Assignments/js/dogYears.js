// my age
const myAge = 40
// This is the first 2 years of life.
let earlyYears = 2

earlyYears *= 10.5

//This is the later years of life.
laterYears = myAge - 2

//This multiplies the laterYears by 4
laterYears *= 4

console.log(earlyYears)
console.log(laterYears)

// My age in dog years
let myAgeInDogYears = earlyYears + laterYears
//returns the string in all lower case
let myName = "MANNY".toLowerCase()

console.log(myAgeInDogYears)

// My age in Dog years sentence
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
)
