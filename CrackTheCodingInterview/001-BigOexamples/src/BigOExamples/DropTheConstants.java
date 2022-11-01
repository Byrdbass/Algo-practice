package BigOExamples;

import java.util.Arrays;

public class DropTheConstants {
	//It is possible for 0(n) to run faster than O(1) in some cases!
	//TWO non-nested for loops is not more precise
	static int[] minAndMax(int[] arr) {
		int min = Integer.MAX_VALUE;
		int max = Integer.MIN_VALUE;
		int[] minAndMaxArr = new int[2];
		for(int x : arr) {
			if(x<min) min = x;
			if(x>max) max = x;
		}

		minAndMaxArr[0] = min;
		minAndMaxArr[1] = max;

		
		return minAndMaxArr;
	}
	
	public static void main(String[] args) {
		int[] array1 = {12,14,15,20,35,3};
		List<int> Arrays.asList(minAndMax(array1));
		
		System.out.println(Arrays.toString(minAndMax(array1)));

	}

}
