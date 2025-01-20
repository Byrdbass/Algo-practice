let nums = [1,2,10,5,6]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    let flag = 0;
   for (let i = 1 ; i < nums.length ; ++i){
    // if the array is not increasing
       if( nums[i]<= nums[i-1]){
           flag++

           // if the index is NOT the first index, and the current value is LESS than two values ago => replace the current value with the value ONE before
           if(i>1 && nums[i]<=nums[i-2]){
               nums[i]=nums[i-1]
           }
       }
   }
   console.log(nums)
   console.log(flag)
   return flag<=1;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing2 = function(nums) {
    let removed = false;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] <= nums[i-1]){
            if(removed){
                return false;
            }
            if(i > 1 && nums[i] <= nums[i-2]){
                nums[i] = nums[i-1];
            }
            removed = true;
        }
    }
    return true;
 };

canBeIncreasing(nums)