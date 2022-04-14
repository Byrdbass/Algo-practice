def linear_search(list, target):
    #returns the index position of the target if found, else returns None

    #for item in list
    for i in range(o, len(list)):
        if list[i] == target:
            return i
    return None

def verify(index):
    if index is not None:
        print('target found at index: ', index)
    else: 
        print('Target not found in list')

numbers = [1,2,3,4,5,6,7,8,9,10]

result = linear_search(numbers, 12)
verify(result)