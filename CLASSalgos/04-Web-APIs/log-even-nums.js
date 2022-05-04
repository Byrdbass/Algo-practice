// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function (num) {
    let answer = 0
    console.log(answer)
    for (i = 0; i < num/2; i++) {
        answer += 2
        console.log(answer)
    }
    
    //return answer
};

let num1 = 10;

console.log(logEvenNums(num1));
