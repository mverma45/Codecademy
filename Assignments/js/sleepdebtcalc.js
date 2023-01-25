const getSleepHours = day => {
    if (day === "Monday") {
      return 8
    } else if (day === "Tuesday") {
      return 7
    } else if (day === "Wednesday") {
      return 6
    } else if (day === "Thursday") {
      return 8
    } else if (day === "Friday") {
      return 12
    } else if (day === "Saturday") {
      return 3
    } else if (day === 'Sunday'){
      return 12
    } else {
      return ("error")
    }
  }
  
  // console.log(getSleepHours('Monday'))
  const getActualSleepHours = () => 
      getSleepHours("Monday") +
      getSleepHours("Tuesday") +
      getSleepHours("Wednesday") +
      getSleepHours("Thursday") +
      getSleepHours("Friday") +
      getSleepHours("Saturday") +
      getSleepHours("Sunday")
  
  const getIdealSleepHours = () => {
    let idealHours = 8
    return idealHours * 7
  }
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours()
  
    if (actualSleepHours === idealSleepHours) {
      console.log(`You got the right amount of sleep which is perfect.`)
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got ${actualSleepHours - idealSleepHours} more sleep than needed`)
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`You got ${idealSleepHours - actualSleepHours}, less sleep, you need more rest.`)
    } else {
      console.log(`Error, something went wrong.`)
    }
  }
  console.log(getActualSleepHours())
  console.log(calculateSleepDebt());
  // calculateSleepDebt()
  