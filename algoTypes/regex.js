// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    str = str.toLowerCase();
    console.log(str)
    let vowels = /[aeiou]/;
    let count = 0;
    for(let i = 0; i < str.length; i++){
        console.log(str[i])
        if (vowels.test(str[i])) count++
    };
    return count;
};