let raceNumber = Math.floor(Math.random() * 1000)
let regEarly = false
let runnerAge = 18

if (regEarly && runnerAge > 18) {
  raceNumber += 1000
}
if (regEarly && runnerAge > 18) {
  console.log(
    `Your race time is 9:30 AM and your race number is ${raceNumber}.`
  )
} else if (!regEarly && runnerAge > 18) {
  console.log(
    `Your race time is 11:00 AM and your race number is ${raceNumber}.`
  )
} else if (runnerAge < 18) {
  console.log(
    `Your race time is 12:30 PM and your race number is ${raceNumber}.`
  )
} else {
  console.log(`Please check at the registration desk.`)
}
