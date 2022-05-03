// ARRAY METHODS that take in a function
const arr = [1,2,3,4,5]

arr.pop() //remove last element returns new index 0(1)
arr.push() // inserts new value at end 0(1)

arr.shift() //removes first element O(n)
arr.unshift // inserts new value at beginning O(n)

arr.concat() // adds to arrays together O(n)
arr.slice() // returns copy of entire or part of an array O(n)

// removes an index in the array arr.splice(index to remove, remove this many elements from here on) i.e. arr.splice(2, 1) = remove index 2, and one element
arr.splice() // remove and add new elements - very versatile can be used to replace elements as well O(n)
arr.sort() // is O(n log(n))!


//ALL OF THESE ARE O(n)
arr.forEach()
arr.map()
arr.filter()
arr.reduce(function(previousValue, currentValue, currentIndex, array) {previousValue += currentValue}, initialValue)
    arr.reduce((total, currentValue, currentIndex, array) => {total += currentValue}, initialValue)

arr.find()
arr.findIndex()



    
arr.split()
arr.includes()
arr.indexOf()