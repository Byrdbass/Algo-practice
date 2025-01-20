/* implement a function called countUniqueValues, 
which accepts a sorted array, and counts the unique vales in the array.  
There can be negative numbers in the array, but it will always be sorted */


var array1 = [1,1,1,1,1,2] //2
var array2 = [1,2,3,4,4,4,7,7,12,12,13] //7
var array3 = [] // 0
var array4 = [-2,-1,-1,0,1] //4

//NAIVE SOLUTION
function countUniqueValues(arr) {
    let i = 0;
    console.log(`length is ${arr.length}`);
    if(arr.length === 0) {
        console.log(i);
        return i;
    }
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j];
        }
    };
    console.log(i+1);
    return i+1;
};

function countUniqueValues2(arr) {
    
}

countUniqueValues(array1)
countUniqueValues(array2)
countUniqueValues(array3)
countUniqueValues(array4)

