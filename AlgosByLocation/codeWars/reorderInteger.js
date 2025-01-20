function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b)=>b-a).join(''))
    }

    function descendingOrder(n){
        return parseInt(String(n).split('').sort().reverse().join(''))
      }

      function descendingOrder(n){
        return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
      }