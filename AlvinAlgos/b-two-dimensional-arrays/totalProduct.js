// Write a function `totalProduct(array)` that accepts a 2D array of numbers. The function should return
// the total product of all numbers in the array.

const totalProduct = (array) => {
    let len = array.length;
    let result = 1
    for (let i = 0; i < len; i++) {
        let subArray = array[i]
        let len2= subArray.length
        //console.log(len2)
        for (let j=0;j<len2;j++) {
            result *= subArray[j] 
            //result = subArray.reduce((total, j, i, array) => total * j, 1)
            //console.log(result)
            
        }   
    }
    return result
}

let array1 = [
    [3, 5, 2],
    [6, 2],
  ];
  console.log(totalProduct(array1)); // 360
  
  let array2 = [
    [4, 6],
    [2, 3],
    [1, 2],
  ];
  console.log(totalProduct(array2)); // 288