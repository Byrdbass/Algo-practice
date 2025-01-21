// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
    let max1 = null
    let max2 = null
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > max1 || max1 === null ){
            max2 = max1
            max1 = arr[i]
        }
        else if(arr[i] > max2 || max2 === null){
            max2 = arr[i]
        } 
    };
    return max1 * max2
};
