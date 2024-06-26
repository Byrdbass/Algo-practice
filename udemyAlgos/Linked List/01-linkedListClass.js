class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // the tail property exists on the "this" first, then each value is a Node and has the "next property"
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let temp = this.head; //or let current = this.head
    let lastEl = temp; // or newTail = current
    while (temp.next) {
      console.log(temp.val);
      lastEl = temp; //or newTail = current
      temp = temp.next; // or current = current.next
    }
    this.tail = lastEl;
    this.tail.next = null;
    this.length--;
    if( this.length === 0){
        this.head = null;
        this.tail = null;
    }
    console.log(`${lastEl.val} removed`);
    
    return lastEl;
  }
  shift(){
    if (!this.head) return undefined //or length is 0
    let temp = this.head;
    this.head = temp.next;
    this.length--;
    if(!this.head) this.tail = null
    return temp;
  }
}

var list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(9999);

// list.pop();
// list.pop();
// list.pop();
// list.pop();
// list.shift();
// list.shift();
// list.shift();
// list.shift();
console.log(list)