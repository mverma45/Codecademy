/*
reduce method
keeps track of the running total.
*/

const newNumbers = [91, 23, 15, 72]
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator)
  console.log("The value of currentValue: ", currentValue)
  return accumulator + currentValue
  console.log(newSum)
}, 1)

/*
1 is the accumulator, it adds to the first element of the array 91 to make it accumlator 92 and so on.  if the 1 was not on line 12 it would make the accumulator 91 and the currentValue 23 then it would add 91+23 to make the accumulator 114, currentValue would be 15, then the accumulator after that iteration would be 129 (114+15) currentValue would be 72 so on.

output of the above code
The value of accumulator:  1
The value of currentValue:  91
The value of accumulator:  92
The value of currentValue:  23
The value of accumulator:  115
The value of currentValue:  15
The value of accumulator:  130
The value of currentValue:  72
*/
