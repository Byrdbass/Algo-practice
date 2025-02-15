/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    //create an array with one value - that is the first index val
    const result = [nums[0]]
    //skips the first index for faster runTime
    for (let i = 1; i < nums.length; i++) {
        result.push(nums[i] + result[i-1])
    }
    return result
};