
function calculateArea(width, height) {
    return width * height;
}


let width = 5;
let height = 10;
let area = calculateArea(width, height);
document.getElementById("area").innerHTML = "The area is: " + area;

let rectangle = {
    width: 5,
    height: 10,
    color: "blue",
   
    calculateArea: function () {
        return this.width * this.height;
    },
   
    changeColor: function (newColor) {
        this.color = newColor;
    }
};


document.getElementById("color").innerHTML = "Initial Rectangle Color: " + rectangle.color;

function changeRectangleColor() {
    rectangle.changeColor("green");
    document.getElementById("color").innerHTML = "New Rectangle Color: " + rectangle.color;
}

