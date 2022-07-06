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
