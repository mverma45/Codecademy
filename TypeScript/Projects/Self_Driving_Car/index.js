"use strict";
exports.__esModule = true;
var computer_vision_1 = require("./computer-vision");
var Car = /** @class */ (function () {
    function Car(props) {
        this.isRunning = props.isRunning;
    }
    Car.prototype.respond = function (events) {
        if (!this.isRunning) {
            return console.log("Car is off");
        }
    };
    return Car;
}());
var autonomousCar = new Car({ isRunning: false });
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
