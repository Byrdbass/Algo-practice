/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let strArr = []
    for (let i = 0; i < n; i++) {
        strArr.push(`${i + 1}`)
    }
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] % 5 === 0 && strArr[i] % 3 === 0) {
            strArr[i] = "FizzBuzz"
        }
        else if (strArr[i] % 5 === 0) {
            strArr[i] = "Buzz"
        }
        else if (strArr[i] % 3 === 0) {
            strArr[i] = "Fizz"
        }
    }
    console.log(strArr)
return strArr
};

var fizzBuzz = function(n) {
    let answer = []
    for( let i = 0 ; i < n ; i++){
        if((i+1) % 3 === 0 && (i+1) % 5 === 0){
            answer.push("FizzBuzz")
        } else if( (i+1) % 3 === 0 ){
            answer.push('Fizz')
        } else if( (i+1) % 5 === 0 ){
            answer.push('Buzz')
        } else {
            answer[i] = (i+1).toString()
        }
    }
    return answer
};




Code Sample (Runtime: 36ms)

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const res = []
    
    for(let i=1; i<=n; i++){
        let str = ''
        
        if(i%3===0){
            str+='Fizz'
        } 
        if(i%5===0){
            str+='Buzz'
        } 
        
        res.push(str || String(i))
    }
    return res
};




Code Sample (Runtime: 34ms)

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    
    let map = {
        3: 'Fizz',
        5: 'Buzz'
    }
    let res = []
    
    for(let i=1; i<=n; i++){
        let str = ''
        
        if(i%3===0){
            str+=map[3]
        } 
        if(i%5===0){
            str+=map[5]
        } 
        
        if(str.length===0) {
            str += `${i}`
        }
        res.push(str)
    }
    return res
};