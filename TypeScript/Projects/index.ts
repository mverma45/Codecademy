// importing from other files
import courses from "./courses"
<<<<<<< HEAD
import studyGroups from "./studyGroups"
=======

import studyGroups from "./studyGroups"
import studyGroup from "./studyGroups"
>>>>>>> origin/master

// defining types for the data that was imported.
type Course = {
  id: number
  studyGroupId: number
  title: string
  keywords: string[]
  eventType: string
}

type StudyGroup = {
  id: number
  courseId: number
  title: string
  keywords: string[]
  eventType: string
}

<<<<<<< HEAD
let enrolledEvents: (Course | StudyGroup)[] = []

=======

let enrolledEvents: (Course | StudyGroup)[] = []


>>>>>>> origin/master
// searching through events
type SearchEventsOptions = {
  query: string | number
  eventType: "courses" | "groups"
}

<<<<<<< HEAD
=======

>>>>>>> origin/master
function searchEvents(options: SearchEventsOptions) {
  const events: (Course | StudyGroup)[] =
    options.eventType === "courses" ? courses : studyGroups

  return events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === "number") {
      return event.id === options.query
    }

    if (typeof options.query === "string") {
      return event.keywords.includes(options.query)
    }
  })
}

function enroll(event: Course | StudyGroup) {
  enrolledEvents = [...enrolledEvents, event]
}

const searchResults = searchEvents({ query: "art", eventType: "courses" })

enroll(searchResults[0])

console.log(enrolledEvents)
<<<<<<< HEAD
=======

function searchEvents(options: SearchEventsOptions) {}

>>>>>>> origin/master
