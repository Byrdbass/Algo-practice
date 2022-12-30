package BigOExamples;

public class RecursiveRuntime {
	
	//this has runtime of O(2^N)
	Integer f(Integer n) {
		if (n<=1) {
			return 1;
		}
		return f(n-1) + f(n-1);
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
