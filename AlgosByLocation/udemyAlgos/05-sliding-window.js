/* This problem is for looking at an array and trying to 
find values that will be a subset of the previous array
WRITE A FUNCTION CALLED maxSubArraySum which accepts an array of integers and a number called n
The function should calculate the maximum sum of n consecutive elements in the array.
*/


//NAIVE SOLUTION - O(Nsquared) time
function maxSumArray(arr, num) {
    if (arr.length < num) {
        return null;
    }
    var max = -Infinity;
    //this loop will run until it hits the end of the "window" of the array
    //if we have an array with 10 values and we want to sum 4 digits, it will need to stop at index 5 which is the 6th number 
    for(let i = 0; i < arr.length - num +1 ; i++){
        var temp = 0;
        console.log(`first loop arr[i] equals ${arr[i]}`);
        //this will loop through the "window" of digits to add up our sum
        for(let j = 0; j < num; j++){
            console.log(`arr[j] equals ${arr[j]}`);
            //j loops multiple times before I moves
            //when arr[i+j] is at the 0 index, it equals the same number and is not incremented - but j moves on and i stays the same
            temp += arr[i +j]
            console.log(`temp equals ${temp}`);
        };
        if(temp > max) {
            max = temp;
        }
    }
    console.log(`Max equals ${max}`);
    return max;

}

//REFACTORED SOLUTION - only looping ONE time - O(N) time

function maxSumArray2(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if(num > arr.length) return null;
    
    for(i=0; i<num ; i++){
        maxSum += arr[i]
        console.log(`arr[i] in first loop is: ${arr[i]}`);
        console.log(`maxSum in first loop: ${maxSum}`);
    }
    tempSum = maxSum;
    console.log(`tempSum after first loop: ${tempSum}`);

    for(let i=num; i<arr.length; i++) {
        console.log(`arr[i-num] is: ${arr[i-num]}`);
        console.log(`arr[i] in second loop is: ${arr[i]}`);
        //arr[i-num] at first is index 0 because loop starts on num
        //then it moves up by one
        tempSum = tempSum - arr[i-num] + arr[i];
        console.log(`maxSum in second loop: ${maxSum}`);    
        console.log(`tempSum in second loop: ${tempSum}`);
        maxSum = Math.max(maxSum, tempSum);
    }
    console.log(maxSum);
    return maxSum;
}


//maxSumArray([6,2,5,2,8,1,5], 2) //10
//maxSumArray([1,2,5,2,8,1,5], 4) //17
//maxSumArray([4,2,1,6], 1) // 6
//maxSumArray([4,2,1,6,2], 4) // 13
//maxSumArray([], 4) //null

//maxSumArray2([6,2,5,2,8,1,5], 2) //10
maxSumArray2([1,2,5,2,8,1,5], 4) //17
//maxSumArray2([4,2,1,6], 1) // 6
//maxSumArray2([4,2,1,6,2], 4) // 13
//maxSumArray2([], 4) //null