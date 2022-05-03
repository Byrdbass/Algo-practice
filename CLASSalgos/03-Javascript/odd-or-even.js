// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function(num) {
    if (num % 2 !=0) {
        return "odd"
    }
    return "even"
    // let isOdd = num % 2 
    // console.log(isOdd)
};

num1 = 11
console.log(oddOrEven(num1))

module.exports = { oddOrEven };