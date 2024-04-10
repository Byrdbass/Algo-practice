package BigOExamples;



public class MoreExamples {
	//O(n) runtime
	void foo(int[] arr) {
		int sum = 0;
		int product = 1;
		 for (int i = 0; i< arr.length; i++) {
			 sum += arr[i];
		 }
		for (int i = 0; i < arr.length; i++) {
			product *= arr[i];
		}
		System.out.println(sum + ", " + product);
	}

}
