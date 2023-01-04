// importing from other files
import courses from "./courses"
import studyGroups from "./studyGroups"

import studyGroups from "./studyGroups"
import studyGroup from "./studyGroups"

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

let enrolledEvents: (Course | StudyGroup)[] = []


let enrolledEvents: (Course | StudyGroup)[] = []


// searching through events
type SearchEventsOptions = {
  query: string | number
  eventType: "courses" | "groups"
}


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

function searchEvents(options: SearchEventsOptions) {}

