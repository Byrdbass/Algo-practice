// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    let words = str.split(' ');
    let capWords =[]
    let word='';
    for(let i = 0; i < words.length; i++){
        word = words[i];
        capWords.push(`${word[0].toUpperCase()}${word.substring(1)}`) 
    };
    return capWords.join(' ')
};
