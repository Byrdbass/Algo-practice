// ARRAY METHODS that take in a function
const arr = [1,2,3,4,5]

arr.pop() //remove last element returns new index
arr.push() // inserts new value at end

arr.shift() //removes first element O(n)
arr.unshift // inserts new value at beginning

arr.concat()
arr.slice()
arr.sort()

arr.find()
arr.findIndex()
// removes an index in the array arr.splice(index to remove, remove this many elements from here on) i.e. arr.splice(2, 1) = remove index 2, and one element
arr.splice()

arr.reduce(function(previousValue, currentValue, currentIndex, array) {previousValue += currentValue}, initialValue)
    arr.reduce((total, currentValue, currentIndex, array) => {total += currentValue}, initialValue)
    
arr.split()
arr.includes()
arr.indexOf()