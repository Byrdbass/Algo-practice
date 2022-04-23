// Write a function `zipper` that accepts two arrays as arguments. The function should return a 2D
// array containing pairs of elements at the same indices. You can assume that the arrays have the 
// same length.

const zipper = (arr1, arr2) => {
    //create a for loop to store values of indexes for each array
    // match the indexes of each array with the same index 
    let result = []
    let len1 = arr1.length
    //let len2 = arr2.length
    for (let i = 0; i < len1; i++) {
        //console.log(arr1[i])
        let el1 = arr1[i];
        let el2 = arr2[i];
        let pair = [el1, el2]
        result.push(pair)
        
        // for (let j = 0; j< len2; j++) {
        //     console.log(arr2[j])

        // }
    }
    return result
}

let array1 = ["a", "b", "c", "d"];
let array2 = [-1, -2, -3, -4];
console.log(zipper(array1, array2));
// [
//   ['a', -1],
//   ['b', -2],
//   ['c', -3],
//   ['d', -4],
// ]

let array3 = ["whisper", "talk", "shout"];
let array4 = ["quiet", "normal", "loud"];
console.log(zipper(array3, array4));
// [
//   ['whisper', 'quiet'],
//   ['talk', 'normal'],
//   ['shout', 'loud'],
// ]