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
