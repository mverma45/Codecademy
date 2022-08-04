/* The syntaxes for type and interface are slightly different, since interface does not require an equals sign (=) before the typed object. Functionally, the two Mail types in the example are identical: both will enforce the typed object at compile time when typing a variable.
 Interfaces and types */
// Write an interface here
interface Run {
  miles: number
}

function Run(run: any) {}

function updateRunGoal(run) {
  console.log(`
Miles left:       ${50 - run.miles}
Percent of goal:  ${(run.miles / 50) * 100}% complete
  `)
}

updateRunGoal({
  miles: 5,
})
/*  
Interfaces and Classes
*/
// Write an interface here
interface Directory {
  addFile: (name: string) => void
}

class DesktopDirectory implements Directory {
  addFile(name: string) {
    console.log(`Adding file: ${name}`)
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`)
  }
}

const Desktop = new DesktopDirectory()

Desktop.addFile("lesson-notes.txt")
Desktop.showPreview("lesson-notes.txt")
/*
Deep Types
*/
interface Directory {
  addFile: (name: string) => void
  // Define a config type member here
  config: {
    default: {
      encoding: string
      permissions: string
    }
  }
}

class DesktopDirectory implements Directory {
  config = {
    default: {
      encoding: "utf-8",
      permissions: "drw-rw-rw-",
    },
  }

  addFile(name: string) {
    console.log(`Adding file: ${name}`)
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`)
  }
}

const Desktop = new DesktopDirectory()

console.log(Desktop.config)
/*
Composed Types 
*/
interface Directory {
  addFile: (name: string) => void
  config: Config
}

interface DefaultConfig {
  encoding: string
  permissions: string
}

interface Config {
  default: DefaultConfig
}

class DesktopDirectory implements Directory {
  config = {
    default: {
      encoding: "utf-8",
      permissions: "drw-rw-rw-",
    },
  }

  addFile(name: string) {
    console.log(`Adding file: ${name}`)
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`)
  }
}

const Desktop = new DesktopDirectory()

console.log(Desktop.config)
/*
Extending Interfaces
*/
interface Developer extends Human {
  code: () => void
}

// Add your interface here
interface Human {
  name: string
  hobbies: string[]
}

const me: Developer = {
  code: () => console.log("Headphones on. Coffee brewed. Editor open."),
  name: "Corrina",
  hobbies: ["Building rockets"],
}

me.code()
/*
Index Signatures
*/
import { getBudgetAsync } from "./api"

// Write an interface here
interface Budget {
  [category: string]: number
}

async function getBudget() {
  const result: Budget = await getBudgetAsync()
  console.log(result)
}

getBudget()
/*
Optional Type Members
*/
// Write an interface here
interface UserNameOptions {
  firstName?: string
  lastName?: string
  username: string
}
function getUserName(options: UserNameOptions) {
  if (options.firstName && options.lastName) {
    return console.log(`${options.firstName} ${options.lastName}`)
  }

  return console.log(options.username)
}

getUserName({
  firstName: "Mr.",
  lastName: "Oshiro",
  username: "hotelowner304",
})

getUserName({
  firstName: "Madeline",
  username: "mountainClimber",
})
