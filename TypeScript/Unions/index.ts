// unions
// Add a union to the statement parameter with two type members: string and number.
function printNumsAndStrings(statement: string | number) {
  console.log(`ℹ️ LOG:: ${statement}`)
}

// call the printNumsAndStrings() function twice, once with a number as its argument and once with a string its argument,
printNumsAndStrings("hello!")
printNumsAndStrings(15)

// Type Narrowing
// Write a type guard that checks if the typeof value is a 'string'. If it is, then console.log() the string as a lowercase string with .toLowerCase().

// write another type guard that checks if value is a 'number'. If it is, then console.log() the number with two zeros after the decimal with .toFixed(2).

function formatValue(value: string | number) {
  // Write your code here
  if (typeof value === "string") {
    console.log(value.toLowerCase())
  }
  if (typeof value === "number") {
    console.log(value.toFixed(2))
  }
}

formatValue("Hiya")
formatValue(42)

// Inferred Union Return Types
// Declare a variable named userData that stores the returned value of createUser(). Then, go back and provide userData with the correct union type.
type User = {
  id: number
  username: string
}

function createUser() {
  const randomChance = Math.random() >= 0.5

  if (randomChance) {
    return { id: 1, username: "nikko" }
  } else {
    return "Could not create a user."
  }
}

const userData: string | User = createUser()

// Unions and Arrays
// Look at the definition of formatListings(), then define a union array type on the listings parameter.

function formatListings(listings: (string | number)[]) {
  return listings.map(listing => {
    if (typeof listing === "string") {
      return listing.toUpperCase()
    }

    if (typeof listing === "number") {
      return `$${listing.toLocaleString()}`
    }
  })
}

const result = formatListings([
  "123 Main St",
  226800,
  "580 Broadway Apt 4a",
  337900,
])

console.log(result)

// Common Key Value Pairs
//  adding a type to the getFriendNameFromEvent()’s event parameter. Use a union to allow event to be a Like or a Share. In the Share type, add a displayName of type string, just like on the Like type.

type Like = {
  username: string
  displayName: string
}

type Share = {
  username: string
  displayName: string
}

function getFriendNameFromEvent(event: Like | Share) {
  return event.displayName || event.username
}

const newEvent = {
  username: "vkrauss",
  displayName: "Veronica Krauss",
}

const friendName = getFriendNameFromEvent(newEvent)

console.log(`You have an update from ${friendName}.`)

// Unions with Literal Types
//
type Status = "idle" | "downloading" | "complete"

function downloadStatus(status: Status) {
  if (status === "idle") {
    console.log("Download")
  }
  if (status === "downloading") {
    console.log("Downloading...")
  }
  if (status === "complete") {
    console.log("Your download is complete!")
  }
  return downloadStatus("idle")
}
