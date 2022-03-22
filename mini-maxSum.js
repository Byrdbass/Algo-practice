//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
//Then print the respective minimum and maximum values as a single line of two space-separated long integers.

arr = [256741038, 623958417, 467905213, 714532089, 938071625]
// find the minimum value of an array and store to a variable
const minValue = Math.min(...arr)
//console.log(minValue)
// loop through the array and compare it to the min value, if it is greater than the min value push these indexes into a new array
const maxArray = arr.filter(i => i>minValue)
// add up all the elements of the max array
const maxSum = maxArray.reduce((total, curValue) => total +curValue, 0);
console.log(maxSum)



// find the maximum value of the array and store to a variable
const maxValue = Math.max(...arr)
//console.log(maxValue)
// loop through the array and compare it to the max value, if it is less than the max value push these indexes into a new array called minArray
const minArray = arr.filter(i => i<maxValue)
//console.log(minArray)
// add up all the elements of the minArray
const minSum = minArray.reduce((total, curValue) => total + curValue, 0)
console.log(minSum)

// print with two spaces in between each returned value in one line
console.log(minSum + '  ' + maxSum)