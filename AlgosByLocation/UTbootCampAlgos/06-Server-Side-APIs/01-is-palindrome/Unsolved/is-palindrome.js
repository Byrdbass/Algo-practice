// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    str2 = str.split('').reverse().join('');
    return str2 === str
};
