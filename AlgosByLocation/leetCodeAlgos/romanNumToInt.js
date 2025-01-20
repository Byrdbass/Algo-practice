/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
  */

//first crack at solution (incomplete)
var romanToInt = function (s) {
    let arr = s.split('');
    let count = 0;
    for (let i = 0; i < arr.length; ++i) {
        let j = i + 1;
        //if contains a certain letter
        switch (arr[i]) {
            case "M":
                count += 1000;
                break;
            case "D":
                count += 500;
            case "C":
                if (arr[j] === "M") {
                    count += 900;
                }
                else if (arr[j] === "D") {
                    count += 400;
                }
                else {
                    count += 100;
                }
                break;
            case "L":
                count += 50;
                break;
            case "X":
                if (arr[j] === "C") {
                    count += 90
                }
                else if (arr[j] === "L") {
                    count += 40;
                }
                break;
        }
    }
};

//working solution
var romanToInt = function (s) {
    count = 0;
    let map = {
        "M": 1000,
        "D" : 500,
        "C" : 100,
        "L" : 50,
        "X" : 10,
        "V" : 5,
        "I" : 1
     }

     for (let i = 0; i < s.length ; ++i){
        let current = map[s[i]];
        console.log(current)
        let next = map[s[i+1]];
        if( next > current){
            count += next - current;
            i++;
        }
        else{
            count += current
        }


     }
     return count
};