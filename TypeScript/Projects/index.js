"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importing from other files
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
let enrolledEvents = [];
function searchEvents(options) {
    const events = options.eventType === "courses" ? courses_1.default : studyGroups_1.default;
    return events.filter((event) => {
        if (typeof options.query === "number") {
            return event.id === options.query;
        }
        if (typeof options.query === "string") {
            return event.keywords.includes(options.query);
        }
    });
}
function enroll(event) {
    enrolledEvents = [...enrolledEvents, event];
}
const searchResults = searchEvents({ query: "art", eventType: "courses" });
enroll(searchResults[0]);
console.log(enrolledEvents);
function searchEvents(options) { }
