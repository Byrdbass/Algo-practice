/*
Implement a function called, areThereDuplicates, which accepts a 
VARIABLE NUMBER OF ARGUMENTS,
and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/


//SOLUTION ON MY OWN
function areThereDuplicates(...args) {
    let obj = {}
    let hasDuplicates = false
    for (let val of args) {
        obj[val] = (obj[val] || 0) + 1
    }
    let valArray = Object.values(obj)
    for (let i = 0; i < valArray.length; i++) {
        console.log(valArray[i]);
        if (valArray[i] > 1) {
            console.log("contains duplicates");
            hasDuplicates = true
        }
        console.log("does not contain duplicates");
    }
    return hasDuplicates;
}

//GIVEN SOLUTION - for loop with in arguments
function areThereDuplicates2() {
    let collection = {};
    for (let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }
    for (let key in collection) {
        if (collection[key] > 1) {
            console.log("contains duplicates");
            return true;
        }
        console.log("does not contain duplicates");
        return false;
    }
}

//GIVEN SOLUTION - with multiple pointers
function areThereDuplicates3(...args) {
    //two pointers
    args.sort((a, b) => a > b);
    let start = 0
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            console.log("contains duplicates");
            return true;
        }
        start++
        next++
        console.log("does not contain duplicates");
        return false;
    }

}
//GIVEN SOLUTION - ONE LINER!
function areThereDuplicates4() {
    console.log(new Set(arguments));
    console.log(new Set(arguments).size);
    console.log(new Set(arguments).size !== arguments.length);
    return new Set(arguments).size !== arguments.length
}

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

// areThereDuplicates2(1, 2, 3) // false
// areThereDuplicates2(1, 2, 2) // true 
// areThereDuplicates2('a', 'b', 'c', 'a') // true 

// areThereDuplicates3(1, 2, 3) // false
// areThereDuplicates3(1, 2, 2) // true 
// areThereDuplicates3('a', 'b', 'c', 'a') // true 

areThereDuplicates4(1, 2, 3) // false
areThereDuplicates4(1, 2, 2) // true 
areThereDuplicates4('a', 'b', 'c', 'a') // true
