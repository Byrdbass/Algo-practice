package BigOExamples;


public class LogNRuntime {
	
	static void binarySearch(Integer[] sortedArr, Integer key) {
		Integer low = 0;
		Integer high = sortedArr.length-1;
		
		while (high-low>1) {
			//the calc of this mid Index may create an overflow error for extremely large arrays
			Integer mid = (high + low)/2;
			if(sortedArr[mid]<key) {
				low = mid +1;
			}
			else {
				high = mid;
			}
			
			if (sortedArr[low]==key) {
				System.out.println("Found at Index " + low);
			}
			else if (sortedArr[high] == key) {
				System.out.println("Found at Index " + high);
			}
			else {
				System.out.println("Not Found");
			}
		}
	}
	
	Integer recursiveBinSearch(Integer[] sortedArr, Integer low, Integer high, Integer key) {
		
		if (high>=1) {
			Integer mid = low + (high-1)/2;
			
			if(sortedArr[mid]==key) {
				return mid;
			}
			if(sortedArr[mid]> key) {
				return recursiveBinSearch(sortedArr, low, high-1, key);
			}
			return recursiveBinSearch(sortedArr, mid+1, high, key);
		}
		return -1;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Integer[] arr1 = {1,3,5,7,9,11,13};
		binarySearch(arr1, 4);
		LogNRuntime ob = new LogNRuntime();
		Integer result = ob.recursiveBinSearch(arr1, 0, arr1.length-1, 9);
		if(result ==-1) System.out.println("Element not present");
		else System.out.println("Element found at index "+result);

	}

}
