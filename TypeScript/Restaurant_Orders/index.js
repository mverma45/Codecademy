"use strict";
exports.__esModule = true;
var orders_1 = require("./orders");
/// Add your getMaxPrice() function below:
function getMaxPrice(price) {
    switch (price) {
        case orders_1.PriceBracket.Low:
            return 10;
        case orders_1.PriceBracket.Medium:
            return 20;
        case orders_1.PriceBracket.High:
            return 30;
    }
}
/// Add your getOrders() function below:
function getOrders(price, orders) {
    var filteredOrders = [];
    orders[0].filter(function (order) { return order.price <= getMaxPrice[price]; });
    orders.forEach(function (restaurant) {
        var result = restaurant.filter(function (order) { return order.price <= getMaxPrice[price]; });
        filteredOrders.push(result);
    });
    return filteredOrders;
}
/// Add your printOrders() function below:
function printOrders(restaurants, orders) {
    restaurants.forEach(restaurants, Restaurant, index, number);
    {
        if (orders[index].length > 0) {
            console.log(restaurant.name);
<<<<<<< HEAD
            orders[index].forEach(orders);
=======
            orders[index].forEach(order);
>>>>>>> c22e95a (adding codecademy stuff)
            {
                console.log('- ${order.name}: ${order.price}');
            }
        }
    }
}
/// Main
// const elligibleOrders = getOrders(PriceBracket.Low, orders)
// console.log(elligibleOrders)
// printOrders(restaurants, elligibleOrders);
