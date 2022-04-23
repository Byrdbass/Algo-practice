//  Given a square matrix, calculate the difference between the sums of its diagonals

const diagonalDiff = (arr) => {
    let len = arr.length
    let diag1 = []
    let diag2 = []
    //let str = ''
    for (let i=0;i<len;i++) {
        console.log(arr[i])
        
        let subArray = arr[i];
        diag1.push(subArray[0])
        //diag1.push(subArray[len+2])
        for (let j=0;j<len;j++) {
            
            //diag1.push(j+=3)
            
            //console.log(subArray[j])
            //console.log(str += subArray[j])
            //str += subArray[j]
            
        }
    }
    //console.log(str.split(''))
    //let strSplit = str.split('')
    // console.log(strSplit.slice(len-len, 1))
    // console.log(strSplit).slice(len+2,1)
    console.log(diag1)
    return diag1
}
const arr = [[1,2,3],[4,5,6],[7,8,9]]

diagonalDiff(arr);