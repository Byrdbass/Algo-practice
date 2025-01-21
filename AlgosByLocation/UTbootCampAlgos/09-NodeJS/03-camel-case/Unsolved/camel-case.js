// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    let arr = str.split(' ')
    for(let i = 0 ; i < arr.length ; ++i){
        let word = arr[i];
        if(i === 0){
            //whole word is lowercase
            word = arr[0].toLowerCase();

        }
        else{
            word = `${word[0].toUpperCase()}${word.substring(1)}`
        }
        arr[i] = word
    }
    return arr.join('')
};
