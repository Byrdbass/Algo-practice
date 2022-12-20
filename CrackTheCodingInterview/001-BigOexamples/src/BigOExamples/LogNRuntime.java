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
			//System.out.println("there is no element in the array that matches" + key);
		}
		//System.out.println(index);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Integer[] arr1 = {1,3,5,7,9,11,13};
		binarySearch(arr1, 4);

	}

}
