//write a function that has two arrays, one array must be the squared value of the other array.  They do not need to be in the same insertion order
//  we will compare two arrays, and check if the value of the second array contains the values of the first array but squared (aka the power of 2)
// input:  we have two arrays of not necessarily the same length
//  QUESTION: if the arrays are not the same length than we can assume the answer is false? - YES
// output: true or false

// BREAKDOWN: loop through the first array and multiply each index by it's self - for example, [1,2,3] is going to be 1x1, 2x2, 3x3
    // store these squared values in new variable 
            // check to see if this  