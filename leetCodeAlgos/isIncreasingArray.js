let nums = [1,2,10,5,6]
var isIncreasing = function(nums) {
    let flag = 0;
    for (let i = 1 ; i < nums.length ; ++i){
        if( nums[i]<= nums[i-1]){
            count++
            if(i>1 && nums[i]>nums[i-2]){
                nums[i]=nums[i-1]
            }
        }
    }
    return flag<=1;
}
