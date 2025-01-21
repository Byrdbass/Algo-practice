// Write code to create a function that accepts a string and returns an object containing the number of times 
// each character appears in the string

var characterCount = function(str) {
    let obj = {}
    let regex = /[a-zA-Z0-9]/;
    for(let i = 0; i < str.length; i++){
        if(str[i] in obj){
            obj[str[i]] += 1;
        }
        else{
            obj[str[i]] = 1;
        }

    };
    console.log(obj)
    return obj
};
