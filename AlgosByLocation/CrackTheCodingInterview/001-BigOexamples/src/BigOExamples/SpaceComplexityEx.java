package BigOExamples;

public class SpaceComplexityEx {
	//example of a factorial sum with recursion
	//requires O(n) space
	static int sum(int n) {
		if (n<=0) {
			return 0;
		}
		return n + sum(n-1);
	}
	
	//example of sum with recursion and two methods
	//this runs O(1) space but runs O(n) calls to pairSum method
	static int pairSumSequence(int n) {
		int sum = 0;
		for (int i = 0; i<n; i++) {
			sum += pairSum(i, i+1);
		}
		
		return sum;
	}
	//this is iterative and cleans up memory after each call/function
	static int pairSum(int a, int b) {
		return a+b;
	}
	
	public static void main(String[] args) {
		sum(5);
		System.out.println(sum(5));
		pairSumSequence(6);
		System.out.println(pairSumSequence(6));
	}
}
