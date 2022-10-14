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

//NAIVE SOLUTION
function search(arr, val) {
    for(let i = 0; i<arr.length; i++){
        if(arr[i]===val){
            console.log(`${i} is the index location of the value`);
            return i;
        }
    }
    return -1
}

search([1,2,3,4,5,6],4) //3
search([1,2,3,4,5,6],6) //5
search([1,2,3,4,5,6],11) //-1