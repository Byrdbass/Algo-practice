class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let curr = this.root;
    console.log("current: " + curr);
    while (true) {
      if (val === curr.val) return undefined;
      if (val < curr.val) {
        if (!curr.left) {
          curr.left = newNode;
          return this;
        } else {
          curr = curr.left;
        }
      } else if (val > curr.val) {
        if (!curr.right) {
          curr.right = newNode;
          return this;
        } else {
          curr = curr.right;
        }
      }
    }
  }
  find(val){
    if (this.root.val === val) return this.root;
    let node = this.root;
    let found = false
    while(node && !found){
      if(node.left.val === val){
        found = true
      }
    }
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2)
tree.insert(16)
tree.insert(7)
tree.insert(7)
console.log(tree)
