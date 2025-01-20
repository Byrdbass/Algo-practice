/*
Write a function called averagePair. Given a SORTED array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals 
the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

function averagePair(arr, avg) {
    if(arr.length === 0) {
        console.log(`array is empty`);
        return false
    }
    let start = 0;
    let end = arr.length-1;
    while (start < end) {
        console.log(arr[start], arr[end]);
        let average = (arr[start] + arr[end])/2;
        if(avg === average){
            console.log(`${arr[start] + arr[end]}/2 is ${avg} - TRUE`);
            return true;
        }
        else if(average > avg){
            end--;
        }
        else
        start++;
        console.log(`${arr[start] + arr[end]}/2 is ${average} NOT ${avg} - false`);
    }
   
    return false

}

//averagePair([1,2,3],2.5) // true
//averagePair([1,3,3,5,6,7,10,12,19],8) // true
//averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false