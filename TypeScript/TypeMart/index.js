"use strict";
exports.__esModule = true
var _products_1 = require(".products");
var productName = "tote bag";
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = "457 Broadway, Utah";
var product = _products_1["default"].filter(function (product) {
    return product.name === productName;
})[0];
if (product.preOrder) {
    console.log("We will send you a notification, once your shipment ships.");
}
if (product.price > 25) {
    console.log("Your shipping will be free");
    shipping = 0;
}
else {
    shipping = 5;
}
if (shippingAddress.match("New York")) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;
console.log("\nProduct : ".concat(product.name, "\nAddress: ").concat(shippingAddress, "\nPrice: $").concat(product.price, "\nTax: $").concat(taxTotal.toFixed(2), "\nShipping: $").concat(shipping, "\nTotal: $").concat(total.toFixed(2), "\n"));
