//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
//Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum() {
    let arr = [7,69,2,221,8974]
    //find the max value of the array using spread operator to convert the array to integers instead of the data structure of an array
    let maxVal = Math.max(...arr);
    // copy the array to a new variable to modify it
    let minArr = [...arr];
    // remove one integer from the array where the index is equal to the max value
    minArr.splice(minArr.indexOf(maxVal), 1);
    // set an initial value to a sum to build onto it with forEach method
    let minSum = 0
    minArr.forEach(x => minSum += x);

    let minVal = Math.min(...arr);
    let maxArr = [...arr];
    maxArr.splice(maxArr.indexOf(minVal), 1);
    let maxSum = 0;
    maxArr.forEach(x => maxSum += x);

    console.log(minSum + ' ' + maxSum)
}

miniMaxSum();


// let newArr = [...arr]

// // var isSame  = true;
// // function compare(newArr) {
    
// //     for (let i=0; i<newArr.length; i++) {
// //         isSame = newArr[0] === newArr[i] ? true : false;
// //     }
// //     console.log(isSame);
// // }

// // find the minimum value of an array and store to a variable
// const minValue = Math.min(...newArr)
// console.log(minValue)
// //newArr.filter((v, i) => newArr.indexOf(v) != i)
// newArr.splice(newArr.filter((v, i) => newArr.indexOf(v) != i), 1)
// console.log(newArr)
// // loop through the array and compare it to the min value, if it is greater than the min value push these indexes into a new array
// const maxArray = newArr.filter(i => i>=minValue)
// console.log(maxArray)
// // add up all the elements of the max array
// const maxSum = maxArray.reduce((total, curValue) => total + curValue, 0);
// console.log(maxSum)


// let newArr2 = [...arr]
// // find the maximum value of the array and store to a variable
// const maxValue = Math.max(...newArr2)
// console.log(maxValue)
// newArr2.splice(newArr2.filter((v, i) => newArr2.indexOf(v) != i), 1)
// // loop through the array and compare it to the max value, if it is less than the max value push these indexes into a new array called minArray
// const minArray = newArr2.filter(i => i<maxValue)
// //console.log(minArray)
// // add up all the elements of the minArray
// const minSum = minArray.reduce((total, curValue) => total + curValue, 0)
// // console.log(minSum)

// // print with two spaces in between each returned value in one line
// console.log(minSum + '  ' + maxSum)