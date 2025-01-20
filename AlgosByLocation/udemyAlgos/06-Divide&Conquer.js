/*
This pattern involves dividing a data set into smaller chunks and then 
repeating a process with a subset of data.

this pattern can tremendously decrease time complexity
*/

/*
Given a SORTED array of integers, write a function called search, that accepts a value
and returns the INDEX where the value passed to the function is located.
If the value is not Found, return -1
*/

//NAIVE SOLUTION - linear search O(n) - not dividing and conquering
function search(arr, val) {
    for(let i = 0; i<arr.length; i++){
        if(arr[i]===val){
            console.log(`${i} is the index location of the value`);
            return i;
        }
    }
    return -1
}


//REFACTOR - binary search - Log(n) time - WORKS IF SORTED!!
function search2(arr,val) {
    //setting up 2 of 3 pointers
    let min = 0;
    let max = arr.length-1
    while(min <= max) {
        //using Math.floor in case it is an odd numbered array
        //setting up middle pointer
        let middle = Math.floor((min+max) / 2);
        console.log(`middle index is ${middle}`);
        let currentElement = arr[middle];
        console.log(`currentElement is now ${currentElement}`);

        if(currentElement < val) {
            min = middle+1;
            console.log(`min is now: ${min}`);
        }

        else if(currentElement > val) {
            max = middle-1;
            console.log(`max is now: ${max}`);
        }
        //this is when the value matches the middle index
        console.log(`solution is ${middle}`);
        else return middle;
    }
    //edge case where value is not present
    console.log(`solution is -1`);
    return -1
}


// search([1,2,3,4,5,6],4) //3
// search([1,2,3,4,5,6],6) //5
// search([1,2,3,4,5,6],11) //-1

search2([1,2,3,4,5,6],4) //3
//search2([1,2,3,4,5,6],6) //5
//search2([1,2,3,4,5,6],11) //-1