// When invoked, the function logs the starting number immediately;
// then, after 100ms, it logs the starting number plus one.
// The function should continue to do this until it logs the ending number.
 
function count(startValue, endValue) {
    let count = startValue;
    console.log(count)
  
    let id = setInterval(()=>{
      count += 1   
      console.log(count)
        if (count >= endValue){
          clearInterval(id)
        }
      }, 100)
  
  
  
  
  }
    
  console.clear();
  console.log('BEGIN EXECUTION');
  count(1, 10);