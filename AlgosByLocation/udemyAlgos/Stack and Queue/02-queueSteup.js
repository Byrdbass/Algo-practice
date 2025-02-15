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
    //adding to the end/tail
    enqueue(val){
        let newNode = new Node(val)
        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    dequeue(){
        if (!this.first){
            return null
        }
        let temp = this.first;
        if (this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next
        this.size--
        return temp.val
    }
}

let q = new Queue()
q.enqueue("FIRST IN")
q.enqueue("FIRST OUT")
q.enqueue("cue's are equitable")
q.enqueue("you gotta wait")
q.dequeue()
console.log(q)