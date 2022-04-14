const arr = [1,2,3,4,5]

function sum () {
    //spreadArr = [...arr]
    let result = 0
    //could use for (const number of numbers) { result += number };
    for (i=0;i<=arr.length;i++) {
        result += i
    }
    return console.log(result)
}

let start1 = performance.now()
sum()
let end1 = performance.now()
console.log(end1-start1)

// CONSTANT TIME COMPLEXITY?
function sum2 () {
    let result =0
    arr.forEach(x => result += x)
    return console.log(result)
}

let start2 = performance.now()
sum2()
let end2 = performance.now()
console.log(end2-start2)

function sum3 () {
    let result = 0
    arr.reduce( (reduceSum, currNum) => reduceSum + currNum, 0)
    return console.log(result)
}

let start3 = performance.now()
sum3()
let end3 = performance.now()
console.log(end3-start3)