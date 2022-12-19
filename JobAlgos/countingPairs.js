/* Given an Integer k and a list of integers, count the number of distinct
valid pairs of integers (a,b) in the list for which a+k=b.
*/

function countPairs(numbers, k) {
    // Write your code here
    //initialize a count in which "a+k=b"
    console.log(numbers)
    let count = 0;
    let arrayNoDuplicates = [];
    //nested for loop for removing duplicates from original array
    for (let i = 0; i<numbers.length; i++){
        arrayNoDuplicates.push(numbers[i])
        for(let j = i+1; j< numbers.length; j++){
            if(numbers[i] === numbers[j]){
                arrayNoDuplicates.pop(numbers[j])
                
            }
        }
    }
    //nested for loop for mulitple points to see if "a+k=b"
    for (let i = 0; i<arrayNoDuplicates.length; i++){
        for(let j = i+1; j< arrayNoDuplicates.length; j++){
            if(arrayNoDuplicates[i]+k === arrayNoDuplicates[j]){
                count++
                
            }
        }
    }
    console.log(arrayNoDuplicates)
    return count;
}