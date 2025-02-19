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
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (val < current.val) {
          if (current.left === null) {
            current.left = new Node(val);
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = new Node(val);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  breadthFirstSearch() {
    let node = this.root
    let q = [];
    let data = [];
    q.push(node)
    while (q.length) {
        node = q.shift();
        data.push(node)
        if(node.left){
            q.push(node.left)
        }
        if(node.right){
            q.push(node.right)
        }
    }
    return data
  }
  DFSpreOrder(){ 
    //start out with root
    let data = []
    let node = this.root
    function trav(node){
      data.push(node)
      if(node.left) trav(node.left)
      if(node.right) trav(node.right)
    }
  trav(node)
  return data
  }
  DFSpostOrder(){
    //start at leaves - explore all children
    let data = []
    let node = this.root
    function trav(node){
      if(node.left) trav(node.left)
      if(node.right) trav(node.right)
      data.push(node)
    }
  trav(node)
  return data
  }
  DFSinOrder(){
    //left side then right side (lowest to highest in BST)
    let data = []
    let node = this.root
    function trav(node){
      if(node.left) trav(node.left)
      data.push(node)
      if(node.right) trav(node.right)
    }
  trav(node)
  return data
  }
}
