/*
    Things add in the story
    Removing the word “very”.
    Replacing “GW” with “George Washington”.
    Changing the imperial units of measurement (feet and miles) to metric units (meters and kilometers).
*/

//Story
let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a stunning 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.'

let storyWords = story.split(" ")
let unnecessaryWord = "literally"
let misspelledWord = "beautifull"
let badWord = "freaking"

//counter
let count = 0
storyWords.forEach(word => {
  count++
})

//filter
storyWords = storyWords.filter(word => {
  return word !== unnecessaryWord
})

//map
storyWords = storyWords.map(word => {
  if (word == misspelledWord) {
    return "beautiful"
  } else {
    return word
  }
})

//findIndex, finds a word in an index
const badWordIndex = storyWords.findIndex(word => {
  return word === "freaking"
  badWordIndex[78] = "really"
})

//replaces a word in an index
storyWords[78] = "really"

//every
let lengthCheck = storyWords.every(word => {
  return word.length < 10
})
console.log(lengthCheck)

//forEach
storyWords.forEach(word => {
  word.length > 10 && console.log(word)
})

console.log(`The Index of the bad word is ${badWordIndex}.`)

console.log(`There are ${count} words in the story.`)
console.log(storyWords.join(" "))
