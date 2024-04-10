var buildArray = function(nums) {
    let ans = []
    for (let i = 0 ; i < nums.length ; ++i) {
        ans.push(nums[nums[i]])
    }
    return ans
};
// runtime of 44 sec
var buildArray = function(nums) {
    const n = nums.length;

    const res = new Array(n);

    for (let i = 0; i < n; i++) {
        res[i] = nums[nums[i]];
    }

    return res;
};