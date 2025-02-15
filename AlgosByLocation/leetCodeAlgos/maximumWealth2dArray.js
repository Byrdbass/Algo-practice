/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0;
    for (let i = 0; i < accounts.length; i++) {
        let tempMax = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            tempMax += accounts[i][j]
            console.log(`tempMax is ${tempMax} max is ${max}`)
        }
        if (tempMax > max){
            max = tempMax
        }
    }
    return max
};

var maximumWealth = function(accounts) {
    //prev is the accumulator or "Max", c is current value, 
    return accounts.reduce((prev, c) => {
      return Math.max(c.reduce((p, v) => p + v, 0), prev)
    }, 0)
    
  };

  var maximumWealth = function(accounts) {
    arr=[]
    for(let i=0;i<accounts.length;i++){
        arr.push(accounts[i].reduce((acc,cur)=> acc+cur,0))
    }
    max = Math.max(...arr)
    return max
};