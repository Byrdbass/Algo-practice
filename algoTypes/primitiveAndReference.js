// remember that JS is dynamically typed
// we do not have to declare what type of data a variable is assigned to
// a variable could be a string, number, etc without declaring it as such

/*  PRIMITIVE VALUES
String
Number
Boolean
Undefined
Null
ES6 - Symbol
STORED ON THE STACK!!  - TYPE OF MEMORY WHICH CAN BE ACCESSED VERY QUICK BUT DOES NOT HAVE MUCH SPACE
these get placed one on top of the other - and can be accessed as such - (assumption) they are dependent on how the code runs from top to bottom


REFERENCE VALUES
OBJECTS 
    ARRAYS - actually objects themselves

STORED ON THE HEAP!! - takes a bit longer to be accessed but is able to store much more information - better for data that changes more dynamically


*/
//THESE ARE PRIMITIVE VALUES - NOTE THAT WE ARE USING LET HERE, AS CONST CANNOT BE CHANGED - 
// this is a great implementation to further control the dynamic properties of JS - ES6 has created a way to protect primitive values
let name = 'Leland '
console.log(name)
let secondName = name
console.log(secondName);
name = 'Bob'
console.log(secondName)
// this will not be overwritten because it is a primitive value!!

//THESE ARE REFERENCED VALUES
let person = {
    age: 36,
    name: 'Leland',
    hobbies: ['Music, Yoga']
};
console.log(person)

let secondPerson = person;
console.log(secondPerson);

person.name = 'Jimmy'
console.log(secondPerson)


