// given a list of integers, count and return the number of times each value appears as an array of integers

//this works great when the range of values is small

const countingSort = (arr) => {
    //need to establish the range of values in the array
    let len = arr.length
    let minVal = Math.min(...arr)
    let maxVal = Math.max(...arr)
    // we want to have a range of values sent to a new array so we may push those counts from the original array into it
    let range = (maxVal - minVal) + 1
    let emptyArr = []
    for (let i = 0; i<range; i++) {
        let value = 0
        emptyArr.push(i * value)
    }
    console.log(minVal, maxVal, range, emptyArr)
    // we want to loop through the given array and count the number of times each value is present
    // we need to compare these counts with the emptyArr and assign them to a specific index
    for (let i=0;i<len;i++) {

    }

    



    //return sortedArr;
}

array = [1,1,1,4,4,5,7]

countingSort(array);