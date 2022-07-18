import {
  RaccoonMeadowsVolunteers,
  RaccoonMeadowsActivity,
  raccoonMeadowsVolunteers,
} from "./raccoon-meadows-log"

import {
  WolfPointVolunteers,
  WolfPointActivity,
  wolfPointVolunteers,
} from "./wolf-point-log"

type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity

type Volunteers = {
  id: number
  name: string
  activities: CombinedActivity[]
}

function combineVolunteers(
  volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]
) {
  volunteers.map(volunteer => {
    let id = volunteer.id
    if (typeof id === "string") {
      return volunteer
    }
    type Volunteers = {
      id: number
      name: string
      activities: CombinedActivity[]
    }
  })
}

function calculateHours(volunteers: Volunteers[]) {
  return volunteers.map(volunteer => {
    let hours = 0

    volunteer.activities.forEach(activity => {})

    return {
      id: volunteer.id,
      name: volunteer.name,
      hours: hours,
    }
  })
}

const combinedVolunteers = combineVolunteers(
  [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers)
)
console.log(combinedVolunteers)
