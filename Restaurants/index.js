"use strict"
exports.__esModule = true
var restaurants_1 = require("./restaurants")
var dollarSigns = "$$"
var deliveryTimeMax = 90
var maxDistance = 10
var result
var hour = new Date().getHours()
var priceBracket = dollarSigns.length
var filteredRestaurants = restaurants_1["default"].filter(function (
  restaurant
) {
  if (Number(restaurant.priceBracket) > priceBracket) {
    return false
  }
  if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
    return false
  }
  var maxDistance = 10
  if (restaurant.distance > maxDistance) {
    return false
  }
  if (hour < restaurant.openHour || hour > restaurant.closeHour) {
    return false
  }
  return restaurant
})
if (filteredRestaurants.length === 0) {
  result = "There are no restaurants available right now."
} else {
  result = "We found "
    .concat(filteredRestaurants.length, " restaurants, the first is ")
    .concat(filteredRestaurants[0].name, ".")
}
console.log(result)
