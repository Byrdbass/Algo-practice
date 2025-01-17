// takes an input as a string
// return would be a boolean
// assesing if the string contains a starting bracket with a corresponding closing bracket

//SOLUTION ALLUDED TO
isValid = s => {
    /*referred to as a "switch" in interview - 
     if something is in the stack it is On, otherwise it is off
     in other words, if there is something in the stack the string is INVALID
     */
    let stck = [];
    let map = {
        //question - WHY IS THE CLOSING BRACKET FIRST?
        ")" : "(",
        "}" : "{",
        "]" : "["
    }

    for(let i = 0; i < s.length; i++){
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){
            stck.push(s[i]);
        }
        //the character in the stack at last place compared to the value matching in map
        else if (stck[stck.length-1] === map[s[i]]) {
            stck.pop()
        }
        //WHY?
        else return false
    };
    return stck.length ? false : true
}

//INCORRECT AND INCOMPLETE SOLUTION GIVEN ON 01-16-2025
function isValidString(str) {
    //split string 
    let splitStr = str.split('');
    let isOpen = false;
    let isValid;
    for (let i = 0; i < splitStr.length ; ++i){
        if (splitStr[i] === "{" || splitStr[i] === "[" || splitStr[i] === "("  ){
            isOpen = true
            isValid = false
        }
        else if(splitStr[i] === "}" || splitStr[i] === "]" || splitStr[i] === ")"){
            if(isOpen){
                isOpen = false;
                isValid = true;
            }
            else {
                isValid = false;
            }

        }
        else{
            isValid = false;
        }
    }
   return isValid
}


console.log(isValidString("{]"))