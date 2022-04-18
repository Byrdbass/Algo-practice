// given an array of integers, where all elements but one occur twice, find the unique element

// loop through the array and find if elements match the value of other elements
// use an if statement to compare 

let array = [4,5,6,7,8,7,6,5,4]

//3 WAYS TO GET UNIQUE VALUES - VIA Codú Community YouTube
const getUniqueValues = (array) => (
    array.filter((currentValue, index, arr) => (
        arr.indexOf(currentValue) === index
    ))
)

console.log('filter and index of ',getUniqueValues(array))

const getUniqueValues2 = (array) => (
    array.reduce((accumulatedValue, currentValue) => (
        accumulatedValue.includes(currentValue) ? accumulatedValue 
        : [...accumulatedValue, currentValue]
    ), [])
)
console.log('reduce and includes ',getUniqueValues2(array))

const getUniqueValues3 = (array) => (
    [... new Set(array)]
)
console.log('spread new Set ',getUniqueValues3(array))

function lonelyinteger(a) {
    //let len = a.length
    a.sort(function(a,b) {return a-b});
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== a[i+1] && a[i] !== a[i-1]) {
            console.log(a[i])
            return a[i]
        }
    }
    // use spread operator to make copy of the values in the array
    // function isUnique(value, index, arr) {
    //     return arr.indexOf(value) === index;
    // }
    // let unique = a.filter(isUnique)
    // let arr = a.splice(unique)
    // console.log(unique)
    // console.log(arr)

}

const a = [1,2,3,4,3,2,1]

    //console.log(arr.forEach())
    // loop through the array and compare the values to original array
    // for (i=0;i<=a.length;i++)
    // {
    //     console.log(index1)
        //now we have the index of the copied array
        // create a variable to compare
        // let isEqual = arr.splice(arr[i] === a.forEach())
        // console.log(isEqual)
        // for (j=0;j<a.length;j++)
        // {
        //     if (arr[i] === a[j]) {
        //         return console.log(arr.splice([])])
        //     }
        // }

//     const isEqual = () => {
//     for (let i=0;i<a.length;i++) {
//         if (a.includes(arr[i])) {
//             arr.splice(i, i.length)
            
//         }
//     }
// }
//isEqual();

console.log(lonelyinteger(a))