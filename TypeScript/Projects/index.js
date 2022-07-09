"use strict";
exports.__esModule = true;
// importing from other files
var courses_1 = require("./courses");
var studyGroups_1 = require("./studyGroups");
function searchEvents(options) {
    var events = options.eventType === "courses" ? courses_1["default"] : studyGroups_1["default"];
    return events.filter(function (event) {
        if (typeof options.query === "number") {
            return event.id === options.query;
        }
        if (typeof options.query === "string") {
            return event.keywords.includes(options.query);
        }
    });
}
var searchResults = searchEvents({ query: "art", eventType: "courses" });
console.log(searchResults);
