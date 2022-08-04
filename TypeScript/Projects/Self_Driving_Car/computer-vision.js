"use strict";
exports.__esModule = true;
exports.getObstacleEvents = void 0;
function getObstacleEvents() {
    var coinFlip = Boolean(Math.random() > 0.5);
    return {
        ObstacleLeft: coinFlip,
        ObstacleRight: !coinFlip
    };
}
exports.getObstacleEvents = getObstacleEvents;
