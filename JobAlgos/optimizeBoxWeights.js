/*An amazon fulfillment associate has a set of items that need to be packed into tow boxes.  
//Given an integer array of the item weights(arr) to be packed, 
//divied the item weights into two subsets, A and B,
for packing into the associated boxes, 
while respecting the following conditions:
-The intersection of A and B is null.
The union A and B is equal to the original array.
-the number of elements in subset A is minimal.
-the sum of A's weights is greater than the sum of B's weights.

Return the subset A in increasing order where the sum of A's weights is greater than the sum of B's weights.  If more than one subset A
exists, return the one with the maximal toatl weight.
Ex.
n = 5
arr = [3,7,6,6,2]

the 2 subsets in arr that satisfy the condistions for A are 5[5,7] and [6,7]
-A is minimal
*/