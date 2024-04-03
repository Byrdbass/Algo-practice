function getMiddle(s)
{
  let sArr = s.split('');
  let middle = Math.ceil((sArr.length-1)/2);
  for (let i = 0; i<sArr.length ; i++){
  }
  if (sArr.length % 2 === 0){
    return sArr[middle-1] + sArr[middle]
  }
  else
    return sArr[middle]
}

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

function getMiddle(s) {
    var middle = s.length / 2;
    // this evaluates truthy or falsy - 0 is falsy and uses .charAt() function
    return (s.length % 2) 
      ? s.charAt(Math.floor(middle))
      : s.slice(middle - 1, middle + 1);
  }