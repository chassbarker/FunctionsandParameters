// Create a function that takes parameters and returns a value
function calculateArea(width, height) {
    return width * height;
}

// Pass parameters into the function
let width = 5;
let height = 10;

// Invoke the function and pass the parameters out (get the return value)
let area = calculateArea(width, height);
console.log("The area is: " + area); // The area is: 50

// Create an object with multiple properties and methods
let rectangle = {
    width: 5,
    height: 10,
    color: "blue",
    // Method to calculate the area
    calculateArea: function() {
        return this.width * this.height;
    },
    // Method to change the color
    changeColor: function(newColor) {
        this.color = newColor;
    }
};

// Access object properties and invoke methods
console.log("Rectangle Area: " + rectangle.calculateArea()); // Rectangle Area: 50
console.log("Rectangle Color: " + rectangle.color); // Rectangle Color: blue

// Event simulation (changing color of the rectangle)
rectangle.changeColor("green");
console.log("New Rectangle Color: " + rectangle.color); // New Rectangle Color: green

