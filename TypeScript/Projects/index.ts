// importing from other files
import courses from "./courses"
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

// searching through events
type SearchEventsOptions = {
  query: string | number
  eventType: "courses" | "groups"
}

function searchEvents(options: SearchEventsOptions) {}
