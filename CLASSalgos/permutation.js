// it is OnLogn because that is speed of .sort
function checkPerm(str1, str2) {
    if(str1.length !== str2.length) {return false;}

    let sorted1 = str1.split('').sort().join('');
    let sorted2 = str2.split('').sort().join('');

    return sorted1 === sorted2;
}
//incomplete function using objects
function checkPerm2(str1, str2) {
    var str1Obj = {};
    if(str1.length !== str2.length) {return false;}
    else {
        for(let i = 0; i < str1.length; i++){
            //places a letter inside the object
            if ( str1Obj[str1[i]] > 0) { 
                str1Obj[str1[i]]++ //increase the count
            }
            else{
                str1Obj[str1[i]] = 1;
            }
            
        };
    }
}