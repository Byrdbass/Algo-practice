// Fill in the body of each function with the code required

var add = function(num1, num2) {
    var sum = num1 + num2
    console.log(sum)
};

var subtract = function(num1, num2) {
    var diff = Math.abs(num1 - num2)
    console.log(diff)
};

var multiply = function(num1, num2) {
    var product = num1 * num2
    console.log(product)
};

var divide = function(num1, num2) {
    var quotient = num1/num2
    console.log(quotient)
};

num1 = 5;
num2 = 10;
num3 = 7;
num4 = 8;

add(num1, num2);
subtract(num1, num2);
multiply(num1, num2);
divide(num1, num2);

add(num3, num4);
subtract(num3, num4);
multiply(num3, num4);
divide(num3, num4);