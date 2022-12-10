/* 
Write a function called isSubsequence which takes in two strings 
and checks whether the characters in the first string form a 
subsequence of the characters in the second string. 
In other words, the function should check whether the characters 
in the first string appear somewhere in the second string, 
without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/
function isSubsequence(str1, str2){
    str1split = str1.split('');
    str2split = str2.split('');
    let startStr1 = 0;
    let endStr1 = str1split.length-1;
    let startStr2 = 0;
    let endStr2 = str2split.length-1;
    let count = 0;
    //ORDER MATTERS
    //loop through longer string and compare indexOf
    // 1st string to second string
    //If it is present push to new array
    //if new array is the same as str1 then return true
    while (startStr2<=endStr2){
        console.log(count);
        console.log(str1split[startStr1]);
        //console.log(str2split[startStr2]);
        if (str1split[startStr1]===str2split[startStr2]){
            count++;
            startStr1++;
            startStr2++;
        }
        // else if(str1split[startStr1]!==str2split[startStr2]){
        //     startStr1++;
        // }
        else if (count===str1split.length){
            console.log(true);
            return true
        }
        //THIS DOESN'T WORK
        else if (startStr1 < startStr2){
            startStr1++
        }
        else if(startStr1 === endStr1){
            console.log(false);
            return false
        }
        else{
            startStr2++
            
        }

    }
    console.log(false);
    return false

}

isSubsequence('hello', 'hello world'); // true
//isSubsequence('sing', 'sting'); // true
//isSubsequence('abc', 'abracadabra'); // true
//isSubsequence('abc', 'acb'); // false (order matters)