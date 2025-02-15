class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
// in "array terms" we can use push/shift (add to end, take from start) OR pop/unshift (take from end, add to beginning)
//this is created in Linked List terms
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val)
        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{

        }
        return ++this.size
    }
}