function highAndLow(numbers){
    let min = Infinity;
    let max = -Infinity;
    let arr = numbers.split(' ');
    let numArr = [];
  
    for (let i = 0 ; i < arr.length ; i ++){
      numArr.push(parseInt(arr[i]))
      if(numArr[i] > max) max = arr[i];
      if(numArr[i] < min) min = arr[i];
    }
    return `${max} ${min}`
  }

  function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

  function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }

  function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
  }