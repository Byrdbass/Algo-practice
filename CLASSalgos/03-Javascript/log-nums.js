// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

var logNums = function(num) {
    let start = 1
    for (let i = 0; i < num-1; i ++){
        
        console.log(start ++);
    }
    return start
};

num1 = 10;
console.log(logNums(num1));

module.exports = { logNums };