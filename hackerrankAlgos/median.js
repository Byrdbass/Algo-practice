function findMedian() {
    //let arr = [14,7,5,1,3,4]
    let length = arr.length
    let sortedArr = arr.sort(function(a,b) {return a-b});
    console.log(...sortedArr)
    if (length % 2 == 1) {
        console.log (sortedArr[(length/2) - .5])
        return sortedArr[(length/2) - .5]
    }
    else {
        console.log((sortedArr[length/2] + sortedArr[(length/2) - 1]/2))
        return (sortedArr[length/2] + sortedArr[(length/2) - 1]) /2
    }
    //let middleIndex = sortedArr[((sortedArr.length)/2)+1]
    //console.log(middleIndex)
}

findMedian();