const string1 = "texttwisttime";
const string2 = "timetwisttext";

function validAnagram2(first,second) {
    if (first.length !== second.length) {
        console.log(false);
        return false;
    }
    const lookupObj = {};

    for (let i = 0; i< first.length ; i++) {
        let key = first[i];
        // if key/letter exists in the object, increment it, otherwise set to 1
        lookupObj[key] ? lookupObj[key] += 1 : lookupObj[key] = 1;
    }
    for (let i = 0; i <second.length; i++) {
        let key2 = second[i];
        // can't find letter or letter is zero then it's not an anagram
        // if we encounter 0 this if statement will be true - returning false
        if (!lookupObj[key2]) {
            console.log(false);
            return false;
        }
        else lookupObj[key2] -= 1;
    }
    console.log(true);
    return true;
}
// ATTEMPT WITHOUT HELP
const validAnagram = (string1, string2) => {

    //let s1split = string1.split('');
    //let s2split = string2.split('');
    if(string1.length !== string2){
        return false
    }
    let freqCounter1 = {};
    let freqCounter2 = {};
    //console.log(s1split);
    // ['t', 'e', 'x', 't', 't', 'a', 's', 's','t', 'i', 'm', 'e']

    for (let val of string1) {
        // this populates the keys of the object 
        // with values that are stored in the array then sets a value to it
        // i.e. { t: 4, e: 2, x: 1, a: 1, s: 2, i: 1, m: 1 }
        freqCounter1[val] = (freqCounter1[val] || 0) +1
        //left side is key ---- right side here is the value of each key
    }
    //console.log(freqCounter1);

    for (let val of string2) {
        freqCounter2[val] = (freqCounter2[val] || 0) +1
    }

    for (let key in freqCounter1) {
        console.log(freqCounter1[key]);
        if (!(key in freqCounter2)) {
            //checks if the key is present
            console.log(false);
            return false;
        }
        //checks to see if value matches eventhough variable is called key
        if(freqCounter1[key] !== freqCounter2[key]){
            
            console.log(false);
            return false
        }
        console.log(true);
        return true
    }
}

validAnagram(string1, string2);
validAnagram2(string1, string2);