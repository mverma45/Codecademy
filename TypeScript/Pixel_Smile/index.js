// create the image data
var imageWidth = 20;
var imageHeight = 8;
var imageData = createImageData();
// draw head
drawRectangle(0, 0, 20, 8);
// eyes
drawDot(7, 2);
drawDot(12, 2);
// smile
drawDot(4, 4);
drawHorizontalLine(4, 5, 12);
drawDot(15, 4);
// output what we drew to the console
outputImage();
function drawRectangle(x, y, width, height) {
    // top
    drawHorizontalLine(x, y, width);
    // bottom
    drawHorizontalLine(x, y + height - 1, width);
    // left
    drawVerticalLine(x, y, height);
    // right
    drawVerticalLine(x + width - 1, y, height);
}
/**
 * Gets if the provided point is in the image.
 * @param x - The horizontal position within
 * the image.
 * @param y - The vertical position within
 * the image.
 */
function isPointInImage(x, y) {
    return x >= 0 && x < imageWidth && y >= 0 && y < imageHeight;
}
/**
 * Outputs the image data state to the console.
 * @param onChar - Character to render an
 * "on" pixel with.
 * @param offChar - Character to render an
 * "off" pixel with.
 */
function outputImage(onChar, offChar) {
    if (onChar === void 0) { onChar = "X"; }
    if (offChar === void 0) { offChar = " "; }
    var text = "";
    for (var i = 0; i < imageData.length; i++) {
        if (i > 0 && i % imageWidth === 0) {
            text += "\n"; // new line
        }
        text += imageData[i] ? onChar : offChar;
    }
    console.log(text);
}
function createImageData() {
    // create array of size `length` containing `false` values
    var length = imageWidth * imageHeight;
    return new Array(length).fill(false);
}
function drawDot(x, y) {
    if (isPointInImage(x, y)) {
        imageData[y * imageWidth + x] = true;
    }
}
function drawHorizontalLine(x, y, length) {
    for (var i = 0; i < length; i++) {
        drawDot(x + i, y);
    }
}
function drawVerticalLine(x, y, length) {
    for (var i = 0; i < length; i++) {
        drawDot(x, i + y);
    }
}
