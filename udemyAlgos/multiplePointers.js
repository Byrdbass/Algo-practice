/* write a function called sumZero which accepts a sorted array of integers.  
The function should find the FIRST pair where the sum is 0. 
Return an array that includes both values that sum 
to zero or undefined if a pair does not exist */

//ASSUME ARRAY IS SORTED ALREADY!

/* NOTES TO SELF:
we will need to create 2 variables that point to an index location in the array
the first pointer will start at index 0 and move up, the second
will start at the .length -1 of the array and move back
IF the sum of the two integers = 0, we return those values */

array1 = [-3,-2,-1,0,1,2,3];
array2 = [-4,-2,-1,0,1,2,5];

//REFACTORED SOLUTION
function sumZero3(arr) {
    let start = 0;
    let end = arr.length-1;
    while(start < end) {
        let sum = arr[start] + arr[end];
        if (sum === 0){
            console.log([arr[start], arr[end]]);
            return [arr[start], arr[end]];
        }
        else if (sum >0) {
            end--;
        }
        else {
            start++;
        }
    }

}

//NAIVE SOLUTION
function sumZero2(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; i < arr.length; i++){
            if(arr[i] + arr[j] === 0) {
                console.log([arr[i], arr[j]]);
                return [arr[i], arr[j]];
            }
        };
    };
}

//ATTEMPT WITHOUT HELP
function sumZero(arr) {
    let start = arr[0];
    let end = arr[(arr.length-1)]
    //console.log(end);
    let matchObj = []
    while(start + end !== 0){
        //start = arr[(1++)]
        //end = arr[(arr.length--)]

    }
    matchObj.push(start)
    matchObj.push(end)
    console.log(matchObj);

    //OR

    for(let i = 0; i < arr.lengthen; i++){
        let start = arr[i];
        return start

    };
    for(let i = arr.length; i >=0 ; i--){
        let end = arr[i];
        return end;
    };
    return matchObj
}

//sumZero(array1);
sumZero2(array1);
sumZero3(array2);