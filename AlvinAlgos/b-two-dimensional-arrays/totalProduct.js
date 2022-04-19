// Write a function `totalProduct(array)` that accepts a 2D array of numbers. The function should return
// the total product of all numbers in the array.

const totalProduct = (array) => {
    let len = array.length;
    for (let i=0;i<len;i++) {
        let subArray = array[i]
        console.log(subArray)
        let len2= subArray.length
        for (j=0;j<len2;j++) {
            const result = subArray[j] * subArray[j]
            console.log(result)
            return result
        }
    }
    
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