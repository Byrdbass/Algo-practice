/*
Write a function called sameFrequency. Given two positive integers, find out
if the two numbers have the same frequency of digits.
your solution must have the O(N) time complexity
*/

/* SAMPLE INPUT
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

//MY FIRST TRY:
function sameFrequency(num1, num2) {
    let arr1 = [];
    let arr2 = [];
    let freqCounter1 = {};
    let freqCounter2 = {};
    while (num1 % 10 > 0) {
        let digit = num1%10
        arr1.push(digit);
        num1 = Math.round(num1/10 - (.1*digit))
        //console.log(num1);
        //console.log(arr1);
    }
    while (num2 % 10 > 0) {
        let digit = Math.round(num2%10)
        //console.log(`digit is ${digit}`);
        arr2.push(digit);
        num2 = Math.round(num2/10 - (.1*digit))
        //console.log(num2);
        //console.log(arr2);
    }
    if(arr1.length !== arr2.length) {
        console.log(`arrays are not the same length`);
        return false
    }
    //WHY IS THE KEY THE SAME AS THE VALUE?  LOOP UP LOOPING OVER OBJECTS!
    for (let val of arr1){
        freqCounter1[val] = val
        console.log(freqCounter1);
    }
    for (let val of arr2){
        freqCounter2[val] = val
        console.log(freqCounter2);
    }
    for (let key in freqCounter1) {
        if(!(key in freqCounter2)){
            console.log(`values not matching`);
            return false
        }
        console.log(`values are MATCHING!`);
        return true
    }
    
}

//GIVEN SOLUTION
function sameFrequency2(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
        //console.log(i);
        console.log(strNum1[i]);
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }


// sameFrequency(182, 281)
// sameFrequency(34,14)
// sameFrequency(3589578, 5879385)
// sameFrequency(22,222)

// sameFrequency2(182, 281)
// sameFrequency2(34,14)
sameFrequency2(3589578, 5879385)
//sameFrequency2(22,222)