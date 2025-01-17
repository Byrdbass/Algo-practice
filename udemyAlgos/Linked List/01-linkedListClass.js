class ListNode {
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
    //add an element to the end of list
    push(val) {
        var newNode = new ListNode(val);
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
    //remove an element from end of list
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
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        console.log(`${lastEl.val} removed`);

        return lastEl;
    }
    //remove an element from the beginning
    shift() {
        if (!this.head) return undefined //or length is 0
        let temp = this.head;
        this.head = temp.next;
        this.length--;
        if (!this.head) this.tail = null
        return temp;
    }
    //add an element to the beginning
    unShift(val) {
        let newNode = new ListNode(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(val, index) {
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(val, index){
        if (index < 0 || index > this.length){
            return false
        }
        if (index === this.length){
            return this.push(val)
        }
        if (index === 0)
        {
            return this.unShift(val)
        }
        else{
            let preNode = this.get(index-1);
            let newNode = new ListNode(val);
            let afterNode = preNode.next
            preNode.next = newNode;
            newNode.next = afterNode;
            this.length++
            return true
        }

    }
}

var list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
// list.unShift("first");
// list.set("hello", 1)

console.log(list)
