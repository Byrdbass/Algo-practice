// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    let count = num
    let product = 1;
    while (count > 0){
        product *= count;
        count--;
    }
    return product;
};

function factorial2( num ) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num-1);
}
