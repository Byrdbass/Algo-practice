// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    let obj = {}
    if(arr.length < 1) return true
    for (let i = 0 ; i < arr.length ; ++i){
        // if the value in array is present increase count
        if(obj[arr[i]]){
            obj[arr[i]] += 1
        }
        else {
            //if the value of the array doesn't exist set count to 1
            obj[arr[i]] = 1
        }
        if(obj[arr[i]] > 1) return false;
    }
    console.log(obj)
    return true;
};
