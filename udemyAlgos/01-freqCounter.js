//write a function that has two arrays, one array must be the squared value of the other array.  They do not need to be in the same insertion order
//  we will compare two arrays, and check if the value of the second array contains the values of the first array but squared (aka the power of 2)


/* for example:
same([1,2,3], [4,1,9]) //true
same([1,2,3], [1,9]) //false
same([1,2,1], [4,4,1]) //false (must be same frequency)
*/


// input:  we have two arrays of not necessarily the same length
//  QUESTION: if the arrays are not the same length than we can assume the answer is false? - YES
// output: true or false

// BREAKDOWN: loop through the first array and multiply each index by it's self - for example, [1,2,3] is going to be 1x1, 2x2, 3x3
    // store these squared values in new variable 
            // check to see if this  

const arr1 = [1,2,3];
const arr2 = [4,1,9];

//REFACTORED SOLUTION
const same2 = (arr1,arr2) =>{
    if(arr1.length !== arr2.length) {
        console.log(false)
        return false;
    }

    let freqCounter1 = {};
    let freqCounter2 = {};
    //val is the same as index here
    for (let val of arr1){
        //indexes start at 0 in an array!
        freqCounter1[val] = (freqCounter1[val]|| 0) +1
    }
    for (let val of arr2){
        freqCounter2[val] = (freqCounter2[val]|| 0) +1
    }
    for(let key in freqCounter1) {
        if(!(key ** 2 in freqCounter2)){
            console.log(false);
            return false
        }
        if(freqCounter2[key ** 2] !== freqCounter1[key]){
            console.log(false);
            return false
        }
    }
    console.log(true);
    return true
}


//NAIVE SOLUTION
const same = (arr1, arr2) => {
    let len1 = arr1.length;
    let len2 = arr2.length;
    if(len1 !== len2){
    console.log(false);
    return false
    }

    for(let i = 0; i<len1; i++){
        //what is the index of arr2 where arr[i] is squared?
        let correctIndex = arr2.indexOf(arr1[i] ** 2)

        if(correctIndex === -1) {
            console.log(false)
            return false
        }
        
        //removes the number that is squared - BUT WHY?
        // we need to remember which index is squared without duplication
        console.log(arr2);
        arr2.splice(correctIndex,1);
    }
    console.log(true);
    return true;
}
//same(arr1,arr2)
same2(arr1,arr2)