const n = 10
function sumUp(n) {
    return (n/2) * (1 + n);
}

let start = performance.now();
sumUp()
let end = performance.now();
let time = end - start;
//console.log(start);
//console.log(end)
console.log(time)