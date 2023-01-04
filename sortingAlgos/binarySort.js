function binarySearch(arr, key) {
    let low = 0;
    let high = arr.length-1;
    let index = Infinity;
    
    while (low<= high){
        let mid = (low + (high-low))/2; 
        if(arr[mid]<key){
            low = mid+1
        }
        else if(arr[mid]>key){
            high = mid-1;
        }
        else if(arr[mid]===key){
            index= mid;
            console.log(index);
            break;
        }
    }
}
// test comment
binarySearch([1,3,5,7,9,11,13],9);