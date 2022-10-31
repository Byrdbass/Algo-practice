/*
Implement a function called, areThereDuplicates, which accepts a 
VARIABLE NUMBER OF ARGUMENTS,
and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/


//SOLUTION ON MY OWN
function areThereDuplicates(...args){
    let obj = {}
    let hasDuplicates = false
    for (let val of args){
        obj[val] = (obj[val] || 0 ) +1
    }
    let valArray = Object.values(obj)
    for (let i =0; i<valArray.length ; i++) {
        console.log(valArray[i]);
        if(valArray[i]>1){
            console.log("contains duplicates");
            hasDuplicates = true
        }
        console.log("does not contain duplicates");
    }
    return hasDuplicates;
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 