"use strict";
exports.__esModule = true;
var computer_vision_1 = require("./computer-vision");
var SteeringControl = /** @class */ (function () {
    function SteeringControl() {
    }
    SteeringControl.prototype.execute = function (command) {
        console.log("Executing: ".concat(command));
    };
    SteeringControl.prototype.turn = function (direction) {
        this.execute("Turn ".concat(direction));
    };
    return SteeringControl;
}());
var Car = /** @class */ (function () {
    function Car(props) {
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    Car.prototype.respond = function (events) {
        var _this = this;
        if (!this.isRunning) {
            return console.log("Car is off");
        }
        Object.keys(events).forEach(function (eventKey) {
            if (!events[eventKey]) {
                return;
            }
            if (eventKey === "ObstacleLeft") {
                _this.steeringControl.turn("right");
            }
            if (eventKey === "ObstacleRight") {
                _this.steeringControl.turn("left");
            }
        });
    };
    return Car;
}());
var steering = new SteeringControl();
var autonomousCar = new Car({ isRunning: true, steeringControl: steering });
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
