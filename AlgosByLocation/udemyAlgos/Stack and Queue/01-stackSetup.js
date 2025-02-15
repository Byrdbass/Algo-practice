class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//this is built in a Linked List format
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  //adds to the beginning - remember LIFO
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldFirst = this.first;
      this.first = newNode;
    //or this.first = this.first.next
      newNode.next = oldFirst;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) {
      return null;
    }
    let rmvNode = this.first;

    if(this.first === this.last){
        this.last = null;
    }
    //or this.first = this.first.next
    this.first = rmvNode.next;
    this.size--;
    return rmvNode.val;
  }
}

let newStack = new Stack();
newStack.push("I am")
newStack.push("a Stack")
newStack.push("unshift is push!")
// newStack.pop()
console.log(newStack.pop())
console.log(newStack);
