// given a list of integers, count and return the number of times each value appears as an array of integers

//this works great when the range of values is small

const countingSort = (arr) => {
    //need to establish the range of values in the array
    let len = arr.length
    let minVal = Math.min(...arr)
    let maxVal = Math.max(...arr)
    let range = (maxVal - minVal) + 1
    let emptyArr = []
    let sortedArr = emptyArr.push(0*range)
    console.log(minVal, maxVal, range,sortedArr)
    for (i=0;i<len;i++) {

    }

    



    return sortedArr;
}

array = [1,1,1,4,4,5,5]

countingSort(array);