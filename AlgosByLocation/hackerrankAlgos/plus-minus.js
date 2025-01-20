//Given an array of integers, calculate the ratios of it's elements that are positive, negative, and zero.  
//Print the decimal value of each fraction on a new line with 6 places after the decimal
//there are two positive numbers, two negative numbers, and one zero
//there are five numbers total

const plusMinusFunction = () => {
    const array1 = [1, 1, 0, -1, -1]
    const arr = array1
    //calculate the length of array
    const arrLength = arr.length;
    //console.log(arrLength)
    const positiveNumbers = arr.filter(i => i >0).length
        //count the number of positive numbers
        //this should be just a count and not an array
        // positiveNumbers.push(i)
        // const positiveNumbersArr = positiveNumbers.length
        // console.log(positiveNumbers)
        //count the number of negative numbers
    const negativeNumbers = arr.filter(i => i<0).length
    // console.log(negativeNumbers)
    //count the number of 0's in the array 
    const zeroNumbers = arr.filter(i => i == 0).length
    // console.log(zeroNumbers)
    //have a function that divides these variables over the length of array
    const positiveRatio = positiveNumbers/arrLength
    console.log(positiveRatio.toFixed(6))
    const negativeRatio = negativeNumbers/arrLength
    console.log(negativeRatio.toFixed(6))
    const zeroRatio = zeroNumbers/arrLength
    console.log(zeroRatio.toFixed(6))

}

plusMinusFunction();