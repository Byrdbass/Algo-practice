package BigOExamples;


public class LogNRuntime {
	
	public static Integer binarySearch(Integer[] sortedArr, Integer key) {
		Integer index = Integer.MAX_VALUE;
		Integer low = 0;
		Integer high = sortedArr.length-1;
		
		while (low<=high) {
			//the calc of this mid Index may create an overflow error for extremely large arrays
			Integer mid = (high - low)/2;
			if(sortedArr[mid]<key) {
				low = mid +1;
			}
			else if (sortedArr[mid]>key) {
				high = mid -1;
			}
			else if (sortedArr[mid]==key) {
				index = mid;
				System.out.println(index);
				break;
			}
			//System.out.println("there is no element in the array that matches" + key);
		}
		//System.out.println(index);
		return index;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Integer[] arr1 = {1,3,5,7,9,11,13};
		binarySearch(arr1, 9);

	}

}
