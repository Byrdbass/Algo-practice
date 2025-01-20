//  Given a square matrix, calculate the difference between the sums of its diagonals

const diagonalDiff = (arr) => {
    let len = arr.length
    let diag1 = []
    let diag2 = []
    //let str = ''
    for (let i=0;i<len;i++) {
        console.log(arr[i])
        let diag1Index = 0
        let diag2Index = len-1
        let subArray = arr[i];
        console.log(subArray)
        diag1.push(subArray[diag1Index+i])
        diag2.push(subArray[diag2Index-i])
  
        
        //diag1.push(subArray[len+2])
       // for (let j=0;j<len;j++) {
            
            //diag1.push(j+=3)
            
            //console.log(subArray[j])
            //console.log(str += subArray[j])
            //str += subArray[j]
            
        //}
    }
    diag1result = 0
    diag2result = 0
    diag1.forEach(x => diag1result += x)
    diag2.forEach(y => diag2result += y)

    //console.log(str.split(''))
    //let strSplit = str.split('')
    // console.log(strSplit.slice(len-len, 1))
    // console.log(strSplit).slice(len+2,1)
    console.log(diag1, diag2)
    console.log(diag1result, diag2result)
    return 
}
const arr = [[1,2,3,10],[4,5,6,10],[7,8,9,10]]

diagonalDiff(arr);