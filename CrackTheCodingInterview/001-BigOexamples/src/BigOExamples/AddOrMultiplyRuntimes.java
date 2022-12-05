package BigOExamples;

import java.util.ArrayList;

class Runtimes {
	
	
	//O(A+B)
	public static void addRuntime(Integer[] a, Integer[] b) {
		//two ways of writing an array - just for study purposes
		ArrayList c = new ArrayList(a.length);
		ArrayList<Integer> d = new ArrayList<Integer>(a.length);
		
		for (Integer i : a) {
			System.out.println("index of a " + i);
		}
		for (Integer j : b) {
			System.out.println("index of b " + j);
		}
				
	}
	
	//O(A*B)
	public static void mulitplyRuntime(Integer[] a, Integer[] b) {
		for (Integer i: a) {
			for (Integer j: b) {
				System.out.println("multiply runtime method, a: " + i + " b: " + j);
			}
			
		}
	}
}

public class AddOrMultiplyRuntimes {

	public static void main(String[] args) {
		Integer[] arrA = {2,4,6,8};
		Integer[] arrB = {3,6,9,12,15};

		Runtimes.addRuntime(arrA, arrB);
		Runtimes.mulitplyRuntime(arrA, arrB);

	}

}
