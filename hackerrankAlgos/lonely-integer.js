// given an array of integers, where all elements but one occur twice, find the unique element

// loop through the array and find if elements match the value of other elements
// use an if statement to compare 

//3 WAYS TO GET UNIQUE VALUES - VIA Codú Community YouTube
const getUniqueValues = (array) => (
    array.filter((currentValue, index, arr) => (
        arr.indexOf(currentValue) === index
    ))
)

const getUniqueValues2 = (array) => (
    array.reduce((accumulatedValue, currentValue) => (
        accumulatedValue.includes(currentValue) ? accumulatedValue 
        : [...accumulatedValue, currentValue]
    ))
)

const getUniqueValues3 = (array) => {
    [... new Set(array)]
}

function lonelyinteger() {
    let a = [1,2,3,4,3,2,1]
    // use spread operator to make copy of the values in the array
    function isUnique(value, index, arr) {
        return arr.indexOf(value) === index;
    }
    let unique = a.filter(isUnique)
    let arr = a.splice(unique)
    console.log(unique)
    console.log(arr)

}
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

lonelyinteger();