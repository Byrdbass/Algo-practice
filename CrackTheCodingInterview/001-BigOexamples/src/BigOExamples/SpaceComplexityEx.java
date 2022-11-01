package BigOExamples;

public class SpaceComplexityEx {
	//example of a factorial sum with recursion
	static int sum(int n) {
		if (n<=0) {
			return 0;
		}
		return n + sum(n-1);
	}
	
	public static void main(String[] args) {
		sum(5);
		System.out.println(sum(5));
	}
}
