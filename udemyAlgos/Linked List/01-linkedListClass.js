class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val)
        if (this.head === null){
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            // the tail property exists on the "this" first, then each value is a Node and has the "next property"
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;

    }
}

var list = new SinglyLinkedList()

list.push(1)
list.push(2)
list.push(3)

console.log(list)