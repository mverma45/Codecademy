let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!")
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!")
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`)
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!")
      },
    },
  },
}

// Write your code below
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
}

for (let crewMember in spaceship.crew) {
  console.log(
    `${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`
  )
}
//this keyword

const Robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  },
}

Robot.provideInfo()

console.log(Robot.provideInfo())

//getters

const robots = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return "My current energy level is " + this._energyLevel
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  },
}
console.log(robots.energyLevel)

//setters
const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors
    } else {
      return "Sensors are currently down."
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num
    } else {
      console.log("Pass in a number that is greater than or equal to 0")
    }
  },
}

robot.numOfSensors = 100
console.log(robot.numOfSensors)

//Factory function
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop")
    },
  }
}
const tinCan = robotFactory("P-500", true)
tinCan.beep()

//Property value shorthand
function robotFactory(model, mobile) {
  return {
    model,
    mobile,
    beep() {
      console.log("Beep Boop")
    },
  }
}

// To check that the property value shorthand technique worked:
const newRobot1 = robotFactory("P-501", false)
console.log(newRobot1.model)
console.log(newRobot1.mobile)

const robot = {
  model: "1E78V2",
  energyLevel: 100,
  functionality: {
    beep() {
      console.log("Beep Boop")
    },
    fireLaser() {
      console.log("Pew Pew")
    },
  },
}

//destructing

const { functionality } = robot

functionality.beep()


//Built-in Object Methods

//   model: "SAL-1000",
//   mobile: true,
//   sentient: false,
//   armor: "Steel-plated",
//   energyLevel: 75,
// }

// What is missing in the following method call?
const robotKeys = Object.keys(robot)

console.log(robotKeys)

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)

console.log(robotEntries)

// Declare newRobot below this line:
const newRobot = Object.assign({ laserBlaster: true, voiceRecognition: true })

console.log(newRobot)

