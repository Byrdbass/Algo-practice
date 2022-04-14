const n = 10
function sumUp(n) {
    let result = 0;
    for (let i = 1; i<= n; i++) {
        result += i
    }
    return result
}

let start = performance.now();
sumUp()
let end = performance.now();
let time = end - start;
//console.log(start);
//console.log(end)
console.log(time)