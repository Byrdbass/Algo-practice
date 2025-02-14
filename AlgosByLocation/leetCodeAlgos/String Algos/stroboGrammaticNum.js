/**
 * Given a string num which represents an integer, return true if num is a strobogrammatic number.

A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

 

Example 1:

Input: num = "69"
Output: true
Example 2:

Input: num = "88"
Output: true
Example 3:

Input: num = "962"
Output: false
 

Constraints:

1 <= num.length <= 50
num consists of only digits.
num does not contain any leading zeros except for zero itself.
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function (num) {
    let arr = num.split('')
    let map = {
        "6": "9",
        "9": "6",
        "8": "8",
        "0": "0",
        "1": "1"
    }
    let flag = false
    let start = 0
    let end = arr.length - 1
    console.log((arr[end] in map))
    if (!(arr[start] in map) || !(arr[end] in map)) {
        return false
    }
    // console.log("start" + map[arr[end]])
    while (start < end) {
        // console.log("start " + arr[start] + " " + map[arr[start]])
        // console.log("end " + arr[end] + " " + map[arr[end]])

        if (arr[start] === map[arr[end]]) {
            // console.log("in if")
            start++
            flag = true
        }
        if (arr[end] === map[arr[start]]) {
            end--
            flag = true
        }

    }
    return flag
};