//there is no 'where' to objects - it just accesses a key
// removal, access and insertion all have constant time complexity
// in order to search we do have to iterate through everything O(n) time complexity

// Very versatile construct and data storage in JS
// Must-use if you want to add extra functionality - having methods - using 'this' keyword

let instructor = {
    firstName: "kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

console.log(Object.keys(instructor)); //O(n)
console.log(Object.values(instructor)); //O(n)
console.log(Object.entries(instructor)); //O(n)

console.log(instructor.hasOwnProperty('firstName')) // O(1)

