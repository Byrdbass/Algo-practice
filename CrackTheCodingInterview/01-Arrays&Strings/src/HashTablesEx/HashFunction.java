package HashTablesEx;

import java.util.Arrays;

public class HashFunction {
	
	String[] theArray;
	int arraySize;
	int itemsInArray = 0;

	public static void main(String[] args) {
		HashFunction theFunc = new HashFunction(30);
		
		String[] elementsToAdd = {"1","5","17","21","26"};
		
		theFunc.hashFunction1(elementsToAdd, theFunc.theArray);
		theFunc.displayTheStack();

	}
	
	//this is a very simple hash function that will put values in the same index that match their value
	public void hashFunction1(String[] stringsForArray, String[] theArray) {
		
		for(int n= 0; n<stringsForArray.length; n++) {
			
			String newElementVal = stringsForArray[n];
			
			theArray[Integer.parseInt(newElementVal)] = newElementVal;
		}
	}
	
	//constructor
	HashFunction(int size){
		
		arraySize = size;
		theArray = new String[size];
		Arrays.fill(theArray, "-1");
		
	}
	
	public void displayTheStack() {

		int increment = 0;

		for (int m = 0; m < 3; m++) {

			increment += 10;

			for (int n = 0; n < 71; n++)
				System.out.print("-");

			System.out.println();

			for (int n = increment - 10; n < increment; n++) {

				System.out.format("| %3s " + " ", n);

			}

			System.out.println("|");

			for (int n = 0; n < 71; n++)
				System.out.print("-");

			System.out.println();

			for (int n = increment - 10; n < increment; n++) {

				if (theArray[n].equals("-1"))
					System.out.print("|      ");

				else
					System.out
							.print(String.format("| %3s " + " ", theArray[n]));

			}

			System.out.println("|");

			for (int n = 0; n < 71; n++)
				System.out.print("-");

			System.out.println();

		}

	}


}
