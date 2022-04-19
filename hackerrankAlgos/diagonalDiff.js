//  Given a square matrix, calculate the difference between the sums of its diagonals

const diagonalDiff = (arr) => {
    let len = arr.length
    let str = ''
    for (let i=0;i<len;i++) {
        let subArray = arr[i];
        for (let j=0;j<len;j++) {
            //console.log(subArray[j])
            //console.log(str += subArray[j])
            str += subArray[j]
            
        }
    }
    //console.log(str.split(''))
    let strSplit = str.split('')
    console.log(strSplit.slice(len-len, 1))
    console.log(strSplit).slice(len+2,1)
}
const arr = [[1,2,3],[4,5,6],[7,8,9]]

diagonalDiff(arr);