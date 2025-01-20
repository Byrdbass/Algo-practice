// write a function that takes in a string a returns counts of each character to a string
// ASSUME ALL LOWERCASE ALPHA-NUMERIC CHARACTERS

// reword:  given a word or sentence, count how many of each letters there are in the word or sentence
// input: a string
// output:  a number - a key and value - a letter and a number
// data:  convert the string to an array using split('') method
/*  loop through the array and set a value for each letter that appears

for example: 'hello' needs to split to 'h' 'e' 'l' 'l' 'o' and counts 'l' twice

if the value of the index has already been declared - need to use the operator +=

each letter that is split will default to a value of '1' after each pair



DOES THE RETURN NEED TO BE IN AN OBJECT? -YES

need to set a variable of count to each letter?

*/

function charCount(str) {
    //make object return at the end
    // loop over string, for each char
        // if the number/letter is a key in object, add one to count
        // if the number/letter is not in object, add it and set value to 1
        // IF THE CHARACTER IS SOMETHING ELSE (SPACE, PERIOD, ETC.) DON'T DO ANYTHING
    
    let split = str.split('')
    //console.log(split)

    let len = split.length
    //console.log(len)
    //let count = 0;
    let result = {};
    for (i=0; i<len; i++) {
        let char = split[i].toLowerCase()
        console.log(char)
        if (result[char] > 0) {
            result[char]++;
            //console.log(char)
        } else {
            result[char] = 1
        }
    }

     

    return result;
}

function charCount2(str) {
    let result = {}
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            result[char] = ++result[char] || 1;
        }
    }

    return result;
}





let str1 = 'aaabbbccc'

let start1 = performance.now()
console.log(charCount(str1));
let end1 = performance.now();
console.log(end1-start1)

let start2 = performance.now();
console.log(charCount2(str1));
let end2 = performance.now();
console.log(end2-start2)

