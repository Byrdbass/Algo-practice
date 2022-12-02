package BigOExamples;

import java.util.Arrays;
import java.util.List;

public class DropTheConstants {
	//It is possible for 0(n) to run faster than O(1) in some cases!
	//TWO non-nested for loops is not more precise
	static Integer[] minAndMax(Integer[] arr) {
		Integer min = Integer.MAX_VALUE;
		Integer max = Integer.MIN_VALUE;
		Integer[] minAndMaxArr = new Integer[2];
		for(Integer x : arr) {
			if(x<min) min = x;
			if(x>max) max = x;
		}

		minAndMaxArr[0] = min;
		minAndMaxArr[1] = max;

		
		return minAndMaxArr;
	}
	
	public static void main(String[] args) {
		Integer[] array1 = {12,14,15,20,35,3};
		List<Integer> list1 = Arrays.asList(minAndMax(array1));
		
		System.out.println(list1);

	}

}
