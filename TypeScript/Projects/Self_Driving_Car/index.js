"use strict";
exports.__esModule = true;
var SteeringControl = /** @class */ (function () {
    function SteeringControl() {
    }
    SteeringControl.prototype.execute = function (command) {
        console.log("Executing: ".concat(command));
    };
    SteeringControl.prototype.turn = function (direction) {
        this.execute("Turn: ".concat(direction));
    };
    return SteeringControl;
}());
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
var steering = new SteeringControl();
var autonomousCar = new Car({ isRunning: true });
steering.turn("right");
// autonomousCar.respond(getObstacleEvents())
