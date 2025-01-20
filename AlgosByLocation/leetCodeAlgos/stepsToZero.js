/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let newNum = num;
    let steps = 0;
    for(let i = 0 ; newNum > 0 ; i++){
        if(newNum % 2 === 0){
            newNum = newNum/2;
            steps++
        }
        else {
            newNum -= 1;
            steps++
        }
    }
    return steps
};

// Code Sample (Runtime: 50ms)

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
       let step = 0;

    while (num !== 0) {
        num % 2 === 0 ? num /= 2 : num--;
        step++;
    }
    return step;
};




// Code Sample (Runtime: 30ms)

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count=0;
    while(num>0){
        count += 1;
        if(num%2==0)
        {
            num /= 2
        }
        else
        {
            num -=1;
        }
    }
    return count;
};