function squareDigits(num){
    let numArr = num.toString().split('');
      return parseInt(numArr.map(x=> x**2).join(''))
  }