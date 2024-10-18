class Node {
    constructor(value){
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

class Tree {
    constructor(array){
        const sortedArray = Array.from(new Set(array)).sort((a, b) => a - b);
        this.root = this.buildTree(sortedArray);
    }

    buildTree(array){

        if (array.length === 0) return null;

        let mid = Math.floor(array.length / 2);
        let root = new Node(array[mid]);
        let queue = [{node: root, start: 0, end: array.length-1}];
        
        while (queue.length > 0){

          let {node, start, end} = queue.shift();
          let mid = Math.floor((start + end) / 2);

          //check if left subtree exists
          if (start < mid){
            let leftMid = Math.floor((start + mid - 1) / 2);
            node.leftChild = new Node(array[leftMid]);
            queue.push({node: node.leftChild, start: start, end: mid - 1});
          }

          //check if rigth subtree exists
          if (end > mid){
            let rightMid = Math.floor((mid+1+end) / 2);
            node.rightChild = new Node(array[rightMid]);
            queue.push({node: node.rightChild, start: mid + 1, end: end});
          }
        }

        return root;

    }

    insert (value){

      let currNode = this.root;

      while (true){

        if (value > currNode.value && currNode.rightChild !== null){
          currNode = currNode.rightChild;
        }

        else if (value > currNode.value && currNode.rightChild === null){
          let newNode = new Node(value);
          currNode.rightChild = newNode;
          break;
        }
        else if (value < currNode.value && currNode.leftChild !== null){
          currNode = currNode.leftChild;
        }
        else if (value < currNode.value && currNode.leftChild === null){
          let newNode = new Node(value);
          currNode.leftChild = newNode;
          break;
        }
        else{
          break;
        }
      }

    }

    delete(value){

      let currNode = this.root;

      
      while(true){

        if(value < currNode.value && currNode.leftChild !== null){
          // Leaf node case
          if(value === currNode.leftChild.value && currNode.leftChild.leftChild === null && currNode.leftChild.rightChild === null ){
            currNode.leftChild = null;
            break;
          }
          // 1 leftchild case
          else if(value === currNode.leftChild.value && currNode.leftChild.leftChild !== null && currNode.leftChild.rightChild === null ){
            currNode.leftChild = currNode.leftChild.leftChild;
            break;
          }
          // 1 rightchild case
          else if(value === currNode.leftChild.value && currNode.leftChild.leftChild === null && currNode.leftChild.rightChild !== null ){
            currNode.leftChild = currNode.leftChild.rightChild;
            break;
          }   
          // 2 childs case
          else if(value === currNode.leftChild.value && currNode.leftChild.leftChild !== null && currNode.leftChild.rightChild !== null ){
            currNode.leftChild.value = currNode.leftChild.leftChild.value;
            currNode.leftChild.leftChild = null;
            break;
          }                   
          else{
            currNode = currNode.leftChild;
          }

        }
        else if(value > currNode.value && currNode.rightChild !== null){
          // Leaf node case
          if(value === currNode.rightChild.value && currNode.rightChild.leftChild === null && currNode.rightChild.rightChild === null ){
            currNode.rightChild = null;
            break;
          }
          // 1 leftchild case
          else if(value === currNode.rightChild.value && currNode.rightChild.leftChild !== null && currNode.rightChild.rightChild === null ){
            currNode.rightChild = currNode.rightChild.leftChild;
            break;
          }
          // 1 rightchild case
          else if(value === currNode.rightChild.value && currNode.rightChild.leftChild === null && currNode.rightChild.rightChild !== null ){
            currNode.rightChild = currNode.rightChild.rightChild;
            break;
          }   
          // 2 childs case
          else if(value === currNode.rightChild.value && currNode.rightChild.leftChild !== null && currNode.rightChild.rightChild !== null ){
            currNode.rightChild.value = currNode.rightChild.rightChild.value;
            currNode.rightChild.rightChild = null;
            break;
          }                   
          else{
            currNode = currNode.rightChild;
          }

        }
        else{
          break;
        }
      }


    }

    traversal(){

      let root = this.root;
      let arrayNumbers = [];
      let queue = [];

      queue.push(root);

      while(queue.length > 0){

        let currNode = queue.shift();

        arrayNumbers.push(currNode.value)

        if (currNode.leftChild !== null){
          queue.push(currNode.leftChild);
        }
        if (currNode.rightChild !== null){
          queue.push(currNode.rightChild);
        }
        


      }
      return arrayNumbers;
    }

    rebalance(){

      let arrayTraversal = this.traversal();
      let sortedArray = Array.from(new Set(arrayTraversal)).sort((a, b) => a - b);
      this.root = this.buildTree(sortedArray);


    }
}

let arr = [1,7,4,23,8,9,4,3,5,7,9,67,6345,324];

let test = new Tree(arr);

function prettyPrint (nodex, prefix = "", isLeft = true) {
    if (nodex === null) {
      return;
    }
    if (nodex.rightChild !== null) {
      prettyPrint(nodex.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${nodex.value}`);
    if (nodex.leftChild !== null) {
      prettyPrint(nodex.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }



prettyPrint(test.root);

test.insert(10000);
test.insert(20000);
test.insert(30000);

console.log(test.traversal());

prettyPrint(test.root);

test.rebalance();

prettyPrint(test.root);