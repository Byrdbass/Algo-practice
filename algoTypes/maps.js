// maps are really for data storage
// can simplify and improve data access compared to objects - can be faster - only with HUGE objects/maps

const resultData = new Map();
resultData.set('average', 1.53);
resultData.set('lastResult', null);
resultData.set('blank') //this value will be undefined
resultData.set(); //this key will be undefined => undefined

const country = {name: 'Germany', population: 82}
//IN OBJECTS THIS WOULD NOT BE ALLOWED - WE CANNOT USE OTHER OBJECTS AS KEYS IN AN OBJECT - ONLY MAPS CAN HAVE OBJECTS AS KEYS
resultData.set(country, 0.89)

for( const el of resultData) {
    console.log(el)
    //EVERY KEY VALUE PAIR THAT'S SAVED IN A MAP IS OUTPUT AS AN ARRAY
}
//MAPS DO NOT ALLOW DUPLICATE KEYS JUST LIKE OBJECTS!  THIS WILL BE OVERWRITTEN
resultData.set('average', 2.53)

console.log(resultData.get('average'));  // we must use the get method to retrieve values BY KEY
console.log(resultData.keys())  // will iterate through all the keys in the map
console.log(resultData.average) // cannot use dot notation to find keys and values - THIS WORKS FOR OBJECTS!
//THE DOT NOTATION AND SQUARE BRACKET NOTATION ON MAPS IS NOT SUPPORTED
console.log(resultData[0]) //UNDEFINED

resultData.delete('blank') //this will work!
resultData.delete({name: 'Germany', population: 82}) // this will not work, as you must specify exactly what key this is - an object is a reference value here
// this is looking for a new object
//SEE REFERENCED AND PRIMITIVE VALUES

console.log(resultData)
