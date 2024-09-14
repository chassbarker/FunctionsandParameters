// Function to calculate the area
function calculateArea(width, height) {
    return width * height;
}

// Invoke function and display the area
let width = 5;
let height = 10;
let area = calculateArea(width, height);
document.getElementById("area").innerHTML = "The area is: " + area;

// Create an object with properties and methods
let rectangle = {
    width: 5,
    height: 10,
    color: "blue",
    // Method to calculate the area
    calculateArea: function () {
        return this.width * this.height;
    },
    // Method to change the color
    changeColor: function (newColor) {
        this.color = newColor;
    }
};

// Display initial color
document.getElementById("color").innerHTML = "Initial Rectangle Color: " + rectangle.color;

// Function to change the rectangle color on button click (event)
function changeRectangleColor() {
    rectangle.changeColor("green");
    document.getElementById("color").innerHTML = "New Rectangle Color: " + rectangle.color;
}

