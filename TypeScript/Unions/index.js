// unions
// Add a union to the statement parameter with two type members: string and number.
function printNumsAndStrings(statement) {
    console.log("\u2139\uFE0F LOG:: ".concat(statement));
}
// call the printNumsAndStrings() function twice, once with a number as its argument and once with a string its argument,
printNumsAndStrings("hello!");
printNumsAndStrings(15);
// Type Narrowing
// Write a type guard that checks if the typeof value is a 'string'. If it is, then console.log() the string as a lowercase string with .toLowerCase().
// write another type guard that checks if value is a 'number'. If it is, then console.log() the number with two zeros after the decimal with .toFixed(2).
function formatValue(value) {
    // Write your code here
    if (typeof value === "string") {
        console.log(value.toLowerCase());
    }
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
}
formatValue("Hiya");
formatValue(42);
function createUser() {
    var randomChance = Math.random() >= 0.5;
    if (randomChance) {
        return { id: 1, username: "nikko" };
    }
    else {
        return "Could not create a user.";
    }
}
var userData = createUser();
// Unions and Arrays
// Look at the definition of formatListings(), then define a union array type on the listings parameter.
function formatListings(listings) {
    return listings.map(function (listing) {
        if (typeof listing === "string") {
            return listing.toUpperCase();
        }
        if (typeof listing === "number") {
            return "$".concat(listing.toLocaleString());
        }
    });
}
var result = formatListings([
    "123 Main St",
    226800,
    "580 Broadway Apt 4a",
    337900,
]);
console.log(result);
function getFriendNameFromEvent(event) {
    return event.displayName || event.username;
}
var newEvent = {
    username: "vkrauss",
    displayName: "Veronica Krauss"
};
var friendName = getFriendNameFromEvent(newEvent);
console.log("You have an update from ".concat(friendName, "."));
function downloadStatus(status) {
    if (status === "idle") {
        console.log("Download");
    }
    if (status === "downloading") {
        console.log("Downloading...");
    }
    if (status === "complete") {
        console.log("Your download is complete!");
    }
    return downloadStatus("idle");
}
