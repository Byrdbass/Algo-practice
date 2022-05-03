// HAVE INTRINSIC ORDER BUILT IN!
// use them when we need order
let names1 = ['Michael','Melissa','Andrea'];
let values1 = [true, {}, [], 'awesome']
// BIG O of arrays
// insertion - depends - depends on where we're inserting
let names2 = names1.push('Raj') //this is O(1) - will return length of index!
console.log(names1)
let names3 = names1.unshift('bob') // this is O(n) - must be reindexed
console.log(names1)

// removal - depends
names1.pop(5) // this is faster because it removes it from the end! O(1)
console.log(names1)
names1.shift(0) // this takes O(n) because it has to reindex
console.log(names1)
// searching is O(n)
// access - O(1)





const names = ['max', 'manu', 'julie', 'max']
console.log(names[1])
console.log(names.length);

for (const element of names)
{
    console.log(element)
}

names.push('jim')
console.log(names.length)

// executes a function on every element
const isInIndex = names.find(el => el === 'julie');
console.log(isInIndex)
// will only find one element - if does not exist will return -1
const whichIndex = names.findIndex(el => el === 'max')
console.log(whichIndex)
